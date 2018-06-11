<template>
  <div>
    <div class="title">我是组件八</div>
    <!--自定义组件的 v-model-->
    <component1 v-model="dsgchecked"></component1>
    <!--将原生事件绑定到组件-->
    <component2 @click.native="handleClick"></component2>
    <!--将原生事件绑定到组件的特定元素上-->
    <component3 @click="handleClick2"></component3>
  </div>
</template>

<script>

import vue from 'vue';
vue.component('component1',{
  data () {
    return {
    }
  },
  props: ['checked'],
  model: {
    prop: 'checked',
    event: 'change'
  },
  template: `<div>
                <div>我是内部组件1</div>
                <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
              </div>`
});

vue.component('component2',{
  data () {
    return {
    }
  },
  inheritAttrs: false,
  props: [],
  template: `<div>
                <div>我是内部组件2上</div>
                <div>我是内部组件2下</div>
              </div>`
});

vue.component('component3',{
  data () {
    return {
    }
  },
  inheritAttrs: false,
  props: [],
  mounted () {
    console.log('组件3挂载完成！')
    console.log(this.$listeners);
  },
  template: `<div>
                <div v-on="$listeners">我是内部组件3上</div>
                <div>我是内部组件3下</div>
              </div>`
});

export default {
  name: 'Component8',
  components: {
  },
  data () {
    return {
      dsgchecked:true
    }
  },
  methods: {
    handleClick () {
      console.log('dsg')
    },
    handleClick2 () {
      console.log('dsg2')
    }
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

