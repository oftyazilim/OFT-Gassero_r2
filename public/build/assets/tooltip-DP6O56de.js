import{a as b}from"./avatar-4-CkT0aFRW.js";import{V as i}from"./VTooltip-BEq9NQdG.js";import{d as m,o as s,c as _,b as t,f as o,t as n,ai as e,n as V,V as T,q as f,e as a,r as $,g as B}from"./main-C8N3ebfR.js";import{V as S}from"./VImg-BEBs2K_P.js";import{V as H}from"./VAvatar-DY8J7Y8l.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-CfubSx0E.js";import{a as d,V as k}from"./VRow-Z9fbV_da.js";import"./VOverlay-BeTVZ1OA.js";import"./easing-CjukEv2V.js";import"./delay-CiPbFjzB.js";import"./lazy-BQ6JzVrR.js";import"./scopeId-Cdi8TwQm.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar-CFV7m74e.js";import"./VCard-BdrtuRPD.js";import"./VCardText-ARgIvpol.js";import"./VDivider-BSW7EtyF.js";/* empty css              */const E={class:"demo-space-x"},I=a("span",null,"Tooltip on Icon",-1),A=m({__name:"DemoTooltipTooltipOnVariousElements",setup(r){return(l,u)=>(s(),_("div",E,[t(e,null,{default:o(()=>[n(" Button "),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip ")]),_:1})]),_:1}),t(H,{color:"info"},{default:o(()=>[t(S,{src:V(b)},null,8,["src"]),t(i,{location:"top",activator:"parent"},{default:o(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),t(i,{location:"top"},{activator:o(({props:c})=>[t(T,f(c,{size:"30",icon:"tabler-user"}),null,16)]),default:o(()=>[I]),_:1})]))}}),w={},j={class:"demo-space-x"},C=a("span",null,"Scale Transition",-1),F=a("span",null,"Scroll X Transition",-1),X=a("span",null,"Scroll Y Transition",-1);function M(r,l){return s(),_("div",j,[t(e,null,{default:o(()=>[n(" scale transition "),t(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:o(()=>[C]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll X transition "),t(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:o(()=>[F]),_:1})]),_:1}),t(e,null,{default:o(()=>[n(" scroll y transition "),t(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:o(()=>[X]),_:1})]),_:1})])}const P=v(w,[["render",M]]),z={class:"demo-space-x"},N=a("span",null,"Programmatic tooltip",-1),Y=m({__name:"DemoTooltipVModelSupport",setup(r){const l=$(!1);return(u,c)=>(s(),_("div",z,[t(e,{onClick:c[0]||(c[0]=p=>l.value=!V(l))},{default:o(()=>[n(" toggle tooltip ")]),_:1}),t(i,{"model-value":V(l),location:"top"},{activator:o(({props:p})=>[t(T,f(p,{icon:"tabler-brand-instagram"}),null,16)]),default:o(()=>[N]),_:1},8,["model-value"])]))}}),L={},U=a("span",null,"Open Delay On Hover",-1),q=a("span",null,"Open Delay On Hover",-1);function R(r,l){return s(),B(e,{variant:"outlined"},{default:o(()=>[U,n(),t(i,{"open-delay":"500",location:"top",activator:"parent"},{default:o(()=>[q]),_:1})]),_:1})}const G=v(L,[["render",R]]),J={},K={class:"demo-space-x"},Q=a("span",null,"Open On Hover",-1),W=a("span",null,"Open On click",-1),Z=a("span",null,"Open On Hover + Focus",-1);function tt(r,l){return s(),_("div",K,[t(e,{variant:"outlined"},{default:o(()=>[Q,t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Open On Hover ")]),_:1})]),_:1}),t(e,{variant:"outlined",color:"primary"},{default:o(()=>[W,t(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:o(()=>[n(" Open On click ")]),_:1})]),_:1}),t(e,{variant:"outlined"},{default:o(()=>[Z,t(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:o(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const ot=v(J,[["render",tt]]),nt={},at={class:"demo-space-x"};function it(r,l){return s(),_("div",at,[t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on End "),t(i,{activator:"parent",location:"end"},{default:o(()=>[n(" End Tooltip ")]),_:1})]),_:1}),t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on Start "),t(i,{activator:"parent",location:"start"},{default:o(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on Top "),t(i,{activator:"parent",location:"top"},{default:o(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),t(e,{variant:"tonal"},{default:o(()=>[n(" Tooltip on Bottom "),t(i,{activator:"parent",location:"bottom"},{default:o(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const et=v(nt,[["render",it]]),lt={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},pt={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},st={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},rt={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},ct={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},dt={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},_t=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),vt=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),Vt=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),mt=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),ut=a("p",null,"Tooltips can wrap any element.",-1),Ct=m({__name:"tooltip",setup(r){return(l,u)=>{const c=et,p=D,O=ot,h=G,x=Y,g=P,y=A;return s(),B(k,null,{default:o(()=>[t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Location",code:st},{default:o(()=>[_t,t(c)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Events",code:pt},{default:o(()=>[t(O)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Delay On Hover",code:lt},{default:o(()=>[vt,t(h)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"V-Model Support",code:dt},{default:o(()=>[Vt,t(x)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Transition",code:ct},{default:o(()=>[mt,t(g)]),_:1},8,["code"])]),_:1}),t(d,{cols:"12"},{default:o(()=>[t(p,{title:"Tooltip on Various Elements",code:rt},{default:o(()=>[ut,t(y)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ct as default};
