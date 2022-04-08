import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Plan = props => (
    <tr>
        <td className='dynamic-content truncate' id="phase">
            {props.plan.phase}
        </td>
        <td className='dynamic-content truncate' id="activity">
            {props.plan.activity}
        </td>
        <td className='dynamic-content truncate' id="notes">
            {props.plan.notes}
        </td>
        <td className='dynamic-content td-btn'>
            <button id="editBtn" className='dynamic-link btn-interactive'><Link className='dynamic-link' to={'/edit/'+props.plan._id}>Edit</Link></button> &nbsp;&nbsp;
            <button id="showBtn" className='dynamic-link btn-interactive'><Link className='dynamic-link' to={'/show/'+props.plan._id}>Show</Link></button>
        </td>
        <td>
            <button id="deleteBtn" className='dynamic-link' href='/' onClick={() => {props.deletePlan(props.plan._id)}}>&#10004;</button>
        </td>
    </tr>
)

export default class PlanList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plans: []
        };

        this.deletePlan = this.deletePlan.bind(this);
    }

    componentDidMount () {
        axios.get('http://localhost:5000/plan/')
            .then((response) => {
                this.setState({ plans: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePlan(id) {
        axios.delete('http://localhost:5000/plan/'+id)
            .then(response => console.log(response.data));
        this.setState({
            plans: this.state.plans.filter(el => el._id !== id)
        })
    }

    plansList() {
        return this.state.plans.map(currentPlan => {
            return <Plan plan={currentPlan} deletePlan={this.deletePlan} key={currentPlan._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3 className='section-title'>&#x2022; Logged Work Plans &#x2022;</h3>
                <table className='table-center'>
                    <thead>
                        <tr>
                            <th>Phase</th>
                            <th>Activity</th>
                            <th>Notes</th>
                            <th>Actions</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.plansList()}
                    </tbody>
                </table>
            </div>
        )
    }
}