import React, { Component } from "react";
import './MainPage.css';
import Post from '../Post/Post';
import uploadimg from '../../images/images/upload.png'

class MainPage  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[]
         }
    }
    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        let data=[
            {
                "postId":"123456",
                "userName":"sithu",
                "postImageURL":"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"sithu",
                "postImageURL":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"sithu",
                "postImageURL":"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "timeStamp":"12345",
                "likes":"1234"
            }
        ];
        this.setState({postArray: data})
    }
    
    render() { 
        return (
            <div>
                <div style={{"textAlign":"center", "margin":"10px"}}>
                    <img src={uploadimg} alt="" className="uploadicon"/>
                </div>
                {
                    this.state.postArray.map((item, index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}
 
export default MainPage ;