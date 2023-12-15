import style from './Paciente.module.css'
const Paciente = ({ paciente }) => {
    const { nombre, propietario, email, alta, sintomas } = paciente
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
                >Editar
                </button>

                <button
                    type='button'
                    className={style.eliminar}
                >Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente