import React from "react";
import "./LIDescription.css";

export default class LIDescription extends React.Component<{
    children: string;
}> {
    render() {
        return <p className="LIDescription--wrapper">{this.props.children}</p>;
    }
}
