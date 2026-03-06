import { useState } from 'react'
import imageRickMorty from './img/rick.png'
import './App.css'
import Characters from './components/Character.jsx'

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi.results);
  }
  return (
    <>
      <div>
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
          <br />
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </div>
    </>
  )
}

export default App