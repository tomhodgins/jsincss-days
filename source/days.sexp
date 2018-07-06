mixin('days', ['days', 'stylesheet'],
  prelude('  const day = [\'sunday\', \'monday\', \'tuesday\', \'wednesday\', \'thursday\', \'friday\', \'saturday\']\n\n',
    returnValue(
      prelude('days.some(test => day[new Date().getDay()] === test)\n\
        ? stylesheet\n\
        : \'\''))))
