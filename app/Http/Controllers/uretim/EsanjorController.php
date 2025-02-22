<?php

namespace App\Http\Controllers\uretim;

use App\Http\Controllers\Controller;
use App\Http\Controllers\planlama\Emirler;
use Illuminate\Http\Request;
use App\Models\Esanjor;
use App\Models\Emir;
use App\Models\HrktEsanjor;
use App\Models\IskrtEsnjr;
use App\Models\RwrkEsnjr;
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
      ->where('REWORK', false)
      ->orderBy('ID', 'ASC')->get();

    $reworks = DB::table('OFTV_01_RWRKESANJOR')
      ->select('ID', 'ISEMRIID', 'URUNKODU', 'URUNADI', 'KARANTINASEBEP', 'ESANJORID', 'BARKOD', 'DURUM')
      ->where('OPERASYON', $operasyon2)
      ->whereDate('KARANTINATARIH', '=', now()->toDateString())
      ->orderBy('ID', 'DESC')
      ->get();

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
    $toplamReworks = $reworks->count() | 0;

    // Log::info($toplamUretim);

    return response()->json([
      'liste' => $liste,
      'emirler' => $emirler,
      'iskartalar' => $iskartalar,
      'reworks' => $reworks,
      'toplamListe' => $toplamListe,
      'toplamEmir' => $toplamEmir,
      'toplamIskarta' => $toplamIskarta,
      'toplamReworks' => $toplamReworks,
      'toplamUretim' => $toplamUretim,
    ]);
  }

  public function getReworks()
  {
    $reworks = DB::table('OFTV_01_RWRKESANJOR')
      ->where('KARANTINATARIH', '>=', '2025-01-01')
      ->where('DURUM', 'BEKLEMEDE')
      ->orderBy('ID', 'DESC')
      ->get();

    $toplamGirdi = $reworks->count();

    $ciktilar = DB::table('OFTV_01_RWRKESANJOR')
      ->where('KARANTINATARIH', '>=', '2025-01-01')
      ->where('DURUM', '!=', 'BEKLEMEDE')
      ->orderBy('ID', 'DESC')
      ->get();

    $toplamCikti = $ciktilar->count();

    return response()->json([
      'reworks' => $reworks,
      'ciktilar' => $ciktilar,
      'toplamGirdi' => $toplamGirdi,
      'toplamCikti' => $toplamCikti,
    ]);
  }

  public function operasyonKaydet(Request $request)
  {
    // Log::info($request);
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
    // Log::info($request->all());
    if ($request->input('params.tur') === 'h') {
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
    } else {
      $iskarta = RwrkEsnjr::create([
        'ESANJORID' => (int)$request->input('params.id'),
        'URUNID' => (int)$request->input('params.urunID'),
        'ISEMRIID' => (int)$request->input('params.isemriID'),
        'BARKOD' => $request->input('params.barkod'),
        'KARANTINASEBEP' => $request->input('params.sebep'),
        'OPERASYON' => $request->input('params.operasyon'),
        'KARANTINATARIH' => now(),
        'OLUSTURANID' => (int)$request->input('params.userID'),
        'DURUM' => 'Beklemede',
      ]);

      $hurdayaAyir = Esanjor::find($request->input('params.id'));

      if ($hurdayaAyir) {
        $hurdayaAyir->update([
          'REWORK' => 1,
          'SONDURUMTARIH' => now(),
          'DUZENLEYENID' => (int)$request->input('params.userID'),
        ]);
      }
    }
    return response()->json($iskarta->wasRecentlyCreated ? 'Created' : 'Updated');
  }

  public function getSebepList(Request $request)
  {
    if ($request->tur === 'h')
      $data = DB::table('OFTT_01_ISKRTSEBEPLERI')
        ->where('ISTASYONID', 10)
        ->select('ID', 'SEBEP')
        ->get();
    else
      $data = DB::table('OFTT_01_RWRKSEBEPLERI')
        ->where('ISTASYONID', 10)
        ->select('ID', 'SEBEP')
        ->get();

    return response()->json($data);
  }

  public function ReworksKaydet(Request $request)
  {
      Log::info($request->all());
      
      try {
          $updateData = $request->input('updateData');
          
          if (empty($updateData) || !is_array($updateData)) {
              return response()->json(['error' => 'Geçersiz veri!'], 400);
          }
          
          // İşlemleri başlat
          DB::beginTransaction();
          
          foreach ($updateData as $data) {
              if ($data['tur'] === 'h') {
                $iskarta = IskrtEsnjr::create([
                  'ESANJORID' => (int)$data['esanjorID'],
                  'URUNID' => (int)$data['urunID'],
                  'ISEMRIID' => (int)$data['isemriID'],
                  'BARKOD' => $data['barkod'],
                  'SEBEP' => $data['sebep'],
                  'OPERASYON' => $data['operasyon'],
                  'HURDATARIH' => now(),
                  'OLUSTURANID' => (int)$data['userID'],
                ]);
          
                $hurdayaAyir = Esanjor::find($data['esanjorID']);
          
                if ($hurdayaAyir) {
                  $hurdayaAyir->update([
                    'HURDA' => 1,
                    'SONDURUMTARIH' => now(),
                    'DUZENLEYENID' => (int)$data['userID'],
                  ]);
                }
          
                $reworks = RwrkEsnjr::find($data['id']);
          
                if ($reworks) {
                  $reworks->update([
                    'DURUM' => 'Hurda',
                    'SONDRMTARIH' => now(),
                    'REWORKTARIH' => now(),
                    'ISKARTASEBEP' => $data['sebep'],
                    'DUZENLEYENID' => (int)$data['userID'],
                  ]);
                }
              } else {
                $uretimeAl = Esanjor::find($data['esanjorID']);
          
                if ($uretimeAl) {
                  $uretimeAl->update([
                    'REWORK' => 0,
                    'SONDURUMTARIH' => now(),
                    'DUZENLEYENID' => (int)$data['userID'],
                  ]);
                }
          
                $reworks = RwrkEsnjr::find($data['id']);
          
                if ($reworks) {
                  $reworks->update([
                    'DURUM' => 'Uygun',
                    'SONDRMTARIH' => now(),
                    'REWORKTARIH' => now(),
                    'DUZENLEYENID' => (int)$data['userID'],
                  ]);
                }
              }
          }

          DB::commit();

          return response()->json(['success' => 'Veriler başarıyla güncellendi.']);
      } catch (\Exception $e) {
          DB::rollBack();
          return response()->json(['error' => 'Bir hata oluştu: ' . $e->getMessage()], 500);
      }
  }
}
