 import * as Yup from 'yup';


export const DisplayingErrorMessagesSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   userId: Yup.string()
   .min(5, 'Too Short!')
   .max(15, 'Too Long!')
   .required('Required')
 });