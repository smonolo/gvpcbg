const italianDate = new Intl.DateTimeFormat('it-IT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function formatItalianDate(value: string | Date) {
  return italianDate.format(typeof value === 'string' ? new Date(value) : value)
}
