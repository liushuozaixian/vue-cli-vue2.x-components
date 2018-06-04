<template>
  <div>
    <!--我并没有实验出来有不能用的情况！！！-->
    <div class="title">我是组件五</div>
    <table>
      <el-row>我是element-ui的行</el-row>
      <aaa></aaa>
      <tr>我是真正的行</tr>
      <table-row></table-row>
    </table>
    <el-row>我是element-ui的行</el-row>
  </div>
</template>

<script>
import { Button } from 'element-ui';
import aaa from './dsgCounter.vue'
import vue from 'vue';
vue.component('table-row',{
  data () {
    return {
    }
  },
  props: [],
  template: `<div>我是div行tr</div>`
});

export default {
  name: 'Component5',
  components: {
    aaa
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
