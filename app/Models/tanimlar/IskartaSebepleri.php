<?php

namespace App\Models\tanimlar;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IskartaSebepleri extends Model
{
    use HasFactory;

    protected $table = 'OFTT_01_ISKRTSEBEPLERI'; // Tablo ismini belirtiyoruz

  protected $primaryKey = 'ID'; // Eğer birincil anahtar 'ID' değilse, bunu belirtmelisiniz.

  protected $fillable = [
    'SEBEP',
    'TIP',
    'SINIF',
    'TUR',
    'PERFORMANS',
    'PROSES',
    'ISTASYONID',    
  ];
  public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
