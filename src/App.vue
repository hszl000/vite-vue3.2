<template>
  <div id="app">
    <el-form
      style="width: 500px"
      :inline="false"
      :model="data"
      :rules="rules"
      ref="formRef"
      validate-on-rule-change
      status-icon
      label-width="100px"
      label-position="left"
      label-suffix="："
      :disabled="false"
      size="medium"
      :hide-required-asterisk="false"
    >
      <el-form-item
        label="审批人"
        prop="user"
        :validate-status="ruleChange.status"
        :error="ruleChange.error"
      >
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          v-model="data.region"
          placeholder="活动区域"
          style="width: 100%"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addRule">添加校验规则</el-button>
        <!-- <el-button type="success" @click="showSuccess">成功校验</el-button>
        <el-button type="danger" @click="showError">失败校验</el-button>
        <el-button type="warning" @click="showValidating">校验中</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
// 导入 element 组件
import {
  ElForm,
  ElFormItem,
  ElSelect,
  ElButton,
  ElInput,
  ElOption,
} from "element-plus";
// 导入 vue 指令
import { ref } from "vue";

// 表单数据
const data = ref({
  user: "",
  region: "",
});
const ruleChange = ref({
  error: "",
  status: "",
});

// 表单实例
const formRef = ref(null);

// 查询方法
const onSubmit = () => {
  formRef.value.validate((isValid, errors) => {
    console.log(isValid, errors);
    if (isValid) {
      console.log("成功");
    } else {
      console.log("失败");
      return;
    }
  });
  console.log(data.value);
};

// 添加校验规则
const addRule = () => {
  const userValidator = (rule, value, callback) => {
    if (value.length > 3) {
      callback();
    } else {
      callback(new Error("用户名长度必须大于3"));
    }
  };
  const newRule = [
    ...rules.value.user,
    { validator: userValidator, trigger: "change" },
  ];
  console.log(newRule);
  rules.value = Object.assign({}, rules.value, { user: newRule });
};

// 校验规则
const rules = ref({
  user: [{ required: true, trigger: "change", message: "用户名必须录入" }],
});

// 自定义错误信息
const showError = () => {
  ruleChange.value.status = "error";
  ruleChange.value.error = "用户名输入有误";
};
const showSuccess = () => {
  ruleChange.value.status = "success";
  ruleChange.value.error = "";
};
const showValidating = () => {
  ruleChange.value.status = "validating";
  ruleChange.value.error = "";
};
</script>
