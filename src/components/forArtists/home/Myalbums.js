import React, {useEffect, useState} from "react";
import axios from "axios";
import BoxArtist from "../../home/box/boxArtist";
import {Link} from "react-router-dom";

function Myalbums(props) {
    const [albums, setAlbums] = useState([]); // Состояние для хранения данных об художниках
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/playlist/' + props.name);
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container-content">
            <div className="container-fixed-length-for-artists">
                {albums.map(album => (
                    <Link key={album[0]} to={`/songs-in-album/${encodeURIComponent(album.name)}`}>
                        <BoxArtist key={album[0]} name={album.name} picUrl={album.picUrl} type={"artist"} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Myalbums;