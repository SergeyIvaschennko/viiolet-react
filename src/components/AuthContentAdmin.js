import * as React from 'react';

import { request } from '../axios_helper';

export default class AuthContentAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    };

    componentDidMount() {
        request(
            "GET",
            "/protected/messages",
            {}
        ).then((response) => {
            this.setState({data: response.data})
        });
    };




    render() {
        return (
            // <div>
            //     {this.state.data && <p>{this.state.data}</p>}
            // </div>
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Backend response</h5>
                            <p className="card-text">Content:</p>
                            <ul>
                                {this.state.data && this.state.data
                                    .map((line) =>
                                        <li key={line}>{line}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}