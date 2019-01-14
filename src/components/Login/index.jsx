import React, { Component } from 'react';
import './login.scss';
import axios from 'axios';
import { url } from '../../config';
import { connect } from 'react-redux';
import Loading from '../Loading'

class Login extends Component {

    state = {
        username: "",
        password: "",
        home: false,
        loading: false

    };

    handlUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    handlPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    exit = () => {
        this.props.close();
    };login

    login = () => {
        const { username, password } = this.state
        console.log(username, password)
        this.setState({ loading: true })

        if (username && password) {

            axios.post(url + '/api/admin/login', {
                username,
                password
            })
                .then((res) => {
                    console.log(res);
                    localStorage.setItem("token", res.data.token)
                    this.props.history.push("/")
                    this.setState({ loading: false })
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({ loading: false })
                })
        };
    };

    render() {
        const { username, password, loading } = this.state
        return (
            <div className="login">
                <div className="wrapperLogin">
                    <h3 >Masuk Admin</h3>
                    <div style={{ borderBottom: 'none', borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                        <label style={{ marginRight: "30px" }}>Name</label>
                        <input name="email" onChange={this.handlUsername} value={username} />
                    </div>{loading && <Loading />}
                    <div style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                        <label>Password</label>
                        <input name="password" id="password" type="password" onChange={this.handlPassword} value={password} />
                    </div>
                    <button onClick={this.login} className="button">Masuk</button>
                </div>
            </div>
        );
    };
};

export default connect(null)(Login);