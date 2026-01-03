<template>
  <p>123123444</p>
  <button @click="orderby==asc">asc</button>
   <button @click="orderby==desc">desc</button>
  <div class="items">
    <div class="item" v-for="todo of todos" :key="todo.id">
      <Item :todo="todo"  />
    </div>
    <div>
      <AddItem />
    </div>
  </div>


</template>


<script setup>

import Item from './item.vue';
import AddItem from './add-item.vue';
import userTodo from "../composables/userTodo.js";
import { ref, onMounted } from 'vue';

const { todos, getListHandle, delItemHandle } = userTodo()

await getListHandle();





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