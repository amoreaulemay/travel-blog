import React from "react";
import LIModel from "../../models/LIModel";
import Dates from "../LIDates/LIDates";
import Description from "../LIDescription/LIDescription";
import Location from "../LILocation/LILocation";
import Title from "../LITitle/LITitle";
import "./ListItem.css";

export default class ListItem extends React.Component<{ data: LIModel }> {
    render() {
        return (
            <article className="ListItem--wrapper">
                <div>
                    <img
                        src={this.props.data.imageSrc}
                        alt={this.props.data.title}
                    />
                </div>
                <div>
                    <Location
                        country={this.props.data.country}
                        href={this.props.data.mapLink}
                    />
                    <Title>{this.props.data.title}</Title>
                    <Dates>{this.props.data.dates}</Dates>
                    <Description>{this.props.data.description}</Description>
                </div>
            </article>
        );
    }
}
