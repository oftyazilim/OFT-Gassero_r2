import{_ as b}from"./AppSelect.vue_vue_type_script_setup_true_lang-UIB--c0H.js";import{a as I}from"./avatar-1-mrBiEG2D.js";import{a as B}from"./avatar-2-J3iDMrW6.js";import{a as w}from"./avatar-3-CCfT4M2Q.js";import{a as x}from"./avatar-4-CkT0aFRW.js";import{a as O}from"./avatar-5-roKDnu6B.js";import{V as k}from"./VChip-Dx4QNr20.js";import{V as y}from"./VAvatar-a73hCTk3.js";import{d as p,r as f,o as d,g as u,f as t,b as e,e as o,v as G,n as _,aW as v,t as s}from"./main-CXefX_qh.js";import{V as r}from"./VCol-Dzvr-cnK.js";import{V as A}from"./VRow-qTTVFZ4i.js";import{V}from"./VSelect-BSocyXX7.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-ksOfkbnl.js";import"./form-ClP579eF.js";import"./VSlideGroup-CNPi0L39.js";import"./VImg-Db788kHt.js";import"./index-DT3SyRRd.js";/* empty css              */import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./VField-CeCYSswt.js";import"./easing-CjukEv2V.js";import"./VInput-BI9uJ0Ce.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-5j6JHPeN.js";import"./ssrBoot-BBXTmuIy.js";import"./VDivider-B8BIZrEP.js";import"./dialog-transition-DjZpsU5U.js";import"./VMenu-DAf6uba2.js";import"./VOverlay-E84Zkpn-.js";import"./delay-RGhQcOZ6.js";import"./lazy-CAMkS5e7.js";import"./scopeId-BgBx1Ex_.js";import"./VCheckboxBtn-CLjc42-a.js";import"./VSelectionControl-BoOcbjQs.js";import"./vue3-perfect-scrollbar-BT2Ou4oR.js";import"./VCard-pJfFDOSH.js";import"./VCardText-BW9gFSa-.js";const N=p({__name:"DemoSelectSelectionSlot",setup(S){const a=[{name:"Sandra Adams",avatar:I},{name:"Ali Connors",avatar:B},{name:"Trevor Hansen",avatar:w},{name:"Tucker Smith",avatar:x},{name:"Britta Holt",avatar:O}],i=f(["Sandra Adams"]);return(m,l)=>{const c=b;return d(),u(c,{modelValue:_(i),"onUpdate:modelValue":l[0]||(l[0]=n=>v(i)?i.value=n:null),items:a,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:t(({item:n})=>[e(k,null,{prepend:t(()=>[e(y,{start:"",image:n.raw.avatar},null,8,["image"])]),default:t(()=>[o("span",null,G(n.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}}),j=p({__name:"DemoSelectMultiple",setup(S){const a=f(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(m,l)=>{const c=b;return d(),u(c,{modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=n=>v(a)?a.value=n:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}}}),T=p({__name:"DemoSelectMenuProps",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=b;return d(),u(l,{items:a,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}}}),U=p({__name:"DemoSelectChips",setup(S){const a=["foo","bar","fizz","buzz"],i=f(["foo","bar","fizz","buzz"]);return(m,l)=>{const c=b;return d(),u(c,{modelValue:_(i),"onUpdate:modelValue":l[0]||(l[0]=n=>v(i)?i.value=n:null),items:a,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}}}),M=p({__name:"DemoSelectIcons",setup(S){const a=f("Florida"),i=f("Texas"),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(l,c)=>{const n=b;return d(),u(A,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(n,{modelValue:_(a),"onUpdate:modelValue":c[0]||(c[0]=h=>v(a)?a.value=h:null),items:m,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(n,{modelValue:_(i),"onUpdate:modelValue":c[1]||(c[1]=h=>v(i)?i.value=h:null),items:m,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}}}),R=p({__name:"DemoSelectCustomTextAndValue",setup(S){const a=f({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(m,l)=>{const c=b;return d(),u(c,{modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=n=>v(a)?a.value=n:null),hint:`${_(a).state}, ${_(a).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}}}),H=p({__name:"DemoSelectVariant",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(d(),u(A,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1}))}}),L=p({__name:"DemoSelectDensity",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=b;return d(),u(l,{items:a,label:"Density",density:"compact",placeholder:"Select Item"})}}}),P=p({__name:"DemoSelectBasic",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>{const l=b;return d(),u(l,{items:a,label:"Standard",placeholder:"Select Item"})}}}),Y={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`},E={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`},W={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},J={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},K={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},Q={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},X={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},ee=o("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),te=o("p",null,[s("You can use "),o("code",null,"density"),s(" prop to reduce the field height and lower max height of list items.")],-1),ae=o("p",null,[s(" Use "),o("code",null,"filled"),s(", "),o("code",null,"outlined"),s(", "),o("code",null,"solo"),s(", "),o("code",null,"underlined"),s(" and "),o("code",null,"plain"),s(" options of "),o("code",null,"variant"),s(" prop to change appearance of select. ")],-1),le=o("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),oe=o("p",null,[s("Use a custom "),o("code",null,"prepend"),s(" or "),o("code",null,"appended"),s(" icon.")],-1),se=o("p",null,[s("Use "),o("code",null,"chips"),s(" prop to make selected option as chip.")],-1),ie=o("p",null,[s("Custom props can be passed directly to "),o("code",null,"v-menu"),s(" using "),o("code",null,"menuProps"),s(" prop.")],-1),re=o("p",null,[s("Use "),o("code",null,"multiple"),s(" prop to select multiple option.")],-1),ne=o("p",null,[s("The "),o("code",null,"selection"),s(" slot can be used to customize the way selected values are shown in the input.")],-1),qe=p({__name:"select",setup(S){return(a,i)=>{const m=P,l=$,c=L,n=H,h=R,C=M,z=U,g=T,F=j,D=N;return d(),u(A,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Basic",code:Y},{default:t(()=>[ee,e(m)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Density",code:q},{default:t(()=>[te,e(c)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{title:"Variant",code:Z},{default:t(()=>[ae,e(n)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Custom text and value",code:W},{default:t(()=>[le,e(h)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Icons",code:J},{default:t(()=>[oe,e(C)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Chips",code:E},{default:t(()=>[se,e(z)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Menu Props",code:K},{default:t(()=>[ie,e(g)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Multiple",code:Q},{default:t(()=>[re,e(F)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Selection slot",code:X},{default:t(()=>[ne,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{qe as default};
