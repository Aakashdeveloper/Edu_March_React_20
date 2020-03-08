import React,{Component} from 'react';
import axios from 'axios';

const url="http://localhost:8900/posts";

class PostDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        console.log(this.props)
        var mydetails = this.state.details;
        console.log(mydetails)
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h2>Details Of {mydetails.name}</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <center>
                            <img src={mydetails.img}/>
                        </center>
                        <p>{this.state.details.details}</p>
                    </div>
                </div>
            </div>
        )
    }

    /*componentDidMount(){
        axios.get(`${url}/${this.props.match.params.topic}`)
        .then((res) => {
            this.setState({details:res.data})
        })
    }*/

    async componentDidMount(){
        const response = await  axios.get(`${url}/${this.props.match.params.topic}`)
        this.setState({details:response.data})
    }
}


export default PostDetails;
