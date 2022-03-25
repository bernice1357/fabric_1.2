<template>
    <!-- 交易資料 -->
    <div class="deal"> 
        <router-view></router-view>       
        <el-table :data="info" style="width: 100%">
            <el-table-column
                prop="id"
                label="ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="brand"
                label="品牌"
                width="180">
            </el-table-column>
            <el-table-column
                prop="model"
                label="車種">
            </el-table-column>
        </el-table>
        <router-link to="/add" class="">
            <el-button onclick="create()">新增</el-button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'deal',
        data() {
            return {
                info: null
            };
    },
    method: {
        create(){

        }
    },
  mounted() {
    axios
      .get('http://localhost:3000/cars')
      .then(response => (this.info = response.data))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
}
</script>

<style scoped>
.deal{
    width: 35%;
    position: fixed;
    top: 20%;
    left: 35%;
}
</style>
