import React from 'react'
import styled from 'styled-components'

export default function NavButton({ borderPic, buttonLabel }) {
  return (
    <ButtonWrapper>
      <Picture src={borderPic} />
      <ButtonLabel>
        <span>{buttonLabel}</span>
      </ButtonLabel>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: none;
  border: none;
  box-shadow: 0 0 15px black;
  border-radius: 15px 15px 0 0;
`
const Picture = styled.img`
  border-radius: 15px 15px 0 0;
  width: 220px;
`
const ButtonLabel = styled.div`
  height: 60px;
  opacity: 0.6;

  background: #1c703f;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`
