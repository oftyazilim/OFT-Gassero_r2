<template>
  <v-container>
    <v-row>
      <!-- Sol sütun: Tüm roller -->
      <v-col cols="4">
        <h3>Tüm Roller</h3>
        <v-list>
          <v-list-item
            v-for="role in availableRoles"
            :key="role.id"
            :value="role.id"
            @click="toggleSelection(role, 'available')"
            :class="{ 'selected-item': isSelected(role, 'available') }"
          >
            {{ role.name }}
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Orta sütun: Butonlar -->
      <v-col cols="4" class="text-center">
        <v-btn @click="moveSelected('available', 'assigned')" :disabled="selectedAvailable.length === 0">
          Sağa Aktar
        </v-btn>
        <br /><br />
        <v-btn @click="moveSelected('assigned', 'available')" :disabled="selectedAssigned.length === 0">
          Sola Aktar
        </v-btn>
      </v-col>

      <!-- Sağ sütun: Kullanıcı Rolleri -->
      <v-col cols="4">
        <h3>Kullanıcı Rolleri</h3>
        <v-list>
          <v-list-item
            v-for="role in assignedRoles"
            :key="role.id"
            @click="toggleSelection(role, 'assigned')"
            :class="{ 'selected-item': isSelected(role, 'assigned') }"
          >
            {{ role.name }}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <br>
    <br>
    <hr>
    <br>
    <div class="tables">
    <Grid
      :tasks-store="tasksStore"
      :status="1"
      class="column"
    />
    <Grid
      :tasks-store="tasksStore"
      :status="2"
      class="column"
    />
  </div>
  </v-container>
</template>

<script setup lang="ts">
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import Grid from "@/components/dialogs/Grid.vue";

const url = 'https://js.devexpress.com/Demos/Mvc/api/DnDBetweenGrids';

const tasksStore = AspNetData.createStore({
  key: 'ID',
  loadUrl: `${url}/Tasks`,
  updateUrl: `${url}/UpdateTask`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});



export default {
  data() {
    return {
      // Tüm roller
      allRoles: [
        { id: 1, name: "Admin" },
        { id: 2, name: "Editor" },
        { id: 3, name: "User" },
      ],
      // Kullanıcıya atanmış roller
      assignedRoles: [],
      // Seçimler
      selectedAvailable: [],
      selectedAssigned: [],
    };
  },
  computed: {
    availableRoles() {
      // Kullanıcıya atanmış rolleri çıkarır
      return this.allRoles.filter(
        (role) => !this.assignedRoles.find((r) => r.id === role.id)
      );
    },
  },
  methods: {
    toggleSelection(role, type) {
      const list =
        type === "available" ? this.selectedAvailable : this.selectedAssigned;
      const index = list.findIndex((r) => r.id === role.id);
      if (index === -1) list.push(role);
      else list.splice(index, 1);
    },
    isSelected(role, type) {
      const list =
        type === "available" ? this.selectedAvailable : this.selectedAssigned;
      return list.some((r) => r.id === role.id);
    },
    moveSelected(from, to) {
      const fromList =
        from === "available" ? this.availableRoles : this.assignedRoles;
      const toList = from === "available" ? this.assignedRoles : this.availableRoles;
      const selected =
        from === "available" ? this.selectedAvailable : this.selectedAssigned;

      // Rolleri taşır
      selected.forEach((role) => {
        const index = fromList.findIndex((r) => r.id === role.id);
        if (index !== -1) {
          toList.push(role);
          fromList.splice(index, 1);
        }
      });

      // Seçimleri temizle
      if (from === "available") this.selectedAvailable = [];
      else this.selectedAssigned = [];
    },
  },
};
</script>

<style scoped>
.tables {
  display: flex;
}

.column:first-child {
  width: 50%;
  padding-right: 15px;
}

.column:last-child {
  width: 50%;
  padding-left: 15px;
}

.selected-item {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
