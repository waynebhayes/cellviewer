import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ImageCell from './Image/Image';
import Slider from '@material-ui/lab/Slider';
import './Slides.css';

export default class Slides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: 0
        };
        this.status = "play"

        this.images = props.imgs;
        this.colony = props.colony;
        this.change = this.change.bind(this);
        this.play = this.play.bind(this);
        this.click = this.click.bind(this);
    }

    change(e,i) {
        console.log(i);
        if(i>=0 && i<this.images.length){
            this.setState({
                pos : i
            });
        }
    }

    play(){
        if(this.status==="pause"){
            setTimeout(function() {
                this.change(null,(this.state.pos+1)%this.images.length);
                this.play();
            }.bind(this), 300);
        }
    }

    click(){
        if(this.status ==="pause"){
            this.status = "play"
            this.setState({
                pos : this.state.pos
            })
        }else{
            this.status = "pause"
            this.play()
        }
    }

    render() {
        var pos = this.state.pos;
        return (
            <div>
                <ImageCell
                    src={this.images[pos][0]} 
                    colony={this.colony[this.images[pos][1]]}/>
                <Button
                    onClick={()=>{this.change(null,this.state.pos-1)}}
                    style={{
                        width:"2%",
                        height:"5%",
                        position:"absolute",
                        top: "47.5%",
                        left: "5%"
                        }}
                >
                    {"<"}
                </Button>
                <Button
                    onClick={()=>{this.change(null,this.state.pos+1)}}
                    style={{
                        width:"2%",
                        height:"5%",
                        position:"absolute",
                        top: "47.5%",
                        right: "5%"
                        }}
                >
                    {">"}
                </Button>
                <Button
                    onClick={this.click}
                    style={{
                        width:"5%",
                        height:"3%",
                        position:"absolute",
                        bottom: "13.5%",
                        left: "3%"
                        }}
                >
                    {this.status}
                </Button>
                <Slider
                    value={pos}
                    min={0}
                    max={this.images.length-1}
                    step={1}
                    onChange={this.change}
                    style={{
                        width:"80%",
                        height:"5%",
                        position:"absolute",
                        bottom: "10%",
                        right: "10%"
                    }}
                />
            </div>
        );
    }
}
