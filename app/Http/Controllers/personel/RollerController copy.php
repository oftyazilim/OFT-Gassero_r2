<?php

namespace App\Http\Controllers\personel;

use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use App\Models\User;


class RollerController extends Controller
{
    public function index()
    {
        // Sadece name kolonunu döndür
        $roles = Role::pluck('name');

        // Gelen veriyi JSON formatında döndür
        return response()->json($roles);
    }


    public function user_role($userId)
    {
        // Kullanıcıyı ID'ye göre bul
        $user = User::find($userId);

        // Kullanıcının rollerini al
        if ($user) {
            $roles = $user->getRoleNames(); // Kullanıcının rollerini al

            // Roller üzerinde işlem yapabilir ya da sadece dönebilirsiniz
            return response()->json([
                'roles' => $roles,
            ]);
        }

        return response()->json([
            'message' => 'User not found',
        ], 404);
    }





    public function store(Request $request)
    {
        $role = Role::create(['name' => $request->name]);

        foreach ($request->permissions as $permission) {
            if ($permission['view']) {
                Permission::create([
                    'role_id' => $role->id,
                    'name' => $permission['name'],
                    'action' => 'view',
                ]);
            }
            if ($permission['add']) {
                Permission::create([
                    'role_id' => $role->id,
                    'name' => $permission['name'],
                    'action' => 'add',
                ]);
            }
            if ($permission['edit']) {
                Permission::create([
                    'role_id' => $role->id,
                    'name' => $permission['name'],
                    'action' => 'edit',
                ]);
            }
            if ($permission['delete']) {
                Permission::create([
                    'role_id' => $role->id,
                    'name' => $permission['name'],
                    'action' => 'delete',
                ]);
            }
        }

        return response()->json(['message' => 'Rol başarıyla oluşturuldu.']);
    }

    public function getRolesWithUserCount()
    {
        // Her role için kullanıcı sayısını getiren sorgu
        $roles = Role::withCount(['users' => function ($query) {
            $query->whereNotNull('role_id'); // İlgili role bağlı kullanıcıları say
        }])->get();

        return response()->json($roles);
    }
}
