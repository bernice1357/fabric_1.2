<template>
    <div class="add">
        <el-form-item label="" class="item">
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
        </el-form-item>
    </div>
</template>