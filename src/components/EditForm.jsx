import React from 'react'

export const EditForm = ({ movie, getMovies, setEdit, setListState }) => {

    const component_title = "Edit movie"

    const saveEdit = (e, id) => {
        e.preventDefault()

        let target = e.target

        const movies_saved = getMovies()
        const index = movies_saved.findIndex(movie => movie.id === id)

        let movie_update = {
            id,
            title: target.title.value,
            description: target.description.value,
        }

        movies_saved[index] = movie_update

        localStorage.setItem("movies", JSON.stringify(movies_saved))

        setListState(movies_saved)
        setEdit(0)


    }

    return (
        <div className='EditForm'>
            <h3 className='title'>{component_title}</h3>
            <form onSubmit={e => saveEdit(e, movie.id)}>
                <input type="text"
                    name='title'
                    className='edit_title'
                    defaultValue={movie.title}
                />
                <textarea name="description"
                    defaultValue={movie.description}
                    className='edit_description'
                />
                <input type="submit" className='edti' value='update' />
            </form>
        </div>
    )
}
