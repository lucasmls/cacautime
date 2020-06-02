import * as Yup from 'yup'

const registerCandyValidation = Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  price: Yup.string()
    .required('O campo de preço é obrigatório')
    .min(4, "Por favor, insira todas as casas decimais")
})

const registerCustomerValidation = Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  phone: Yup.string()
    .required('O campo de telefone é obrigatório')
})

const registerDutyValidation = Yup.object().shape({
  date: Yup.string()
    .required('O campo de data é obrigatório'),

  candyQuantity: Yup.number()
    .required('O campo de quantidade é obrigatório')
    .min(1, 'O valor mínimo de doces é 1')
})

const registerSaleValidation = Yup.object().shape({
  customerId: Yup.number()
    .required('O campo de usuário é obrigatório'),

  dutyId: Yup.number()
    .required('O campo de plantão é obrigatório'),

  candyId: Yup.number()
    .required('O campo de doce é obrigatório'),

  status: Yup.string()
    .oneOf(["paid", "not_paid"])
    .required('O campo de status é obrigatório'),

  paymentMethod: Yup.string()
    .oneOf(["money", "transfer", "scheduled"])
    .required('O campo de método de pagamento é obrigatório'),
})

export {
  registerCandyValidation,
  registerCustomerValidation,
  registerDutyValidation,
  registerSaleValidation,
}