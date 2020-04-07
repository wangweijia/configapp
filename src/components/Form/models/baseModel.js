export default class BaseModel {
  // 绑定参数
  params = {};

  constructor(props) {
    this.params = props.params;
  }
}