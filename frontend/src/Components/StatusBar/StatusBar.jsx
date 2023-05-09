import React, { Component } from "react";
import './StatusBar.css';
import Avatar from '@mui/material/Avatar';
import statusimg from '../../images/images/p1.jpg'
import uploadimage from '../../images/images/statusadd.png'


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList: []
         }
    }

    componentDidMount(){
        this.getData()
    }

    getData=()=> {
        let data= [
            {
                "username": "anindya_bunny",
                "imageURL": "../../images/images/p1.jpg"
            },
            {
                "username": "nishan",
                "imageURL": "../../images/images/pp2.jpg"
            },
            {
                "username": "sithu",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "dolly",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "anindya_bunny",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "nishan933",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "ss_perera",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "arun",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "nishan933",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "ss_perera",
                "imageURL": "../../images/images/pp1.png"
            },
            {
                "username": "arun",
                "imageURL": "../../images/images/pp1.png"
            }
        ]
        this.setState({statusList: data});
    }
    
    render() { 
        return (
            <div>
                <div className="container">
                    <img src={uploadimage} alt="" className="statusbar_upload" style={{"width":"55px","height":"55px"}}/>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="sname">
                            <Avatar className="status" src={statusimg} />
                            <div className="text">{item.username}</div>
                    </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
 
export default StatusBar ;