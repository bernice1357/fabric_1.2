<template>
  <div id="app">
    <div class="banner">
      <img class="logo" src="./assets/fab.png"/>
      <!-- <h2>{{page_name}}</h2> -->
      <h3>Hello, {{ user_name }}</h3>
      <br />
      <div class="account">
        <el-dropdown>
          <el-button type="primary">
            帳號管理<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>訂單管理</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-link to="/" class="link"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      user_name: "User",
      page_name: "yyyy"
    }
    
  }
}
</script>

<style>

h3 {
  position: fixed;
  top: 5%;
  left: 78%;
}

</style>
