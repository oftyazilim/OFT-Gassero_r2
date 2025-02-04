<?php

namespace App\Http\Controllers\uretim;

use App\Http\Controllers\Controller;
use App\Http\Controllers\planlama\Emirler;
use Illuminate\Http\Request;
use App\Models\Esanjor;
use App\Models\Emir;
use App\Models\HrktEsanjor;
use App\Models\IskrtEsnjr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class EsanjorController extends Controller
{
  public function listeAl(Request $request)
  {
    $operasyon1 = $request->query('operasyon1');
    $operasyon2 = $request->query('operasyon2');
    $isemriID = (int)$request->isemriID;
    
    $liste = DB::table('OFTV_01_STOKESANJOR')
      ->select('ID', 'ISEMRIID', 'URUNID', 'URUNKODU', 'URUNADI', 'URETIMTARIH', 'BARKOD')
      ->where('ISEMRIID', $isemriID)
      ->where($operasyon1, 1)
      ->where($operasyon2, 0)
      ->where('HURDA', false)
      ->orderBy('ID', 'ASC')->get();

    $iskartalar = DB::table('OFTV_01_ISKRTESANJOR')
      ->select('ID', 'ISEMRIID', 'URUNKODU', 'URUNADI', 'SEBEP', 'ESANJORID', 'BARKOD')
      ->where('OPERASYON', $operasyon2)
      ->whereDate('HURDATARIH', '=', now()->toDateString())
      ->orderBy('ID', 'DESC')
      ->get();

    $emirler = DB::table('OFTV_01_EMIRLERIS')
      ->select('ID', 'KOD', 'TANIM', 'PLANLANANMIKTAR', 'URETIMMIKTAR')
      ->where('ISTASYONID', 10)
      ->where('AKTIF', 1)
      ->orderBy('ID', 'ASC')
      ->get();

    $toplamUretim = DB::table('OFTV_01_HRKTESANJOR')
      ->where('OPERASYON', $operasyon2)
      ->whereDate('URETIMTARIH', '=', now()->toDateString())
      ->count();

    $toplamListe = $liste->count() | 0;
    $toplamEmir = $emirler->count() | 0;
    $toplamIskarta = $iskartalar->count() | 0;

    return response()->json([
      'liste' => $liste,
      'emirler' => $emirler,
      'iskartalar' => $iskartalar,
      'toplamListe' => $toplamListe,
      'toplamEmir' => $toplamEmir,
      'toplamIskarta' => $toplamIskarta,
      'toplamUretim' => $toplamUretim,
    ]);
  }


  public function stokAl()
  {
    $data = DB::table('OFTV_01_STOKESANJOR')
      ->orderBy('ID', 'desc')
      ->get();

      $op1 = $data->where('OPERASYON1', true)->where('OPERASYON2', false)->count();
      $op2 = $data->where('OPERASYON2', true)->where('OPERASYON3', false)->count();
      $op3 = $data->where('OPERASYON3', true)->where('OPERASYON4', false)->count();
      $op4 = $data->where('OPERASYON4', true)->where('OPERASYON5', false)->count();
      $op5 = $data->where('OPERASYON5', true)->where('OPERASYON6', false)->count();
      $op6 = $data->where('OPERASYON6', true)->count();

      $toplam = $data->count();

    return response()->json([
      'data' => $data,
      'op1' => $op1,
      'op2' => $op2,
      'op3' => $op3,
      'op4' => $op4,
      'op5' => $op5,
      'op6' => $op6,
      'toplam' => $toplam,
    ], 200);
  }

  public function operasyonKaydet(Request $request)
  {
    Log::info($request);
    $operasyon2 = $request->input('params.operasyon2');

    $uretim = HrktEsanjor::create([
      'ESANJORID' => (int)$request->input('params.id'),
      'URUNID' => (int)$request->input('params.urunID'),
      'ISEMRIID' => (int)$request->input('params.isemriID'),
      'BARKOD' => $request->input('params.barkod'),
      'OPERASYON' => $request->input('params.operasyon2'),
      'URETIMTARIH' => now(),
      'OLUSTURANID' => (int)$request->input('params.userID'),
    ]);

    $uretimTik = Esanjor::find($request->input('params.id'));

    if ($uretimTik) {
      $uretimTik->update([
        $operasyon2 => 1,
      ]);
    }

    if ($operasyon2 == 'MAMULFINAL') {
      $emir = Emir::where('ID', $request->input('params.isemriID'))
        ->where('SILINDI', 0)
        ->first(); // first() kullanarak tek bir kayıt alıyoruz.

      if ($emir) { // Eğer kayıt bulunursa
        $emir->increment('URETIMMIKTAR');
        Log::info($emir);
      }
    }

    // Log::info($request->input('params.id'));

    // if ($operasyon2 == 'MAMULFINAL') {
    //   $emir = Emir::find($request->input('params.id'));
    //   $emir->increment('URETIMMIKTAR');
    //   Log::info($emir);
    // }

    return response()->json($uretim->wasRecentlyCreated ? 'Created' : 'Updated');
  }

  public function geriAl(Request $request)
  {
    $operasyon2 = $request->input('params.operasyon2');
    $uretimTemp = HrktEsanjor::where('ESANJORID', $request->input('params.id'))
      ->orderBy('ID', 'desc') // 'id' alanına göre ters sıralama yap
      ->first(); // İlk kaydı al (ters sıralandığı için bu, son kayıt olur)

    $uretim = HrktEsanjor::find($uretimTemp->ID);

    $uretim->update([
      'SILINDI' => 1,
      'SILINMETARIH' => now(),
      'SILENID' => (int)$request->input('params.userID'),
    ]);

    $uretimTik = Esanjor::find($request->input('params.id'));
    if ($uretimTik) {
      $uretimTik->update([
        $operasyon2 => 0,
      ]);
    }
    return response()->json($uretim->wasRecentlyCreated ? 'Created' : 'Updated');
  }

  public function iskartaEkle(Request $request)
  {

    Log::info($request);

    $iskarta = IskrtEsnjr::create([
      'ESANJORID' => (int)$request->input('params.id'),
      'URUNID' => (int)$request->input('params.urunID'),
      'ISEMRIID' => (int)$request->input('params.isemriID'),
      'BARKOD' => $request->input('params.barkod'),
      'SEBEP' => $request->input('params.sebep'),
      'OPERASYON' => $request->input('params.operasyon'),
      'HURDATARIH' => now(),
      'OLUSTURANID' => (int)$request->input('params.userID'),
    ]);

    $hurdayaAyir = Esanjor::find($request->input('params.id'));

    if ($hurdayaAyir) {
      $hurdayaAyir->update([
        'HURDA' => 1,
        'SONDURUMTARIH' => now(),
        'DUZENLEYENID' => (int)$request->input('params.userID'),
      ]);
    }
    return response()->json($iskarta->wasRecentlyCreated ? 'Created' : 'Updated');
  }

  public function getSebepList()
  {
    $data = DB::table('OFTT_01_ISKRTSEBEPLERI')
      ->where('ISTASYONID', 10)
      ->select('ID', 'SEBEP')
      ->get();

    return response()->json($data);
  }
}
