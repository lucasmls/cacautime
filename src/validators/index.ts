import * as Yup from 'yup'

const registerDutyValidation =  Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  price: Yup.string()
    .required('O campo de preço é obrigatório')
})

export {
  registerDutyValidation,
}