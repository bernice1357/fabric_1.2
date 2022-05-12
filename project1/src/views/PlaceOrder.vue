<template>
<div class="placeorder">
    <div class="banner">
        <el-button class="new_butt" type="primary" plain @click="newOrder()">成立訂單</el-button>
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
    <div class="input">
        <el-form ref="form" :model="form" label-width="110px" size="small" style="height: 690px; overflow: auto; scroll:auto;">
            <div class="info">
                <h2>訂單資訊</h2>
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
                <div class="book">
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
                        <el-input type='textarea' rows=14 show-word-limit v-model="form.note" id="b5"></el-input>
                    </el-form-item>
                </div>
            </div>  
            <div class="book2">
                <h2>交貨單</h2>
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
                <h2>交貨資訊</h2>
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
            <el-form-item class="send">
                <el-button type="primary" @click="onSubmit()">儲存訂單</el-button>
                <el-button @click="cancel()">取消更改</el-button>
            </el-form-item>
            <div class="checkbox">
                <el-checkbox v-model="form.oestablished" id="e1">訂單接受</el-checkbox>
                <el-checkbox v-model="form.ocargo" id="e2">交貨完成</el-checkbox>
                <el-checkbox v-model="form.ccarg" id="e3">確認交貨完成</el-checkbox><br>
                <el-checkbox v-model="form.bill" id="e4">發票開立</el-checkbox>
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
    data() {
        return {
            url:"",
            proStatus: 0,
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
            done:[//已完成訂單
            ],
            undone:[//未完成訂單
            ],
        };
    },
    methods: {
        showUndoneHistory(id){//顯示未完成訂單（index代表哪筆訂單，id代表哪個歷史狀態）
            console.log(id);
            // if(this.undone.TxId==id){
            //     console.log(this.undone.TxId);
            // }
        },
        showDoneHistory(id){//顯示已完成訂單
            console.log(id);
        },
        newOrder(){//新增訂單
            this.form= {//先清空上個狀態的欄位資料
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
            this.changeStatus();//先清空欄位禁用
            this.url = "createReports";
        },
        changeStatus(state) {//點選上面流程狀態時改變禁用欄位
            //改變狀態/新增訂單前先清空所有欄位禁用
            var arr_init=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c1","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            arr_init.forEach(function(value){
                document.getElementById(value).disabled = false;
                document.getElementById(value).style ="background-color:transparent";
            });

            this.buttonDisabled(state);//處理被禁用的狀態按鈕
            this.chageAPI(state);//改變每個流程所對應的API路徑
            this.initStatus(state);//更新欄位禁用狀態
        },
        initStatus(state) {//點某個狀態按鈕就會到這裡改變狀態
            var arr=[];
            //getElementByClassName沒辦法改變disabled值，只有getElementById可以
            if (state == 1) {//新建訂單 1
                arr=["a2","a9","a10","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            } else if (state == 2) {//供應商簽署 2
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3","e2","e3","e4","e5","e6"];                
            } else if (state == 3) {//供應商簽署 3
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (state == 4) {//供應商交貨 4
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (state == 5) {//驗貨 5
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","d1","d2","e3","e4","e5","e6"];                
            } else if (state == 6) {//驗貨 6
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","b1","b2","b3","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (state == 7) {//中心廠確認交貨完成 7
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","e4","e5","e6"];                
            } else if (state == 8) {//供應商開發票 8
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","b1","b2","b3","b5","c2","c3","d1","d2","d3","e5","e6"];                
            } else if (state == 9) {//中心廠確認發票 9
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3","e6"];
            }else if (state == 10) {//中心廠確認訂單完成 10
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3"];
            }else if (state == 11) {//供應商確認訂單完成 11
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b5","c2","c3","d1","d2","d3"];
            }
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="background-color:#e6ecf5; border-radius: 5px; cursor:not-allowed;";
            });
        },
        buttonDisabled(state){//處理被禁用的狀態按鈕
            var but_init=[];
            if(state==1){
                but_init=["1"];
            }else if(state==2){
                but_init=["1","2"];
            }else if(state==4){
                but_init=["1","2","3"];
            }else if(state==5){
                but_init=["1","2","3","4"];
            }else if(state==7){
                but_init=["1","2","3","4","5"];
            }else if(state==8){
                but_init=["1","2","3","4","5","6"];
            }else if(state==9){
                but_init=["1","2","3","4","5","6","7"];
            }else if(state==10){
                but_init=["1","2","3","4","5","6","7","8"];
            }else if(state==11){
                but_init=["1","2","3","4","5","6","7","8","9"];
            }
            but_init.forEach(function(value){//改變被禁用的欄位的樣式
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="color:gray; cursor:not-allowed;";
            });
        },
        chageAPI(state){//改變每個流程所對應的API路徑
            if(state==1){
                this.url="reports";
            }else if(state==2){
                this.url="reports/changSigner";
            }else if(state==4){
                this.url="reports/changSdate";
            }else if(state==5){
                this.url="reports/changSbad";
            }else if(state==7){
                this.url="reports/changOcargo";
            }else if(state==8){
                this.url="reports/changCcargo";
            }else if(state==9){
                this.url="reports/changInvoice";
            }else if(state==10){
                this.url="reports/changCbill";
            }else if(state==11){
                this.url="reports/Finish";
            }
        },
        cancel() {//「取消更改」按鈕
            var yes = confirm("確定要取消更改嗎？");
            if (yes) {//直接重新匯入原本訂單資料，沒有要管驗證
                
            }
        },
		onSubmit() {//「儲存訂單」按鈕
			this.packagePostData();
		},
        async packageGetData() {//導入訂單畫面的時候，會傳入所有訂單資料跟狀態 
            const params= {
                username: this.user_name
            }
            //透過使用者帳號傳入所有該使用者的訂單
            let res = await this.$POST(this.url, params);
            console.log(res);
            for(let i in res.report){//區分出已完成/未完成訂單
                if(res.report[i].finish=="true"){
                    this.done.push(res.report[i]);//已完成訂單
                }else{
                    this.undone.push(res.report[i]);//未完成訂單
                }
            } 
        },
		async packagePostData() {//送出訂單
			const url = this.url;
			var params=this.form; 
            if(url=="createReports"){//如果是成立新訂單，必須傳送username
                params= {
                    username: this.user_name,
                    form: this.form
                }
            }
            const res = await this.$POST(url, params);
			console.log(res);
            if(res.status){//TODO:搞懂回傳success的是哪個欄位
                alert("訂單儲存成功！");
            }
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
    text-align: center;
	/* padding-right: 10px; */
    margin-top: 0px;
}

h4{
    position: fixed;
	left: 80%;
}

.new_butt{
    position: absolute;
    top: 15%;
    left: 1%;
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
    position: absolute;
    top: 13%;
	left: 3%;
    width: 80%;
}

.list {
	position: relative;
    width: 45%;
	left: 0%;
	top: 0%;
}

.book {
	width: 40%;
	position: absolute;
    width: 50%;
	left: 45%;
	top: 13%;
}

.book2 {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 15px;
	width: 20%;
	position: fixed;
	left: 70%;
	top: 12%;
}
.book3 {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 15px;
	width: 20%;
	position: fixed;
	left: 70%;
	top: 44%;
}

.info {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 15px;
	position: fixed;
	left: 15%;
	top: 12%;
    width: 50%;
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
	left: 91%;
}

.el-checkbox{
	margin: 5px;
	padding:3px;
}

.checkbox {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	position: fixed;
	top: 77%;
	left: 70%;
    width: 22%;
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
	top: 91%;
	left: 38%;
}

.el-input >>> .el-input__inner {
	background-color: transparent;
}
</style>