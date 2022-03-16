<template>
  <div id="app">
    <div class="banner">
      <img class="logo" src="./assets/fab.png"/>
      <h2>Hello, {{ user_name }}</h2>
      <br>
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
    <div class="progress">
      <span>新建訂單</span>
      <el-divider direction="vertical"></el-divider>
      <span>供應商簽署</span>
      <el-divider direction="vertical"></el-divider>
      <span>供應商交貨</span>
      <el-divider direction="vertical"></el-divider>
      <span>供應商交貨完成</span>
      <el-divider direction="vertical"></el-divider>
      <span>供應商開發票</span>
      <el-divider direction="vertical"></el-divider>
      <span>中心廠確認發票</span>
      <el-divider direction="vertical"></el-divider>
      <span>中心廠確認訂單完成</span>
      <el-divider direction="vertical"></el-divider>
      <span>供應商確認訂單完成</span>
      <el-divider direction="vertical"></el-divider>
      <span>訂單完成</span>
    </div>
    <div class="input">
      <div class="hint">
        <h3>訂單編號</h3>
        <h3>流程狀態</h3>
        <h3>訂單日期</h3>
        <h3>交貨日期</h3>
        <h3>下單者</h3>
        <h3>接單廠商</h3>
        <h3>接單者</h3>
        <h3>發票號碼</h3>
        <h3>下單資料</h3>
        <h3>交易資料</h3>
      </div>
      <div class="demo-input-suffix">
        <el-input v-model="input" placeholder="訂單編號"></el-input>
        <el-input v-model="input" placeholder="流程狀態"></el-input>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="訂單日期">
        </el-date-picker>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="交貨日期">
        </el-date-picker>
        <el-input v-model="input" placeholder="下單者"></el-input>
        <el-input v-model="input" placeholder="接單廠商"></el-input>
        <el-input v-model="input" placeholder="接單者"></el-input>
        <el-input v-model="input" placeholder="發票號碼"></el-input>
        <el-input v-model="input" placeholder="下單資料"></el-input>
        <el-input v-model="input" placeholder="交易資料"></el-input>
      </div>
      <div class="butt">
        <el-button plain>送出訂單</el-button>
        <el-button plain>取消</el-button>
      </div>
    </div>
    <div class="block"> <!-- 進度條 -->
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  /* eslint-disable no-unused-labels */
  data() {
    return {
      isCollapse: false,
      msg: "hhhhh",
      user_name: "User",
      tableData: [
        {
          item: "2016-05-02",
          brand: "王小虎",
          date: "上海市普陀区金沙江路 1518 弄",
        },
        {
          item: "2016-05-04",
          brand: "王小虎",
          date: "上海市普陀区金沙江路 1517 弄",
        },
        {
          item: "2016-05-01",
          brand: "王小虎",
          date: "上海市普陀区金沙江路 1519 弄",
        },
        {
          item: "2016-05-03",
          brand: "王小虎",
          date: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      activities: [
        {
          content: "訂單接受",
          timestamp: "2018-04-15",
        },
        {
          content: "交貨完成",
          timestamp: "2018-04-13",
        },
        {
          content: "發票完成",
          timestamp: "2019-03-11",
        },
        {
          content: "訂單完成",
          timestamp: "2019-05-11",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  /* eslint-disable no-unused-labels */
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.progress{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
}

.logo {
  position: fixed;
  left: 2%;
  top: 3%;
  width: 20%;
}

.hint{
  position: fixed;
  width: 220px;
  top: 35%;
  left: 25%;
}

h3{
  margin-top: 13px;
  margin-bottom: 13px;
}

.demo-input-suffix {
  position: fixed;
  width: 220px;
  top: 36%;
  left: 37%;
}

.table {
  position: fixed;
  width: 50%;
  top: 80%;
  left: 30%;
}

.banner {
  height: 60%;
}

.block {
  position: fixed;
  left: 1%;
  top: 65%;
  /* width: 20%; */
}

.nave {
  position: fixed;
  height: 80px;
  top: 20%;
}

.butt{
  
}

.account {
  position: fixed;
  top: 6%;
  left: 88%;
}

/* 菜單 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
