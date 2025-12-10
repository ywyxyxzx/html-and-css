<!-- <script setup> -->
<script>
//import HelloWorld from './components/HelloWorld.vue';
import ZxComponent from './components/zx-component.vue';  
import ClassList from './components/ClassList.vue';
import ClassListTable from './components/class-list-table.vue';
import HdButton from './components/hd-button.vue';
export default {
  name: 'App',
  components: {
    ZxComponent,
    ClassList,
    ClassListTable,
    HdButton
  },
  data() {
    return {
      message: 'Hello VueAAAAAAAAAAAA!',
      btnText: '开始',
      btnType: 'unactive'
    }
  },
  methods: {
    show11() {
      alert('zi zu jian')
    }
  }
}
</script>

<template>
  <div class="hd">131</div>
  <div>
    <div>{{message}}</div>
    <ZxComponent/>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <ClassList/>
    <ClassListTable/>
    <HdButton context="disabled"  disabled="true"/>
    <HdButton context="start" type="success" @click="show11"/>
    <HdButton context="start" type="danger" />
  </div>
 
</template>

<style lang="scss" scoped >
.read-the-docs {
  color: red;
}
</style>
