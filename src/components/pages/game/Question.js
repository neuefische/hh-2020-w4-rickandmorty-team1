import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FeedbackModal from './FeedbackModal'

export default function Question({ character, loadNextCharacter }) {
  const [onClickFeedback, setOnClickFeedback] = useState()

  function evaluateAnswer(event) {
    if (character.status === event.target.innerHTML) {
      setOnClickFeedback(
       <FeedbackModal text="Correct Answer!" type="success"/>
      )
    } else {
      setOnClickFeedback(
        <FeedbackModal text="Wrong Answer!" type="failure"/>
      )
    }
    loadNextCharacter()

    setTimeout(() => {
      setOnClickFeedback('')
    }, 2000)
  }

  return (
    <QuestionBox>
      {onClickFeedback}
      <Image src={character.image} />
      <AliveButton onClick={(event) => evaluateAnswer(event)}>
        Alive
      </AliveButton>
      <DeadButton onClick={(event) => evaluateAnswer(event)}>Dead</DeadButton>
      <UnknownButton>Unknown</UnknownButton>
    </QuestionBox>
  )
}

const QuestionBox = styled.div`
  display: grid;
  grid-template-columns: auto 150px auto;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
const Image = styled.img`
  border-radius: 50%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
`

const Button = styled.button`
  text-decoration: none;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  margin: 20px 0px 0px 0px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
`

const AliveButton = styled(Button)`
  background-color: #26a69a;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`

const DeadButton = styled(Button)`
  background-color: #e63946;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
`

const UnknownButton = styled(Button)`
  background-color: #a0a0a0;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`
