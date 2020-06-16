import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const AnimeList = (props) => {
  return (
    <>
      <h2>Welcome To Studio Ghibli</h2>
      <div>
        {props.films.map((film) => (
          <Card key={film.id} variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {film.title}
              </Typography>
              <span>
                Description:
                <Typography variant="body2"> {film.description}</Typography>
              </span>
              <span>
                Director:
                <Typography variant="body2"> {film.director}</Typography>
              </span>
              <span>
                Producer:
                <Typography variant="body2"> {film.producer}</Typography>
              </span>
              <span>
                Release Date:
                <Typography variant="body2"> {film.release_date}</Typography>
              </span>
              <span>
                Rotten Tomatoes Score:
                <Typography variant="body2"> {film.rt_score}</Typography>
              </span>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AnimeList;
