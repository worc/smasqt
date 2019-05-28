import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Day from './Day'

const Month = ({ order, name, asciiName, translation, origin, days, type, hash }) => {
  const shortHash = hash.slice(0, 6)
  return (
    <Container order={ order } type={ type }>
      <Info shortHash={ shortHash }>
        <h1>
          <div>{ name }</div>
          <div>({ asciiName })</div>
        </h1>
        <Hidden><h2>"{ translation }", from { origin }</h2></Hidden>
      </Info>
      <Days>
        { [...Array(days)].map((day, index) => <Day key={ asciiName+index } shortHash={ shortHash }/>) }
      </Days>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 50%;
`

const Info = styled.div`
  flex: 1 1 50%;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  border: 3px solid ${ props => `#${props.shortHash}`};
  border-radius: 3px;
  padding: 16px;
`

const Days = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
`

const Hidden = styled.div`
  display: none;
`

Month.propTypes = {
  order: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['lunar', 'solar']),
  hash: PropTypes.string,
}

export default Month
