import React from 'react'

function Character({ character }) {
  const statusStyle = (status) => {
    if (status === 'Alive') {
      return 'text-green-400/90'
    } else if (status === 'Dead') {
      return 'text-red-500'
    } else {
      return 'text-gray-400'
    }
  }

  return (
    <article className="lg:flex overflow-hidden bg-gray-700/70 shadow-md shadow-slate-900 rounded-xl w-full lg:max-w-xl max-w-[18rem] animate__animated animate__fadeIn">
      <img
        src={character.image}
        alt={character.name}
        className="lg:w-48 lg:h-full w-full h-56 object-top"
      />
      <div className="lg:px-6 px-4 py-3 w-full">
        <section className="py-1">
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <span className="text-base text-gray-300/80 font-medium">
            Status:{' '}
            <span className={statusStyle(character.status)}>
              {character.status}
            </span>
          </span>
        </section>
        <section className="py-1">
          <span className="text-lg font-medium text-gray-400/60">Species:</span>
          <p className="text-xl font-semibold text-gray-300">
            {character.species}
          </p>
        </section>
        <section className="py-1">
          <span className="text-lg font-medium text-gray-400/60">
            Last location:
          </span>
          <p className="text-xl font-semibold text-gray-300">
            {character.location.name}
          </p>
        </section>
      </div>
    </article>
  )
}

export default Character
