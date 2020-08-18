import React from 'react'
import styled from 'styled-components'

function EpisodeCard ({title, date, episode}) {
  return (
  <CardBox>
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Episode>{episode}</Episode>
  </CardBox>
  )
}

export default EpisodeCard

const CardBox = styled.div`
background-color: #121212;
border-radius: 20px;
margin: 0px 50px 20px 50px;
padding: 10px 20px 10px 20px;
`

const Title = styled.h2`
  color: white;
`

const Date = styled.span`
  color: white;
  display: block;
`

const Episode = styled.span`
  color: white;
`


