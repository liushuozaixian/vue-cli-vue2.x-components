import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dsgCounter from '@/components/dsgCounter'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'
import Component3 from '@/components/Component3'
import Component4 from '@/components/Component4'
import Component5 from '@/components/Component5'
import Component6 from '@/components/Component6'
import Component7 from '@/components/Component7'
import Component8 from '@/components/Component8'
const AsyncComponent9 = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('@/components/AsyncComponent9.vue'),
  // 异步组件加载时使用的组件
  loading: HelloWorld,
  // 加载失败时使用的组件
  error: Component8,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dsgCounter',
      name: 'dsgCounter',
      component: dsgCounter
    },
    {
      path: '/Component1',
      name: 'Component1',
      component: Component1
    },
    {
      path: '/Component2',
      name: 'Component2',
      component: Component2
    },
    {
      path: '/Component3',
      name: 'Component3',
      component: Component3
    },
    {
      path: '/Component4',
      name: 'Component4',
      component: Component4
    },
    {
      path: '/Component5',
      name: 'Component5',
      component: Component5
    },
    {
      path: '/Component6',
      name: 'Component6',
      component: Component6
    },
    {
      path: '/Component7',
      name: 'Component7',
      component: Component7
    },
    {
      path: '/Component8',
      name: 'Component8',
      component: Component8
    },
    {
      path: '/AsyncComponent9',
      name: 'AsyncComponent9',
      component: AsyncComponent9
    }
  ]
})
