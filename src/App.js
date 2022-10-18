import React from 'react'
import { AboutUser } from './components/AboutUser'
import WorkExperience from './components/WorkExperience'
import './App.css'
import Education from './components/Education'

function App() {
  return (
    <div className='App'>
      <AboutUser />
      <WorkExperience />
      <Education />
    </div>
  )
}

export default App
