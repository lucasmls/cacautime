export const toEnUSDate = (date: Date) => {
  const [month, day, year] = new Intl.DateTimeFormat('en-US').format(date).split("/")
  return `${year}-${month}-${day}`
}