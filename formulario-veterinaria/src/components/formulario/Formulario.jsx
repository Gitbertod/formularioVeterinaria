import { useState } from "react";
import style from './Formulario.module.css'


const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas
        }

        setPacientes([...pacientes, objetoPaciente]);

        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }


    return (
        <div className={style.formulario}>
            <form onSubmit={handleSubmit}>

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
                    <button>Agregar Paciente</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;