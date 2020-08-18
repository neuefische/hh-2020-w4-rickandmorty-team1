import React from 'react'
import styled from 'styled-components/macro'

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
    <Wrapper>
      <ProfilePictureContainer>
        <img src={profilePic} alt="profilepicture" />
      </ProfilePictureContainer>
      <ProfileBioContainer>
        <Name>
          <h2>{name}</h2>
        </Name>
        <Bio>
          <ul>
            <li>{species}</li>
            <li>{status}</li>
            <li>{gender}</li>
            <li>{episodeCount}</li>
            <li>{origin}</li>
          </ul>
        </Bio>
      </ProfileBioContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  box-shadow: 5px 5px 10px black;
  display: grid;
  align-items: flex-start;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  width: max-content;
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
