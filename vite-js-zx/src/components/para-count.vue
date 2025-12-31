<template>                                 
    <Count :initNum="3" @change="changeHandle" ref="countComponent" style="color: red">
        <p>计数器</p>
    </Count>
    {{ changeHandle() }} 
    <p v-for="l in arr1">{{l}}</p>
    <button @click="changeList()">changeList</button>
    
    <p>name: {{ name }} </p>
     <p>age:{{ age }}</p>
    <button @click="changeVobj()">changeVobj</button>

   
</template>
<script>
    import Count  from '../components/count.vue';
    import {ref, reactive, toRefs, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, provide, toRef} from 'vue';
export default {

     name: 'ParaCount',
    components: {                                       

    Count

  },
  setup() {
    let user = ref('12321');
    let arr1 = reactive([1,2,3]);
    let changeList = () => {
      arr1.push(arr1[arr1.length-1]+1)
    }
    let vobj = reactive({name: '123', age: 11});
    let changeVobj = () => {
      vobj.name = '123456'


      vobj.age++;

    }
    provide('user', user);
    provide('updateUser', (newValue)=> user.value = newValue)

    const countComponent = ref();
 //    const count1 = ref(1);
    const changeHandle = (num) => {

      //count1.value = num;
      console.log('changeHandle', num)
      return countComponent.value?.num
    }
    
    onMounted(async() => {
      console.log(1111111111111, countComponent)
      console.log(countComponent.value.num)

     
    })


    return { changeHandle, countComponent, arr1, changeList, ...toRefs(vobj), changeVobj};
  },

}

</script>
<style scope lang="scss"></style>