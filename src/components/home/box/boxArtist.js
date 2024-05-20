import React from 'react';
import "./boxArtist.css"
import {Link} from "react-router-dom";
function boxArtist(props) {
    const { name } = props;
    const { picUrl } = props;
    const { type } = props;
    // return (
    //     <div className="artist-box">
    //         <div className="artist-pic">
    //             <img src={picUrl} alt="artist"/>
    //         </div>
    //         {type === 'genre' ? (
    //             <Link to={`/genre/${name}`} className="artist-blackout">
    //                 <div className="artist-name-capsule">
    //                     {name}
    //                 </div>
    //             </Link>
    //         ) : (
    //             <Link to={`/artist/${name}`} className="artist-inscr">{name}</Link>
    //         )}
    //     </div>
    // );

    return (
    //     <Link to={type === 'genre' ? `/genre/${name}` : `/artist/${name}`} className="artist-link">
    <div className="artist-link">
            <div className="artist-box">
                <div className="artist-pic">
                    <img src={picUrl} alt="artist"/>
                </div>
                {type === 'genre' ? (
                    <div className="artist-blackout">
                        <div className="artist-name-capsule">
                            {name}
                        </div>
                    </div>
                ) : (
                    <div className="artist-inscr">{name}</div>
                )}
            </div>
    </div>
        // </Link>
    );

}

export default boxArtist;