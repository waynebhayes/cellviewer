import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const StyledSwitch = withStyles({
    switchBase: {
      color: "white",
      '&$checked': {
        color: "blue",
      },
      '& + $track': {
        backgroundColor: 'red',
        opacity: 1,
        color: 'red',
      },
      '&$checked + $track': {
        backgroundColor: 'red',
        opacity: 1,
        color: 'red',
      },
    },
    checked: {},
    track: {
    },
    thumb:{
    },
    input:{
    }
  })(Switch);

const bool_int = {"false":0, "true": 1}

export default class RadialTree extends Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            posC: false
        }
    }

    changeColor(e,i){
        console.log(e,i);
        this.setState({
            posC : i
        });
    }

    render() {

        var l = window.innerHeight
        if(window.innerHeight*2 > window.innerWidth){
            l = window.innerWidth/2
        }

        var posC = this.state.posC;
        return (
            <Container 
                    style={{
                        width:"50vh",
                        position:"relative",
                        margin:"0", 
                        padding:"0",
                        display:"contents"}}>
                <img
                    alt=""
                    style={{
                        position:"absolute",
                        height: (l*.79).toString()+"px",
                        width: (l*.79).toString()+"px",
                        right: (window.innerWidth/4-(l*.79/2)).toString()+"px",
                        top: (window.innerHeight/2-(l*.79/2)).toString()+"px",
                        backgroundColor:"gray",
                        display:["none","initial"][bool_int[posC]]
                    }}
                />
                <img
                    id="pie"
                    src={this.props.src_pie}
                    alt="im"
                    className="image2"
                    style={{
                        position:"absolute",
                        height: (this.props.pos*l*.8).toString()+"px",
                        width: (this.props.pos*l*.8).toString()+"px",
                        right: (window.innerWidth/4-this.props.pos*l*.4).toString()+"px",
                        top: (window.innerHeight/2-this.props.pos*l*.4).toString()+"px"
                    }}/>
                <img
                    id="tree"
                    src={this.props.src} 
                    alt="im"
                    className="image2"
                    style={{
                        position:"absolute",
                        height: (l*.8).toString()+"px",
                        width: (l*.8).toString()+"px",
                        right: (window.innerWidth/4-l*.4).toString()+"px",
                        top: (window.innerHeight/2-l*.4).toString()+"px"
                    }}
                />

                <Typography component="div" style={{
                        position:"absolute",
                        opacity: "0.5",
                        borderRadius: "20px",
                        top: "2%",
                        right: "10%",
                        color: "white",
                        backgroundColor:"#555555",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "0.5%",
                        paddingBottom: "0.5%"
                    }}>
                    <Grid component="label" container alignItems="center"
                            style={{
                            }}>
                        <Grid item>Show Path</Grid>
                        <Grid item>
                            <Switch
                                color="primary"
                                checked={posC}
                                onChange={this.changeColor}
                                value={posC}
                            />
                        </Grid>
                    </Grid>
                </Typography>
                
            </Container>
        );
    }
}
