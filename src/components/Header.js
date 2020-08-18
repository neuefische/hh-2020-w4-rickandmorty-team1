import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ text }) {
  return (
    <HeaderStyled>
      <h1>{text}</h1>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 200;
  background-color: hotpink;
  padding: 10px;
  h1 {
    text-align: center;
    margin: 0%;
    font-size: 200%200%;
  }
`
