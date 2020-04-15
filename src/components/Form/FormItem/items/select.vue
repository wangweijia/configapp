<template>
   <el-select key="select" v-bind="model.params" v-model="form[model.prop]" >
     <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
   </el-select>
</template>

<script>
export default {
  name: 'WjSelect',
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
  },
  computed: {
    // 选项
    options() {
      return this.model.options || []
    }
  }
}
</script>

<style>

</style>