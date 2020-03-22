import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from '../container/NewsDetails';
import Food from '../container/FoodItem';

const Routing = ( )=> {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/details/:id" component={NewsDetails}></Route>
            <Route exact path="/food" component={Food}></Route>
            <Footer/>
        </BrowserRouter>
    )
}

export default  Routing;
