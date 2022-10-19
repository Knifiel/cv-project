import React from 'react'
import { AboutUser } from './components/AboutUser'
import WorkExperience from './components/WorkExperience'
import './App.css'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  return (
    <div className='App'>
      <AboutUser />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  )
}

export default App
