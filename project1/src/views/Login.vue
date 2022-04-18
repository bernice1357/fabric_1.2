<template>
    <Home>
        <el-form ref="form" size="mini" :model="form" label-width="60px" style="">
            <el-form-item label="帳號" style="">
                <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密碼" style="">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item class="send">
                <router-link to="/allorders">
				    <el-button type="primary" size="medium" @click="submit()">送出</el-button>
                </router-link>
            </el-form-item>
            <el-form-item class="regi">
                <router-link to="/register">
                    <el-button type="text" style="color:rgb(26, 54, 90);">還沒有帳號嗎？點選這裡</el-button>
                </router-link>
            </el-form-item>
        </el-form>
    </Home>
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
        async submit(){           
			const url = "reports"; 
			let res = await this.$POST(url);
			
			console.log(res);
			console.log(res.reports);
		},
    }
};
</script>
<style scoped>
.send{
    position: absolute;
    left:20%;
    top: 55%;
}

.regi{
    position: absolute;
    left:10%;
    top: 78%;
    /* background-color: rgb(26, 54, 90); */
}

.el-form{
    box-shadow: 0 2px 12px 0 rgba(70, 90, 133, 0.418);
    z-index:100;
    background-color: rgb(255, 255, 255);
    padding-top: 20px;
    padding-right: 20px;
    width:20%;
    height: 25%;
    position: absolute;
    top: 12%;
    left:58%;
}
</style>

