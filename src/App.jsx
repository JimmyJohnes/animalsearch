import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [animals,setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery);
  },[]);

  const search = async (q) =>
  {
    const response = await fetch(`http://localhost:8080/animals?q=${q}`);
    const data = await response.json();
    setAnimals(data);
    localStorage.setItem('lastQuery',q)
  }

  return (
    <>
      <input
      type='text'
      onChange={(e) => search(e.target.value)}
      placeholder='Enter Animal Type'
      />
      <ul>
        {animals.map((animal) => {
          return <li key={animal.i}>{animal.type}: {animal.name},  {animal.age} years old</li>
        })}
        {animals.length === 0 ? 'no animals found' : null}
      </ul>
    </>
  )
}

export default App
