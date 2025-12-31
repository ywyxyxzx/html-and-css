<script setup>
    const props = defineProps({
        todo: {type: Object, required: true}
        })
    const del = async (id) => {

        emits('delItem', id)
    }
    const emits = defineEmits(['del']);

    
</script>

<template>
  <div class="item-c"> 
    <span>{{todo.id}}</span>
    <input :value="todo.title">
    <button @click="del(todo.id)">delete</button>
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