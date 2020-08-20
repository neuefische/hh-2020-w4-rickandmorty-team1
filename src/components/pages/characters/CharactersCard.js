import React from 'react'
import styled from 'styled-components'
import {Card, Text} from '../../ui/card/styledCardComponents'


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
    <Card>
      <ProfilePictureContainer>
        <img src={profilePic} alt="profilepicture" />
      </ProfilePictureContainer>
      <ProfileBioContainer>
        <Text>
          <h2>{name}</h2>
        </Text>
        <Bio>
          <ul>
            <li><Text>{species}</Text></li>
            <li><Text>{status}</Text></li>
            <li><Text>{gender}</Text></li>
            <li><Text>{episodeCount}</Text></li>
            <li><Text>{origin}</Text></li>
          </ul>
        </Bio>
      </ProfileBioContainer>
    </Card>
  )
}

const ProfilePictureContainer = styled.div``
const ProfileBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Bio = styled.div`
  ul {
    list-style: none;
  }
`
