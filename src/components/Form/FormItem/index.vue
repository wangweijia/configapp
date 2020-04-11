<template>
  <el-form-item v-bind="model.params" :prop="model.prop" >
    <template v-if="Components.Input === slotModel.componentItemType" >
      <Input :model="slotModel" :form="form" />
    </template>
  </el-form-item>
</template>

<script>

import Components from '../../../const/Components'
import Input from './items/input';

export default {
  name: 'WjFormItem',
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
  computed: {
    // 子控件
    slotModel() {
      return this.model.slotModel;
    }
  },
  created() {

  }
}
</script>

<style>

</style>