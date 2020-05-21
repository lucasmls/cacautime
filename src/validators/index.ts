import * as Yup from 'yup'

const registerDutyValidation =  Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  price: Yup.string()
    .required('O campo de preço é obrigatório')
    .min(4, "Por favor, insira todas as casas decimais")
})

export {
  registerDutyValidation,
}