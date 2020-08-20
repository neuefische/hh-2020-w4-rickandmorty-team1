import React from 'react'
import styled from 'styled-components'

export default function Form({ onCreateSearch }) {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <LocationInput name="search" placeholder="search" />
      <Button>Find location</Button>
    </SearchForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { search: searchInput } = form
    onCreateSearch({
      search: searchInput.value,
    })
    form.reset()
    searchInput.focus()
  }
}

const SearchForm = styled.form`
  padding: 20px;
`

const LocationInput = styled.input`
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  margin: 20px 0px 0px 0px;
  margin: 20px;
`

const Button = styled.button`
  text-decoration: none;
  color: black;
  text-align: center;
  border: none;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  margin: 20px 0px 0px 0px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
`
