<template>
<!-- 新增訂單 -->
<div class="placeorder">
    <div class="banner">
        <el-button class="new_butt" type="primary" plain @click="newReport()">訂單成立</el-button>
        <h2>訂單{{form.key}}</h2>
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
    <div class="progress">
        <el-button type="text" @click="changeStatus(1)" id="1">新建訂單</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(2)" id="2">供應商簽署</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(4)" id="3">供應商交貨</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(5)" id="4">驗貨</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(7)" id="5">供應商交貨完成</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(8)" id="6">供應商開發票</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(9)" id="7">中心廠確認發票</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(10)" id="8">中心廠確認訂單完成</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="changeStatus(11)" id="9">供應商確認訂單完成</el-button>
    </div>
    <div class="input">
        <el-form ref="form" :model="form" label-width="110px" size="small" style="height: 690px; overflow: auto; scroll:auto;">
            <div class="list">
                <el-form-item label="訂單編號">
                    <el-input v-model="form.key" id="a1"></el-input>
                </el-form-item>
                <el-form-item label="流程狀態">
                    <el-input v-model="form.process" id="a2"></el-input>
                </el-form-item>
                <el-form-item label="交貨急迫性">
                    <el-input v-model="form.urgent" id="a3"></el-input>
                </el-form-item>
                <el-form-item label="訂單日期">
                    <el-date-picker
                    type="date"
                    v-model="form.odate"
                    id="a4"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="預交日期">
                    <el-date-picker
                    type="date"
                    v-model="form.ddate"
                    id="a5"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="採購人員">
                    <el-input v-model="form.purchase" id="a6"></el-input>
                </el-form-item>
                <el-form-item label="供應商代號">
                    <el-input v-model="form.sname" id="a7"></el-input>
                </el-form-item>
                <el-form-item label="供應商名稱">
                    <el-input v-model="form.supplier" id="a8"></el-input>
                </el-form-item>
                <el-form-item label="供應商簽署人員">
                    <el-input v-model="form.signer" id="a9"></el-input>
                </el-form-item>
                <el-form-item label="發票號碼">
                    <el-input v-model="form.invoice" id="a10"></el-input>
                </el-form-item>
            </div>
            <div class="info">
                <div class="book">
                    <h3>採購下單</h3>
                    <el-form-item label="品名">
                        <el-input v-model="form.pname" id="b1"></el-input>
                    </el-form-item>
                    <el-form-item label="單價">
                        <el-input v-model="form.price" id="b2"></el-input>
                    </el-form-item>
                    <el-form-item label="數量">
                        <el-input v-model="form.pquantity" id="b3"></el-input>
                    </el-form-item>
                    <el-form-item label="總金額">
						<span>{{this.form.price * this.form.pquantity}}</span>
                    </el-form-item>
                    <el-form-item label="備註">
                        <el-input type='textarea' autosize maxlength="30" show-word-limit v-model="form.note" id="b5"></el-input>
                    </el-form-item>
                </div>
                <div class="book2">
                    <h3>交貨單</h3>
                    <el-form-item label="交貨日期">
                        <el-date-picker type="date" v-model="form.sdate" style="width:105px" id="c1"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="品名">
                        <el-input v-model="form.pname" id="c2"></el-input>
                    </el-form-item>
                    <el-form-item label="數量">
                        <el-input v-model="form.amount" id="c3"></el-input>
                    </el-form-item>
                </div>
                <div class="book3">
                    <h3>訂單資訊</h3>
                    <el-form-item label="已交貨">
                    <el-input v-model="form.volume" id="d1"></el-input>
                    </el-form-item>
                    <el-form-item label="未交貨">
                    <el-input v-model="form.ntraded" id="d2"></el-input>
                    </el-form-item>
                    <el-form-item label="不良品">
                    <el-input v-model="form.sbad" id="d3"></el-input>
                    </el-form-item>
                </div>
            </div>
            <el-form-item class="send">
                <el-button type="primary" @click="packagePostData()">儲存訂單</el-button>
                <el-button @click="confirm()">取消更改</el-button>
            </el-form-item>
            <div class="checkbox">
                <el-checkbox v-model="form.oestablished" id="e1">訂單接受完成</el-checkbox>
                <el-checkbox v-model="form.ocargo" id="e2">交貨完成</el-checkbox><br>
                <el-checkbox v-model="form.ccarg" id="e3">確認交貨完成</el-checkbox>
                <el-checkbox v-model="form.bill" id="e4">發票開立</el-checkbox><br>
                <el-checkbox v-model="form.cbill" id="e5">確認發票開立</el-checkbox>
                <el-checkbox v-model="form.finish" id="e6">訂單完成</el-checkbox>
            </div>
        </el-form>
    </div>
    <div class="block">
		<el-menu
        default-active="2"
        class="el-menu-vertical-demo">
            <el-submenu index="100">
                <template slot="title">未完成訂單</template>
                <!--顯示每一筆訂單 -->
                <el-submenu :index=index v-for="(item, index) in undone" :key="index">
                    <template slot="title">訂單{{item.key}}</template>
                    <!--顯示歷史狀態 -->
                    <el-timeline style="height: 400px; overflow: auto; scroll:auto;">
                        <el-timeline-item
                        v-for="(history, index) in item.Historys" :key="index" :timestamp="history.Report.urgent">
                            <el-button type="text" @click="showUndoneHistory(this.history.TxId)">{{history.TxId}}</el-button>
                        </el-timeline-item>
                    </el-timeline>
                </el-submenu>
            </el-submenu>
			<el-submenu index="200">
                <template slot="title">已完成訂單</template>
                <el-input placeholder="搜尋..." v-model="input" prefix-icon="el-icon-search" clearable>
                </el-input>
                <!--顯示每一筆訂單 -->
                <el-submenu :index=index v-for="(item, index) in done" :key="index">
                    <template slot="title">訂單{{item.key}}</template>
                    <!--顯示歷史狀態 -->
                    <el-timeline style="height: 400px; overflow: auto; scroll:auto;">
                        <el-timeline-item
                        v-for="(history, index) in item.Historys" :key="index" :timestamp="history.Report.urgent"><!--TODO:timestamp改成供應商-->
                            <el-button type="text" @click="showDoneHistory(this.history.TxId)">{{history.TxId}}</el-button>
                        </el-timeline-item>
                    </el-timeline>
                </el-submenu>
			</el-submenu>
		</el-menu>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "placeorder",
    component:{
    },
    data() {
        return {
            proStatus: 0,
            isCollapse: false,
            user_name: this.GLOBAL.account,
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
                content: "訂單接受",
                timestamp: "2018-04-15",
                },
                {
                content: "交貨完成",
                timestamp: "2018-04-13",
                },
                {
                content: "訂單接受",
                timestamp: "2018-04-15",
                },
                {
                content: "交貨完成",
                timestamp: "2018-04-13",
                },
                {
                content: "訂單接受",
                timestamp: "2018-04-15",
                },
                {
                content: "交貨完成",
                timestamp: "2018-04-13",
                },
                {
                content: "訂單接受",
                timestamp: "2018-04-15",
                },
                {
                content: "交貨完成",
                timestamp: "2018-04-13",
                },
            ],
            input: ''
            ,
            form: {//顯示在欄位上的資料
				key:"",
                process:"",
                urgent:"",
                odate:"",
                ddate:"",
                purchase:"",
                sname: "",
                supplier:"",
                signer: "",
                invoice:"",
                pname:"",
                pquantity: "",
                price: "",
                sdate: "",
                amount: "",
                sbad: "",
                volume: "",
                ntraded: "",
                oestablished: "",
                ocargo: "",
                ccargo: "",
                bill: "",
                cbill: "",
                finish: "",
                note: ""
            },
            status: {
                purchase: "",
                supply: "",
            },
            done:[

            ],
            undone:[

            ],
        };
    },
    methods: {
        showUndoneHistory(id){//index代表哪筆訂單，id代表哪個歷史狀態
            console.log(id);

            // if(this.undone.TxId==id){
            //     console.log(this.undone.TxId);
            // }
        },
        showDoneHistory(id){
            console.log(id);

            // if()
        },
        newReport(){
            this.form= {//顯示在欄位上的資料
				key:"",
                process:"",
                urgent:"",
                odate:"",
                ddate:"",
                purchase:"",
                sname: "",
                supplier:"",
                signer: "",
                invoice:"",
                pname:"",
                pquantity: "",
                price: "",
                sdate: "",
                amount: "",
                sbad: "",
                volume: "",
                ntraded: "",
                oestablished: "",
                ocargo: "",
                ccargo: "",
                bill: "",
                cbill: "",
                finish: "",
                note: ""
            };
        },
        newOrder(){//新增訂單
            this.changeStatus();//先清空欄位
            const url = "createReports"; 
            const params= {
                username: this.user_name,
                form: this.form
            }
            let res = this.$POST(url,params);
            console.log(res);
        },
        initStatus() {//點某個狀態就會到這裡改變狀態
            var arr=[];
            //getElementByClassName沒辦法改變disabled值，只有getElementById可以
            if (this.proStatus == 1) {//新建訂單 1
                arr=["a2","a9","a10","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            } else if (this.proStatus == 2) {//供應商簽署 2
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3","e2","e3","e4","e5","e6"];                
            } else if (this.proStatus == 3) {//供應商簽署 3
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (this.proStatus == 4) {//供應商交貨 4
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (this.proStatus == 5) {//驗貨 5
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","d1","d2","e3","e4","e5","e6"];                
            } else if (this.proStatus == 6) {//驗貨 6
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","b1","b2","b3","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (this.proStatus == 7) {//中心廠確認交貨完成 7
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","e4","e5","e6"];                
            } else if (this.proStatus == 8) {//供應商開發票 8
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","b1","b2","b3","b5","c2","c3","d1","d2","d3","e5","e6"];                
            } else if (this.proStatus == 9) {//中心廠確認發票 9
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3","e6"];
            }else if (this.proStatus == 10) {//中心廠確認訂單完成 10
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3"];
            }else if (this.proStatus == 11) {//供應商確認訂單完成 11
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3"];
            }
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="background-color:#e6ecf5; border-radius: 5px; cursor:not-allowed;";
            });
        },
        changeStatus(state) {//按上面流程的時候改變禁用欄位
            this.proStatus = state;//狀態改變
            var arr_init=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c1","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            arr_init.forEach(function(value){
				// console.log(value);
                document.getElementById(value).disabled = false;
                document.getElementById(value).style ="background-color:transparent";
            });
            var but_init=[];//button禁用
            if(state==1){
                but_init=["1"];
                this.url="reports";
            }else if(state==2){
                but_init=["1","2"];
                this.url="reports/changSigner";
            }else if(state==4){
                but_init=["1","2","3"];
                this.url="reports/changSdate";
            }else if(state==5){
                but_init=["1","2","3","4"];
                this.url="reports/changSbad";
            }else if(state==7){
                but_init=["1","2","3","4","5"];
                this.url="reports/changOcargo";
            }else if(state==8){
                but_init=["1","2","3","4","5","6"];
                this.url="reports/changCcargo";
            }else if(state==9){
                but_init=["1","2","3","4","5","6","7"];
                this.url="reports/changInvoice";
            }else if(state==10){
                but_init=["1","2","3","4","5","6","7","8"];
                this.url="reports/changCbill";
            }else if(state==11){
                but_init=["1","2","3","4","5","6","7","8","9"];
                this.url="reports/Finish";
            }
            but_init.forEach(function(value){//button禁用後改變樣式
				// console.log(value);
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="color:gray; cursor:not-allowed;";
            });

            this.initStatus();
        },
        confirm() {//取消更改訂單
            var yes = confirm("確定要取消更改嗎？");
            if (yes) {
                this.$router.push({path:'/allorders'})
            }
        },
		onSubmit() {//傳送訂單
			this.packagePostData();
		},
        async packageGetData() {//導入訂單畫面的時候，會傳入所有訂單資料跟狀態
            const url = "reports"; 
            const params= {
                username:this.user_name
            }
            let res = await this.$POST(url,params);
            console.log(res);
            for(let i in res.report){
                if(res.report[i].finish=="true"){//已完成訂單
                    this.done.push(res.report[i]);
                }else{//未完成訂單
                    this.undone.push(res.report[i]);
                }
            } 
        },
		async packagePostData() {//送出訂單
			alert("儲存訂單中");
			const url = this.url;
			const params=this.form; 
            let res = await this.$POST(url, params);
			console.log(res);
        },
    },
    created() {
        this.packageGetData();
    },
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

@media (max-width: 719px){/*最大719*/
	.el-collapse {
		width: 15%;
		position: fixed;
	}

}

@media (min-width: 720px){/*最小720*/
	.el-collapse {
		width: 15%;
		position: fixed;
	}
}

.hide{
    display:none;
}

h2{
    position: fixed;
	left: 46%;
    top:0%;
    margin: 15px;
}

h4{
    position: fixed;
	left: 80%;
}

h3 {
	text-align: right;
	padding-right: 10px;
}

.new_butt{
    position: fixed;
    top: 2%;
    left: 2%;
}

.banner{
    position: fixed;
    top: 0%;
    width: 100%;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    height: 60px;
}

.el-dropdown{
    position: fixed;
    top: 1%;
}

.progress {
	padding: 5px;
	text-align: center;
    position: fixed;
    top: 10%;
	left: 10%;
    width: 80%;
}

.list {
    padding: 6px;
	position: fixed;
	left: 11%;
	top: 18%;
}

.book {
	width: 21%;
	position: fixed;
	left: 38%;
	top: 18%;
}

.book2 {
	width: 15%;
	position: fixed;
	left: 65%;
	top: 18%;
}
.book3 {
	width: 15%;
	position: fixed;
	left: 65%;
	top: 58%;
}

.info {
	position: fixed;
	left: 60%;
	top: 30%;
}

.hint {
	position: fixed;
	width: 220px;
	top: 32%;
	left: 25%;
}

.input {
	position: fixed;
	top: 6%;
	left: 80%;
}

.account {
	position: fixed;
	top: 6%;
	left: 88%;
}

.el-checkbox{
	margin: 5px;
	padding:1px;
}

.checkbox {
	position: fixed;
	top: 75%;
	left: 43%;
    /* width: 15%; */
}

.el-breadcrumb {
	position: fixed;
	top: 15%;
	left: 5%;
}

.el-menu{
	width: 170px;
	min-height: 0px;
    width: 12%;
    position: fixed;
    top: 9%;
}

.el-form {

	position: fixed;
	top: 35%;
	left: 25%;
}

.send {
	position: fixed;
	top: 88%;
	left: 75%;
}

.el-input >>> .el-input__inner {
	background-color: transparent;
}

</style>
