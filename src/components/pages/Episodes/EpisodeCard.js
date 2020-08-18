import React from 'react'
import styled from 'styled-components'

function EpisodeCard ({title, date, episode}) {
  return (
  <CardBox>
    <Title>
      <TitleDescription>Titel</TitleDescription>
      <TitleText>{title}</TitleText>
    </Title>
    
    <Date>
      <DateDescription>Air Date</DateDescription>
      <DateText>{date}</DateText>
    </Date>
    
    <Episode>
      <EpisodeDescription>Episode</EpisodeDescription>
      <EpisodeText>{episode}</EpisodeText>
    </Episode>
  </CardBox>
  )
}

export default EpisodeCard

const CardBox = styled.div`
background-color: #121212;
border-radius: 20px;
margin: 0px 50px 20px 50px;
padding: 20px 20px 20px 20px;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
width: 80%;
`

const Title = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin-bottom: 5px;
`

const TitleText = styled.h2`
  padding: 0px;
  margin: 0px;
  color: white;
`
const TitleDescription = styled.span`
  color: #A0A0A0;
  font-size: 13px;
`

const Date = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const DateDescription = styled.span`
  color: #A0A0A0;
  font-size: 13px;
`

const DateText = styled.span`
  color: white;
  display: block;
`

const Episode = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

const EpisodeDescription = styled.span`
  color: #A0A0A0;
  font-size: 13px;
`
const EpisodeText = styled.span`
  color: white;
  display: block;
`


