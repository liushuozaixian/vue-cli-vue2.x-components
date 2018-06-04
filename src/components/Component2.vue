<template>
 <div>
   <div class="title">我是组件二</div>
   <!--
    input框中v-model实现的原理！！！
    1. input中的value值绑定到data中的某个数据!
    2. 当input中的value值在输入改变的时候改变data中的相应绑定的值!
    我们利用这两点就可以实现自定义元素（组件）中的input与外界数据实现双向绑定
   -->
   <input type="text" :value="mes"  v-on:input="mes=$event.target.value">
   <div>{{mes}}</div>
   <!--自定义组件中input的双向绑定-->
   {{mes2}}
   <!--此处的$event就是指的是在自定义组件（元素）内部触发input自定义事件时所传递的参数的值-->
   <self-input :value="mes2" @input="mes2 = $event"></self-input>
   <!--如果上述形式写的是这样的话就可以简写为v-model-->
   <self-input v-model="mes2"></self-input>
   <!--当给div这样的元素加上value属性时没有效果-->
   <div :value="mes">?</div>
 </div>
</template>

<script>

import vue from 'vue';
vue.component('self-input',{
  data () {
    return {

    }
  },
  props: ['value'],
  template:
    `<div>
      我是内部的input框
      <input :value="value" @input="$emit('input', $event.target.value)" type="text">
    </div>`
});

export default {
  name: 'Component2',
  components: {
  },
  data () {
    return {
      mes: '我是input中的内容！',
      mes2: '我是外部数据'
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
