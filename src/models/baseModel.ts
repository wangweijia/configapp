import Components from '../const/Components';
// import FormItems from './formItems';

export default class BaseModel {
  // 控件类型
  componentItemType:Components = Components.Null;
  // 绑定参数
  params = {};
  // 内部 原型
  slotModel: BaseModel | undefined;

  constructor(props: any) {
    const { params, componentItemType, slot } = props;
    this.params = params;
    this.componentItemType = componentItemType;

    if (slot) {
      this.slotModel = this.initSlotModel(slot, props);
    }
  }

  // 初始化 内容item
  initSlotModel(params: any, superItem: any) {
    if (params) {
      return new BaseModel(params);
    }
    return undefined;
  }
}