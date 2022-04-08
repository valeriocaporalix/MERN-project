import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div>
                    <ul className='navbar-ul'>
                        <li className='navbar-li'>
                            <Link to="/" className="navbar-a">Work Plan</Link>
                        </li>

                        <li className='navbar-li'>
                            <Link to="/create" className="navbar-a">Create Logs</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}