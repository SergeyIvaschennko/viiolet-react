import React, {useEffect, useState} from 'react';
import "./FiveArtists.css"
import {Link} from "react-router-dom";
import axios from "axios";
import BoxArtist from "../box/boxArtist";
function FiveArtists() {
    const [artists, setArtists] = useState([]); // Состояние для хранения данных об художниках



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/all-artists');
                setArtists(response.data);
            } catch (error) {
                console.error('Error fetching artists:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container-content">
            <div className="container-fixed-length-for-artists">
                {artists.slice(0, 5).map(artist => (
                    <Link key={artist[0]} to={`/artist/${encodeURIComponent(artist[0])}`}>
                        <BoxArtist key={artist[0]} name={artist[0]} picUrl={artist[1]} type={"artist"} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FiveArtists;
