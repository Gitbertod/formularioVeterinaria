import { useState, useEffect } from "react";
import style from './Formulario.module.css'
import Error from "../error/Error";


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setAlta(paciente.alta || '');
        setSintomas(paciente.sintomas);
    }, [paciente])

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        //validacion        
        e.preventDefault()
        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            setError(true)
            console.log(error)
            return;
        }
        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas

        }



        if (paciente.id) {
            //cuando estoy editando el registro (** REPASAR ESTE CODIGO **)
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => {
                if (pacienteState.id === paciente.id) {
                    return objetoPaciente
                } else {
                    return pacienteState
                }
            })
            setPacientes(pacientesActualizados);
            setPaciente({})

        } else {
            objetoPaciente.id = generateId()
            setPacientes([...pacientes, objetoPaciente]);
            setError(false)
            console.log("se agrego nuevo paciente")
        }
        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');

    }


    return (
        <div className={style.formulario}>
            <form
                onSubmit={handleSubmit}>

                {error &&
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                }

                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="propietario">Nombre propietario: </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre de propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="alta">Alta</label>
                    <input
                        id="alta"
                        type="date"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sintomas" type="text">Sintomas: </label>
                    {sintomas == "" && error ?  <p style={{ color: "red", margin: "0px" }}>Falta rellenar este campo</p> : <p style={{ display: "none" }}></p>}
                    <input
                        type="text"
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        className={style.agregarPaciente}
                        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario;