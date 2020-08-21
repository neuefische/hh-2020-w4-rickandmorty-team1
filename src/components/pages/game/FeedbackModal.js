import React from 'react'
import styled from 'styled-components'

export default function FeedbackModal ({text, type}) {
  return (
    <Answer color={type === 'failure' ? '#e63946' : '#26a69a'}>
      <AnswerHeadline>{text}</AnswerHeadline>
    </Answer>)
}

const Answer = styled.div`
  background-color: ${(props) => props.color};
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  z-index: 200;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 20px;
`

const AnswerHeadline = styled.h1`
  font-size: 40px;
  color: white;
`