<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IskrtEsnjr extends Model
{
    use HasFactory;
    protected $table = 'OFTT_01_ISKRTESANJOR'; // Tablo ismini belirtiyoruz

    protected $primaryKey = 'ID';
    
    protected $fillable = [
        'URUNID',
        'ESANJORID', 
        'BARKOD',
        'HURDATARIH',
        'SONDRMTARIH',
        'OLUSTURANID',
        'DUZENLEYENID',
        'SILINDI',
        'SILINMETARIH',
        'SILENID',
        'OPERASYON',
        'SEBEP',
        'ISEMRIID',
    ];


    public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
