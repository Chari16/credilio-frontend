import React from "react";
import { List, ListItem, Card, Typography } from '@material-ui/core';
import './movie.css'

const Movie = ({ movie: { title, description, year, certificate, genre, rating, votes } }) => {
    return (
        <Card className="movie-card">
            <List>
                <ListItem>
                    <Typography variant="h4">{title} {year}</Typography>
                </ListItem>
                <ListItem>
                <Typography component="span" >{certificate} | 169 min | {genre} | {rating} </Typography>
                </ListItem>
                <ListItem>
                    <Typography component="span" >
                        {description}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography component="span" >
                        Votes: {votes}
                    </Typography>
                </ListItem>
            </List>
        </Card>
    )
}

export default Movie;
