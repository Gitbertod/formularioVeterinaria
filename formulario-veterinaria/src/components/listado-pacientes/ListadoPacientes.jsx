import React from 'react'
import Paciente from '../paciente/Paciente'
import style from './ListadoPaciente.module.css'

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className={style.listadoPacientes}>
      <div>ListadoPacientes</div>
      {pacientes.map(paciente =>
        <Paciente
          key={paciente.id}
          paciente={paciente}
        />)}


    </div>

  )
}

export default ListadoPacientes