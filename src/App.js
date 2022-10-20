import React from 'react'
import { AboutUser } from './components/AboutUser'
import WorkExperience from './components/WorkExperience'
import './App.css'
import Education from './components/Education'
import Skills from './components/Skills'
import PrintButton from './components/PrintButton'
import CanPrintProvider from './components/CanPrintProvider'

export const PrintContext = React.createContext(null)

const App = () => {
  return (
    <div className='App'>
      <CanPrintProvider>
        <AboutUser />
        <WorkExperience />
        <Education />
        <Skills />
        <PrintButton />
      </CanPrintProvider>
    </div>
  )
}

export default App
