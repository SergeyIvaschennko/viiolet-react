import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import BoxArtist from "../box/boxArtist";
function AwesomeGenres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/all-genres')
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="container-content">
            <div className="container-fixed-length-for-artists">
                {genres.slice(0, 5).map(genre => (
                    <Link key={genre.name} to={`/genre/${encodeURIComponent(genre.name)}`}>
                        <BoxArtist key={genre.id} name={genre.name} picUrl={genre.picUrl} type={"genre"} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AwesomeGenres;