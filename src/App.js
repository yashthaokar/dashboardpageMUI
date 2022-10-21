import { Box } from '@mui/material'
import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <Box>
         <Navbar />         
        <Dashboard/>
  
    </Box>
  )
}

export default App