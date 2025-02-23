<?php

namespace App\Http\Controllers\dashboards;

use App\Http\Controllers\Controller;
use App\Models\StokHrkt;
use App\Models\Emir;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Dashboards extends Controller
{
  public function zamanAlYTK()
  {
    $veri = DB::table('OFTV_01_ZAMAN_AL_YTK')->select('KAYITTARIH')->first();
    return response()->json($veri);
  }

  public function zamanAlDTK()
  {
    $zaman = DB::connection('sqlsrvg')->table('OFTV_DT_ZAMANAL')->select('BASLAMA_ZAMANI')->first();
    $veri = DB::connection('sqlsrvg')->table('OFTV_DASH_OZET')->select('ADET', 'HATALI', 'URUN_ADI', 'OPR', 'TADET')->first();
    $hedef = DB::connection('sqlsrvg')->table('PARAM_SABITLER')
      ->where('ADI', 'Duvar Günlük Hedef')
      ->select('DEGER1')
      ->first();


    return response()->json([
      'veri' => $veri,
      'zaman' => $zaman,
      'hedef' => $hedef,
    ]);
  }

  public function zamanAlSNSR()
  {
    $zaman = DB::connection('sqlsrv')->table('OFTV_01_SNSRZMNL')->select('KAYITTARIH')->first();
    $uygun = DB::connection('sqlsrv')->table('OFTV_01_SNSRUYGUN')->select('MIKTAR')->first();
    $iskarta = DB::connection('sqlsrv')->table('OFTV_01_SNSRISKRT')->select('MIKTAR')->first();
    $hedef = DB::connection('sqlsrvg')->table('PARAM_SABITLER')
    ->where('ADI','Sensör Günlük Hedef')->first();

    return response()->json([
      'uygun' => $uygun,
      'zaman' => $zaman,
      'hedef' => $hedef,
      'iskarta' => $iskarta,
    ]);
  }

  public function getWeeklyData()
  {
    $data = DB::connection('sqlsrvg')
      ->table('OFTV_DT_KAZAN_HFT_URT')
      ->select('ADET')
      ->orderBy('SIRA')
      ->get();

      return response()->json(['data' => $data]);
  }
  public function getWeeklyDataSensor()
  {
    $data = DB::connection('sqlsrv')
      ->table('OFTV_01_SNSRURTHFT')
      ->select('ADET')
      ->orderBy('SIRA')
      ->get();

      return response()->json(['data' => $data]);
  }

  public function zamanAlESD()
  {
    $veri = DB::table('OFTV_01_ZAMAN_AL_ESD')->select('KAYITTARIH')->first();
    return response()->json($veri);
  }

  public function miktarAlYTK(Request $request)
  {
    $istasyon = $request->query('param1');
    $planHafta = DB::table('OFTV_01_EMIRLERISHFT')
      ->where('ISTKOD', $istasyon)
      ->select(DB::raw('SUM(PLANLANANMIKTAR) as toplam_planlanan, SUM(URETIMMIKTAR) as toplam_uretim'))
      ->first();
    $urtGun = DB::table('OFTV_01_STOKHRKTGUN')
      ->where('ISTKOD', $istasyon)
      ->select(DB::raw('SUM(MIKTAR) as toplam_uretim'))
      ->first();

    $urtHafta = DB::table('OFTV_01_STOKHRKTHFT')
      ->where('ISTKOD', $istasyon)
      ->select(DB::raw('SUM(MIKTAR) as toplam_uretim'))
      ->first();

    if ($planHafta) {
      return response()->json([
        'planHafta' => $planHafta,
        'urtGun' => $urtGun,
        'urtHafta' => $urtHafta,
      ]);
    } else {
      return response()->json([
        'message' => 'Internal Server Error',
        'code' => 500,
        'planHafta' => [],
        'urtHafta' => [],
        'urtGun' => [],
      ]);
    }
  }
  public function miktarAlESD(Request $request)
  {
    $istasyon = $request->query('param1');
    $planHafta = DB::table('OFTV_01_EMIRLERISHFT')
      ->where('OZELLIKKOD1', $istasyon)
      ->select(DB::raw('SUM(PLANLANANMIKTAR) as toplam_planlanan, SUM(URETIMMIKTAR) as toplam_uretim'))
      ->first();
    $urtGun = DB::table('OFTV_01_STOKHRKTGUN')
      ->where('OZELLIKKOD1', $istasyon)
      ->select(DB::raw('SUM(MIKTAR) as toplam_uretim'))
      ->first();

    $urtHafta = DB::table('OFTV_01_STOKHRKTHFT')
      ->where('OZELLIKKOD1', $istasyon)
      ->select(DB::raw('SUM(MIKTAR) as toplam_uretim'))
      ->first();

    if ($planHafta) {
      return response()->json([
        'planHafta' => $planHafta,
        'urtGun' => $urtGun,
        'urtHafta' => $urtHafta,
      ]);
    } else {
      return response()->json([
        'message' => 'Internal Server Error',
        'code' => 500,
        'planHafta' => [],
        'urtHafta' => [],
        'urtGun' => [],
      ]);
    }
  }

  public function mesajAl()
  {
    $mesaj = DB::table('OFTT_01_AYARLAR')->select('DEGER')->where('TANIM', 'MESAJ1')->first();
    $sureler = [];
    $sure =  DB::table('haftalikSureler')->select('planDakika', 'calismaDakika')->first();
    $sureler['calisma'] = $sure->calismaDakika;
    $sureler['plan'] = $sure->planDakika;
    return response()->json(['mesaj' => $mesaj, 'sureler' => $sureler]);
  }
}
