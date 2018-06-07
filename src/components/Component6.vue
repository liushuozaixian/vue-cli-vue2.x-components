<template>
  <div>
    <div class="title">我是组件六</div>
    <!--通过全局注册的方式注册的组件-->
    <!--全局注册时在所有子组件中也可以随意调用所有组件，也就是说全局注册的组件在各自内部也都可以相互使用。-->
    <golbal-component></golbal-component>
    <!--局部注册的组件1-->
    <!--注意局部注册的组件在其子组件中不可用。-->
    <!--例如，如果你希望 ComponentA 在 ComponentB 中可用，
    则你需要在ComponentB中通过components属性将ComponentA注册到子组件ComponentB的内部！-->
    <partComponentA></partComponentA>
    <partComponentB></partComponentB>
    <!--局部注册的组件2-->
    <partComponentC></partComponentC>
    <!--基础组件的全局注册（在main.js中注册的）-->
    <!--记住全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生。-->
    <BaseGlobal1></BaseGlobal1>
    <base-global2></base-global2>
  </div>
</template>

<script>
//全局注册
import vue from 'vue';
vue.component('golbal-component',{
  data () {
    return {
    }
  },
  props: [],
  template: `<div>我是通过全局注册的方式注册的组件</div>`
});

//局部注册1
var partComponentA = {
  data () {
    return {
    }
  },
  props: [],
  template: `<div>我是通过局部注册的方式注册的组件A</div>`
}
var partComponentB = {
  data () {
    return {
    }
  },
  components: {
    partComponentA,
  },
  props: [],
  template: `<div>我是通过局部注册的方式注册的组件B <partComponentA></partComponentA></div>`
}

//局部注册2
import partComponentC from './dsgCounter.vue'

//基础组件的自动化全局注册

export default {
  name: 'Component6',
  components: {
    partComponentA,
    partComponentB,
    partComponentC
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-weight: bold;
  color: green;
}
</style>
