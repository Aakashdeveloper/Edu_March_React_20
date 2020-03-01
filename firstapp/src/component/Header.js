import React,{Component} from 'react';
import './Header.css';

//Class Component
class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'REACT APP'
        }
    }


    render(){
        return(
            <header>
                 <div className="logo">
                     {this.state.title}
                 </div>
                <center>
                    <input/>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;


/*
flux
redux
relay

import React from 'react';
import ReactDOM from 'react-dom';

//functional component
const App  = () => {
    return {        
        <h1>hello React</h1>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));

*/