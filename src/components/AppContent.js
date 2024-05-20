import * as React from 'react';

import WelcomeContent from './WelcomeContent'
import AuthContent from "./forArtists/AuthContent";
import LoginForm from "./LoginForm";
import "./Welcome.css";
import { request, setAuthHeader, getRoleFromToken } from '../axios_helper'; // Добавляем getRoleFromToken
import Buttons from "./Buttons";
import Main from "./main/Main";
import SignUp from "./SignUp";


export default class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    };

    login = () => {
        this.setState({componentToShow: "login"})
    };

    register = () => {
        this.setState({componentToShow: "register"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                username: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    onRegister = (event, email, username, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                email: email,
                username: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    render() {
        const userRole = getRoleFromToken();
        const { componentToShow, isAuthenticated } = this.state;
        return (
            <>
                {this.state.componentToShow === "messages" ? (
                    userRole === 'USER' ? <Main /> : <AuthContent />
                ) : (
                    <div id="welcome-page">
                        {this.state.componentToShow === "welcome" && <WelcomeContent />}
                        {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
                        {this.state.componentToShow === "register" && <SignUp onLogin={this.onLogin} onRegister={this.onRegister} />}
                        {!isAuthenticated && (componentToShow === "welcome") && (
                            <Buttons
                                login={this.login}
                                register={this.register}
                                logout={this.logout}
                            />
                        )}
                    </div>
                )}

            </>
        );
    };


}


