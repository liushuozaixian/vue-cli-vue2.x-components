import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dsgCounter from '@/components/dsgCounter'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'

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
    }
  ]
})
