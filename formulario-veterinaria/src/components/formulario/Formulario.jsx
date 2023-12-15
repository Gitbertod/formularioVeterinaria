import { useState } from "react";
import style from './Formulario.module.css'


const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: generateId()
        }


        const values = Object.values(objetoPaciente)

        if (values.includes("")) {
            setError(true)
        } else {
            setPacientes([...pacientes, objetoPaciente]);
            setError(false)
        }

        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');

    }
    console.log(error)

    return (
        <div className={style.formulario}>
            <form onSubmit={handleSubmit}>
                {error && <div className={style.validation}>Faltan datos</div>}
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="propietario">Nombre propietario: </label>
                    <input
                        type="text"
                        id="propietario"
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="alta">Alta</label>
                    <input
                        type="date" id="alta"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sintomas" type="text">Sintomas: </label>
                    <input
                        type="text"
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <div>
                    <button className={style.agregarPaciente}>Agregar Paciente</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;