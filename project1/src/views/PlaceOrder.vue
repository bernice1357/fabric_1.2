<script src="http://localhost:8098"></script>
<template>
  <!-- 新增訂單 -->
<div class="placeorder">
    <div class="progress">
		<el-button type="text" @click="ChangeDisabled(2)">供應商簽署</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">供應商交貨</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">供應商交貨完成</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">供應商開發票</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">中心廠確認發票</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">中心廠確認訂單完成</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">供應商確認訂單完成</el-button>
		<el-divider direction="vertical"></el-divider>
		<el-button type="text">訂單完成</el-button>
    </div>
	<!-- <p>{{isDisabled}}</p> -->
    <div class="input">
		<el-form ref="form" :model="form" label-width="90px" size="small">
			<div class="list">
				<el-form-item label="訂單編號">
					<el-input v-model="form.desc" id="zzz"></el-input>
				</el-form-item>
				<el-form-item label="流程狀態">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="交貨急迫性">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="訂單日期">
					<el-date-picker
					type="date"
					placeholder="選擇日期"
					v-model="form.date1"
					></el-date-picker>
				</el-form-item>
				<el-form-item label="預交日期">
					<el-date-picker
					type="date"
					placeholder="選擇日期"
					v-model="form.date1"
					></el-date-picker>
				</el-form-item>
				<el-form-item label="下單者">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="接單廠商">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="接單者">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="發票號碼">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			</div>
			<div class="info">
				<div class="book">
					<h3>採購下單</h3>
					<el-form-item label="品名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="單價">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="數量">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="總金額">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="備註">
						<el-input v-model="form.name"></el-input>
					</el-form-item>	
				</div>
				<div class="book2">
					<h3>交貨單</h3>
					<el-form-item label="交貨日期">
						<el-date-picker
						type="date"
						placeholder="選擇日期"
						v-model="form.date1"
						style="width: 130px;"
						></el-date-picker>
					</el-form-item>
					<el-form-item label="品名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="數量">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
				</div>
				<div class="book3">
					<h3>訂單資訊</h3>
					<el-form-item label="已交貨">
						<el-input v-model="form.name"></el-input>
					</el-form-item>					
					<el-form-item label="未交貨">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="不良品">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
				</div>
			</div>
			<el-form-item class="send">
				<el-button type="primary">儲存訂單</el-button>
				<el-button @click.native="confirm">取消更改</el-button>
			</el-form-item>
		</el-form>
		<div class="butt">
			<router-link to="/Orders">
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
				<span>供應商：{{status.supply}}</span><br>
				<span>採購方：{{status.purchase}}</span>
            </el-collapse-item>
            <el-collapse-item title="歷史狀態" name="2">
				<el-timeline :reverse="reverse" style="height:530px; overflow:auto;">
					<el-timeline-item
					v-for="(activity, index) in activities"
					:key="index"
					:timestamp="activity.timestamp"
					>
					{{ activity.content }}
					</el-timeline-item>
				</el-timeline>
            </el-collapse-item>
		</el-collapse>
    </div>
    <el-radio-group v-model="radio">
		<el-radio :label="3" disabled>訂單接受</el-radio>
		<el-radio :label="6" disabled>交貨完成</el-radio>
		<el-radio :label="9">發票完成</el-radio>
		<el-radio :label="10" disabled>訂單完成</el-radio>
		<el-radio :label="10" disabled>確認交貨完成</el-radio>
		<el-radio :label="10" disabled>確認發票開立</el-radio>
    </el-radio-group>
    <router-view></router-view>
</div>
</template>

<script>
import axios from "axios";
export default {
	name: "placeorder",
	components: {},
	props:{},
	data() {
		return {
			info: null,
			isCollapse: false,
			user_name: "User",
			order_name:"yyy",
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
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
				{
					content: "訂單完成",
					timestamp: "2019-05-11",
				},
			],
			// isDisabled: false,
			form: {
				name: "",
				region: "",
				date1: "",
				date2: "",
				delivery: false,
				type: [],
				resource: "",
				desc: "",
			},
			tableData: [],
			status: {
				purchase: "發票開立中",
				supply: "發票開立中"
			}
		};
	},
	methods: {
		ChangeDisabled(value) {
			console.log(value);
			document.getElementById("zzz").disabled=true;
		},
		confirm(){
			var yes = confirm('確定要取消更改嗎？');
			if (yes) {
				alert('返回首頁');
			}
		}
	},
	// mounted() {
	// 	axios
	// 	.get("http://localhost:3000/cars")
	// 	.then((response) => (this.info = response.data))
	// 	.catch(function (error) {
	// 		// 请求失败处理
	// 		console.log(error);
	// 	});
	// },
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

#iii{
	text-decoration-color: teal;
}

h3{
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

.logo {
	position: fixed;
	left: 2%;
	top: 3%;
	width: 20%;
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

.el-collapse{
	width: 15%;
	position: fixed;
	top: 20%;
	/* overflow-y: auto; */
}

.el-radio-group {
	position: fixed;
	top: 82%;
	left: 30%;
}

.el-breadcrumb{
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
	top: 90%;
	left: 55%;
}
</style>
