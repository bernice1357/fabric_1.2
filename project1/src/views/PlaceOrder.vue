<template>
  <!-- 新增訂單 -->
  <div class="placeorder">
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
      <el-form ref="form" :model="form" label-width="100px" size="small">
        <div class="list">
          <el-form-item label="訂單編號">
            <el-input v-model="form.name"></el-input>
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
          <el-form-item label="rrr">
            <el-col class="line" :span="3">品名</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="3">單價</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="3">數量</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="3">總金額</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="3">備註</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="">
            <el-col class="line" :span="3">交貨日期</el-col>
            <el-col :span="3">
              <el-date-picker
                type="date"
                placeholder="選擇日期"
                v-model="form.date1"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="3">品名</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="3">數量</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="">
            <el-col class="line" :span="3">已交貨</el-col>
            <el-col :span="3">
              <el-date-picker
                type="date"
                placeholder="選擇日期"
                v-model="form.date1"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="3">未交貨</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="3">不良品</el-col>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
        </div>
        <el-form-item class="send">
          <el-button type="primary" @click="onSubmit">送出訂單</el-button>
          <el-button>取消訂單</el-button>
        </el-form-item>
      </el-form>
      <div class="butt">
        <router-link to="/Orders">
          <el-button type="primary" icon="el-icon-goods" circle></el-button>
        </router-link>
        <br><br>
        <router-link to="/deal">
          <el-button type="primary" icon="el-icon-s-data" circle></el-button>
        </router-link>
      </div>
    </div>
    <div class="block">
      <h2>訂單狀況</h2>
      <br /><br /><br />
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-radio-group v-model="radio">
      <el-radio :label="3" disabled>訂單接受</el-radio>
      <el-radio :label="6" disabled>交貨完成</el-radio>
      <el-radio :label="9">發票完成</el-radio>
      <el-radio :label="10" disabled>訂單完成</el-radio>
    </el-radio-group>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "placeorder",
  components: {},
  data() {
    return {
      info: null,
      isCollapse: false,
      user_name: "User",
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
      tableData:[],
    };
  },
  mounted () {
    axios
      .get('http://localhost:3000/cars')
      .then(response => (this.info = response.data))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
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

.progress {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
}

.list{
  width: 30%;
}

.info{
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

aa{
  position: fixed;
  top: 0%;
  left: 50%;
}

h3 {
  margin-top: 13px;
  margin-bottom: 13px;
}

.demo-input-suffix {
  position: fixed;
  width: 220px;
  top: 33%;
  left: 37%;
}

.item {
  width: 45%;
  position: fixed;
  top: 36%;
  left: 43%;
}
.bbb{
  position: fixed;
  top: 45%;
  left: 43%;
}

.table {
  position: fixed;
  width: 40%;
  top: 50%;
  left: 50%;
}

.banner {
  height: 60%;
}

.block {
  background-color: rgb(209, 224, 224);
  height: 60%;
  width: 200px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 1%;
  top: 27%;
  padding-top: 50px;
}

.nave {
  position: fixed;
  height: 80px;
  top: 20%;
}

.butt {
  position: fixed;
  left: 90%;
  top: 50%;
}

.input{
  position: fixed;
  top: 6%;
  left: 88%;
}

.account {
  position: fixed;
  top: 6%;
  left: 88%;
}

.el-radio-group{
  position: fixed;
  top: 70%;
  left: 55%;
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

.send{
  position: fixed;
  top: 80%;
  left: 55%;
}
</style>
