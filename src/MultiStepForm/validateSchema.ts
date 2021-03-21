import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Неверный email').required('Необходимо ввести email'),
  password: Yup.string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .required('Необходимо ввести пароль'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароль должен совпадать')
    .required('Необходимо повторно ввести пароль')
  // fio: Yup.string().required('Необходимо ввести значение')
});

export const DetailSchema = Yup.object().shape({
  fio: Yup.string().required('Необходимо ввести значение')
});

export const validationSchemas = [LoginSchema, DetailSchema];
