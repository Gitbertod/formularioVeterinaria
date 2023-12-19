import { useState } from 'react'
import Header from './components/header/Header'
import Formulario from './components/formulario/Formulario'
import ListadoPacientes from './components/listado-pacientes/ListadoPacientes'

import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    console.log(pacientesActualizados)

    setPacientes(pacientesActualizados)
  }

  return (
    <>
      <Header></Header>
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />

      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />

    </>
  )
}

export default App
