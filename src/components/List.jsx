import React, { useEffect, useState } from 'react'
import { EditForm } from './EditForm'

export const List = ({ listState, setListState }) => {

    // const [listState, setListState] = useState([])

    const [edit, setEdit] = useState(0)

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movies"))

        setListState(movies)

        return movies
    }

    const deleteMovie = (id) => {

        let savedMovies = getMovies()

        let newListMovies = savedMovies.filter(movie => movie.id !== parseInt(id))

        setListState(newListMovies)

        localStorage.setItem("movies", JSON.stringify(newListMovies))
    }

    return (
        <>
            {listState != null ?
                listState.map(movie => {
                    return (
                        <article key={movie.id} className="movie-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>

                            {edit == movie.id && (
                                <EditForm movie={movie} />
                            )}
                        </article>
                    )

                })
                : <h2>No movies to show</h2>
            }

        </>

    )
}
