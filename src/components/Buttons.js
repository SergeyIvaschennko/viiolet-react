import * as React from 'react';
import {Link} from "react-router-dom";

export default function Buttons(props) {
    return (
        <div>
            <div className="btn-container">
                    <button className="btn btn-primary" onClick={props.login}>
                        Login
                    </button>
                    <button className="btn btn-primary" onClick={props.register}>
                        Register
                    </button>
                {/*<button onClick={props.logout}>*/}
                {/*            Logout*/}
                {/*</button>*/}
            </div>
        </div>
    );
};