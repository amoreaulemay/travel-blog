import React from "react";
import "./LIDates.css";

export default class LIDates extends React.Component<{ children: string }> {
    render() {
        return <h3 className="LIDates--wrapper">{this.props.children}</h3>;
    }
}
