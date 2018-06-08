<template>
  <div>
    <div class="title">我是组件七</div>
    <!--Prop 的大小写 (camelCase vs kebab-case)-->
    <!--HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。
    这意味着当你使用 DOM 中的模板时，
    camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：-->
    <!--重申一次，如果你使用字符串模板，那么这个限制就不存在了。-->

    <!--传入一个对象的所有属性-->
    <!--
    如果你想要将一个对象的所有属性都作为 prop 传入，
    你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。例如，对于一个给定的对象 post：
      post: {
        id: 1,
        title: 'My Journey with Vue'
      }
    下面的模板：
      <blog-post v-bind="post"></blog-post>
    等价于：
      <blog-post
        v-bind:id="post.id"
        v-bind:title="post.title"
      ></blog-post>
    -->

    <!--当传入的只是一个数字的时候，在子组件中对数字进行操作的时候是不会影响到父组件对应数字的大小的，
    但是当传入的时候一个对象的时候在子组件对对象直接进行操作的时候是会影响到父组件的，当次对象改变时候
    父组件中对应的状态也是会相应改变的！-->
    <div @click="handleClick">点击我加1--{{counter.num}}</div>
    <component7-1 :counter-inner = 'counter'></component7-1>
    <!--prop验证！！-->
    <component7-2 :prop1="123" :prop2="1233333" :prop3="12" :prop4="12322" :prop6="'warning'"></component7-2>
    <!--非prop的特性(属性)-->
    <!--一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性(即在组件内部并没有注册props[])。-->
    <!--因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。
    这也是为什么组件可以接受任意的特性，而这些特性会被添加到这个组件的根元素上。-->
    <!--替换/合并已有的特性-->
    <!--对于绝大多数特性来说，从外部提供给组件的值会替换掉组件内部设置好的值。
    庆幸的是，class 和 style 特性会稍微智能一些，即两边的值会被合并起来-->
    <component7-3 style="background: bisque" class="dsg" notprop="1234" notprop2="1234"></component7-3>
    <!--禁用特性继承-->
    <component7-4 class="title" type="dsg" style="background: palegreen; height: 200px"></component7-4>

  </div>
</template>

<script>

import vue from 'vue';
vue.component('component7-1',{
  data () {
    return {
    }
  },
  props: ['counterInner'],
  //传入的时候是counter-inner 在内部用的时候必须是用驼峰命名法来接收，不然不管用！
  template: `<div @click="handleInnerClick">点击我控制内部的counter-inner值为:{{counterInner}}</div>`,
  methods: {
    handleInnerClick () {
      this.counterInner.num = this.counterInner.num + 5
    }
  }
});

vue.component('component7-2',{
  data () {
    return {
    }
  },
  props: {
    prop1: Number,
    prop2: [String, Number],
    prop3: {
      type: Number,
      required: true
    },
    prop4: {
      type: Number,
      default: 222
    },
    prop5: {
      type: Object,
      default: function () {
        return {num: 22222}
      }
    },
    prop6: {
      //注意那些 prop 会在一个组件实例创建之前进行验证，
      // 所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
      validator: function (value) {
        // 返回return后的内容为真时候的value值
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
        // return value
      }
    }
  },
  //传入的时候是counter-inner 在内部用的时候必须是用驼峰命名法来接收，不然不管用！
  template: `<div>
              <div>我是内部组件7-2的prop1值为:{{prop1}}</div>
              <div>我是内部组件7-2的prop2值为:{{prop2}}</div>
              <div>我是内部组件7-2的prop3值为:{{prop3}}</div>
              <div>我是内部组件7-2的prop4值为:{{prop4}}</div>
              <div>我是内部组件7-2的prop5值为:{{prop5}}</div>
              <div>我是内部组件7-2的prop6值为:{{prop6}}</div>
              </div>
              `,
  methods: {
  }
});

vue.component('component7-3',{
  data () {
    return {
    }
  },
  props: [],
  //传入的时候是counter-inner 在内部用的时候必须是用驼峰命名法来接收，不然不管用！
  template: `<div style="background: red; color: yellow" class="dsg2" notprop2="1234555">我是内部组件7-3的非prop的特性(属性)
                <div notprop2="1234555">我是innerDIV</div>
              </div>`,
  methods: {
  }
});

vue.component('component7-4',{
//  只可以控制自定义的非prop特性
//  像style和class照样会继承到根元素上去！！！！！！
  inheritAttrs: false,
  data () {
    return {
    }
  },
  props: [],
  //传入的时候是counter-inner 在内部用的时候必须是用驼峰命名法来接收，不然不管用！
  template: `<div>我是内部组件7-4的非prop的特性(属性)的禁用特性继承
                <div  v-bind="$attrs">我是innerDIV1</div>
                <div>我是innerDIV2</div>
              </div>`,
  methods: {
  }
});

export default {
  name: 'Component7',
  components: {
  },
  data () {
    return {
      counter: {num: 0}
    }
  },
  methods: {
    handleClick () {
      this.counter.num ++
    }
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
