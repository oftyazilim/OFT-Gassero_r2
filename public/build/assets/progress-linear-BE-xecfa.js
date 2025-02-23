import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as u,c as g,b as e,b6 as t,d as y,r as f,n as v,aW as h,f as a,e as r,v as P,g as L,E as k,ba as $,w as M,t as o}from"./main-CXefX_qh.js";import{_ as x}from"./AppCardCode.vue_vue_type_style_index_0_lang-ksOfkbnl.js";import{V as p}from"./VCol-Dzvr-cnK.js";import{V as I}from"./VRow-qTTVFZ4i.js";import"./vue3-perfect-scrollbar-BT2Ou4oR.js";import"./VCard-pJfFDOSH.js";import"./VAvatar-a73hCTk3.js";import"./VImg-Db788kHt.js";import"./index-DT3SyRRd.js";import"./VCardText-BW9gFSa-.js";import"./VDivider-B8BIZrEP.js";/* empty css              */const D={},U={class:"demo-space-y"};function T(m,l){return u(),g("div",U,[e(t,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(t,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(t,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const j=_(D,[["render",T]]),C={class:"demo-space-y"},R=y({__name:"DemoProgressLinearSlots",setup(m){const l=f(20),d=f(33),i=f(78);return(n,c)=>(u(),g("div",C,[e(t,{modelValue:v(i),"onUpdate:modelValue":c[0]||(c[0]=s=>h(i)?i.value=s:null),color:"primary",height:"8"},null,8,["modelValue"]),e(t,{modelValue:v(l),"onUpdate:modelValue":c[1]||(c[1]=s=>h(l)?l.value=s:null),color:"primary",height:"20"},{default:a(({value:s})=>[r("span",null,P(Math.ceil(s))+"%",1)]),_:1},8,["modelValue"]),e(t,{modelValue:v(d),"onUpdate:modelValue":c[2]||(c[2]=s=>h(d)?d.value=s:null),height:"20",color:"primary"},{default:a(()=>[r("span",null,P(Math.ceil(v(d)))+"%",1)]),_:1},8,["modelValue"])]))}}),S={},N={class:"demo-space-y"};function E(m,l){return u(),g("div",N,[e(t,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(t,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(t,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const Y=_(S,[["render",E]]),A={};function W(m,l){return u(),L(t,{color:"primary",indeterminate:"",reverse:""})}const q=_(A,[["render",W]]),z={};function F(m,l){return u(),L(t,{indeterminate:"",color:"primary"})}const G=_(z,[["render",F]]),H={class:"demo-space-y"},J=y({__name:"DemoProgressLinearBuffering",setup(m){const l=f(10),d=f(20),i=f(),n=()=>{clearInterval(i.value),i.value=setInterval(()=>{l.value+=Math.random()*10+5,d.value+=Math.random()*10+6},2e3)};return k(n),$(()=>{clearInterval(i.value)}),M(l,()=>{if(l.value<100)return!1;l.value=0,d.value=10,n()}),(c,s)=>(u(),g("div",H,[e(t,{modelValue:v(l),"onUpdate:modelValue":s[0]||(s[0]=V=>h(l)?l.value=V:null),color:"primary","buffer-value":v(d)},null,8,["modelValue","buffer-value"])]))}}),K={},O={class:"demo-space-y"};function Q(m,l){return u(),g("div",O,[e(t,{"model-value":"15",color:"primary"}),e(t,{"model-value":"30",color:"secondary"}),e(t,{"model-value":"45",color:"success"})])}const X=_(K,[["render",Q]]),Z={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},ee={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},re={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},oe={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},le={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},ae={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},te={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},se=r("p",null,[o("Use the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(" to set colors.")],-1),ne=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),de=r("p",null,[o("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),o(". This indicates continuous process. ")],-1),ie=r("p",null,[o("Use prop "),r("code",null,"reverse"),o(" to animate continuously in reverse direction. The component also has RTL support.")],-1),ce=r("p",null,[o(" The "),r("code",null," rounded "),o("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),r("code",null,"rounded"),o(" prop true. You can disable it by using "),r("code",null,":rounded='false'"),o(". ")],-1),ue=r("p",null,[o("The v-progress-linear component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),me=r("p",null,[o(" The "),r("code",null,"striped"),o(" prop is used to apply striped background.")],-1),ke=y({__name:"progress-linear",setup(m){return(l,d)=>{const i=X,n=x,c=J,s=G,V=q,b=Y,w=R,B=j;return u(),L(I,{class:"match-height"},{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Color",code:ee},{default:a(()=>[se,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Buffering",code:Z},{default:a(()=>[ne,e(c)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Indeterminate",code:re},{default:a(()=>[de,e(s)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Reversed",code:oe},{default:a(()=>[ie,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Rounded",code:le},{default:a(()=>[ce,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Slots",code:ae},{default:a(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Striped",code:te},{default:a(()=>[me,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ke as default};
