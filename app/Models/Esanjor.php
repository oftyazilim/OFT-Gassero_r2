<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Esanjor extends Model
{
    use HasFactory;

    protected $table = 'OFTT_01_STOKESANJOR'; // Tablo ismini belirtiyoruz

    protected $primaryKey = 'ID';
    
    protected $fillable = [
        'URUNKODU',
        'URUNADI',
        'STGRPKOD',
        'BARKOD',
        'URETIMTARIH',
        'SONDRMTARIH',
        'OLUSTURANID',
        'DUZENLEYENID',
        'SILINDI',
        'SILINMETARIH',
        'SILENID',
        'OPERASYON1',
        'OPERASYON2',
        'OPERASYON3',
        'OPERASYON4',
        'OPERASYON5',
        'OPERASYON6',
        'MAMULFINAL',
        'HURDA',
        'ISEMRIID',
    ];


    public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
