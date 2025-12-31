<template>
 name: {{ user }}
 <button @click="updateUser('4234')">change name</button>
  <div>
    <component :is="slotsDefaults[0]"></component>
    <button @click="sub">-</button>
    <span :style="attrs.style">{{num}}</span>
    <button @click="add">+</button>

  </div>
</template>

<script>
import { ref, computed,watch, watchEffect, defineExpose, inject } from 'vue';
export default  {
  name: 'Count',
  props: {
    initNum: {type: Number}
  },
   // inheritAttrs: false,
    setup(props, context){
      const user = inject('user', '131231');
      const updateUser = inject('updateUser')
      console.log(1312313, props, context)
      let {emit, expose, attrs, slots} = context;

      let slotsDefaults =slots.default();
  console.log(44234, slotsDefaults)

      let num = ref(props.initNum);
      let sum = computed(() => {

        return num.value + 100;

      })
      let add = () => {
        
          num.value++;
          emit('change', num.value)
      }
      let sub = () => {
        num.value--;
         emit('change', num.value)
      }
      watch(num, (newValue, oldValue) => {
       // console.log('num变化了', newValue, oldValue)
        // if(newValue<0) 
        //   num.value = 0;
      })
       watchEffect(()=>{
        console.log('num变化了', num.value)
        if(num.value<0) {
           num.value = 0;
           emit('change', num.value)
        }
      })

      expose({num})
      return {num,add, sub, attrs, slotsDefaults,  sum ,user,updateUser };
    },
  
      
   

}





</script>







<style lang="scss" scoped>







</style>