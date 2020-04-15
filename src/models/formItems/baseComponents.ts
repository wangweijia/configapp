import FormItems from '../index';
import BaseModel from '../baseModel';

export default class BaseComponents extends BaseModel {
  prop: string | undefined;

  constructor(props: any) {
    super(props);

    const { prop } = props;
    this.prop = prop;
  }

  // 初始化 内容item
  initSlotModel(params: any, superItem: any) {
    console.log('BaseComponents');
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