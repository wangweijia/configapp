import Components from '../const/Components';

import FormItemModel from './formItemModel';
import Input from './formItems/input';

const FormItems: { [key: number]: any; } = {
  [Components.FormItem]: FormItemModel,
  [Components.Input]: Input
}

export default FormItems;
