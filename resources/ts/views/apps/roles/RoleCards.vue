<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'
import avatar9 from '@images/avatars/avatar-9.png'
import girlUsingMobile from '@images/pages/girl-using-mobile.png'
import axios from 'axios';
import { ref, onMounted } from 'vue';



interface Permission {
  name: string
  read: boolean
  write: boolean
  create: boolean
}

interface RoleDetails {
  name: string
  permissions: Permission[]
}

interface Role {
  id: number;
  name: string;
}

interface Roles {
  role: string;
  users: string[];
  details: RoleDetails;
}

const users = ref([]);


const fetchRolesWithUserCount = async () => {
  try {
    // API'den gelen veriyi al
    const { data } = await axios.get('/api/roles-with-user-count');
    console.log("api:", roles.value);

    // roller dizisini güncelle
    roles.value = roles.value.map(role => {
      const matchedRole = data.find(item => item.role_id === role.id);
      const userCount = matchedRole ? matchedRole.user_count : 0;

      // Vue'nun reaktif yapısına uygun şekilde userCount'u güncelle
      role.userCount = userCount;

      return role;
    });

    // Güncellenmiş veriyi logla
    console.log("Güncellenmiş roller:", roles.value);
  } catch (error) {
    console.error("Roller alınırken bir hata oluştu:", error.message || error);
  }
};







const roles = ref<Roles[]>([]); // Başlangıçta boş bir dizi


const fetchRoles = async () => {
  try {
    const response = await axios.get('/api/roles');
    roles.value = response.data.map((role: string) => ({
      role: role,
      users: [avatar1, avatar2], 
      details: {
        name: role,
        permissions: [], 
      },
    }));
    console.log("Roller işlendi:", roles.value);
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
  }
};



// Sayfa yüklendiğinde verileri al
onMounted(() => {
  fetchRoles();
  fetchRolesWithUserCount();
  users.value = [avatar1, avatar2];
});

const isRoleDialogVisible = ref(false);
const roleDetail = ref<RoleDetails | null>(null);
const isAddRoleDialogVisible = ref(false);

// Role detaylarını düzenleme için fonksiyon
const editPermission = (value: RoleDetails) => {
  isRoleDialogVisible.value = true;
  roleDetail.value = value;
}
</script>
<template>
  <VRow>
    <!-- 👉 Roles -->
    <VCol v-for="item in roles" :key="item.role" cols="12" sm="6" lg="4">
      <VCard>
        <VCardText class="d-flex align-center pb-4">
          <div class="text-body-1">
            <!-- Kullanıcı sayısını göster -->
            Total {{ item.userCount }} users
          </div>



          <VSpacer />

          <div class="v-avatar-group" style="display: flex; align-items: center;">
            <!-- Avatarları döngü ile oluştur -->
            <template v-for="(user, index) in users" :key="index">
              <VAvatar v-if="users.length > 4 && index < 3" size="40" :image="user" />
              <VAvatar v-else-if="users.length <= 4" size="40" :image="user" />
            </template>

            <!-- Fazlalık gösterimi -->
            <VAvatar v-if="users.length > 4" size="40" :color="$vuetify.theme.current.dark ? '#373B50' : '#EEEDF0'"
              class="extra-avatar">
              <span>+{{ users.length - 3 }}</span>
            </VAvatar>
          </div>
        </VCardText>

        <VCardText>
          <div class="d-flex justify-space-between align-center">
            <div>

              <h5 class="text-h5">
                {{ item.role }} <!-- Burada role adını doğru yazdırıyoruz -->
              </h5>


              <div class="d-flex align-center">
                <a href="javascript:void(0)" @click="editPermission(item.details)">
                  Edit Role
                </a>
              </div>
            </div>
            <IconBtn>
              <VIcon icon="tabler-copy" class="text-high-emphasis" />
            </IconBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Add New Role -->
    <VCol cols="12" sm="6" lg="4">
      <VCard class="h-100" :ripple="false">
        <VRow no-gutters class="h-100">
          <VCol cols="5" class="d-flex flex-column justify-end align-center mt-5">
            <img width="85" :src="girlUsingMobile">
          </VCol>

          <VCol cols="7">
            <VCardText class="d-flex flex-column align-end justify-end gap-4">
              <VBtn size="small" @click="isAddRoleDialogVisible = true">
                Yeni Rol Ekle
              </VBtn>
              <div class="text-end">
                Add new role,<br> if it doesn't exist.
              </div>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
      <AddEditRoleDialog v-model:is-dialog-visible="isAddRoleDialogVisible" />
    </VCol>
  </VRow>

  <AddEditRoleDialog v-model:is-dialog-visible="isRoleDialogVisible" v-model:role-permissions="roleDetail" />
</template>
<style scoped>
.v-avatar-group {
  gap: 8px;
}

.extra-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}
</style>
