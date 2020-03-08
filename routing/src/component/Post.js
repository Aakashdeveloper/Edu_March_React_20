import React,{Component} from 'react';
import PostListing from './PostListing';

const url = "http://localhost:8900/posts";

class Posts extends Component{
    constructor(props){
        super(props)

        this.state={
            post:'',
            title:''
        }
    }

    render(){
        var mydata = this.state;
        return(
            <div>
                <h1>Posts</h1>
                <PostListing datalist={mydata.post}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(url, {
            method:'GET'
        })
        .then((res) =>  res.json())
        .then((post) => {
            this.setState({post:post})
        })
    }
    
}

export default Posts;