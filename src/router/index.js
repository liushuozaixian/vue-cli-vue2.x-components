import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dsgCounter from '@/components/dsgCounter'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'
import Component3 from '@/components/Component3'
import Component4 from '@/components/Component4'
import Component5 from '@/components/Component5'

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
    }
  ]
})
