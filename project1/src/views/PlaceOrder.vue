<template>
<!-- 新增訂單 -->
<div class="placeorder">
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
        <el-form ref="form" :model="form" label-width="90px" size="small">
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
                        <el-input v-model="form.note" id="b5"></el-input>
                    </el-form-item>
                </div>
                <div class="book2">
                    <h3>交貨單</h3>
                    <el-form-item label="交貨日期">
                        <el-date-picker type="date" v-model="form.sdate" style="width: 130px" id="c1"></el-date-picker>
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
            <el-radio-group>
                <el-radio :label="3" id="e1" v-model="form.oestablished">訂單接受</el-radio>
                <el-radio :label="6" id="e2" v-model="form.ocargo">交貨完成</el-radio>
                <el-radio :label="9" id="e3" v-model="form.bill">發票開立</el-radio>
                <el-radio :label="10" id="e4" v-model="form.finish">訂單完成</el-radio><br>
                <el-radio :label="10" id="e5" v-model="form.ccargo">確認交貨完成</el-radio>
                <el-radio :label="10" id="e6" v-model="form.cbill">確認發票開立</el-radio>
            </el-radio-group>
        </el-form>
    <div class="butt">
        <router-link to="/orders">
            <el-button type="primary" icon="el-icon-goods" circle></el-button>
        </router-link>
        <router-link to="/deal">
            <el-button type="primary" icon="el-icon-s-data" circle></el-button>
        </router-link>
    </div>
    </div>
    <div class="block">
      <el-collapse accordion>
        <el-collapse-item title="目前狀態" name="1">
          <span>供應商：{{ importData }}</span
          ><br />
          <span>採購方：{{ initStatus }}</span>
        </el-collapse-item>
        <el-collapse-item title="歷史狀態" name="2">
            <el-timeline reverse="reverse" style="height: 530px; overflow: auto; scroll:auto;">
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                    <el-button type="text">{{activity.content}}</el-button>
                </el-timeline-item>
            </el-timeline>
            </el-collapse-item>
      </el-collapse>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "placeorder",
    components: {},
    props: {},
    data() {
        return {
            process: "",
            proStatus: 0,
            info: null,
            isCollapse: false,
            user_name: "User",
            order_name: "yyy",
            activities: [
                {
                content: "訂單接受",
                timestamp: "2018-04-15",
                },
                {
                content: "交貨完成",
                timestamp: "2018-04-13",
                },
            ],
            form: {
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
        };
    },
    mounted:{
    },
    computed: {
        initStatus() {
            console.log(this.proStatus);
            var arr=[];
            //getElementByClassName沒辦法改變disabled值，只有getElementById可以
            if (this.proStatus == 1) {//新建訂單 1
                arr=["a2","a9","a10","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            } else if (this.proStatus == 2) {//供應商簽署 2
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","b1","b2","b3","b4","b5","c2","c3","d1","d2","d3","e2","e3","e4","e5","e6"];                
            } else if (this.proStatus == 3) {//供應商簽署 3
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (this.proStatus == 4) {//供應商交貨 4
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (this.proStatus == 5) {//驗貨 5
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","d1","d2","e3","e4","e5","e6"];                
            } else if (this.proStatus == 6) {//驗貨 6
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","b1","b2","b3","b4","b5","d1","d2","d3","e3","e4","e5","e6"];                
            } else if (this.proStatus == 7) {//中心廠確認交貨完成 7
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","c2","c3","d1","d2","e3","e4","e6"];                
            } else if (this.proStatus == 8) {//供應商開發票 8
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","b1","b2","b3","b4","b5","c2","c3","d1","d2","d3","e4","e6"];                
            } else if (this.proStatus == 9) {//中心廠確認發票 9
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","c2","c3","d1","d2","d3","e4"];
            }else if (this.proStatus == 10) {//中心廠確認訂單完成 10
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","c2","c3","d1","d2","d3"];
            }else if (this.proStatus == 11) {//供應商確認訂單完成 11
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","c2","c3","d1","d2","d3"];
            }
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="background-color:#e6ecf5; border-radius: 5px; cursor:not-allowed;";
            });
            return this.proStatus;
        },
    },
    methods: {
		onSubmit() {
			this.packagePostData();
		},
        changeStatus(value) {
            this.proStatus = value;
            var arr_init=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","b5","c1","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            arr_init.forEach(function(value){
                document.getElementById(value).disabled = false;
                document.getElementById(value).style ="background-color:transparent";
            });
            var but_init=[];
            if(value==1){
                but_init=["1"];
            }else if(value==2){
                but_init=["1","2"];
            }else if(value==4){
                but_init=["1","2","3"];
            }else if(value==5){
                but_init=["1","2","3","4"];
            }else if(value==7){
                but_init=["1","2","3","4","5"];
            }else if(value==8){
                but_init=["1","2","3","4","5","6"];
            }else if(value==9){
                but_init=["1","2","3","4","5","6","7"];
            }else if(value==10){
                but_init=["1","2","3","4","5","6","7","8"];
            }else if(value==11){
                but_init=["1","2","3","4","5","6","7","8","9"];
            }
            but_init.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="color:gray; cursor:not-allowed;";
            });
        },
        confirm() {
            var yes = confirm("確定要取消更改嗎？");
            if (yes) {
                alert("返回首頁");
                this.$router.push({path:'/allorders'})
            }
        },
        async packageGetData() {
            const url = "reports"; 
            let res = await this.$GET(url);
            this.form = res.reports[0].Record;
			this.form['key']=res.reports[0].Key;
			console.log(this.key);
        },
		async packagePostData() {
			var yes = confirm("確定要送出訂單嗎？");

			const url = "reports";
			const params=this.form; 
			// params['key'] = "A123"
            let res = await this.$POST(url, params);
			console.log(res);
			console.log(params);

            if (yes) {
                alert("返回首頁");
                this.$router.push({path:'/allorders'})
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

#iii {
    text-decoration-color: teal;
}

h3 {
    text-align: right;
    padding-right: 10px;
}

.progress {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-style: none;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 98%;
    margin: 6px;
    position: fixed;
    top: 3%;
    text-align: center;
}

.list {
    position: fixed;
    left: 20%;
    top: 20%;
}

.book {
    width: 15%;
    position: fixed;
    left: 42%;
    top: 18%;
}

.book2 {
    width: 15.5%;
    position: fixed;
    left: 58%;
    top: 18%;
}

.book3 {
    width: 15%;
    position: fixed;
    left: 74%;
    top: 18%;
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

.block {
    background-color: rgb(209, 224, 224);
    height: 0%;
    width: 20%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 1%;
    top: 27%;
    padding-top: 0px;
}

.butt {
    position: fixed;
    left: 95%;
    top: 50%;
}

.input {
    position: fixed;
    top: 6%;
    left: 88%;
}

.account {
    position: fixed;
    top: 6%;
    left: 88%;
}

.el-collapse {
    width: 15%;
    position: fixed;
    top: 20%;
}

.el-radio{
    margin: 5px;
    padding:6px;
}

.el-radio-group {
    position: fixed;
    top: 48%;
    left: 60%;
}

.el-breadcrumb {
    position: fixed;
    top: 15%;
    left: 5%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-form {
    position: fixed;
    top: 35%;
    left: 25%;
}

.send {
    position: fixed;
    top: 82%;
    left: 55%;
}

.el-input >>> .el-input__inner {
    background-color: transparent;
    /* cursor: not-allowed; */
}
</style>
