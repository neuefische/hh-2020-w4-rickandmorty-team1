import React from 'react'
import styled from 'styled-components'

function PagesNav({ pages, onClick }) {
  const NavIcons = []
  for (let i = 0; i < pages; i++) {
    NavIcons.push(
      <PagesNavIcon key={i} onClick={() => onClick(i+1)}>
        {i + 1}
      </PagesNavIcon>
    )
  }

  return <PagesNavIcons>{NavIcons}</PagesNavIcons>
}

export default PagesNav

const PagesNavIcon = styled.span`
  background-color: #121212;
  color: white;
  font-size: 25px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #a0a0a0;
  cursor: pointer;
`
const PagesNavIcons = styled.div``
