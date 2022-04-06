<template>
    <div id="home">
        <router-link to="/placeOrder" class="link">
            <el-button icon="el-icon-plus" circle></el-button>
        </router-link>
        <router-view></router-view>
        <div class="banner">
            <h2>所有訂單</h2>
            <h4 class="greeting">Hello, {{ user_name }}</h4>
            <div class="account">
                <el-dropdown>
                    <el-button type="primary">
                        我的帳號<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>所有訂單</el-dropdown-item>
                        <el-dropdown-item>帳號管理</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>所有訂單</el-breadcrumb-item>
        </el-breadcrumb>
        <el-collapse accordion>
            <h4>尚未完成訂單</h4>
            <el-button type="text">訂單1</el-button>
            <el-button type="text">訂單2</el-button>
            <el-button type="text">訂單3</el-button>
            <h4>已完成訂單</h4>
            <el-collapse-item title="A1" name="1">
                <el-descriptions class="margin-top" :column="3" :size="size" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            用户名
                        </template>
                        kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-mobile-phone"></i>
                            手机号
                        </template>
                        18100000000
                    </el-descriptions-item>
                </el-descriptions>
            </el-collapse-item>
            <el-collapse-item title="A2" name="2">
                <el-descriptions class="margin-top" :column="3" :size="size" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            用户名
                        </template>
                        kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-mobile-phone"></i>
                            手机号
                        </template>
                        18100000000
                    </el-descriptions-item>
                </el-descriptions>
            </el-collapse-item>
            <el-collapse-item title="A3" name="3">
                <el-descriptions class="margin-top" :column="3" :size="size" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            用户名
                        </template>
                        kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-mobile-phone"></i>
                            手机号
                        </template>
                        18100000000
                    </el-descriptions-item>
                </el-descriptions>
            </el-collapse-item>
            <el-collapse-item title="A4" name="4">
                <el-descriptions class="margin-top" :column="3" :size="size" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            用户名
                        </template>
                        kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-mobile-phone"></i>
                            手机号
                        </template>
                        18100000000
                    </el-descriptions-item>
                </el-descriptions>
            </el-collapse-item>
        </el-collapse>
        <div class="search">
            <h3>查詢訂單</h3>
            <el-select v-model="value" placeholder="選擇欄位">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      info: null,
      user_name: "User",
      image: "'/assets/fab.png'",
      activeName: ['1'],
      options: [{
          value: '选项1',
          label: '日期'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2{
    text-align: center;
}

.banner{
    position: fixed;
    top: 0%;
    width: 100%;
    padding-top: 5px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    height: 80px;
}

.greeting{
    position: fixed;
    top: 1.5%;
    left: 82%;
}

.link{
    position: fixed;
    top: 23%;
    left: 5%;
}

.el-collapse{
    position: fixed;
    top: 30%;
    left: 5%;
    width: 40%;
}

.account{
    position: fixed;
    top: 3%;
    left: 90%;
}

.el-breadcrumb{
    position: fixed;
    top: 15%;
    left: 5%;
}

.search{
    /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
    position: fixed;
    top: 20%;
    left: 65%;
}

</style>
