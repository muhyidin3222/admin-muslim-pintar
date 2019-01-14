import React, { Component } from 'react';
import './profile.scss';
import iconProfile from '../../assets/iconProfile.png';
import { Link } from 'react-router-dom'

class Profile extends Component {

    logout = () => {
        localStorage.removeItem("token")
        this.props.logout()
    };

    render() {
        return (
            <div className="profile">
                <img src={iconProfile} className="photo"/>
                <div classname="account">Admin</div>
                <Link to="/Login" className="logout" onClick={this.logout}>keluar</Link>
            </div>
        );
    };
};

export default (Profile);