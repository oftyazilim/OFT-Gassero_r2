import{V as x}from"./VTooltip-BEq9NQdG.js";import{d as V,o as d,g as b,f as e,b as t,ai as p,be as c,bf as m,q as M,t as n,e as i,r as L,a as y,n as h,aW as k,c as O,F as C,i as D,v as P}from"./main-C8N3ebfR.js";import{V as r,a as S}from"./VList-DC10drZ4.js";import{V as l}from"./VMenu-CtbOZ7LL.js";import{a as I}from"./avatar-1-mrBiEG2D.js";import{V as A,d as $}from"./VCard-BdrtuRPD.js";import{V as j}from"./VDivider-BSW7EtyF.js";import{V as F}from"./VCardText-ARgIvpol.js";import{_ as E}from"./AppCardCode.vue_vue_type_style_index_0_lang-CfubSx0E.js";import{a as f,V as R}from"./VRow-Z9fbV_da.js";import"./VOverlay-BeTVZ1OA.js";import"./easing-CjukEv2V.js";import"./delay-CiPbFjzB.js";import"./lazy-BQ6JzVrR.js";import"./scopeId-Cdi8TwQm.js";import"./VImg-BEBs2K_P.js";import"./forwardRefs-C-GTDzx5.js";import"./ssrBoot-CMdykAJT.js";import"./VAvatar-DY8J7Y8l.js";import"./dialog-transition-UqIsVCnT.js";import"./vue3-perfect-scrollbar-CFV7m74e.js";/* empty css              */const G=i("span",null,"I am a Tooltip",-1),H=V({__name:"DemoMenuActivatorAndTooltip",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),b(l,{location:"top"},{activator:e(({props:o})=>[t(x,{location:"top"},{activator:e(({props:s})=>[t(p,c(m(M(o,s))),{default:e(()=>[n(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[G]),_:2},1024)]),default:e(()=>[t(r,{items:a})]),_:1}))}}),J=V({__name:"DemoMenuPopover",setup(_){const a=L(!1);return(v,u)=>{const o=y("IconBtn");return d(),b(l,{modelValue:h(a),"onUpdate:modelValue":u[0]||(u[0]=s=>k(a)?a.value=s:null),location:"top"},{activator:e(({props:s})=>[t(p,c(m(s)),{default:e(()=>[n(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(A,{"max-width":"300"},{default:e(()=>[t(r,null,{default:e(()=>[t(S,{"prepend-avatar":h(I),title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),t(j),t(F,null,{default:e(()=>[n(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")]),_:1}),t($,null,{default:e(()=>[t(o,{icon:"tabler-heart"}),t(o,{icon:"tabler-bookmark"}),t(o,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),N=V({__name:"DemoMenuOpenOnHover",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),b(l,{"open-on-hover":""},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" On hover ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1}))}}),X={class:"demo-space-x"},Y=V({__name:"DemoMenuLocation",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),O("div",X,[t(l,{location:"top"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Top ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1}),t(l,{location:"bottom"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Bottom ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1}),t(l,{location:"start"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Start ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1}),t(l,{location:"end"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" End ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1})]))}}),U={class:"demo-space-x"},W=V({__name:"DemoMenuCustomTransitions",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>(d(),O("div",U,[t(l,{transition:"scale-transition"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1}),t(l,{transition:"slide-x-transition"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1}),t(l,{transition:"slide-y-transition"},{activator:e(({props:o})=>[t(p,c(m(o)),{default:e(()=>[n(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(r,{items:a})]),_:1})]))}}),q={class:"demo-space-x"},z=V({__name:"DemoMenuBasic",setup(_){const a=["primary","secondary","success","info","warning","error"],v=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(u,o)=>(d(),O("div",q,[(d(),O(C,null,D(a,s=>t(l,{key:s},{activator:e(({props:B})=>[t(p,M({color:s,ref_for:!0},B),{default:e(()=>[n(P(s),1)]),_:2},1040,["color"])]),default:e(()=>[t(r,{items:v})]),_:2},1024)),64))]))}}),K={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},Q={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},tt={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},et={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},ot={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},nt=i("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),at=i("p",null,[n("Vuetify comes with 3 standard transitions, "),i("code",null,"scale"),n(", "),i("code",null,"slide-x"),n(" and "),i("code",null,"slide-y"),n(". Use "),i("code",null,"transition"),n(" prop to add transition to a menu.")],-1),it=i("p",null,[n("Menu can be offset relative to the activator by using the "),i("code",null,"location"),n(" prop.")],-1),st=i("p",null,[n("Menus can be accessed using hover instead of clicking with the "),i("code",null,"open-on-hover"),n(" prop.")],-1),pt=i("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),rt=i("p",null,[n("With the new "),i("code",null,"v-slot"),n(" syntax, nested activators such as those seen with a "),i("code",null,"v-menu"),n(" and "),i("code",null,"v-tooltip"),n(" attached to the same activator button, need a particular setup in order to function correctly")],-1),Dt=V({__name:"menu",setup(_){return(a,v)=>{const u=z,o=E,s=W,B=Y,g=N,w=J,T=H;return d(),b(R,{class:"match-height"},{default:e(()=>[t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Basic",code:Q},{default:e(()=>[nt,t(u)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Custom transitions",code:Z},{default:e(()=>[at,t(s)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Location",code:tt},{default:e(()=>[it,t(B)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Open on hover",code:et},{default:e(()=>[st,t(g)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Popover",code:ot},{default:e(()=>[pt,t(w)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Activator and tooltip",code:K},{default:e(()=>[rt,t(T)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Dt as default};
