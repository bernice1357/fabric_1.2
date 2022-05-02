<template>
    <!--交易資料 -->
    <div class="deal">
        <router-view></router-view>       
        <el-table :data="tableData" style="width: 100%">
            <el-table-column
                prop="Key"
                label="ID">
            </el-table-column>
            <el-table-column
                prop="Record.交貨不良品數量"
                label="交貨不良品數量">
            </el-table-column>>
            <el-table-column
                prop="Record.交貨急迫性"
                label="交貨急迫性">
            </el-table-column>
            <el-table-column
                prop="Record.訂單日期"
                label="訂單日期">
            </el-table-column>
            <el-table-column
                prop="Record.交貨日期"
                label="交貨日期">
            </el-table-column>
            <el-table-column
                prop="Record.採購人員"
                label="採購人員">
            </el-table-column>
            <el-table-column
                prop="Record.供應商代號"
                label="供應商代號">
            </el-table-column>
            <el-table-column
                prop="Record.供應商名稱"
                label="供應商名稱">
            </el-table-column>
            <el-table-column
                prop="Record.供應商簽署人員"
                label="供應商簽署人員">
            </el-table-column>
            <el-table-column
                prop="Record.採購品名"
                label="採購品名">
            </el-table-column>
            <el-table-column
                prop="Record.採購數量"
                label="採購數量">
            </el-table-column>
            <el-table-column
                prop="Record.採購單價"
                label="採購單價">
            </el-table-column>
            <el-table-column
                prop="Record.備註"
                label="備註">
            </el-table-column>
        </el-table>
        <router-link to="/add">
            <el-button onclick="create()">新增</el-button>
        </router-link>
    </div>
</template>

<script>
//import axios from 'axios'
export default{
    name: 'deal',
    data() {
        return {
            info: null,
            tableData: [],
        };
    },
    methods: {
        async packageGetData() {
            const url = "reports"; 
            let res = await this.$GET(url);
            
            this.tableData = res.reports;
            console.log(res);
            console.log(res.reports);
       },

    },
    created(){
        this.packageGetData();
    }
}
</script>

<style scoped>
.deal{
    position: fixed;
    margin: 10%;
}
</style>
