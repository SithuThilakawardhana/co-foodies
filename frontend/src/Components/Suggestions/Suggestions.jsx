import React, { Component } from 'react';
import './Suggestions.css';
import Avatar from '@mui/material/Avatar';
import p3 from '../../images/images/p3.jpg';
import p2 from '../../images/images/p2.jpg';
import p4 from '../../images/images/p4.jpg';
import p5 from '../../images/images/p5.jpg';
import p6 from '../../images/images/p6.jpg';
import p7 from '../../images/images/p7.jpg';

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <div>
                <div className='Suggestion_container' >
                    <div className='suggestion_header'>
                        <div>Suggestions for you</div>
                    </div>
                    <div className='suggestion_body'>
                        <div className='suggestion_friend'>
                            <Avatar src={p2} className='suggestion_image'/>
                            <div className='suggestion_username'>Olive Yew</div>
                        </div>
                        <div className='suggestion_friend'>
                            <Avatar src={p3} className='suggestion_image'/>
                            <div className='suggestion_username'>Allie Grate</div>
                        </div>
                        <div className='suggestion_friend'>
                            <Avatar src={p4} className='suggestion_image'/>
                            <div className='suggestion_username'>Rose Bush</div>
                        </div>
                        <div className='suggestion_friend'>
                            <Avatar src={p5} className='suggestion_image'/>
                            <div className='suggestion_username'>Laura Biding</div>
                        </div>
                        <div className='suggestion_friend'>
                            <Avatar src={p6} className='suggestion_image'/>
                            <div className='suggestion_username'>Anna_johnes</div>
                        </div>
                        <div className='suggestion_friend'>
                            <Avatar src={p7} className='suggestion_image'/>
                            <div className='suggestion_username'>John Dory</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Suggestions;