<?php

namespace App\Http\Controllers\tanimlar;

use App\Http\Controllers\Controller;
use App\Models\tanimlar\MamulTanimlar;
use Illuminate\Http\Request;

class MamulOzellikTanimlari extends Controller
{
    // 1. Tüm verileri listeleme
    public function index(Request $request)
    {
        $filter = $request->query('filter', '');

        // Filtreye göre veri işleme
        $data = MamulTanimlar::query();

        if (!empty($filter)) {
            // Örneğin, filtreye göre bir filtreleme yapabilirsiniz
            $data->where('TANIM', $filter); 
        }

        return response()->json($data->get());
    }

    // 2. Yeni kayıt ekleme
    public function store(Request $request)
    {
        $validated = $request->validate([
            'TANIM' => 'required|string|max:255',
            'DEGER' => 'required|string|max:255',
        ]);

        $data = MamulTanimlar::create($validated);

        return response()->json($data, 201);
    }

    // 3. Belirli bir kaydı gösterme (isteğe bağlı, grid'de kullanılmaz)
    public function show($id)
    {
        $data = MamulTanimlar::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        return response()->json($data, 200);
    }

    // 4. Belirli bir kaydı güncelleme
    public function update(Request $request, $id)
    {
        $data = MamulTanimlar::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        $validated = $request->validate([
            'TANIM' => 'required|string|max:255',
            'DEGER' => 'required|string|max:255'. $id,
        ]);

        $data->update($validated);

        return response()->json($data, 200);
    }

    // 5. Belirli bir kaydı silme
    public function destroy($id)
    {
        $data = MamulTanimlar::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Kayıt Silindi'], 200);
    }
}
