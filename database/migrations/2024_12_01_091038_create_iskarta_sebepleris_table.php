<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('iskarta_sebepleris', function (Blueprint $table) {
            $table->id();
            $table->string('SEBEP');
            $table->string('TIP');
            $table->string('SINIF');
            $table->string('TUR');
            $table->string('PERFORMANS');
            $table->string('PROSES');
            $table->integer('ISTASYONID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iskarta_sebepleris');
    }
};
