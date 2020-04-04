import React, {Component} from 'react';

const url = "http://localhost:5000/api/auth/register";
class RegisterComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }

    handleChangeEmail(event){
        this.setState({email:event.target.value})
    }

    handleChangePassword(event){
        this.setState({password:event.target.value})
    }

    handleSubmit(){
        var data={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }

        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/login'))
    }
    
    render(){
        return(
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h2>Register Form</h2>
                    </div>
                    <div className="panel-body">

                        <div className="form-group">
                            <label>Name</label>
                            <input type="input" className="form-control"
                            onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"
                             onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="input" className="form-control"
                             onChange={this.handleChangePassword}/>
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

export default RegisterComponent;
