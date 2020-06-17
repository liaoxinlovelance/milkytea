<template>
  <el-row type="flex" justify="space-between" style="background:#e4e4e4;" :gutter="20" >
    <el-col :span="3"></el-col>
    <el-col :span="6">
      <div>
        <el-link icon="el-icon-goods" :underline="false">Lance商城</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link icon="el-icon-office-building" :underline="false">MIUI</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link icon="el-icon-position" :underline="false">IoT</el-link>
      </div>
    </el-col>
    
    <el-col :span="3"></el-col> 
    <el-col :span="3"></el-col>
    <el-col :span="3"></el-col>
    <el-col :span="3">
      <div>
        <el-link icon="el-icon-user" :underline="false" href="#">登录</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link icon="el-icon-edit" :underline="false" href="#">注册</el-link>
      </div>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
  
</template>

<script>
export default {};
</script>

<style>

</style>