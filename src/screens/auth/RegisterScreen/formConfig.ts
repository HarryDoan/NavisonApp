import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const FORM_REGISTER = {
  phone: 'phone',
  sharer_phone: 'sharer_phone',
  pass: 'pass',
  confirm_pass: 'confirm_pass',
  email: 'email',
  name: 'name',
  note: 'note',
};

const schema = yup
  .object({
    [FORM_REGISTER.phone]: yup
      .string()
      .nullable()
      .required('CheckForm.required_phone')
      .min(10, 'CheckForm.min_phone'),
    [FORM_REGISTER.pass]: yup
      .string()
      .required('CheckForm.required_pass')
      .min(6, 'CheckForm.min_pass'),
    [FORM_REGISTER.confirm_pass]: yup
      .string()
      .required('CheckForm.required_pass_confirm')
      .min(6, 'CheckForm.min_pass')
      .oneOf([yup.ref('pass')], 'CheckForm.matches_confirm_pass'),
    [FORM_REGISTER.name]: yup
      .string()
      .required('CheckForm.required_name')
      .max(20, 'CheckForm.max_name')
      .min(2, 'CheckForm.min_name'),
    [FORM_REGISTER.email]: yup
      .string()
      .email('CheckForm.required_matches')
      .required('CheckForm.required_email'),
  })
  .required();

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_REGISTER.phone]: '',
    [FORM_REGISTER.sharer_phone]: '',
    [FORM_REGISTER.pass]: '',
    [FORM_REGISTER.confirm_pass]: '',
    [FORM_REGISTER.email]: '',
    [FORM_REGISTER.name]: '',
    [FORM_REGISTER.note]: '',
  },
};

export default formConfig;
