import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {

    state={
        credentials: {
            username: "",
            password: ""
        },
        error: ""
    }

    handleChange = (e) =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            },
            error:""
        })
    };

    login = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then((res) =>{
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/protected")
        })
        .catch((err) =>{
            console.log(err)
            this.setState({
                error: err.response.data.error
            });
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
                <p style={{color:"red"}}>{this.state.error}</p>
            </div>
        )
    }
}

export default Login