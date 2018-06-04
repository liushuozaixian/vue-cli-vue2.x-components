<template>
  <div>
    <div class="title">我是组件四</div>
    <div class="tab">
      <div @click="handleChange(0)">点击切换到组件一</div>
      <div @click="handleChange(1)">切换到组件二</div>
      <div @click="handleChange(2)">切换到组件三</div>
    </div>
    <div>
      <!--currentTabComponent等于相应的组件标签即可切换到相应组件-->
      <component :is="currentTabComponent"></component>
    </div>
    <!--<self-component1></self-component1>-->
    <!--<self-component2></self-component2>-->
    <!--<self-component3></self-component3>-->
  </div>
</template>

<script>

import vue from 'vue';
vue.component('self-component1',{
  name: 'self-component1',
  data () {
    return {
    }
  },
  props: [],
  template: `<div>我是子组件1</div>`
});
vue.component('self-component2',{
  name: 'self-component2',
  data () {
    return {
    }
  },
  props: [],
  template: `<div>我是子组件2</div>`
});
vue.component('self-component3',{
  name: 'self-component311',
  data () {
    return {
    }
  },
  props: [],
  template: `<div>我是子组件3</div>`
});

export default {
  name: 'Component4',
  components: {
  },
  data () {
    return {
      currentTabComponent: 'self-component1'
    }
  },
  methods: {
    handleChange (num) {
      console.log(num);
      if (num == 0) {
        this.currentTabComponent = 'self-component1'
      } else if (num == 1) {
        this.currentTabComponent = 'self-component2'
      } else {
        this.currentTabComponent = 'self-component3'
      }
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
.tab {
  width: 450vw;
  display: flex;
  justify-content: flex-start;
}
.tab div{
  margin-right: 3vw;
}
</style>
