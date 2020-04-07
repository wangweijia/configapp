export default class BaseModel {
  // 绑定参数
  params = {};

  constructor(props: any) {
    this.params = props.params;
  }
}