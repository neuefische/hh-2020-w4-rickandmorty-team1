import React from 'react'
import styled from 'styled-components/macro'

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <CardBox>
      <Dimension>
        <DimensionDescription>Dimension</DimensionDescription>
        <DimensionText>{dimension}</DimensionText>
      </Dimension>

      <Type>
        <TypeDescription>Type of location</TypeDescription>
        <TypeText>{type}</TypeText>
      </Type>

      <Residents>
        <ResidentsDescription>Characters in location</ResidentsDescription>
        <ResidentsText>{residents}</ResidentsText>
      </Residents>

      <Name>
        <NameDescription>Name of location</NameDescription>
        <NameText>{name}</NameText>
      </Name>
    </CardBox>
  )
}

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

const Dimension = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin-bottom: 5px;
`

const DimensionText = styled.h2`
  padding: 0;
  margin: 0;
  color: white;
`
const DimensionDescription = styled.span`
  color: #a0a0a0;
  font-size: 13px;
`

const Type = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`

const TypeDescription = styled.span`
  color: #a0a0a0;
  font-size: 13px;
`

const TypeText = styled.span`
  color: white;
  display: block;
`

const Name = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;
`

const NameDescription = styled.span`
  color: #a0a0a0;
  font-size: 13px;
`

const NameText = styled.span`
  color: white;
  display: block;
`

const Residents = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

const ResidentsDescription = styled.span`
  color: #a0a0a0;
  font-size: 13px;
`
const ResidentsText = styled.span`
  color: white;
  display: block;
`