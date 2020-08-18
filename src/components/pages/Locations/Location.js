import React from 'react'
import styled from 'styled-components/macro'

export default function Location({ name, type, dimension, residents }) {
  return (
    <Wrapper>
      <Dimension>Dimension: {dimension}</Dimension>
      <TypeContainer>Type of location: {type}</TypeContainer>
      <Name>
        <h2>{name}</h2>
      </Name>
      <Residents>
        <ul>
          <li>Characters on location: {residents}</li>
        </ul>
      </Residents>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  box-shadow: 5px 5px 10px black;
  display: grid;
  align-items: flex-start;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  width: max-content;
  margin: 20px;
  padding: 20px;
  background-color: lightblue;
`
const Dimension = styled.div``
const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Name = styled.div``

const Residents = styled.div`
  ul {
    list-style: none;
  }
`
