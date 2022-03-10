<template>
  <div id="app">
    <div class="banner">
      <img class="logo" src="./assets/fab.png" />
      <div class="nave">
        <!-- 菜單展開收起
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <!-- 菜單 -->
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
        <!-- 菜單 -->
      </div>
    </div>
    <div>
      <el-button>新增欄位</el-button>
      <el-button>刪除欄位</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="item" label="日期" width="200"> </el-table-column>
      <el-table-column prop="brand" label="姓名" width="200"> </el-table-column>
      <el-table-column prop="date" label="地址" width="300"> </el-table-column>
      </el-table>
    </div>
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
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
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

.logo {
  position: fixed;
  left: 2%;
  top:3%;
  width: 20%;
}

.table {
  position: fixed;
  width: 70%;
  top: 30%;
  left: 30%;
}

.nave{
  position: fixed;
  width: 22%;
  top: 15%;
}

/* 菜單 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
