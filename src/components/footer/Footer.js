import React from 'react';
import "./Footer.css"
function Footer() {
    return (
        <div>
            <div className="horizontal-line"></div>
            <div className="container-content">

                <div className="container-fixed-length-for-artists" id="main-text-foot">

                    <div className="text_foot">[Get in touch]</div>

                    <div className="text_foot">[Explore]</div>

                    <div className="text_foot">[About]</div>

                    <div className="text_foot">[Support]</div>

                    <div className="text_foot">[Career]</div>

                </div>

            </div>

            <div className="container-content">

                <div className="container-fixed-length-for-artists" id="second-text-foot">

                    <div className="text_foot down">© 2024 Viiolet</div>

                    <div className="text_foot down">All rights are reserved</div>

                </div>

            </div>
        </div>
    );
}

export default Footer;