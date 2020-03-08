import React, {Component} from 'react';

const url = "http://localhost:8900/posts";
class FormsComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            details:'',
            img:''
        
        }

        this.handleChangeDetails = this.handleChangeDetails.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }

    handleChangeDetails(event){
        this.setState({details:event.target.value})
    }

    handleChangeImage(event){
        this.setState({img:event.target.value})
    }

    handleSubmit(){
        var id = Math.floor(Math.random()*10000)
        var data={
            "id":id,
            "name":this.state.name,
            "details":this.state.details,
            "img":this.state.img
        }

        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/post'))
    }
    
    render(){
        return(
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h2>Forms</h2>
                    </div>
                    <div className="panel-body">

                        <div className="form-group">
                            <label>Name</label>
                            <input type="input" className="form-control"
                            onChange={this.handleChangeName.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label>Details</label>
                            <input type="input" className="form-control"
                             onChange={this.handleChangeDetails}/>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="input" className="form-control"
                             onChange={this.handleChangeImage}/>
                        </div>
                        <button type="button" className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormsComponent;
