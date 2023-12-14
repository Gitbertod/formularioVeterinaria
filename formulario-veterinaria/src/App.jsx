import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/formulario'

import './App.css'

function App() {
  const [paciente, setPaciente] = useState([])

  return (
    <>
      <Header></Header>
      <Formulario
        paciente={paciente}
        setPaciente ={setPaciente}

      />

    </>
  )
}

export default App
