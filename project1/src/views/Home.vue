<template>
    <div id="home">
        <router-view></router-view>
        <!-- <h2>訂單管理</h2> -->
        <router-link to="/placeOrder" class="link">
            <el-button icon="el-icon-plus" circle></el-button>
        </router-link>
        <router-link to="/deal">
        <el-button>交易資料</el-button>
        </router-link>

        <router-link to="/Orders">
        <el-button>訂單資料</el-button>
        </router-link>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="訂單1" name="1">
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
            <el-collapse-item title="訂單2" name="2">
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
            <el-collapse-item title="訂單3" name="3">
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
            <el-collapse-item title="訂單4" name="4">
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

.link{
    position: fixed;
    top: 60%;
    left: 48%;
}

.el-collapse{
    position: fixed;
    top: 30%;
    left: 25%;
    width: 50%;
}
</style>
