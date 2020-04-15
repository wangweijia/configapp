<template>
  <el-form ref="form" :model="form" label-width="80px">
    <template v-for="(item, index) in formItemModels" >
      <FormItem :key="`${index}_${item.formItemType}`" :model="item" :form="form" />
    </template>
  </el-form>
</template>

<script>
import FormItem from './FormItem';
import FormItemModel from '../../models/formItems/formItemModel';
import Components from '../../const/Components';

export default {
  components: {
    FormItem,
  },
  data() {
    return {
      // 数据表单
      form: {},
      formItemModels: []
    }
  },
  created() {
    this.formItemModels = [
      // 文本输入
      new FormItemModel({
        componentItemType: Components.FormItem,
        prop: 'temp1',
        slot: {
          componentItemType: Components.Input,
          params: {},
        },
        params: {
          label: 'input'
        }
      }),
      new FormItemModel({
        componentItemType: Components.FormItem,
        prop: 'temp2',
        slot: {
          componentItemType: Components.Select,
          params: {
            placeholder: '爱爱爱'
          },
          options: [
            {label: 'ssss', value: 1}
          ]
        },
        params: {
          label: 'select'
        }
      }),
    ];

    console.log(this.formItemModels);
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
}
</script>

<style>

</style>