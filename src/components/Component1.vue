<template>
  <div class="hello">
    <div v-show="isShow" @click="handleClick">哈哈哈哈哈哈{{title1}}</div>
    <button-counter :title="title1" :content="content" @showOrHidde="handleShowOrHidde(handleClick())"></button-counter>
    <button-counter :title="title2" @showOrHidde="title1 += $event"></button-counter>
  </div>
</template>

<script>
import Vue from 'vue';
// import dsgCounter from './dsgCounter.vue'
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    };
  },
  props: ['title', 'content'],
  template: `<div>
  <div v-if="title">我的title是 {{title}}</div>
  <div v-html="content">最初内容</div>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
  <div @click="$emit('showOrHidde', 1)">点击我控制显示与隐藏</div>
  </div>`,
  methods: {
//    handleClick () {
//      this.$emit('showOrHidde')
//    }
  }
});
export default {
  name: 'Component1',
  components: {
    // dsgCounter: button-counter
  },
  data () {
    return {
      content: '<button>我是按钮</button>' ,
      isShow: true,
      title1: '六一快乐',
      title2: '儿童节'
    }
  },
  methods: {
    handleShowOrHidde (aa) {
      this.isShow = !this.isShow
      console.log(aa)
    },
    handleClick() {
      console.log('有人点击了我')
      this.title2 += 'dsg';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
