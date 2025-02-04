<script lang="ts" setup>
definePage({
  meta: {
    action: 'update',
    subject: 'Dashboard',
  },
})

// const user = {
//   action: 'read' as const,
//   // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
//   subject: 'Dashboard' as const,
// }

import type { Rule } from './ability'

const userAbilityRules = useCookie<Rule[]>('userAbilityRules')


</script>

<template>
  Hoooooop dedik - {{ userAbilityRules.name }} 
  <!-- <p v-if="$can(userData.action, userData.subject)">
    Ehlen ve sehlen - {{ $can(userData.action, userData.subject) }} {{ userData._rawValue }} - {{ userData.subject }}
  </p>
  <p v-else>
  </p> -->
</template>
