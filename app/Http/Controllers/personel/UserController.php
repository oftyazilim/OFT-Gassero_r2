<?php

namespace App\Http\Controllers\personel;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    // 1. Tüm verileri listeleme
    public function index(Request $request)
    {
        // $users = User::get(['id', 'name', 'email']); // Sadece kullanıcı verilerini çek

        $data = DB::table('OFTV_01_KULLANICILAR')
            ->get();

        // return response()->json(['users' => $users]);
        $user = User::pluck('name');
        $kademeler = User::select('tip')->distinct()->get();
        // Log::info($kademeler);
        return response()->json([
            'data' => $data,
            'user' => $user,
            'kademeler' => $kademeler,
        ]);
    }

    public function izinAl($id)
    {
        Log::info($id);
        $user = User::find($id); // Kullanıcıyı bul
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $permissions = $user->getAllPermissions(); // Kullanıcının tüm izinlerini al
        Log::info($permissions);
        return response()->json($permissions); // JSON olarak döndür
    }

    public function durumDegistir(Request $request, $id)
    {
        try {
            $aktif = (int)$request->aktif;

            if ($aktif == 0) {
                $aktif = 1;
                $password = Hash::make('pass1234');
            } else {
                $aktif = 0;
                $password = Hash::make('q1w2e3r4@');
            }

            $userID = (int)$request->userID;
            $user = User::find($id);

            $user->update([
                'DURUMYAPANID' => $userID,
                'AKTIF' => $aktif,
                'DURUMTARIH' => now(),
                'password' => $password,
            ]);

            return response()->json(['message' => 'Kayıt başarıyla değiştirildi'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Sunucuda bir hata oluştu'], 500);
        }
    }

    public function sifreSifirla($id)
    {
        try {
            $password = Hash::make('pass1234');
            $user = User::find($id);

            $user->update([
                'password' => $password,
            ]);

            return response()->json(['message' => 'Kayıt başarıyla değiştirildi'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Sunucuda bir hata oluştu'], 500);
        }
    }

    public function assignRoles(Request $request, $userId)
    {
        // İlgili kullanıcıyı bul
        $user = User::findOrFail($userId);

        // İstekten gelen roller (örnek: ["admin", "editor"])
        $roles = $request->input('roles');

        // Spatie yöntemini kullanarak roller ata
        $user->syncRoles($roles); // Önceki rolleri kaldırır ve yeni rolleri atar
    }

    public function changePassword(Request $request)
    {
        $user = User::find($request->userId);

        $validated = $request->validate([
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:8|confirmed', // 'new_password_confirmation' da gönderilmeli
        ]);

        if (!$user) {
            return response()->json(['error' => 'Kullanıcı bulunamadı.'], 404);
        }

        // Mevcut şifre doğrulama
        if (!Hash::check($validated['current_password'], $user->password)) {
            return response()->json(['error' => 'Mevcut şifre hatalı.'], 422);
        }

        // Şifreyi güncelle
        $user->update([
            'password' => Hash::make($validated['new_password']),
        ]);

        return response()->json(['message' => 'Şifre başarıyla değiştirildi.']);
    }

    // 2. Yeni kayıt ekleme
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'unvan' => 'required|string|max:255',
                'proses' => 'string|max:255|nullable',
                'tip' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8',
                'roles' => 'required|array',
                'roles.*' => 'string|exists:roles,name',
            ]);

            $user = User::create([
                'name' => $validated['name'],
                'unvan' => $validated['unvan'],
                'proses' => $validated['proses'],
                'tip' => $validated['tip'],
                'email_verified_at' => now(),
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
            ]);

            $user->syncRoles($validated['roles']);

            return response()->json(['message' => 'Kullanıcı başarıyla oluşturuldu.', 'user' => $user]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }





        // Gelen veriyi doğrula
        // $validatedData = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|email|unique:users,email',
        //     'password' => 'required|string|min:8',
        // ]);

        // // Kullanıcı oluştur
        // $user = User::create([
        //     'name' => $validatedData['name'],
        //     'email' => $validatedData['email'],
        //     'password' => Hash::make($validatedData['password']),
        // ]);

        // DB::table('model_has_roles')->insert([
        //     'role_id' => 3,
        //     'model_type' => 'App\Models\User',
        //     'model_id' => $user->id,
        // ]);

        // return response()->json([
        //     'message' => 'Kullanıcı başarıyla oluşturuldu',
        //     'user' => $user,
        // ], 201);
    }

    public function getRoleUserCounts()
    {
        $rolesWithCounts = DB::table('users')
            ->select('role_id', DB::raw('COUNT(*) as user_count'))
            ->groupBy('role_id')
            ->get();


        return response()->json($rolesWithCounts);
    }








    // 3. Belirli bir kaydı gösterme (isteğe bağlı, grid'de kullanılmaz)
    public function show($id)
    {
        $data = User::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        return response()->json($data, 200);
    }

    // 4. Belirli bir kaydı güncelleme
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        Log::info($user);
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'unvan' => 'required|string|max:255',
                'proses' => 'nullable|string|max:255',
                'tip' => 'required|string|max:255',
                'email' => [
                    'required',
                    'email',
                    Rule::unique('users', 'email')->ignore($user->id), // Mevcut kullanıcıyı hariç tut
                ],
                'password' => 'nullable|string|min:8', // Şifre boş bırakılabilir
                'roles' => 'required|array',
                'roles.*' => 'string|exists:roles,name',
            ]);

            // Kullanıcı bilgilerini güncelle
            $user->update([
                'name' => $validated['name'],
                'unvan' => $validated['unvan'],
                'proses' => $validated['proses'],
                'tip' => $validated['tip'],
                'email' => $validated['email'],
                // 'password' => $validated['password'] ? Hash::make($validated['password']) : $user->password, // Şifre boşsa eski şifreyi koru
            ]);

            // Rolleri güncelle
            $user->syncRoles($validated['roles']);

            return response()->json(['message' => 'Kullanıcı başarıyla güncellendi.', 'user' => $user]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }


        // $user = User::findOrFail($userId);

        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|email|unique:users,email,' . $userId, // Mevcut kullanıcının emaili dışındaki email'leri kontrol et
        //     'password' => 'nullable|string|min:8', // Parola isteğe bağlı
        //     'roles' => 'nullable|array', // Roller dizi olarak gönderilecek
        //     'roles.*' => 'string|exists:roles,name', // Rollerin adı `roles` tablosunda olmalı
        // ]);

        // // Kullanıcı bilgilerini güncelle
        // $user->update([
        //     'name' => $validated['name'],
        //     'email' => $validated['email'],
        //     // Eğer parola gönderilmişse, parola güncellenir
        //     'password' => $validated['password'] ? Hash::make($validated['password']) : $user->password,
        // ]);

        // // Eğer roller gönderilmişse, roller güncellenir
        // if (isset($validated['roles'])) {
        //     $user->syncRoles($validated['roles']);
        // }

        // return response()->json(['message' => 'Kullanıcı başarıyla güncellendi.', 'user' => $user]);
    }

    // 5. Belirli bir kaydı silme
    public function destroy($id)
    {
        $data = User::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Kayıt Silindi'], 200);
    }
}
