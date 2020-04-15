import Components from '../const/Components';

import FormModel from './formModel';
import FormItemModel from './formItems/formItemModel';
import InputModel from './formItems/input';
import SelectModel from './formItems/select';

const FormItems: { [key: number]: any; } = {
  [Components.Form]: FormModel,
  [Components.FormItem]: FormItemModel,
  [Components.Input]: InputModel,
  [Components.Select]: SelectModel
}

export default FormItems;
