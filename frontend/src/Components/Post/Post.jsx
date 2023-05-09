import React, { Component } from "react";
import './Post.css';
import Avatar from '@mui/material/Avatar';
import love from '../../images/images/love.svg';
import comment from '../../images/images/comment.svg';
import share from '../../images/images/share.svg';
import p9 from '../../images/images/p9.jpg'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
         }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{
        let data= [
            {
                "username":"USD",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":" comment 1"
            },
            {
                "username":"anyndya",
                "commentId":"12345",
                "timeStamp":"12356",
                "description":" comment 1"
            },
            {
                "username":"herath",
                "commentId":"12345",
                "timeStamp":"12356",
                "description":" comment 1"
            }
        ];
        this.setState({commentList: data});
    }
    
    render() { 
        return (
            <div className="post_container">
                {/* Header */}
                <div className="header">
                    <Avatar className="avimage" src={p9}/>
                    <div className="username">{this.props.userName}</div>
                </div>

                {/* image */}
                <div className="image">
                    <img src={this.props.postImage} alt="" width="615px" />
                </div>

                {/* Analytics */}
                <div className="analytics">
                    <div style={{"marginLeft":"10px"}}>
                        <img className="reactimage" src={love} alt=""/>
                        <img className="reactimage" src={comment} alt="" />
                        <img className="reactimage" src={share} alt="" />
                    </div>
                    <div style={{"fontWeight":"bold","marginLeft":"14px"}}>
                        {this.props.likes} likes
                    </div>
                </div>

                {/* Comment Section */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className="post_comment">{item.username}:{item.description}</div>
                        ))
                    }
                    <input className="commentbox" type="text" placeholder="Add a comment..."/>
                </div>
            </div>
        );
    }
}
 
export default Post;