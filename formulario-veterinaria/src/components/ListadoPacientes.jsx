import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div>
      <div>ListadoPacientes</div>
      {pacientes.map(paciente =>
        <Paciente paciente={paciente}
        />)}


    </div>

  )
}

export default ListadoPacientes