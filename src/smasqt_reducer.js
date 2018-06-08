const defaultSmasqt = {
  dayOfTheYear: 1,
  lunarCalendar: {},
  solarCalendar: {}
}

export default function smasqt(smasqt = defaultSmasqt, action) {
  switch (action.type) {
    default:
      return smasqt
  }
}
