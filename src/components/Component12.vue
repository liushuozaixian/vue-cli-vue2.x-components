<template>
  <div>
    <div v-if="dsg[0]" class="title">我是组件十二</div>
    <div v-if="dsg[1]" class="title">我是组件十二</div>
    <div v-if="dsg[2]" class="title">我是组件十二</div>
    <div v-if="dsg[3]" class="title">我是组件十二</div>
    <component1 inline-template>
      <button>
        哈哈哈
      </button>
    </component1>
    <div @click="handleClick">点击我</div>
  </div>
</template>

<script>

import vue from 'vue';
vue.component('component1', {
  data () {
    return {}
  },
  props: [],
  template: `<div>我是内部组件一</div>`
});

export default {
  name: 'Component12',
  components: {},
  data () {
    return {
      dsg: []
    }
  },
  methods: {
    handleClick () {
      this.dsg[0] = true
      console.log(this.dsg)
      // 强制更新！！！！
      this.$forceUpdate()
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
