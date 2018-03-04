export default (days, stylesheet) => {

  const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return days.some(test => day[new Date().getDay()] === test)
         ? stylesheet
         : ''

}