import React, {useEffect, useState} from 'react';
import Inscr from "../home/inscr/Inscr";
import BoxArtist from "../home/box/boxArtist";
import {Link} from "react-router-dom";
function Genres() {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/all-genres')
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Inscr color={"yellow"} text={"Genres"}/>
            <div className="container-content">
                <div className="container-fixed-length-for-artists">
                    {genres.map(genre => (
                        <Link key={genre.name} to={`/genre/${encodeURIComponent(genre.name)}`}>
                            <BoxArtist key={genre.id} name={genre.name} picUrl={genre.picUrl} type={"genre"}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Genres;