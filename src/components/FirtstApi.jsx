
import { use, useRef, useState } from 'react'
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
    const [sort, setSort] = useState(false)
    const { search, setSearch, inputError } = useSearch()
    const { movies, getMovies, loading } = useMovies({ search, sort })
    //const inputRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies({ search })
        /* const fields = Object.fromEntries(new window.FormData(event.target)) 
        // Esta forma de obtener los datos es mas limpia y no necesita el useRef
        //Usarlo cuando se tenga un formulario con muchos inputs
        const data = new window.FormData(event.target)
        const search = data.get('search')
        console.log(search)*/
        // TO DO : Validar el input 
    }
    const handleSort = () => {
        setSort(!sort)
    }
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    useEffect(() => {
        console.log("getMovies");
    }, [getMovies])
    return (
        <>
            <div className='page'>
                <header>

                    <form onSubmit={handleSubmit}>

                        <div className="brutalist-container">
                            <input
                                onChange={handleChange}
                                className="brutalist-input smooth-type"
                                type="text"
                                name='search'
                                placeholder='Avengers, Star Wars, The Matrix ...'

                            />
                            <label class="brutalist-label">MOVIE FINDER</label>

                        </div>
                        <section className='form' >
                            <button type='submit' className="btn-17" data-text="Awesome">
                                <span class="text-container">
                                    <span class="text">Search</span>
                                </span>
                            </button>

                            <label class="checkbox-wrapper">
                                <input type='checkbox' onChange={handleSort} checked={sort} />
                                <div class="checkmark">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path
                                            d="M20 6L9 17L4 12"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <span class="label">Sort</span>
                            </label>
                        </section>

                    </form>

                    {inputError && <p className='error'>{inputError}</p>}
                </header>

                <main >
                    {
                        loading ? <p className='text'>Cargando...</p> : <Movies movies={movies} />
                    }

                </main>
            </div>
        </>
    )

}