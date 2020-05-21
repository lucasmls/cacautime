export const toBRL = (value: number) => (
  new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(value)
)

export const sanitizePrice = (price: string) => (
  Number(price.replace('.', ''))
)
