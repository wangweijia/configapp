import BaseModel from '../baseModel';

export default class InputModel extends BaseModel {
  // // 数据绑定参数
  prop = undefined;

  constructor(props: any) {
    super(props);
    
    const { prop } = props;
    this.prop = prop;
  }
}