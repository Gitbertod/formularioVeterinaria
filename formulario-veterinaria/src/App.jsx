import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/formulario'
import ListadoPacientes from './components/ListadoPacientes'

import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <>
      <Header></Header>
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
      />

      <ListadoPacientes
        pacientes={pacientes}
      />

    </>
  )
}

export default App
