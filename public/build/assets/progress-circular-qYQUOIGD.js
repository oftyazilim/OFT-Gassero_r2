import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as p,b as r,b7 as e,d as V,r as v,E as h,ba as y,f as s,t as o,v as d,n as t,g as z,e as a}from"./main-CXefX_qh.js";import{_ as w}from"./AppCardCode.vue_vue_type_style_index_0_lang-ksOfkbnl.js";import{V as m}from"./VCol-Dzvr-cnK.js";import{V as x}from"./VRow-qTTVFZ4i.js";import"./vue3-perfect-scrollbar-BT2Ou4oR.js";import"./VCard-pJfFDOSH.js";import"./VAvatar-a73hCTk3.js";import"./VImg-Db788kHt.js";import"./index-DT3SyRRd.js";import"./VCardText-BW9gFSa-.js";import"./VDivider-B8BIZrEP.js";/* empty css              */const $={},I={class:"demo-space-x"};function B(u,i){return n(),p("div",I,[r(e,{size:30,width:"3",color:"primary",indeterminate:""}),r(e,{size:40,color:"primary",indeterminate:""}),r(e,{size:50,color:"primary",indeterminate:""}),r(e,{size:60,color:"primary",indeterminate:""})])}const D=g($,[["render",B]]),b={class:"demo-space-x"},j=V({__name:"DemoProgressCircularRotate",setup(u){const i=v(),l=v(0);return h(()=>{i.value=setInterval(()=>{if(l.value===100)return l.value=0;l.value+=10},1e3)}),y(()=>{clearInterval(i.value)}),(_,c)=>(n(),p("div",b,[r(e,{rotate:360,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),r(e,{rotate:90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),r(e,{rotate:170,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),r(e,{rotate:-90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"])]))}}),R={},U={class:"demo-space-x"};function k(u,i){return n(),p("div",U,[r(e,{indeterminate:"",color:"primary"}),r(e,{indeterminate:"",color:"secondary"}),r(e,{indeterminate:"",color:"success"}),r(e,{indeterminate:"",color:"info"}),r(e,{indeterminate:"",color:"warning"}),r(e,{indeterminate:"",color:"error"})])}const M=g(R,[["render",k]]),N={},S={class:"demo-space-x"};function T(u,i){return n(),p("div",S,[r(e,{"model-value":"50",color:"primary"}),r(e,{"model-value":"50",color:"secondary"}),r(e,{"model-value":"50",color:"success"}),r(e,{"model-value":"50",color:"info"}),r(e,{"model-value":"50",color:"warning"}),r(e,{"model-value":"50",color:"error"})])}const A=g(N,[["render",T]]),E={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},q={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},F={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},G={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},H=a("p",null,[o("Alternate colors can be applied to "),a("code",null,"v-progress-circular"),o(" using the "),a("code",null,"color"),o(" prop.")],-1),J=a("p",null,[o("Using the "),a("code",null,"indeterminate"),o(" prop, a "),a("code",null,"v-progress-circular"),o(" continues to animate indefinitely.")],-1),K=a("p",null,[o("The "),a("code",null,"rotate"),o(" prop gives you the ability to customize the "),a("code",null,"v-progress-circular"),o("'s origin.")],-1),L=a("p",null,[o("The "),a("code",null,"size"),o(" and "),a("code",null,"width"),o(" props allow you to easily alter the size and width of the "),a("code",null,"v-progress-circular"),o(" component.")],-1),ir=V({__name:"progress-circular",setup(u){return(i,l)=>{const _=A,c=w,C=M,f=j,P=D;return n(),z(x,{class:"match-height"},{default:s(()=>[r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"color",code:E},{default:s(()=>[H,r(_)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"Indeterminate",code:q},{default:s(()=>[J,r(C)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"Rotate",code:F},{default:s(()=>[K,r(f)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"Size",code:G},{default:s(()=>[L,r(P)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ir as default};
