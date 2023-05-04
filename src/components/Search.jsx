import React, { useState } from 'react'

export const Search = ({ listState, setListState }) => {


    const [search, setSearch] = useState('')
    const [notFound, setNotFound] = useState(false)

    const searchMovie = (e) => {

        setSearch(e.target.value)

        let searchedMovies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        })

        if (search.length <= 1 || searchedMovies <= 0) {
            searchedMovies = JSON.parse(localStorage.getItem("movies"))
            setNotFound(true)
        } else {
            setNotFound(false)
        }



        setListState(searchedMovies)



    }

    return (
        <div className="search">
            <h3 className="title">Search here: {search}</h3>
            {(notFound === true && search.length > 1) && (
                <span className='not-found'>Not found any movie</span>
            )}

            <form>
                <input type="text"
                    id='search_field'
                    name='search'
                    autoComplete='off'
                    onChange={searchMovie}

                />

            </form>
        </div>
    )
}
