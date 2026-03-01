import { defineStore } from 'pinia';
import { ref } from 'vue'
export const signUpModalStore = defineStore('signModal', () => {
    const loginModalShow = ref(false)
    const signInModalShow = ref(false)

    const switchRegVisible = () => (signInModalShow.value = !signInModalShow.value);

    // 修改登录弹窗状态
    const switchLoginVisible = () => (loginModalShow.value = !loginModalShow.value);

    return {
        loginModalShow,
        signInModalShow,
        switchRegVisible,
        switchLoginVisible
    }
})