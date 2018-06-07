<template>
  <div class="hello">
    <ul>
      <li @click="handleCounter">点击加一</li>
      <li @click="handleComponent1">父子组件基本信息传递，父传子props，子传父用click加$emit('')</li>
      <li @click="handleComponent2">自定义组件中的input实现与外界数据双向绑定！</li>
      <li @click="handleComponent3">插槽的简单案例</li>
      <li @click="handleComponent4">动态组件的简单案例</li>
      <li @click="handleComponent5">有些元素只能出现在特定元素内部，有些元素只能包含特定元素</li>
      <li @click="handleComponent6">组件的注册包含全局注册、局部注册和模块系统基础组件的自动化全局注册</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navy',
  data () {
    return {
    }
  },
  methods: {
    handleCounter () {
      this.$router.push('/dsgCounter')
    },
    handleComponent1 () {
      this.$router.push('/Component1')
    },
    handleComponent2 () {
      this.$router.push('/Component2')
    },
    handleComponent3 () {
      this.$router.push('/Component3')
    },
    handleComponent4 () {
     this.$router.push('/Component4')
    },
    handleComponent5 () {
      this.$router.push('/Component5')
    },
    handleComponent6 () {
      this.$router.push('/Component6')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
