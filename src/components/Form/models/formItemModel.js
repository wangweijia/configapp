import BaseModel from './baseModel';
import Compoennts from '../../../const/Components';

import Input from './formItems/input';

const FormItems = {
  [Compoennts.Input]: Input
}

export default class FormItemModel extends BaseModel {
  // 表单类型
  formItemType = Compoennts.Null;
  // 表单内部 原型
  slotModel = undefined;
  // 数据绑定参数
  prop = undefined;
  // 绑定参数
  // params = {};

  constructor(props) {
    super(props);

    const {
      formItemType,
      prop,
      slot
    } = props;
    
    console.log(props);

    this.formItemType = formItemType;
    this.prop = prop;
    this.slotModel = this.initSlotModel({
      ...slot,
      prop
    });
  }

  // 获取当前的 表单类型数据模型
  currentFormItem() {
    return FormItems[this.formItemType];
  }

  // 初始化 内容item
  initSlotModel(params) {
    const Model = this.currentFormItem();
    if (Model) {
      return new Model(params);
    }
    return {
      ...params
    }
  }
}