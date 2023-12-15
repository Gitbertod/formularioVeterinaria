const Paciente = ({paciente}) =>{
    const {nombre,propietario,email,alta,sintomas} = paciente
    return (
        <div>
            <h4>Nombre: {nombre}</h4>
            <h4>Propietario: {propietario}</h4>
            <h4>Email: {email}</h4>
            <h4>Alta: {alta}</h4>
            <h4>Sintomas: {sintomas}</h4>
        </div>
    )
}

export default Paciente