import React from 'react'
import CharacterList from './components/CharacterList'

function App() {
  return (
    <div className='text-slate-200 w-full'>
      <header className='flex flex-col justify-center items-center h-64 py-9 px-6'>
        <h1 className='sm:text-7xl text-4xl font-bold mb-3'>Rick and Morty</h1>
        <p className='sm:text-3xl text-2xl font-semibold text-lime-450/80'>Characters</p>
      </header>
      <main className='md:px-8 px-6'>
        <CharacterList />
      </main>
    </div>
  )
}

export default App
