import React from 'react'

export const EditForm = ({ movie }) => {

    const component_title = "Edit movie"
    return (
        <div className='EditForm'>
            <h3 className='title'>{component_title}</h3>
            <form>
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
