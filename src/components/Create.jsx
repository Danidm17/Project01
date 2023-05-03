import React from 'react'

export const Create = () => {
    return (
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
