import React, { Component } from "react"

export class Toolbar extends Component {
    render() {
        return (
                <ul className="toolbar">
                    {this.props.filters?.map(filter => 
                        <li key={filter}>
                            <a href="#" className={this.props.selected === filter ? 'selected' : ''} onClick={() => this.props.onSelectFilter(filter)}>{filter}</a>
                        </li>
                    )} 
                </ul>
            )
    }
}