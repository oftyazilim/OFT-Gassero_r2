<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\planlama\Emirler;
use App\Http\Controllers\planlama\Uretimler;
use App\Http\Controllers\planlama\Mamuller;
use App\Http\Controllers\dashboards\Dashboards;
use App\Http\Controllers\tanimlar\IskartaSebepleriController;
use App\Http\Controllers\tanimlar\MamulOzellikTanimlari;
use App\Http\Controllers\personel\UserController;
use App\Http\Controllers\personel\PermissionController;
use App\Http\Controllers\personel\RollerController;
use App\Http\Controllers\uretim\EsanjorController;
use App\Models\User;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::get('/dashboards/montaj_01', [Dashboards::class, 'montaj_01']);
Route::get('/dashboards/zamanal_ytk', [Dashboards::class, 'zamanAlYTK']);
Route::get('/dashboards/miktaral_ytk', [Dashboards::class, 'miktarAlYTK']);
Route::get('/dashboards/zamanal_esd', [Dashboards::class, 'zamanAlESD']);
Route::get('/dashboards/miktaral_esd', [Dashboards::class, 'miktarAlESD']);
Route::get('/dashboards/zamanal_dtk', [Dashboards::class, 'zamanAlDTK']);
Route::get('/dashboards/miktaral_dtk', [Dashboards::class, 'miktarAlDTK']);
Route::get('/dashboards/zamanal_snsr', [Dashboards::class, 'zamanAlSNSR']);
Route::get('/dashboards/miktaral_snsr', [Dashboards::class, 'miktarAlSNSR']);
Route::get('/dashboards/mesajal', [Dashboards::class, 'mesajAl']);
Route::get('/weekly-data', [Dashboards::class, 'getWeeklyData']);
Route::get('/weekly-data/sensor', [Dashboards::class, 'getWeeklyDataSensor']);

//* İş Emirleri -----------------------------------------------------------
Route::get('/data', [Emirler::class, 'getData']);
Route::get('/veri', [Emirler::class, 'getVeri']);
Route::get('/mamul-grubu', [Emirler::class, 'getFilteredMamulGrubu']);
Route::get('/ozellik1', [Emirler::class, 'getFilteredOzellik1']);
Route::get('/ozellik2', [Emirler::class, 'getFilteredOzellik2']);
Route::get('/ozellik3', [Emirler::class, 'getFilteredOzellik3']);
Route::get('/filtered-mamul', [Emirler::class, 'getFilteredMamul']);
Route::get('/mamul-data', [Emirler::class, 'getMamul']);
Route::get('/mamulden', [Emirler::class, 'getMamulden']);
Route::put('/datasil/{id}', [Emirler::class, 'kayitSil']);
Route::put('/data/emir-duzelt/{id}', [Emirler::class, 'update']);
Route::post('/data/emir-kaydet', [Emirler::class, 'kaydet']);
Route::put('/isemri/durum/{id}', [Emirler::class, 'durumDegistir']);

Route::post('/data', [Emirler::class, 'store']);
Route::put('/uretimekle', [Emirler::class, 'uretimKaydet']);

//* Üretim Girişleri ------------------------------------------------------
Route::get('/dataUretim', [Uretimler::class, 'getData']);
Route::get('/dataIskarta', [Uretimler::class, 'getDataIskarta']);
Route::put('/uretimduzelt', [Uretimler::class, 'uretimKaydet']);
Route::put('/uretimsil/{id}', [Uretimler::class, 'kayitSil']);
Route::put('/iskartasil/{id}', [Uretimler::class, 'kayitSilIskarta']);

//* Mamul Kartları --------------------------------------------------------
Route::get('/dataMamuller', [Mamuller::class, 'getData']);
Route::get('/veriMamuller', [Mamuller::class, 'getVeri']);
Route::put('/mamulduzelt', [Mamuller::class, 'mamulKaydet']);
Route::put('/mamulsil/{id}', [Mamuller::class, 'kayitSil']);
Route::post('/mamul', [Mamuller::class, 'store']);

//* Esanjorler --------------------------------------------------------
Route::get('/listeEsanjor', [EsanjorController::class, 'listeAl']);
Route::get('/stokEsanjor', [EsanjorController::class, 'stokAl']);
Route::get('/listeIsemri', [EsanjorController::class, 'isemriAl']);
Route::post('/iskartaEkle', [EsanjorController::class, 'iskartaEkle']);
Route::get('/esanjoruretim', [Uretimler::class, 'getEsanjorUretim']);
Route::post('/operasyonKaydet', [EsanjorController::class, 'operasyonKaydet']);
Route::post('/geriAl', [EsanjorController::class, 'geriAl']);
Route::get('/sebep-list', [EsanjorController::class, 'getSebepList']);

//* Tanımlar --------------------------------------------------------
Route::apiResource('iskartasebepleri', IskartaSebepleriController::class);
Route::apiResource('mamultanimlari', MamulOzellikTanimlari::class);

//* Personel --------------------------------------------------------
Route::apiResource('kullanicilar', UserController::class);
Route::post('/users/{id}/assign-roles', [UserController::class, 'assignRoles']);
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/roles-with-user-count', [UserController::class, 'getRoleUserCounts']);
Route::get('/izin-al/{id}', [UserController::class, 'izinAl']);
Route::put('/api/kullanicilar/{user}', [UserController::class, 'update']);
Route::put('/userdurumdegistir/{id}', [UserController::class, 'durumDegistir']);
Route::put('/sifresifirla/{id}', [UserController::class, 'sifreSifirla']);

// Route::middleware(['auth:sanctum'])->group(function () {
Route::post('/change-password', [UserController::class, 'changePassword'])->name('password.change');
// });

Route::get('/roles', [RollerController::class, 'index']);
Route::get('/roles/{role}/permissions', [RollerController::class, 'getPermissions']);
Route::post('/roles/{role}/permissions', [RollerController::class, 'assignPermission']);
Route::delete('/roles/{role}/permissions/{permission}', [RollerController::class, 'removePermission']);
Route::get('/roles-count', [RollerController::class, 'getRolesWithUserCount']);
Route::get('/roles-users/{rol}', [RollerController::class, 'getUsersWithRoles']);

// routes/api.php
Route::get('/users/{user}/permissions', [PermissionController::class, 'getPermissions']);
Route::post('/users/{user}/permissions/{permission}', [PermissionController::class, 'assignPermission']);
Route::delete('/users/{user}/permissions/{permission}', [PermissionController::class, 'removePermission']);










Route::group(['prefix' => 'auth'], function () {
  Route::post('login', [AuthController::class, 'login']);
  Route::post('register', [AuthController::class, 'register']);

  Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user']);
  });
});


Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//   return response()->json($request->user());
// });
