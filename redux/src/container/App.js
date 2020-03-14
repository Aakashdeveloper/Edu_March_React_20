import React, {Component} from 'react';
import { movieList} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Display from '../component/displayComponent';

class App extends Component {

    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <Display datalist={this.props.mydata}></Display>
            </div>
        )
    }
}


//This will recive the state
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }
}

//this will dispatch the action
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)