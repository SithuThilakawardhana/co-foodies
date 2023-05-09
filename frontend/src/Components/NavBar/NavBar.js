import React, { Component } from "react";
import './NavBar.css'
import Grid from '@mui/material/Grid';
import cofoodies_logo from '../../images/images/cofoodieslogo1.png';
import home from '../../images/images/home.svg';
import message from '../../images/images/message.svg';
import find from '../../images/images/find.svg';
import react from '../../images/images/love.svg';
import Avatar from '@mui/material/Avatar';
import p9 from '../../images/images/p9.jpg'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="barContent">
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <img className="navbarLogo" src={cofoodies_logo} width='175px' alt="" />
                        </Grid>
                        <Grid item xs={4}>
                            <input className="search" type="text" placeholder="Search" />
                        </Grid>
                        <Grid item xs={3} style={{'display':'flex'}}>
                            <img className="img" src={home} alt="" width='25px'/>
                            <img className="img" src={message} alt="" width='25px' />
                            <img className="img" src={find} alt="" width='25px' />
                            <img className="img" src={react} alt="" width='25px' />
                            <Avatar className="img" src={p9} style={{'maxWidth':'25px', 'maxHeight':'25px'}}/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
 
export default NavBar;