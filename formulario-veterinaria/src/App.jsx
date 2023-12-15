import { useState } from 'react'
import Header from './components/header/Header'
import Formulario from './components/formulario/Formulario'
import ListadoPacientes from './components/listado-pacientes/ListadoPacientes'

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
