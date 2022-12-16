import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classes from "./App.module.scss"
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/widgets/navbar/NavBar'

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
