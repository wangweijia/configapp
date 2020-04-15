import BaseComponents from './baseComponents';

interface SelectOptions {
  lebel: string,
  value: any
}

export default class SelectModel extends BaseComponents {
  // 选项 
  options: SelectOptions[] = [];

  constructor(props: any) {
    super(props);
    
    const { options } = props;
    this.options = options;
  }
}
