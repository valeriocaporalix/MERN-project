import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phase: '',
            activity: '',
            notes: ''
        }

        this.onChangePhase = this.onChangePhase.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangePhase = (e) => {
        this.setState({
            phase: e.target.value
        })
    }

    onChangeActivity = (e) => {
        this.setState({
            activity: e.target.value
        })
    }

    onChangeNotes = (e) => {
        this.setState({
            notes: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const log = {
            phase: this.state.phase,
            activity: this.state.activity,
            notes: this.state.notes,
        }
        console.log(log);

        axios.post('http://localhost:5000/plan/add', log)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3 className='section-title'>&#x2022; Create New Log &#x2022;</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Phase: &nbsp; &nbsp;</label>
                        <input type="text"
                            required
                            className='form-control'
                            value={this.state.phase}
                            onChange={this.onChangePhase} />
                    </div>

                    <div className='form-group'>
                        <label>Activity: &nbsp;</label>
                        <input type="text"
                            required
                            className='form-control'
                            value={this.state.activity}
                            onChange={this.onChangeActivity} />
                    </div>

                    <div className='form-group'>
                        <label>Notes: &nbsp; &nbsp;</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.notes}
                            onChange={this.onChangeNotes}/>
                    </div>
                    <br/>
                    <div className='form-group'>
                        <input type="submit" value="Create Log" className="form-btn" />
                    </div>
                </form>
            </div>
        )
    }
}