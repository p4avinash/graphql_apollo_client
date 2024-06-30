import React from "react"
import { useCharacter } from "../hooks/useCharacter"
import "./Character.css"
import { useParams } from "react-router-dom"

const Character = () => {
  const { id } = useParams()
  const { data, error, loading } = useCharacter(id)

  if (error) {
    return <h1>Something went wrong!</h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='character'>
      <img src={data?.character?.image} alt={data.character.name} />
      <div className='character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='character-episode'>
          {data.character.episode.map((episode) => {
            return (
              <div className='episode' key={episode.episode}>
                {episode.name} - {episode.episode}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Character
