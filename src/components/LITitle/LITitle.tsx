import React from "react";
import "./LITitle.css";

export default class LITitle extends React.Component<{ children: string }> {
    render() {
        return <h2 className="LITitle--wrapper">{this.props.children}</h2>;
    }
}
