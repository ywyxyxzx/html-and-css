<script setup>
    import { ref } from "vue";
import userTodo from "../composables/userTodo.js";
    let newTitle = ref('');
    // const props = defineProps({
    //     todo: {type: Object, required: true}
    //     })
    const { todos, getListHandle, addItemHandle} = userTodo()
    const add = async () => {
        await addItemHandle({title: newTitle.value}) ;
        await getListHandle();
        //emits('delItem', id)
    }
    // const emits = defineEmits(['del']);

    
</script>

<template>
  <div class="item-c"> 
    <span></span>
    <input v-model="newTitle">
    <button @click="add()">add</button>
  </div>
</template>

<style scoped lang="scss">
    .item-c{
        background-color: aqua;
        display: flex;
        flex-direction: row;
        align-items :center;
        width:300px;
        & > span{
            display: flex;
            width: 20px;

        }
        & > input{
            height:30px;
            box-sizing: border-box;
            flex: 1;
        }
        & > button{

            padding:5px;
            height:30px;
        }


    }
</style>