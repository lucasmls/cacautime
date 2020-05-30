import * as Yup from 'yup'

const registerCandyValidation =  Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  price: Yup.string()
    .required('O campo de preço é obrigatório')
    .min(4, "Por favor, insira todas as casas decimais")
})

const registerCustomerValidation =  Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  phone: Yup.string()
    .required('O campo de telefone é obrigatório')
})

const registerDutyValidation =  Yup.object().shape({
  date: Yup.string()
    .required('O campo de data é obrigatório'),

  candyQuantity: Yup.number()
    .required('O campo de quantidade é obrigatório')
    .min(1, 'O valor mínimo de doces é 1')
})

export {
  registerCandyValidation,
  registerCustomerValidation,
  registerDutyValidation,
}