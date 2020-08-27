import * as Yup from 'yup'

const loginValidation = Yup.object().shape({
  username: Yup.string()
    .required('O campo de usuário é obrigatório'),

  password: Yup.string()
    .required('O campo de senha é obrigatório')
})

const registerCandyValidation = Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório')
    .max(100, 'O nome do doce deve conter no máximo 100 caracteres'),

  price: Yup.string()
    .required('O campo de preço é obrigatório')
    .min(4, "Por favor, insira todas as casas decimais")
})

const registerCustomerValidation = Yup.object().shape({
  name: Yup.string()
    .required('O campo de nome é obrigatório'),

  phone: Yup.string()
    .min(8, 'O número de telefone deve conter pelo menos 8 caracteres')
    .max(11, 'O número de telefone deve conter no máximo 11 caracteres')
})

const registerSaleValidation = Yup.object().shape({
  customerId: Yup.number()
    .required('O campo de usuário é obrigatório')
    .nullable(),

  dutyId: Yup.number()
    .required('O campo de plantão é obrigatório')
    .nullable(),

  candyId: Yup.number()
    .required('O campo de doce é obrigatório')
    .nullable(),

  status: Yup.string()
    .oneOf(["paid", "not_paid"])
    .required('O campo de status é obrigatório'),

  paymentMethod: Yup.string()
    .oneOf(["money", "transfer", "scheduled"])
    .required('O campo de método de pagamento é obrigatório'),
})

export {
  loginValidation,
  registerCandyValidation,
  registerCustomerValidation,
  registerSaleValidation,
}