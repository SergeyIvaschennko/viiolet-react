import * as React from 'react';
import "./Welcome.css"
export default class WelcomeContent extends React.Component {
    render() {
        return (
            <div>
                <div className="welcome-greeting-container">
                    <span id="welcome">- What is love?</span>
                    <div id="viiolet">- v i i o l e t</div>
                </div>
            </div>
        );
    };
}