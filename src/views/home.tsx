import React from "react";
import ListView from "../components/ListView/ListView";
import NavBar from "../components/NavBar/NavBar";

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home--wrapper">
                <NavBar />
                <main>
                    <ListView />
                </main>
            </div>
        );
    }
}
