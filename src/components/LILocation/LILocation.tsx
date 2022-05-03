import React from "react";
import LocationIcon from "../LocationIcon/LocationIcon";
import "./LILocation.css";

export default class LILocation extends React.Component<{
    country: string;
    href: string;
}> {
    render() {
        return (
            <div className="LILocation--wrapper">
                <LocationIcon />
                <span>{this.props.country}</span>
                <a href={this.props.href} target="_blank">
                    View on Google Maps
                </a>
            </div>
        );
    }
}
