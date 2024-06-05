import React from "react";
import "./Movie.css"
import GenericPicture from "./generic.jpeg"

const ImageURL = 'https://image.tmdb.org/t/p/w500/';

function Movie({poster_path, title, overview, vote_average})
{
    return (
        <div className = "movie">
            {poster_path ? (
                <img src = {ImageURL + poster_path}  alt ={title}></img>
            ) : ( 
                <img src = {GenericPicture}  alt ={title}></img> 
                )
            }

            <div className = "movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
                <span className={vote_average > 7 ? 'green' : vote_average >= 5 ? 'yellow' : 'red'}>
                    {vote_average}
                </span>

            </div>
            <div className = "movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;