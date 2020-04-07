<template>
   <el-input key="input" v-bind="model.params" v-model="form[model.prop]" />
</template>

<script>
export default {
  props: {
    // 数据模型
    model: {
      type: Object,
      default: () => ({})
    },
    // 表单数据
    form: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>