<template>
  <el-form-item v-bind="model.params" :prop="model.prop" >
    <template v-if="Components.Input === slotModel.componentItemType" >
      <Input :model="slotModel" :form="form" />
    </template>
    <template v-else-if="Components.Select === slotModel.componentItemType" >
      <Select :model="slotModel" :form="form" />
    </template>
  </el-form-item>
</template>

<script>

import Components from '../../../const/Components'
import Input from './items/input';
import Select from './items/select';

export default {
  name: 'WjFormItem',
  components: {
    Input,
    Select
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