<template>
  <div>
    <div class="title">我是组件三</div>
    <alert-box>我是练习的插槽</alert-box>
  </div>
</template>

<script>

import vue from 'vue';
vue.component('alert-box',{
  data () {
    return {
    }
  },
  props: [],
  template:
    `<div>
      <strong>Error:</strong>
      <slot></slot>
    </div>`
});

export default {
  name: 'Component3',
  components: {
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
