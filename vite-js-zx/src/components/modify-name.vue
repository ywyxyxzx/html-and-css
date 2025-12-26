<template>
  
  <input v-if="inputShow" :value="name" @blur="inputShow=false" @keyup.enter="inputShow=false" @input="$emit('update:name', $event.target.value)"></input>
  <h3 v-else @dblclick="inputShow=true">{{ name }}</h3>
   <input v-if="inputPriceShow" :value="price" @blur="inputPriceShow=false" @keyup.enter="inputPriceShow=false" @input="$emit('update:price', $event.target.value)"></input>
  <h3 v-else @dblclick="inputPriceShow=true">{{ price }}</h3>
</template>


<script>
export default {
  props: {
   modifyLesson: {
      type: Object,
    },
    price: {
      type: Number,
    }   ,
   name: {
      type: String,
    },
  },
  emits: ['update:name', ''],
  data() {
    return {
      inputShow: false,
      inputPriceShow: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>  </style>