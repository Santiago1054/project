
import { useRef, useState } from 'react'
import { Movies } from './Movies'
import { useMovies } from '../hooks/useMovies'
import { useEffect } from 'react'

function useSearch() {
    const [search, setSearch] = useState('')
    const [inputError, setInputError] = useState(null)
    const isFirstInput = useRef(true)
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search == ''
            return
        }
        if (search == '') {
            setInputError('El campo de busqueda no puede estar vacio')
            return
        }
        if (search.match(/^\d+$/)) {
            setInputError('No se permiten numeros')
            return

        }
        if (search.length < 3) {
            setInputError('El campo de busqueda debe tener al menos 3 caracteres')
            return
        }

        setInputError(null)

    }), [search]
    return { search, setSearch, inputError }
}

export function FirtstApi() {
    const { movies: mappedMovies } = useMovies()
    const { search, setSearch, inputError } = useSearch()
    //const inputRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ search })
        /* const fields = Object.fromEntries(new window.FormData(event.target)) 
        // Esta forma de obtener los datos es mas limpia y no necesita el useRef
        //Usarlo cuando se tenga un formulario con muchos inputs
        const data = new window.FormData(event.target)
        const search = data.get('search')
        console.log(search)*/
        // TO DO : Validar el input 
    }
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <div className='page'>
                <header>
                    <h1 className='text-title'>Buscador de peliculas</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <input  onChange={handleChange} name='search' placeholder='Avengers, Star Wars, The Matrix ...' />
                        <button type='submit'>Search</button>
                    </form>
                    {inputError && <p className='error'>{inputError}</p>}
                </header>

                <main >
                    <Movies movies={mappedMovies} />
                </main>
            </div>
        </>
    )

}