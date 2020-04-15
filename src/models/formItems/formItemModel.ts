import FormItems from '../index';
import BaseComponent from './baseComponents';

export default class FormItemModel extends BaseComponent {
  constructor(props: any) {
    super(props);
  }

  // 初始化 内容item
  initSlotModel(params: any, superItem: any) {
    console.log('FormItemModel');
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