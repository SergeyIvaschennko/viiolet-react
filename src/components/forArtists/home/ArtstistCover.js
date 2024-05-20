import "./ArtistCover.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function ArtstistCover(props) {
    const [metaUser, setMetaUser] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMetaUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/meta/`+props.name);
                setMetaUser(response.data);
                setError(null);
            } catch (error) {
                setError("Добавьте фото");
            }
        };

        fetchMetaUser();
    }, []);
    return (
        <div>
            {metaUser ? (
                <div className="container-content">
                    <div className="container-media">
                        <img src={metaUser.picCoverUrl} alt="artist" />
                        <div className={"textcountry"}>{metaUser.username}.</div>
                    </div>
                </div>
            ) : (
                <div className="container-content">
                    <Link to="/add-meta" style={{ fontFamily: 'Montserrat', fontWeight: 400, color: 'blue', marginTop: '40px', fontSize: '15px' }}>
                        Let's add a couple of photos to make you look cool
                    </Link>
                </div>
            )}
        </div>

    )
}

export default ArtstistCover;