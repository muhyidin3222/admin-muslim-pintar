import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { url, headers } from '../../config';
import axios from 'axios';
import { connect } from 'react-redux';
import { idCategory } from '../../actions';
import './home.scss';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Profile from '../../components/Profile';

class index extends Component {
    state = {
        input: false,
        loading: false,
        login: false,
        loadingList: true,
        category: [],
        addText: "",

    };

    componentDidMount() {
        this.getCategory()
        this.setState({ loadingList: true })

    };

    getCategory = () => {
        axios.get(url + "/api/category")
            .then(res => {
                this.setState({ category: res.data })
                this.setState({ loadingList: false })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loadingList: false })
            })
    };

    deleteCategory = (id) => {
        axios.delete(url + "/api/category/" + id)
            .then(res => {
                this.getCategory()
            })
            .catch(err => {
                console.log(err)
            })
    };

    addCategory = () => {
        const { addText } = this.state

        axios.post(url + "/api/category", {
            name: addText
        })
            .then(res => {
                this.getCategory()
            })
            .catch(err => {
                console.log(err)
            })
    };

    buttonLogin = () => {
        this.setState({ login: true });
    };

    stopLoading = () => {
        this.setState({ loading: false });
    };

    startLoading = () => {
        this.setState({ loading: true });
    };

    logout = () => {
        this.setState({ profile: false })
    };

    inputText = () => {
        this.setState({ input: true })
    }

    render() {
        const { loading, addText, category, input, loadingList } = this.state
        return (
            <div className="home">
                <Header />
                {loading ? <Loading /> : ""}
                <div className="wrapper">
                    <div className="left">
                        <h1>Tambah Kategori</h1>
                        <button className="addCategory" onClick={this.inputText}>Tambah</button>
                        {input && <div className="wrapperInput"><input
                            value={addText}
                            onChange={event => this.setState({ addText: event.target.value })} />
                            <button onClick={this.addCategory} className="save">Simpan</button></div>}
                        {loadingList ? [1, 2, 3].map((i) => <div className="loading-list" ><div key={i}></div></div>) :
                            category.map((textCategory, i) =>
                                <Link style={{ textDecoration: 'none' }} to={"/soal/" + { category }} key={i} className="link" to={{ pathname: "/soal/" + textCategory.name, state: { categoryId: textCategory._id } }}>
                                    <div className="category">{textCategory.name}</div>
                                    <button onClick={() => this.deleteCategory(textCategory._id)} className="delete">hapus</button></Link>
                            )
                        }
                    </div>
                    <div className="right">
                        <Profile />
                    </div>
                </div>
            </div >
        );
    };
};

const mapStateToProps = (state) => {
    return ({
        user: state.userReducer,
    });
};

export default connect(mapStateToProps, { idCategory })(index);