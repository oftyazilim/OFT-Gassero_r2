import{V as t}from"./VChip-Dx4QNr20.js";import{V as W,a as w,b as z,d as L}from"./VList-5j6JHPeN.js";import{V as A}from"./VListItemAction-zWjsJnCh.js";import{d as x,r as u,o as c,g as V,f as i,b as e,bd as M,be as J,t as a,ai as T,V as f,n as r,aW as k,c as _,e as o,y as g}from"./main-CXefX_qh.js";import{V as j}from"./VMenu-DAf6uba2.js";import{_ as N}from"./AppCombobox.vue_vue_type_script_setup_true_lang-DjmA_ZJ6.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as B}from"./avatar-1-mrBiEG2D.js";import{a as R}from"./avatar-2-J3iDMrW6.js";import{a as F}from"./avatar-3-CCfT4M2Q.js";import{a as U}from"./avatar-4-CkT0aFRW.js";import{V as I}from"./VAvatar-a73hCTk3.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang-ksOfkbnl.js";import{V as d}from"./VCol-Dzvr-cnK.js";import{V as O}from"./VRow-qTTVFZ4i.js";import"./VSlideGroup-CNPi0L39.js";import"./ssrBoot-BBXTmuIy.js";import"./index-DT3SyRRd.js";import"./VDivider-B8BIZrEP.js";import"./VOverlay-E84Zkpn-.js";import"./easing-CjukEv2V.js";import"./delay-RGhQcOZ6.js";import"./lazy-CAMkS5e7.js";import"./scopeId-BgBx1Ex_.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DjZpsU5U.js";import"./form-ClP579eF.js";import"./VSelect-BSocyXX7.js";import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./VField-CeCYSswt.js";import"./VInput-BI9uJ0Ce.js";import"./VCheckboxBtn-CLjc42-a.js";import"./VSelectionControl-BoOcbjQs.js";import"./filter-B7NDRcyz.js";import"./VImg-Db788kHt.js";import"./vue3-perfect-scrollbar-BT2Ou4oR.js";import"./VCard-pJfFDOSH.js";import"./VCardText-BW9gFSa-.js";/* empty css              */const q=x({__name:"DemoChipExpandable",setup(m){const s=u(!1);return(h,p)=>(c(),V(j,{modelValue:r(s),"onUpdate:modelValue":p[1]||(p[1]=l=>k(s)?s.value=l:null),transition:"scale-transition"},{activator:i(({props:l})=>[e(t,M(J(l)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e(W,null,{default:i(()=>[e(w,null,{append:i(()=>[e(A,{class:"ms-3"},{default:i(()=>[e(T,{icon:"",variant:"text",size:"x-small",color:"default",onClick:p[0]||(p[0]=l=>s.value=!1)},{default:i(()=>[e(f,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:i(()=>[e(z,{class:"mb-2"},{default:i(()=>[a(" VueJS ")]),_:1}),e(L,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),G=x({__name:"DemoChipInSelects",setup(m){const s=u(["Programming","Playing games","Sleeping"]),h=u(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(p,l)=>{const v=N;return c(),V(v,{modelValue:r(s),"onUpdate:modelValue":l[0]||(l[0]=b=>k(s)?s.value=b:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:r(h),label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"])}}}),H={},K={class:"demo-space-x"};function Q(m,s){return c(),_("div",K,[e(t,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(t,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(t,{size:"default"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(t,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const X=y(H,[["render",Q]]),Z={class:"demo-space-x"},ee=o("span",null,"John Doe",-1),ie=o("span",null,"Darcy Nooser",-1),ae=o("span",null,"Felicia Risker",-1),te=o("span",null,"Minnie Mostly",-1),oe=x({__name:"DemoChipWithAvatar",setup(m){return(s,h)=>(c(),_("div",Z,[e(t,null,{default:i(()=>[e(I,{start:"",image:r(B)},null,8,["image"]),ee]),_:1}),e(t,null,{default:i(()=>[e(I,{start:"",image:r(R)},null,8,["image"]),ie]),_:1}),e(t,{pill:"",label:!1,"prepend-avatar":r(F)},{default:i(()=>[ae]),_:1},8,["prepend-avatar"]),e(t,{pill:"",label:!1},{default:i(()=>[e(I,{start:"",image:r(U)},null,8,["image"]),te]),_:1})]))}}),le={},re={class:"demo-space-x"};function se(m,s){return c(),_("div",re,[e(t,null,{default:i(()=>[e(f,{start:"",icon:"tabler-user"}),a(" Account ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[e(f,{start:"",icon:"tabler-star"}),a(" Premium ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[e(f,{start:"",icon:"tabler-cake"}),a(" 1 Year ")]),_:1}),e(t,{color:"success"},{default:i(()=>[e(f,{start:"",icon:"tabler-bell"}),a(" Notification ")]),_:1}),e(t,{color:"info"},{default:i(()=>[e(f,{start:"",icon:"tabler-messages"}),a(" Message ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[e(f,{start:"",icon:"tabler-alert-triangle"}),a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[e(f,{start:"",icon:"tabler-alert-circle"}),a(" Error ")]),_:1})])}const ce=y(le,[["render",se]]),ne={class:"demo-space-x"},pe=x({__name:"DemoChipClosable",setup(m){const s=u(!0),h=u(!0),p=u(!0),l=u(!0),v=u(!0),b=u(!0),S=u(!0);return(D,n)=>(c(),_("div",ne,[r(s)?(c(),V(t,{key:0,closable:"","onClick:close":n[0]||(n[0]=C=>s.value=!r(s))},{default:i(()=>[a(" Default ")]),_:1})):g("",!0),r(h)?(c(),V(t,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=C=>h.value=!r(h))},{default:i(()=>[a(" Primary ")]),_:1})):g("",!0),r(p)?(c(),V(t,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=C=>p.value=!r(p))},{default:i(()=>[a(" Secondary ")]),_:1})):g("",!0),r(l)?(c(),V(t,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=C=>l.value=!r(l))},{default:i(()=>[a(" Success ")]),_:1})):g("",!0),r(v)?(c(),V(t,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=C=>v.value=!r(v))},{default:i(()=>[a(" Info ")]),_:1})):g("",!0),r(b)?(c(),V(t,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=C=>b.value=!r(b))},{default:i(()=>[a(" Warning ")]),_:1})):g("",!0),r(S)?(c(),V(t,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=C=>S.value=!r(S))},{default:i(()=>[a(" Error ")]),_:1})):g("",!0)]))}}),me={},de={class:"demo-space-x"};function ue(m,s){return c(),_("div",de,[e(t,{label:!1},{default:i(()=>[a(" Default ")]),_:1}),e(t,{label:!1,color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{label:!1,color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{label:!1,color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{label:!1,color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{label:!1,color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{label:!1,color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const Ve=y(me,[["render",ue]]),he={},Ce={class:"demo-space-x"};function fe(m,s){return c(),_("div",Ce,[e(t,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const _e=y(he,[["render",fe]]),ve={},be={class:"demo-space-x"};function ge(m,s){return c(),_("div",be,[e(t,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ye=y(ve,[["render",ge]]),Se={},xe={class:"demo-space-x"};function Ie(m,s){return c(),_("div",xe,[e(t,null,{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const De=y(Se,[["render",Ie]]),ke={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},$e={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},We={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},ze={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Le={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Ae={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Me={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Je=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the background color of chips.")],-1),Te=o("p",null,[a("Use "),o("code",null,"elevated"),a(" variant option to create filled chips.")],-1),je=o("p",null,[a("Use "),o("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),Ne=o("p",null,[a("To use the rounded chip, set "),o("code",null,"label"),a(" props value to "),o("strong",null,"false"),a(".")],-1),Be=o("p",null,[a("Closable chips can be controlled with a "),o("code",null,"v-model"),a(".")],-1),Re=o("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Fe=o("p",null,[a("Use "),o("code",null,"pill"),a(" prop to remove the "),o("code",null,"v-avatar"),a(" padding.")],-1),Ue=o("p",null,[a("The "),o("code",null,"v-chip"),a(" component can have various sizes from "),o("code",null,"x-small"),a(" to "),o("code",null,"x-large"),a(".")],-1),Ye=o("p",null,[a("Selects can use "),o("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Oe=o("p",null,[a("Chips can be combined with "),o("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),Li=x({__name:"chip",setup(m){return(s,h)=>{const p=De,l=Y,v=ye,b=_e,S=Ve,D=pe,n=ce,C=oe,P=X,$=G,E=q;return c(),V(O,{class:"match-height"},{default:i(()=>[e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Color",code:Pe},{default:i(()=>[Je,e(p)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Elevated",code:$e},{default:i(()=>[Te,e(v)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Outlined",code:we},{default:i(()=>[je,e(b)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Rounded",code:ze},{default:i(()=>[Ne,e(S)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Closable",code:ke},{default:i(()=>[Be,e(D)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Icon",code:Me},{default:i(()=>[Re,e(n)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Avatar",code:Ae},{default:i(()=>[Fe,e(C)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Sizes",code:Le},{default:i(()=>[Ue,e(P)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"In Selects",code:We},{default:i(()=>[Ye,e($)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Expandable",code:Ee},{default:i(()=>[Oe,e(E)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Li as default};
