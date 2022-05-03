import React from "react";
import GlobeIcon from "../GlobeIcon/GlobeIcon";
import "./NavBar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <header>
                <nav className="NavBar--wrapper">
                    <GlobeIcon />
                    <h1>my travel journal</h1>
                </nav>
            </header>
        );
    }
}
