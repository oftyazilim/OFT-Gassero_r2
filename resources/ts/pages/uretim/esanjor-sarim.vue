<template>
  <v-container class="pa-0 fill-height" fluid>
    <v-row class="h-100">

      <v-col cols="4" class="d-flex flex-column align-center justify-start">
        
        <v-row class="h-200">
          <v-col cols="8" class="d-flex flex-column align-center justify-center">
            <v-card class="mantar-buton text-center d-flex align-center justify-center position-relative" :style="{
              transform: isPressed ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.1s ease',
              cursor: isCooldown ? 'not-allowed' : 'pointer',
            }" height="200" width="200" style="border-radius: 100px;" @mousedown="handlePress" @mouseup="handleRelease"
              @mouseleave="handleRelease" @touchstart.prevent="handlePress" @touchend="handleRelease"
              @touchcancel="handleRelease">
              <img :src="isCooldown ? cooldownImage : defaultImage" alt="Buton Simge" class="button-icon" />
            </v-card>
          </v-col>
          
          <v-col cols="4" class="d-flex flex-column align-center justify-center">
            <v-card class="mantar-buton text-center d-flex align-center justify-center position-relative" :style="{
              transform: isPressed ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.1s ease',
              cursor: isCooldown ? 'not-allowed' : 'pointer',
            }" height="100" width="100" style="border-radius: 100px;" @mousedown="handlePress" @mouseup="handleRelease"
              @mouseleave="handleRelease" @touchstart.prevent="handlePress" @touchend="handleRelease"
              @touchcancel="handleRelease">
              <img :src="isCooldown ? defaultImage : cooldownImage" alt="Buton Simge" class="button-icon" />
            </v-card>
          </v-col>
        </v-row>
        
        <!-- Sol Üst: Buton ve Tarih-Saat -->
        <v-row>
          <div>
            <v-col cols="12" class="d-flex flex-column align-center justify-start">
              <!-- Tarih ve Saat -->
              <div class=" text-center align-center justify-center">
                <transition name="fade-slide">
                  <h3 :key="currentDate" class="date-time">{{ currentDate }}</h3>
                </transition>
                <!-- <transition name="spin" mode="out-in"> -->
                <h4 :key="currentTime" class="date-time" style="font-size: 40px;">{{ currentTime }}</h4>
                <!-- </transition> -->
              </div>
            </v-col>
          </div>
        </v-row>



        <!-- Ürün Görseli -->
        <div class="mt-4">
          
      <div id="chart">
        <apexchart type="bar" height="440" :options="chartOptions" :series="series"></apexchart>
      </div>
        </div>
      </v-col>

      <!-- Sağ Üst ve Alt: Text Kutuları -->
      <v-col cols="8" class="d-flex flex-column justify-space-between">
        <v-row class="text-container">
          <v-col v-for="(value, index) in numbers" :key="index" cols="12" class="d-flex justify-center align-center">
            <v-card outlined class="pa-4 text-right" style="width: 500px; text-align: right;">
              <transition name="spin" mode="out-in">
                <h2 :key="value" class="animated-number">
                  {{ formatNumber(value) }}
                </h2>
              </transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>





<script setup lang="ts">
import { ref } from "vue";
import butonyesil from '@images/buton-yesil1.png'
import butonkirmizi from '@images/buton-kirmizi1.png'

// Görseller
const defaultImage = butonyesil;
const cooldownImage = butonkirmizi; // Bekleme süresindeyken

// Buton için durumlar
const counter = ref(0);
const isPressed = ref(false);
const isCooldown = ref(false);
const cooldownTime = ref(0);

// Sayılar için durum
const numbers = ref([0, 0, 0, 0, 0, 0]);

// Tarih ve Saat
const currentDate = ref("");
const currentTime = ref("");

// Sayıları artır
async function handlePress() {
  if (isCooldown.value) return;

  isPressed.value = true;

  // Sayıları güncelle
  numbers.value = [
    numbers.value[0] + 1,
    numbers.value[1] + 10,
    numbers.value[2] + 20,
    numbers.value[3] + 50,
    numbers.value[4] + 100,
    numbers.value.reduce((a, b, i) => (i < 5 ? a + b : a), 0),
  ];

  // Soğuma süresi
  isCooldown.value = true;
  cooldownTime.value = 5;

  const interval = setInterval(() => {
    cooldownTime.value -= 1;
    if (cooldownTime.value <= 0) clearInterval(interval);
  }, 1000);

  setTimeout(() => {
    isCooldown.value = false;
  }, 2000);
}

function handleRelease() {
  isPressed.value = false;
}

// Sayıları formatlamak için
function formatNumber(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}

// Tarih ve saat güncelleme
setInterval(() => {
  const now = new Date();
  currentDate.value = now.toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  currentTime.value = now.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });
}, 1000);
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.h-100 {
  background-color: #f7bcbc;
}

.h-200 {
  background-color: rgb(193, 170, 140);
}

.mantar-buton {
  background: linear-gradient(145deg, #f7bcbc, #e86165);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  position: relative;
}

.button-icon {
  width: 100%;
  /* Buton genişliğine göre ölçeklenir */
  height: auto;
  /* Yükseklik oranını korur */
}

.product-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.spin-enter-active {
  animation: spin-in 0.5s ease-out;
}

.spin-leave-active {
  animation: spin-out 0.5s ease-out;
}

@keyframes spin-in {
  from {
    transform: rotateX(-90deg);
    opacity: 0;
  }

  to {
    transform: rotateX(0);
    opacity: 1;
  }
}

@keyframes spin-out {
  from {
    transform: rotateX(0);
    opacity: 1;
  }

  to {
    transform: rotateX(90deg);
    opacity: 0;
  }
}

.date-time {
  font-size: 1.5rem;
  font-weight: bold;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.animated-number {
  font-size: 2rem;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
