<?php

namespace App\Models\tanimlar;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MamulTanimlar extends Model
{
    use HasFactory;

    protected $table = 'OFTT_01_TANIMLAR'; // Tablo ismini belirtiyoruz

  protected $primaryKey = 'ID'; // Eğer birincil anahtar 'ID' değilse, bunu belirtmelisiniz.

  protected $fillable = [
    'TANIM',
    'DEGER',  
  ];
  public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
