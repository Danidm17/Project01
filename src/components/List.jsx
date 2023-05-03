import React, { useEffect, useState } from 'react'

export const List = ({ listState, setListState }) => {

    // const [listState, setListState] = useState([])

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

                            <button className="edit">Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
                        </article>
                    )

                })
                : <h2>No movies to show</h2>
            }

        </>

    )
}
