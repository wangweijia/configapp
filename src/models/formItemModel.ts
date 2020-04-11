import BaseModel from './baseModel';
import FormItems from './index';

export default class FormItemModel extends BaseModel {
  // 数据绑定参数
  prop:any = undefined;

  constructor(props: any) {
    super(props);

    const {
      prop,
    } = props;
    
    this.prop = prop;
  }

  // 获取当前的 表单类型数据模型
  currentFormItem() {
    return FormItems[this.componentItemType];
  }

  // 初始化 内容item
  initSlotModel(params: any, superItem: any) {
    const { componentItemType } = params;
    if (componentItemType) {
      const Model = FormItems[componentItemType];
      if (Model) {
        return new Model({
          prop: superItem.prop, ...params
        });
      }
    }
    
    return {
      ...params
    }
  }
}