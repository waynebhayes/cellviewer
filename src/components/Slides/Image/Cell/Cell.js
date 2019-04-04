import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import './Cell.css';

export default class Cell extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
          });
    }

    render() {
        return (
            <div>
                <div 
                    id={"Tooltip"+this.props.k}
                    style={{
                        backgroundColor:"red",
                        width:"10px",
                        height:"10px"
                    }}/>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={"Tooltip"+this.props.k} toggle={this.toggle}>
                    <div 
                        style={{
                            width:"40px",
                            textAlign:"center",
                            backgroundColor:"yellow",
                            borderRadius:"5px"}}>
                        {this.props.k}
                    </div>
                </Tooltip>
            </div>
        );
    }
}
