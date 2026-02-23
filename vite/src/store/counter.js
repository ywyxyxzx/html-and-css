import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
export const useCounterStore = defineStore('counter', () => {
  // 为了完整类型推理，推荐使用箭头函数
  const count = ref(0);
  const name = ref('Eduardo');
  const isAdmin = ref(true);
  const items = ref([]);
  const hasChanged = ref(true);
  const doubleCount = computed(() => {
    return count.value * 2
  })

  const increment = () => {
    count.value++
  }
  const $reset = ()=>{
    count.value = 0;
    name.value = 'Eduardo';
    isAdmin.value = true;
    items.value = [];
    hasChanged.value = true;
  }
  return {
    count,
    name,
    isAdmin,
    items,
    hasChanged,

    doubleCount,

    increment,
    $reset 
  }
})