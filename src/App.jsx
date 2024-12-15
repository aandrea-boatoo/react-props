import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import posts from './data/post';


function App() {

  return (
    <>
      <header>
        <h1>post react props</h1>
      </header>
      <main>
        <Card title={posts.title} content={posts.content} />
      </main>
    </>
  )
}

export default App
