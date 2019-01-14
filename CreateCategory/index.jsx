import React, { Component } from 'react';
import Header from '../../components/Header';
import './createCategory.scss';

class index extends Component {

    state = {
        category: ""
    }

    render() {
        const { category } = this.state.category
        return (
            <div className="home">
                <Header />
                <div className="wrapper">
                    <div className="left">
                        <h1>Tambah Soal</h1>
                        <button className="button">Tambah</button>
                    </div>
                </div>
            </div >
        );
    };
};

export default index;