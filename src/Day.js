import React from 'react'
import styled from 'styled-components'

const DaySquare = styled.div`
    border: 3px solid ${ props => `#${props.hex}` };
    border-radius: 3px;
    margin: 0 1px;
    height: 7px;
    min-width: 7px;
    opacity: 0.7;
`

export default ({ month, dayOfMonth, shortHash }) => (
  <DaySquare month={ month } dayOfMonth={ dayOfMonth } hex={ shortHash } />
)
