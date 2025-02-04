<script setup lang="ts">
import UserList from '@/views/apps/roles/UserList.vue'
import RoleCards from '@/views/apps/roles/RoleCards.vue'

</script>

<template>
  <VRow>
    <VCol cols="12">
      <h4 class="text-h4 mb-1">
        Roller
      </h4>
      <p class="text-body-1 mb-0">
        Rol, önceden tanımlanmış menülere ve özelliklere erişim sağlayarak, atanan role bağlı olarak yöneticinin ihtiyaç duyduğu şeye erişebilmesini sağlar.      </p>
    </VCol>

    <!-- 👉 Roles Cards -->
    <VCol cols="12">
      <RoleCards />
    </VCol>

    <VCol cols="12">
      <h4 class="text-h4 mb-1 mt-6">
        Rolleriyle birlikte toplam kullanıcı sayısı
      </h4>
      <p class="text-body-1 mb-0">
        Şirketinizin tüm yönetici hesaplarını ve bunların ilişkili rollerini bulun.
</p>
    </VCol>

    <VCol cols="12">
      <!-- 👉 User List  -->
      <!-- <UserList /> -->
    </VCol>
  </VRow>
</template>
