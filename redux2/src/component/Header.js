import React,{Component} from 'react';
import './Header.css';

//Class Component
class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'REACT APP',
            keyword:'User Text Here'
        }
    }

    //Event Binding
    inputChanges(event){
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'USER TEXT HERE'})
        this.props.userText(event.target.value)

    }

    render(){
        return(
            <header>
                 <div className="logo">
                     {this.state.title}
                 </div>
                <center>
                    <input onChange={this.inputChanges.bind(this)}/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;


/*

function add(a)
{return}

add(1)

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