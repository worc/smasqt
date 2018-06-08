import React from 'react'
import styled from 'styled-components'

import Day from './day'

export const monthNames = [
  'naqs',
  'ʔasíl̓',
  'kaʔłís',
  'mus',
  'yus',
  'l̓kʷut',
  'k̓ram',
  'k̓ʷul̓m',
  'l̓kalát',
  'aban',
  'rajab',
  'mesa',
  'smasq̓t',
  'mercedonius'
]

export const monthNamesHashed = [
  '67d341d73951f798894287c110d9d41c',
  'ff01abae3cd881ec6e0586365d5648fc',
  '60af0c83a4ec98c1908595ce23f6047c',
  'd62ec24d065e424dd816ce7828f62584',
  'efb6e5a9e90a1126301802ee0b3f11b8',
  '8cc1aaf085b54e5864a03b0828f2cf62',
  '8004da1dce5113023c1b98e131326db6',
  'ab806445bb199bfe5890802cb9f5e3f0',
  '7c5bd82546e9892a4f698ffce8e2c1f0',
  '39cc8112db6ac295f4bce9e33514230f',
  '30afd999041f26304f224dcdbe4386cf',
  '85770ae9def3473f559e0dbe0609060a',
  'c97d5922844d0a04c5e063782f1450c0',
  'd21fa0ea01e2d1593c6ecd86e5450deb'

]

export const monthAsciiNames = [
  'naqs',
  'asil',
  'kalis',
  'mus',
  'yus',
  'lkwut',
  'kram',
  'kwulm',
  'lkalat',
  'aban',
  'rajab',
  'mesa',
  'smasqt',
  'mercedonius'
]

export const monthsByName = {
  naqs: { length: 26, translation: 'one',  origin: 'salish' },
  asil: { length: 26, translation: 'two',  origin: 'salish' },
  kalis: { length: 26, translation: 'three',  origin: 'salish' },
  mus: { length: 26, translation: 'four',  origin: 'salish' },
  yus: { length: 26, translation: 'purple',  origin: 'salish' },
  lkwut: { length: 26, translation: 'far',  origin: 'salish' },
  kram: { length: 26, translation: 'swim',  origin: 'salish' },
  kwulm: { length: 26, translation: 'work',  origin: 'salish' },
  lkalat: { length: 26, translation: 'bread',  origin: 'salish' },
  aban: { length: 26, translation: 'waters',  origin: 'persian' },
  rajab: { length: 26, translation: 'respect',  origin: 'islam' },
  mesa: { length: 26, translation: 'ram',  origin: 'khmer' },
  smasqt: { length: 26, translation: 'thursday',  origin: 'salish' },
  mercedonius: { length: 13, translation: 'work month',  origin: 'roman' }
}

const Timeline = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export default class LunarCalendar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Timeline>
        {
          monthAsciiNames.reduce( (acc, monthAsciiName, monthIndex) => {
            const monthDays = [ ...Array(monthsByName[monthAsciiName].length) ]

            return acc.concat(monthDays.map( (v, i)  => {
              return <Day
                key={ monthAsciiName + i }
                month={ monthNames[monthIndex] }
                dayOfMonth={ i + 1 }
                shortHash={ monthNamesHashed[monthIndex].slice(0, 6) }
              />
            }))
          }, [])
        }
      </Timeline>
    )
  }
}
