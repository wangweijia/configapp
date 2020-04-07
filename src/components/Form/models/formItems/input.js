import Base from '../baseModel';

export default class InputModel extends Base {
    // 数据绑定参数
    prop = undefined;

    constructor(props) {
      super(props);
      
      const { prop } = props;

      this.prop = prop;
    }
}