import React, { useState } from 'react'
import { saveInStorage } from '../helpers/SaveInStorage'

export const Create = ({ setListState }) => {

    const titleComponent = "Add Movie"


    const [movieState, setMovieState] = useState({
        title: "",
        description: ""
    })

    const { title, description } = movieState

    const getFormValues = e => {
        e.preventDefault()

        //  Conseguirdatos del formulario
        let target = e.target
        let title = target.title.value
        let description = target.description.value

        //  Crear objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        // Guardar estado
        setMovieState(movie)

        // Actualizar el estado del listado principal
        setListState(element => {
            return [...element, movie]
        })

        // Guardar en localStorage
        saveInStorage("movies", movie)


    }



    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>

            <strong>
                {(title && description) && "Create movie: " + title}
            </strong>

            <form onSubmit={getFormValues}>
                <input
                    type="text"
                    id='title'
                    name='title'
                    placeholder="Title" />
                <textarea
                    id='description'
                    name='description'
                    placeholder="Description"></textarea>
                <input
                    type="submit"
                    id='save'
                    value="Save" />
            </form>
        </div>
    )
}
