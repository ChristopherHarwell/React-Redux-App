import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "../App.css";
const AnimeList = (props) => {
  return (
    <>
      <Typography variant="h2">Welcome To Studio Ghibli</Typography>
      <div>
        {props.films.map((film) => (
            <Card style={{margin: "0 4vw 3vh 4vw", backgroundColor: "#40E0D0", color: "#FFFFF0"}} key={film.id} variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {film.title}
                </Typography>
                <div className="info_block">
                  <Typography variant="h4">Description:</Typography>
                  <Typography variant="body2"> {film.description}</Typography>
                </div>
                <div className="info_block">
                <Typography variant="h4"> Director: </Typography>
                  <Typography variant="body2"> {film.director}</Typography>
                </div>
                <div className="info_block">
                 <Typography variant="h4">Producer:</Typography> 
                  <Typography variant="body2"> {film.producer}</Typography>
                </div>
                <div className="info_block">
                   <Typography variant="h4">Release Date:</Typography>
                  <Typography variant="body2"> {film.release_date}</Typography>
                </div>
                <div className="info_block">
                  <Typography variant="h4">Rating:</Typography>
                  <Typography variant="body2"> {film.rt_score}</Typography>
                </div>
              </CardContent>
            </Card>
        ))}
      </div>
    </>
  );
};

export default AnimeList;
