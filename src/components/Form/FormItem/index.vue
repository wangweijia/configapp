<template>
  <el-form-item v-bind="model.params">
    <template v-if="Components.Input === model.formItemType" >
      <Input :model="model.slotModel" :form="form" />
    </template>
  </el-form-item>
</template>

<script>

import Components from '../../../const/Components'
import Input from './items/input';

export default {
  components: {
    Input
  },
  data() {
    return {
      // 控件类型
      Components,
    }
  },
  props: {
    // 数据模型
    model: {
      type: Object,
      default: ()=>({})
    },
    // 表单数据
    form: {
      type: Object,
      default: () => ({})
    }
  },
  created() {

  }
}
</script>

<style>

</style>