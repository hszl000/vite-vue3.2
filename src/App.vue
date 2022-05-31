<template>
  <div>
    vue3
    <el-button @click="show">林大树</el-button>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";

const show = () => {
  ElMessage.success("欢迎");
};
</script>

<style lang="scss" scoped></style>
