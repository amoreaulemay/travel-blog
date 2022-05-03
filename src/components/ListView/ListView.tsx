import React from "react";
import { SAMPLE_DATA } from "../../data/sample_data";
import LIModel from "../../models/LIModel";
import ListItem from "../ListItem/ListItem";
import "./ListView.css";

export default class ListView extends React.Component<
    {},
    { items: JSX.Element[] }
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        const items = SAMPLE_DATA.sort((a, b) => {
            if (a.endDate > b.endDate) {
                return -1;
            } else if (a.endDate < b.endDate) {
                return 1;
            }

            return 0;
        }).map((e) => <ListItem data={e} key={e.id} />);

        this.setState({
            items: items,
        });
    }

    render() {
        return (
            <section className="ListView--wrapper">{this.state.items}</section>
        );
    }
}
