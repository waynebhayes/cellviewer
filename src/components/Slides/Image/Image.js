import React, { Component } from 'react';
import { Container, Row, Button, Modal } from 'reactstrap';
import Cell from "./Cell/Cell.js"
import './Image.css';

export default class ImageCell extends Component {
    constructor(props) {
        super(props);


        this.state = {
            modal: false
        };
        this.getSize = this.getSize.bind(this);
        this.labels = []

        this.newImg = new Image();
        this.newImg.onload = this.getSize;
        this.newImg.src = props.src;

    }

    getSize(){
        for(var i=1; i<this.props.colony.length; i++){
            var cell = this.props.colony[i];
            // if self.generation>0: label_color = color_list[int(cell[0][1:self.generation+1],2)]
            
            this.labels.push(
                <div
                    key={cell[0]}
                    style={{
                        position:"absolute",
                        top: (cell[2]*100/this.newImg.height).toString()+"%",
                        left: (cell[1]*100/this.newImg.width).toString()+"%"
                        }}>
                    <Cell k={cell[0]}/>
                </div>)
        }
        console.log(this.labels);

        this.setState(prevState => ({
            modal: true
        }));
    }

    render() {
        if(this.state.modal){
            return (
                <Container position="relative" style={{margin:"0", padding:"0"}}>
                    <img
                        id="im"
                        src={this.props.src} 
                        alt="im"
                        className="image"/>
                    {this.labels}
                </Container>
            );
        }
        return null;
    }
}
