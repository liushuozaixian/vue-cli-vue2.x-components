<template>
  <div class="hello">
    <div @click="handleClick">点击我加1--{{counter}}</div>
  </div>
</template>

<script>
export default {
  name: 'dsgCounter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    handleClick () {
      this.counter++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100vw;
  height: 100vh;
  background: red;
}
</style>
