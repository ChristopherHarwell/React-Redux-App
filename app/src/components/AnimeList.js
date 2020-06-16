import React from 'react';

const AnimeList = props => {
    return (
        <>
            <h2>Welcome To Studio Ghibli</h2>
            <div>
                {props.films.map(film => (
                    <h4 key={film.id}>{film.title}</h4>
                ))}
            </div>
        </>
    )
}

export default AnimeList