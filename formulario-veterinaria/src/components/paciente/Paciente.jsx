import style from './Paciente.module.css'
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, alta, sintomas, id } = paciente
    const handleEliminar = () =>{
        const respuesta = confirm('Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    
    return (
        <div className={style.paciente}>
            <p>Nombre: <span>{nombre}</span> </p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Alta: <span>{alta}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>

            <div className={style.botonesPaciente}>
                <button
                    type='button'
                    className={style.editar}
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>

                <button
                    type='button'
                    className={style.eliminar}
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente