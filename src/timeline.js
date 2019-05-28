import React from 'react'
import styled from 'styled-components'
import Month from './month'

export default ({ calendar }) => (
  <Timeline>
    { calendar.map(month => <Month { ...month }/>)}
  </Timeline>
)

const Timeline = styled.div`
  display: flex;
  flex-flow: column nowrap;
`
