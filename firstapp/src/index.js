import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

//Functional Component
const App = () => {
    return(

        <React.Fragment>
            <Header/>
            <h1>Hello To React APP</h1>
            <h2>This is From edureka</h2>
        </React.Fragment>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))



/*
function abc(){
    var mydata =[a,b]
    return mydata
}
*/