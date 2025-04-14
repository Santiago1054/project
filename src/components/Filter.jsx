import { useEffect, useState } from 'react'
import '../Content.css'

export function Filter({ name, enviarValor }) {

    const [count, setCount] = useState(0);
    const [type, setType] = useState("Any");
    const handleOnClick = () => {
        setType(name);
        setCount(count + 1);
        enviarValor(type);  // Enviar el valor al padre
        console.log("Valor enviado al padre:", type);
    };






    return (
        <button onClick={handleOnClick}>{name}</button>
    )

}