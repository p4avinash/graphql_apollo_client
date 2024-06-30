import React from "react"
import "./CharacterList.css"
import { useCharacters } from "../hooks/useCharacters"
import { Link } from "react-router-dom"

const CharacterList = () => {
  const { data, error, loading } = useCharacters()

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Something went wrong!</h1>
  }

  return (
    <div className='character-list'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character?.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}

export default CharacterList
