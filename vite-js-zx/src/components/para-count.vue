<template>                                 
    <Count :initNum="3" @change="changeHandle" ref="countComponent" style="color: red">
        <p>计数器</p>
    </Count>
    {{ changeHandle() }} 

</template>
<script>
    import Count  from '../components/count.vue';
    import {ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount} from 'vue';
export default {

     name: 'ParaCount',
    components: {                                       

    Count

  },
  setup() {
   
    const countComponent = ref();
 //    const count1 = ref(1);
    const changeHandle = (num) => {

      //count1.value = num;
      console.log('changeHandle', num)
      return countComponent.value?.num
    }

    onMounted(() => {
      console.log(1111111111111, countComponent)
      console.log(countComponent.value.num)
    })


    return { changeHandle, countComponent };
  },

}

</script>
<style scope lang="scss"></style>