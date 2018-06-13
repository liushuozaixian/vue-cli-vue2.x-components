<template>
  <div>
    <div class="title">我是组件十一</div>
    <div v-on:click="handleClick">点击我输出</div>
  </div>
</template>

<script>

import vue from 'vue';
vue.component('self-component', {
  data () {
    return {}
  },
  props: [],
  template: ``
});

export default {
  name: 'Component11',
  components: {},
  data () {
    return {}
  },
  mounted () {
    var timer = setInterval(function () {
      console.log('111111');
    }, 1000);
   this.$on('hook:beforeDestroy', function () {
     console.log('$on调用了')
   })

  },
  methods: {
    handleClick () {
      console.log('dsg');
      this.$destroy()
    }
  },
  beforeDestroy () {
    console.log('销毁')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-weight: bold;
  color: green;
}
</style>
