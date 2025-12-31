<template>
  <p>123123444</p>
  <div class="items">
    <div class="item" v-for="todo of todos" :key="todo.id">
      <Item :todo="todo" @delItem="delItem" />
    </div>

  </div>


</template>


<script setup>
import userRequest from '../request/fetch.js';
import { ref, onMounted } from 'vue';
import Item from './item.vue';


const todos = ref([])
const { listRequest, delItemRequest } = userRequest();


const getList = async () => {
  todos.value = await listRequest()
}
getList()


const delItem = async (id) => {
  debugger
   await  delItemRequest(id)
  getList()

}




</script>



<style scoped lang="scss">
div.items {
  display: flex;
  flex-direction: column;

  & .item {
    margin-bottom: 10px;
  }
}
</style>