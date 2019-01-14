import React, { Component } from 'react';
import { url, headers } from '../../config';
import axios from 'axios';
import './question.scss';
import Header from '../../components/Header'

class index extends Component {
    state = {
        getQuestions: [],
        loadingList: true,
        addText: false,
        question: "",
        answer: "abcd",
        a: "",
        b: "",
        c: "",
        d: ""
    };

    componentDidMount() {
        this.fethQuiz();
    };

    fethQuiz = () => {
        const categoryId = this.props.location.state.categoryId
        axios.get(url + "/api/quiz/category/" + categoryId)
            .then(res => {
                this.setState({ questions: res.data })
                this.setState({ loadingList: false })
            })
            .catch(err => {
                this.setState({ loadingList: false })
                console.log(err)
            })
    };

    

    createQuiz = () => {
        const { question, answer, a, b, c, d } = this.state
        const categoryId = this.props.location.state.categoryId
        this.setState({ loadingList: true })
        axios.post(url + "/api/quiz" , { question, answer, categoryId, a, b, c, d })
            .then(ress => {
                console.log(ress)
                this.setState({ loadingList: false })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loadingList: false })

            })
    }

    addQuestions = () => {
        this.setState({ addText: true })
    }

    render() {
        const { addText, question, loadingList, getQuestions, answer, a, b, c, d } = this.state
        return (
            <div className="quiz">
                <div>
                    <Header />
                </div>
                <div className="wrapper">
                    <button className="addCategory" onClick={this.addQuestions}>Tambah</button>
                    {addText &&
                        <div className='quis'>

                            <div className="inputQuiz"> Soal :
                            <input
                                    className="inputSoal"
                                    value={question}
                                    onChange={event => this.setState({ question: event.target.value })} />
                            </div>
                            <div className="wrapperQuiz">

                                <div className="inputQuiz"> A :
                            <input
                                        value={a}
                                        onChange={event => this.setState({ a: event.target.value })} />
                                </div>
                                <div className="inputQuiz"> B :
                            <input
                                        value={b}
                                        onChange={event => this.setState({ b: event.target.value })} />
                                </div>
                                <div className="inputQuiz"> C :
                            <input
                                        value={c}
                                        onChange={event => this.setState({ c: event.target.value })} />
                                </div>
                                <div className="inputQuiz"> D :
                            <input
                                        value={d}
                                        onChange={event => this.setState({ d: event.target.value })} />
                                </div>
                            </div>
                            <button onClick={this.createQuiz} className="addCategory" style={{backgroundColor:"rgb(85, 158, 255)", marginTop:"20px"}}>Simpan</button>
                        </div>
                    }
                    {loadingList === true ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <div className="loadingList" ><div key={i}></div></div>) :
                        getQuestions.map((quiz, i) => <div key={i}>
                            <div className="quest">Pertayaan : {quiz.question}</div>
                            <div className="answer">jawaban yang benar : {quiz.answer}
                                <div className="selection">a {quiz.a}</div>
                                <div className="selection">b {quiz.b}</div>
                                <div className="selection">c {quiz.c}</div>
                                <div className="selection">d {quiz.d}</div>
                            </div>
                        </div>)}
                </div>
            </div>
        );
    };
};

export default index;

// <div>{quiz._id}</div>
// <div>{quiz.categoryId}</div>
