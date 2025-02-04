<script lang="ts" setup>
// definePage({
//   meta: {
//     action: 'read',
//     subject: 'Dashboard',
//   },
// });

import type { Rule } from './ability';

// Kullanıcı kurallarını al
const userAbilityRules = useCookie<Rule[]>('userAbilityRules').value || [];

let okumaIzni = false;
let olusturmaIzni = false;
let guncellemeIzni = false;
let silmeIzni = false;

// İzinleri kontrol edip konsola yazdır
userAbilityRules.forEach((rule, index) => {
  if (rule.action === 'read' && rule.subject === 'SuperAdmin') okumaIzni = true;
  if (rule.action === 'create' && rule.subject === 'SuperAdmin') olusturmaIzni = true;
  if (rule.action === 'update' && rule.subject === 'SuperAdmin') guncellemeIzni = true;
  if (rule.action === 'delete' && rule.subject === 'SuperAdmin') silmeIzni = true;

  console.log(`Kural ${index + 1}:`);
  console.log(`- Action: ${rule.action}`);
  console.log(`- Subject: ${rule.subject}`);
});

console.log('okuma = ' + okumaIzni);
console.log('olusturma = '+ olusturmaIzni);
console.log('guncelleme = '+ guncellemeIzni);
console.log('silme = '+ silmeIzni);

</script>

<template>
  <!-- Kullanıcının herhangi bir kuralının geçerli olup olmadığını kontrol et -->
  <p v-if="userAbilityRules.some(rule => $can('create', rule.subject))">
    Ehlen ve sehlen {{ userAbilityRules }}
  </p>
  <p v-else>
    hoop dedik, izniniz yok
  </p>
  <div>
    <h2>Kullanıcı Kuralları:</h2>
    <ul>
      <li v-for="(rule, index) in userAbilityRules" :key="index">
        Action: <strong>{{ rule.action }}</strong>, Subject: <strong>{{ rule.subject }}</strong>
      </li>
    </ul>
  </div>
</template>
