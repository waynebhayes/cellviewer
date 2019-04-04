import React, { Component } from 'react';
import { Container, Row, Button, Modal } from 'reactstrap';
import ImageCell from './Image/Image';
import './Slides.css';

export default class Slides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: 0
        };

        this.images = props.imgs;
        this.colony = props.colony;
        this.change = this.change.bind(this);
    }

    change(i) {
        if(i>=0 && i<this.images.length){
            this.setState({
                pos : i
            });
        }
    }

    render() {
        var pos = this.state.pos;
        return (
            <ImageCell
                src={this.images[pos][0]} 
                colony={this.colony[this.images[pos][1]]}/>
        );
    }
}
