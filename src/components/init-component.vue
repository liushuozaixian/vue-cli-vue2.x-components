<template>
  <div>
    <div class="title">我是组件几</div>

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
  name: 'Component几',
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
