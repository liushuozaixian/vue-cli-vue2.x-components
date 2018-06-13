<template>
  <div>
    <div class="title">我是组件十的子组件1{{initData}}</div>
    <button @click="handleClick">点击我修改上面的initData(原始值为祖先)</button>

  </div>
</template>

<script>

import vue from 'vue';

export default {
  name: 'Component10-1',
  components: {},
  data () {
    return {}
  },
  inject: ['initData'],
  methods: {
    handleClick () {
      this.initData.zuxian = '新的祖先';
    }
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
