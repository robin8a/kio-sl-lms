import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <button type="button" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-share" aria-hidden="true"></span>
                </button>
            </nav>
        )
    }
}
export default NavBar