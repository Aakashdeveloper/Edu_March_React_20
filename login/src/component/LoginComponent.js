import React, {Component} from 'react';

const url = "http://localhost:5000/api/auth/login";
class LoginComponent extends Component {
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassWord = this.handleChangePassWord.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChangeEmail(event){
        this.setState({email:event.target.value})
    }

    handleChangePassWord(event){
        this.setState({password:event.target.value})
    }


    handleSubmit(){
        var data={
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
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('Token',data.token)
            this.props.history.push('/profile')
        })
    }
    
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2>Login Form</h2>
                    </div>
                    <div className="panel-body">

                        <div className="form-group">
                            <label>Email</label>
                            <input type="input" className="form-control"
                            onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>PassWord</label>
                            <input type="input" className="form-control"
                             onChange={this.handleChangePassWord}/>
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

export default LoginComponent;
