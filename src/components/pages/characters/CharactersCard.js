import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Text,
  Headline,
  Description,
} from '../../ui/card/styledCardComponents'

export default function CharactersCard({
  profilePic,
  name,
  species,
  status,
  gender,
  episodeCount,
  origin,
}) {
  return (
    <ProfileCardStyled>
      <ImageStyled src={profilePic} alt="profilepicture" />
      <BioContainerStyled>
        <Headline>{name}</Headline>
        <DescriptionContainerStyled>
          <div>
            <Description>Species</Description>
            <Text>{species}</Text>
          </div>

          <div>
            <Description>Status</Description>
            <Text>{status}</Text>
          </div>

          <div>
            <Description>Gender</Description>
            <Text>{gender}</Text>
          </div>

          <div>
            <Description>Episode</Description>
            <Text>{episodeCount}</Text>
          </div>

          <div>
            <Description>Origin</Description>
            <Text>{origin}</Text>
          </div>
        </DescriptionContainerStyled>
      </BioContainerStyled>
    </ProfileCardStyled>
  )
}

const ProfileCardStyled = styled(Card)`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
`
const ImageStyled = styled.img`
  width: 60%;
  height: auto;
  grid-row: 1 / 2;
`

const BioContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2 / 3;
  padding: 25px;
`

const DescriptionContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
