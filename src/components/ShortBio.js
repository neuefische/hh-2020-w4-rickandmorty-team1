import React from 'react'
import styled from 'styled-components'
import {Card, Headline, Text, Description} from './ui/card/styledCardComponents'


export default function ShortBio({
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

const Wrapper = styled.section`
  box-shadow: 5px 5px 10px black;
  display: grid;
  align-items: flex-start;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  width: auto;
  margin: 20px;
  padding: 20px;
  background-color: lightblue;
`
const ProfilePictureContainer = styled.div``
const ProfileBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Name = styled.div``

const Bio = styled.div`
  ul {
    list-style: none;
  }
`
