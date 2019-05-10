import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import ImageCell from './Image/Image';
import Slider from '@material-ui/lab/Slider';

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
        this.spaceBar = this.spaceBar.bind(this);
        this.tree = null;
        window.onkeyup = this.spaceBar;
    }

    spaceBar(e){
        var key = e.keyCode ? e.keyCode : e.which;
        if (key === 32) {
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
            this.click();
        }
    }

    change(e,i) {
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
                <Row>
                    <ImageCell
                        src={this.images[pos][0]} 
                        colony={this.colony[this.images[pos][1]]}
                        srcTree={this.props.srcTree}
                        pos={(pos+1.5)/(this.images.length+2)}
                        src_pie={this.props.src_pie}
                        angles={this.props.angles}/>
                    <Button
                        onClick={this.click}
                        style={{
                            width:"5%",
                            height:"3%",
                            position:"absolute",
                            bottom: "4.5%",
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
                            bottom: "1%",
                            right: "10%"
                        }}
                    />
                </Row>
            </div>
        );
    }
}
