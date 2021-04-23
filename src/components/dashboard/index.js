import React, { useState } from 'react';
import { TextField, CircularProgress, Typography } from '@material-ui/core';
import Movie from '../movie';
import api from '../../api';
import './dashboard.css';

const Dashboard = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (e) => {
        try {
            setLoading(true)
            setSearchText(e.target.value)
            const response = await api.search(e.target.value)
            console.log(" response ", response.data.data)
            setMovies(response.data.data)
            setLoading(false)
        }
        catch(e){
            console.log(" my err ", e.message)
        }
    }

    return (
        <div className="container">
            <div className="header">
                <Typography variant="h3">IMDB Movies</Typography>
            </div>
            <div className="search-field">
                <TextField
                    id="standard-basic"
                    placeholder="Search for your movies ..."
                    variant="outlined"
                    fullWidth
                    value={searchText}
                    onChange={handleSearch}
                />
            </div>
            <div className="movies-container">
                {loading ? 
                    (
                        <CircularProgress
                            className="loader"
                        />
                    )
                    :
                    (
                        movies.map((movie, key) => (
                            <Movie
                                movie={movie}
                                key={key}
                            />
                        ))
                    )
                }  
            </div>
        </div>
    )
}

export default Dashboard;