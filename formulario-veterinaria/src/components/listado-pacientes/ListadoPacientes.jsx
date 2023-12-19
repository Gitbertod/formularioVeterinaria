import React from 'react'
import Paciente from '../paciente/Paciente'
import style from './ListadoPaciente.module.css'

const ListadoPacientes = ({ pacientes,setPaciente }) => {
  return (
    <div className={style.listadoPacientes}>
      <div>ListadoPacientes</div>
      {pacientes.map(paciente =>
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
        />)}


    </div>

  )
}

export default ListadoPacientes