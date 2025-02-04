<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HrktEsanjor extends Model
{
    use HasFactory;
    protected $table = 'OFTT_01_HRKTESANJOR'; // Tablo ismini belirtiyoruz

    protected $primaryKey = 'ID';
    
    protected $fillable = [
        'URUNID',
        'ESANJORID', 
        'BARKOD',
        'URETIMTARIH',
        'OLUSTURANID',
        'DUZENLEYENID',
        'SILINDI',
        'SILINMETARIH',
        'SILENID',
        'OPERASYON',
        'ISEMRIID',
        'DUZENTARIH',
        'NOTLAR',
    ];

    
    
    public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
