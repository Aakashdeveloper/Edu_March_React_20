//Get Initial state
//Set Intial State
//Before get created
//Render
//After get created

import React,{Component} from 'react';

class LifeCycle extends Component {

    //1.Get Initial state
    constructor(props){
        super(props)
        console.log('constructor>>>>')
        //2.Set Intial State
        this.state={
            title:"My React Lifecycle"
        }
    }

    //Before state update
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

     //After state update
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    //3.Before get created
    componentWillMount(){
        console.log('componentWillMount > Before get created')
    }

    //Stop renderer component
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        if(nextState.title===this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 Render
    render(){
        console.log('render>>>>')
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => this.setState({title:'Something Else'})}>
                    Click Me
                </div>
            </div>

        )
    }

    //5 After get created
    componentDidMount(){
        console.log('componentDidMount > After get created')
    }

    componentWillUnmount(){
        alert('You are leaving the page')
    }
        
}

export default LifeCycle;
