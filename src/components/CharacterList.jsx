import { useEffect, useState } from 'react'
import NavPage from './NavPage'
import Character from './Character'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      const characters = await response.json()
      setLoading(false)
      setCharacters(characters.results)
    }
    getCharacters()
  }, [page])

  return (
    <>
      {loading ? (
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="sm:text-3xl text-2xl font-light text-slate-200/50">
            Loading characters...
          </h2>
        </div>
      ) : (
        <div className='container mx-auto'>
          <NavPage page={page} setPage={setPage} />
          <div className="grid sm:grid-cols-2 grid-cols-1 justify-items-center gap-4">
            {characters.map((character) => {
              return <Character key={character.id} character={character} />
            })}
          </div>
          <NavPage page={page} setPage={setPage} />
        </div>
      )}
    </>
  )
}

export default CharacterList
