<!-- <script setup> -->
<script>
//import HelloWorld from './components/HelloWorld.vue';
import ZxComponent from './components/zx-component.vue';  
import ClassList from './components/ClassList.vue';
import ClassListTable from './components/class-list-table.vue';
import HdButton from './components/hd-button.vue';
import HdInput from './components/hd-input.vue';
import ModifyName from './components/modify-name.vue';
import Card from './components/card.vue';
import Weixin from './components/wei-xin.vue';
import Zhifu from './components/zhi-fu.vue';
import { computed } from 'vue';
import XTextarea from './components/x-textarea.vue';

import ParaCount from './components/para-count.vue';
export default {
  name: 'App',
  components: {
    ZxComponent,
    ClassList,
    ClassListTable,
    HdButton,
    HdInput,
    ModifyName,
    Card,
    Weixin,
    Zhifu,

    ParaCount
  },
  //穿透
  provide(){
    return {
      provalue: computed(() => this.sss)
    }
  }, 
  data() {
    return {
      message: 'Hello VueAAAAAAAAAAAA!',
      btnText: '开始',
      btnType: 'unactive',
      inputTitle: '123123',

      modifyLesson: {
        name: 'lesson-name',
        price: 100
      },
      components:[
        {title: 'weixin', name: 'weixin'},
        {title: 'zhifu', name: 'zhifu'}
      ],
      currentCop: 'weixin',
      sss: '123',
      textareaValue: 'textareaValue'
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    // dom没有，数据有
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },

  methods: {
    show11() {
      alert('zi zu jian')
    }
    ,
    changeInput(e) {
      this.inputTitle = e
    }
  },
  watch: {

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
    <HdButton context="disabled"  :disabled="true"/>
    <HdButton context="start" type="success" @bClick="show11"/>
    <HdButton context="start" type="danger" @bClick="show11"/>
    <!-- <HdInput :value="inputTitle" @update:value="changeInput"></HdInput>-->


      <HdInput v-model="inputTitle" ></HdInput>
          <hr>
        {{inputTitle}} 
    <hr/>
        <modify-name v-model:name="modifyLesson.name" v-model:price="modifyLesson.price"/>
  
  
    <!-- slot -->
    <Card>
      <HdButton context="start" type="danger" @bClick="show11"/>
      <template #header><div style="background-color:red">header</div></template>
      <template #main ><div style="background-color:blue">main</div></template>
      <template #footer><div style="background-color:green"> footer</div></template>
    </Card>
      </div>
      
      <hr/>
      <div class="activity-cop-wrap">
        <div v-for="item of components" :key="item.name" class="activity-cop" >
          <div @click="currentCop=item.name">{{ item.name }}</div>
          
        </div>
       
        
      </div>
       <div>
          <component :is="currentCop"></component>  
        </div>
        <XInput label="姓名" v-model="inputTitle"></XInput>
        {{inputTitle}} 

       

         <hr/>
        <input v-model="sss"/>{{ sss }}
        <!-- <XInput label="provideValue" v-model="provalue"></XInput> -->

        <XTextarea label="textarea" v-model="textareaValue" :rows="10"></XTextarea>

        <hr
        />  
        <hr
        />  
       
<hr
        />  
        <hr
        />
        <ParaCount/> 
</template>

<style lang="scss" scoped >
.read-the-docs {
  color: red;
}
.activity-cop-wrap{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  & .activity-cop{
    width: 300px;
    height: 30px;
    border: 1px solid #ddd;
  }
}
</style>
