import BaseModel from './baseModel';
import FormItems from './index';

export default class FormModel extends BaseModel {
  constructor(props: any) {
    super(props);
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