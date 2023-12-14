import { useState } from "react";


const Formulario = ({ paciente, setPaciente }) => {
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

        setPaciente([...paciente, objetoPaciente]);

        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre: </label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <br></br>

                <label htmlFor="propietario">Nombre propietario: </label>
                <input
                    type="text"
                    id="propietario"
                    placeholder="Nombre de propietario"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                />
                <br></br>


                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br></br>

                <label htmlFor="alta">Alta</label>
                <input
                    type="date" id="alta"
                    value={alta}
                    onChange={(e) => setAlta(e.target.value)}
                />
                <br></br>

                <label htmlFor="sintomas" type="text">Sintomas: </label>
                <input
                    type="text"
                    id="sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
                <br></br>

                <button>Enviar</button>

            </form>
        </div>
    )
}

export default Formulario;