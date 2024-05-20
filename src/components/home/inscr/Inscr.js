import React from 'react';
import "./Inscr.css"
import {Link} from "react-router-dom";
function Inscr(props) {
    const { color } = props;
    const { text } = props;
    const { viewMoreUrl } = props;
    const headerStyle = {
        color: props.type === 'Simple header' ? '#333333' : '#10439F'
    };
    const rectangleClassName = `${color}-rectangle`;
    return (
        <div className="container-content">
            <div className="container-fixed-length-for-header">
                <div className={rectangleClassName}>
                    {/*<div className="header-for-content">{text}</div>*/}
                    <div className="header-for-content" style={headerStyle}>{text}</div>
                </div>
                {viewMoreUrl ? (
                    <Link to={viewMoreUrl} className="view-more">view more</Link>
                ) : (
                    <div className="view-more"></div>
                )}
            </div>
        </div>
    );
}

export default Inscr;