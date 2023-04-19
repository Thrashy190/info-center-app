const rangeYear = () => {
  const max = new Date().getFullYear()
  const min = 1900
  const years = []

  for (let i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}

export { rangeYear }
