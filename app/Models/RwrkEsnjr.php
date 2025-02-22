<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RwrkEsnjr extends Model
{
    use HasFactory;
    protected $table = 'OFTT_01_RWRKESANJOR'; // Tablo ismini belirtiyoruz

    protected $primaryKey = 'ID';
    
    protected $fillable = [
        'URUNID',
        'ESANJORID', 
        'BARKOD',
        'KARANTINATARIH',
        'REWORKTARIH',
        'SONDRMTARIH',
        'OLUSTURANID',
        'DUZENLEYENID',
        'SILINDI',
        'SILINMETARIH',
        'SILENID',
        'OPERASYON',
        'KARANTINASEBEP',
        'ISKARTASEBEP',
        'ISEMRIID',
        'REWORK',
        'DURUM',
    ];


    public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
