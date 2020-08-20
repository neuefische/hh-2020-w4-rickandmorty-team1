import React from 'react'
import styled from 'styled-components/macro'
import { Card, Text, Description } from '../../ui/card/styledCardComponents'

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Dimension>
        <Description>Dimension</Description>
        <Text>{dimension}</Text>
      </Dimension>

      <Type>
        <Description>Type of location</Description>
        <Text>{type}</Text>
      </Type>

      <Residents>
        <Description>Characters in location</Description>
        <Text>{residents}</Text>
      </Residents>

      <Name>
        <Description>Name of location</Description>
        <Text>{name}</Text>
      </Name>
    </Card>
  )
}

const Dimension = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin-bottom: 5px;
`

const Type = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const Name = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;
`

const Residents = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`
