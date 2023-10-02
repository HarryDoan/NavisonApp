import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const FORM_LOGIN = {
  email_or_phone: 'email_or_phone',
  pass: 'pass',
};

const schema = yup.object().shape({
  [FORM_LOGIN.email_or_phone]: yup
    .string()
    .required('CheckForm.required_email_phone'),
  [FORM_LOGIN.pass]: yup.string().required('CheckForm.required_pass'),
});

const formConfig = {
  resolver: yupResolver(schema),
  defaultValues: {
    [FORM_LOGIN.email_or_phone]: '',
    [FORM_LOGIN.pass]: '',
  },
};

export default formConfig;
