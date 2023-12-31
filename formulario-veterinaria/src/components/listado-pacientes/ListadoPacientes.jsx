import React from 'react'
import Paciente from '../paciente/Paciente'
import style from './ListadoPaciente.module.css'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className={style.listadoPacientes}>
      <div className={style.tituloListado}><h2>ListadoPacientes</h2></div>
      {pacientes.map(paciente =>
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />)}


    </div>

  )
}

export default ListadoPacientes