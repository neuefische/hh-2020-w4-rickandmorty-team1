import React from 'react' 
import styled from 'styled-components'

export default function Question ({character}) {
  return <QuestionBox>
    <Image src={character.image}/>
  </QuestionBox>
}

const QuestionBox = styled.div`
  display:grid;
  grid-template-columns: 20px 150PX 20px;
  justify-content: center;
`
const Image = styled.img`
  border-radius: 50%;
  grid-column: 2 / 3;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
`