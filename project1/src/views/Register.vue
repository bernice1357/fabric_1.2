<template>
    <el-form ref="form" size="medium" :model="form" label-width="100px" style="">
        <h2>註冊</h2>
        <el-form-item label="請輸入帳號" style="">
            <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="請輸入密碼" style="">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="send">
            <el-button type="primary" size="medium" @click="submit()">送出</el-button>
        </el-form-item>
        <el-form-item class="regi">
            <router-link to="/login">
                <el-button type="text" style="color:rgb(26, 54, 90);">已經有帳號？點選這裡</el-button>
            </router-link>
        </el-form-item>
    </el-form>
</template>

<script>
import Home from '../views/Home.vue';
export default {
    components: {
        Home,
    },
    data(){
        return{
            form:{
                account:"",
                password:""
            }
        };
    },
    methods:{
        submit(){
            this.$router.push({path:'/allorders'});
		// 	const url = "reports"; 
		// 	let res = await this.$GET(url);
			
		// 	console.log(res);
		// 	console.log(res.reports);
        },
    }
};
</script>
<style scoped>
body{
    background-color: rgb(110, 147, 189);
}
.send{
    position: absolute;
    left:20%;
    top: 55%;
}
.el-form{
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(70, 90, 133, 0.418);
    background-color: transparent;
    width: 400px;
    height: 400px;
    position: fixed;
    left: 35%;
    top: 13%;
    padding-top: 20px;
    padding-right: 20px;
}
h2{
    text-align: center;
}
.regi{
    position: absolute;
    left:10%;
    top: 78%;
    /* background-color: rgb(26, 54, 90); */
}
</style>

