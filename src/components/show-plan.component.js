import React, { Component } from 'react';
import axios from 'axios';

export default class ShowPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phase: '',
            activity: '',
            notes: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/plan/'+window.location.pathname.split("").splice(6).join(""))
            .then(res => {
                this.setState({
                    phase: res.data.phase,
                    activity: res.data.activity,
                    notes: res.data.notes,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='show-container'>
                <h1 id="show-phase">&#x2022; {this.state.phase} &#x2022;</h1>
                <h2 id="show-activity">{this.state.activity}</h2>
                <div id="notes-container">
                    <p>{this.state.notes}</p>
                </div>
            </div>
        )
    }
}