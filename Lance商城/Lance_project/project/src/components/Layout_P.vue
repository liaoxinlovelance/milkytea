<template>
  <el-container>
    <el-aside>
    </el-aside>
    <el-container>
      <el-header>

      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.el-container .el-aside {
  display: flex;
  flex-direction: column;
}

.el-menu {
  flex: 1;
}

.el-header {
  line-height: 60px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .el-tag {
  margin-right: 10px;
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  .el-aside {
    width: 41px !important;
  }

  .el-menu-item {
    padding-left: 9px !important;
  }
}

.right-menu {
  display: none;
}

@media screen and (max-width: 768px) {
  .right-menu {
    display: block;
  }
  .el-aside {
    display: none !important;
  }
}
</style>