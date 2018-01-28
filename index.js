export default (options, stylesheet) => {

  const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  const results = []

  for (let test in options) {

    results.push(day[new Date().getDay()] === options[test] ? true : false)

  }

  return results.includes(true) ? stylesheet : ''

}