import React from 'react'
// import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Timeline from './timeline'
import LunarCalendar from './lunar_calendar'

export default () => (
  <div>
    <Timeline calendar={ LunarCalendar } />
  </div>
)

