<template>
  <div>
   <button :class="[type,{disabled: disabled}]" @click="$emit('bClick')">{{ context }}</button>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    emits: ['bClick'],
    props: {
      click: {
        type: Function,
      },
      context: {
        type: String,
        default: 'button',
        required: true
      },
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return ['primary', 'default', 'success', 'danger'].includes(value)
        }
        
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    padding: 10px 15px;
color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.primary {
      background-color: #007bff;
          
    }
    &.default {
      background-color: #ddd;
      color: #333;
    }
    &.success  {
     background-color: aquamarine;
          
    }
     &.danger {
      background-color: #dc3545;
    }
    &.disabled {
      background-color: #ccc;
      cursor: not-allowed;
      color: #333;
    }
  }
</style>