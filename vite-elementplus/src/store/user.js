import { defineStore } from 'pinia';
import { ref } from 'vue'
import { ElMessage } from "element-plus";
export const useUserStore = defineStore('user', () => {
  // 当前登录用户名称
  const currentUser = ref("");
  const userList = ref([])
  // 是否登录
  const isLogin = ref(
    localStorage.getItem("xdclass_user_is_login") === "true" ? true : false
  );
  // 注册的用户信息
  const users = ref({
    account: "",
    password: "",
  });

  // 登录
  const login = (account, password) => {
    const foundUser = users.value.find(
      (item) => item.account === account && item.password === password
    );
    if (foundUser) {
      localStorage.setItem("xdclass_user_is_login", "true");
      localStorage.setItem("xdclass_user_current_user", foundUser.account);
      ElMessage({
        message: "登录成功!",
        type: "success",
      });
      isLogin.value = true;
      currentUser.value = foundUser.account;
    } else {
      ElMessage({
        message: "账号或者密码错误!",
        type: "success",
      });
    }
  };

  // 退出登录
  const logout = () => {
    localStorage.removeItem("xdclass_user_is_login");
    localStorage.removeItem("xdclass_user_current_user");
    isLogin.value = false;
    currentUser.value = "";
  };

  // 注册更新用户信息
  const register = (account, password) => {
    users.value = { account, password };
        currentUser.value  = users.value;
    // 数据缓存
    let userInfo= JSON.stringify(users.value);
    localStorage.setItem("xdclass_vue_current_user", userInfo);
    localStorage.setItem("xdclass_user_is_login", "true");

    isLogin.value = true;
  };

  return {

    currentUser,
    users,
    isLogin,
    login,
    logout,
    register
  }
},{
  persist:{
    enabled: true // store 持久化
  }
})