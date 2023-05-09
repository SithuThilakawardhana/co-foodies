import React, { Component } from 'react';
import './InfoSection.css';
import Avatar from '@mui/material/Avatar';
import imageSrc from '../../images/images/p9.jpg';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <div>
                <div className='infocontainer'>
                    <Avatar src={imageSrc} className='infoimage'/>
                    <div className='infocontent'>
                        <div className='infousername'>Marsha Mellow</div>
                        <div className='infodescription'>Food Lover</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default InfoSection;