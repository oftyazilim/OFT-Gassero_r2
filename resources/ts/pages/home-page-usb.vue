<template>
  <v-container>
    <!-- LED Temsilleri -->
    <v-row justify="center" align="center">
      <v-col v-for="(led, index) in leds" :key="index" cols="auto" class="text-center">
        <svg :class="led ? 'led-on' : 'led-off'" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
          <path v-if="led" d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM12 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
          <path v-else d="M12 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
        <div>LED {{ index + 1 }}</div>
      </v-col>
    </v-row>

    <!-- Seri Port Verisi Gösterimi -->
    <v-textarea v-model="rawData" rows="5" label="Gelen Veri" outlined readonly class="mt-5"></v-textarea>

    <!-- Seri Port Bağlantı Kontrolleri -->
    <v-btn @click="connectSerial" color="primary" class="mt-2">Porta Bağlan</v-btn>
    <v-btn @click="disconnectSerial" color="error" class="mt-2">Bağlantıyı Kes</v-btn>
  </v-container>
</template>

<style scoped>
.led-on {
  color: green;
}

.led-off {
  color: grey;
}

.text-center {
  text-align: center;
}

svg {
  width: 50px;
  height: 50px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      leds: Array(8).fill(false) as boolean[], // LED'ler dizisi
      rawData: "" as string, // Gelen ham veri
      port: null as SerialPort | null, // Seri port
      reader: null as ReadableStreamDefaultReader<Uint8Array> | null, // Seri port okuyucu
    };
  },
  methods: {
    // Seri porta bağlan
    async connectSerial(): Promise<void> {
      try {
        if (this.port) {
          console.log("Port zaten açık.");
          return;
        }

        this.port = await navigator.serial.requestPort();
        await this.port.open({ baudRate: 9600 });
        this.reader = this.port.readable.getReader();

        while (true) {
          const { value, done } = await this.reader.read();
          if (done) break;
          const data = new TextDecoder().decode(value);
          this.rawData += data;
          this.processData(data);
        }
      } catch (error) {
        console.error("Seri porta bağlanırken hata oluştu:", error);
      }
    },

    // Seri port bağlantısını kes
    async disconnectSerial(): Promise<void> {
      try {
        if (this.reader) {
          await this.reader.cancel();
          await this.reader.releaseLock();
        }
        if (this.port) {
          await this.port.close();
        }
        this.port = null;
        this.reader = null;
        console.log("Seri port bağlantısı kapatıldı.");
      } catch (error) {
        console.error("Seri portu kapatırken hata oluştu:", error);
      }
    },

    // Gelen veriyi işle
    processData(data: string): void {
      // Dizi verisini parçalayıp LED'leri güncelle
      if (data.includes("#")) {
        const values = data.split("|"); // '|' karakterine göre ayır
        values.pop(); // Son değer '#' olduğundan onu çıkar

        this.leds = values.map((val) => val.trim() === "1");
      }
    },
  },
});
</script>

