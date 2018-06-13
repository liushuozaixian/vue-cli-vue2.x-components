<template>
  <div>
    <div ref="dsg" class="title">我是组件十</div>
    <!--$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。
    你应该避免在模板或计算属性中访问 $refs。-->
    <div v-for="(item, index) in [1,2,3,4,5]">
      <!--当 ref 和 v-for 一起使用的时候，你得到的引用将会是一个包含了对应数据源的这些子组件的数组。-->
      <div :ref="'dsg' + index"></div>
    </div>
    <!--依赖注入-->
    <!--避免直接改变注入的值，因为每当提供的组件重新呈现时，修改都会被覆盖。-->
    <!--当数据为单纯的值（非对象非数组类）的时候直接在子组件中修改父组件provide的值的时候是会报错的，
    虽然页面上子组件是将此值修改过来了，但是父组件中的值是不变的，当如果穿的数据是对象回事数组的时候，
    我们在修改对象中的属性的值的时候是不会报错的而且父组件中的数据也是会相应的修改（相当于是响应式的！）-->
    <!--官方文档上说此法提供的数据是非相应式的，当是我们可以利用对象或是数组让他们变成相应式的！-->
    <div>祖先组件中的数据是{{initData}}</div>
    <Component10Child1></Component10Child1>

  </div>
</template>

<script>

import vue from 'vue';
import Component10Child1 from './Component10-child1.vue'

export default {
  name: 'Component10',
  components: {
    Component10Child1
  },
  data () {
    return {
      initData: {zuxian: '祖先'}
    }
  },
  mounted () {
    console.log(this.$refs.dsg);
    console.log(this.$refs.dsg0[0])
  },
  provide: function () {
    return {
      initData: this.initData
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-weight: bold;
  color: green;
}
</style>
