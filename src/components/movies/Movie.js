import React from "react";
import  "./movie.css";

export default function Movie(props){
    return<>
    
        <div className="movie-container">
           <label>Select a movie</label>
           <select id="movieTitle">
            {props.movie_data.map((e,i)=>(
                <option key={i}>{e.Title}</option> 
            ))}
           </select>
        </div>
    </>
}