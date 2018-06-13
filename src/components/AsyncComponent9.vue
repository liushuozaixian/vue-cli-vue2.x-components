<template>
  <div>
    <div class="title">我是异步组件9</div>

  </div>
</template>

<script>

import vue from 'vue';
vue.component('self-component',{
  data () {
    return {
    }
  },
  props: [],
  template: ``
});

export default {
  name: 'AsyncComponent9',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    var j
    for (var i = 0; i < 100000; i++ ){
      j ++;
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

