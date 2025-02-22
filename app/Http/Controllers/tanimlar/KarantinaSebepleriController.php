<?php

namespace App\Http\Controllers\tanimlar;

use App\Http\Controllers\Controller;
use App\Models\tanimlar\KarantinaSebepleri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KarantinaSebepleriController extends Controller
{
    // 1. Tüm verileri listeleme
    public function index()
    {
        $data = KarantinaSebepleri::all();
    
        $istasyonlar = DB::table('OFTT_01_ISTASYONLAR')
          ->select('ID', 'KOD', 'KISATANIM')
          ->orderBy('ID')
          ->get();
    
        return response()->json([
          'data' => $data,
          'istasyonlar' => $istasyonlar,
        ]);
    }

    // 2. Yeni kayıt ekleme
    public function store(Request $request)
    {
        $validated = $request->validate([
            'SEBEP' => 'required|string|max:255',
            'TIP' => 'nullable|string|max:255',
            'SINIF' => 'nullable|string|max:255',
            'TUR' => 'nullable|string|max:255',
            'PERFORMANS' => 'nullable|string|max:255',
            'PROSES' => 'required|string|max:255',
            'ISTASYONID' => 'required|integer|min:0|max:100',
        ]);

        $data = KarantinaSebepleri::create($validated);

        return response()->json($data, 201);
    }

    // 3. Belirli bir kaydı gösterme (isteğe bağlı, grid'de kullanılmaz)
    public function show($id)
    {
        $data = KarantinaSebepleri::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        return response()->json($data, 200);
    }

    // 4. Belirli bir kaydı güncelleme
    public function update(Request $request, $id)
    {
        $data = KarantinaSebepleri::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        $validated = $request->validate([
            'SEBEP' => 'required|string|max:255',
            'TIP' => 'nullable|string|max:255',
            'SINIF' => 'nullable|string|max:255',
            'TUR' => 'nullable|string|max:255',
            'PERFORMANS' => 'nullable|string|max:255',
            'PROSES' => 'required|string|max:255',
            'ISTASYONID' => 'required|integer|min:0|max:100' . $id,
        ]);

        $data->update($validated);

        return response()->json($data, 200);
    }

    // 5. Belirli bir kaydı silme
    public function destroy($id)
    {
        $data = KarantinaSebepleri::find($id);

        if (!$data) {
            return response()->json(['message' => 'Kayıt bulunamadı'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Kayıt Silindi'], 200);
    }
}
