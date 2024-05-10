import React, { Component } from "react";
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";

export class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: ["All", "Websites", "Flayers", "Business Cards"],
            selected: "All"
        }
    }
    onSelectFilter = (filter) => {
        this.setState({selected: filter})
    };

    render() {
        return (
            <div>
                <Toolbar filters={this.state.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter}/>
                <ProjectList selectedState={this.state.selected}/>
            </div>
        )
    }

}
