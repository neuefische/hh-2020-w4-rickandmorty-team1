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
        <img src={profilePic} />
      </ProfilePictureContainer>
      <ProfileBioContainer>
        <Name></Name>
        <Bio></Bio>
      </ProfileBioContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  box-shadow: 5px 5px 5px black;
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const ProfilePictureContainer = styled.div``
const ProfileBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Name = styled.div``

const Bio = styled.div``
