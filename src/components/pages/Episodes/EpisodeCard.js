import React from 'react'
import styled from 'styled-components'
import {Card, Headline, Text, Description} from '../../styledComponents'

function EpisodeCard ({title, date, episode}) {
  return (
  <CardBox>
    <Title>
      <Description>Titel</Description>
      <Headline>{title}</Headline>
    </Title>
    
    <Date>
      <Description>Air Date</Description>
      <Text>{date}</Text>
    </Date>
    
    <Episode>
      <Description>Episode</Description>
      <Text>{episode}</Text>
    </Episode>
  </CardBox>
  )
}

export default EpisodeCard

const CardBox = styled(Card)`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
`

const Title = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    margin-bottom: 5px;
`

const Date = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const Episode = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`


