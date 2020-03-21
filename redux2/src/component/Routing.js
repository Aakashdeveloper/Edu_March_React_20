import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from '../container/NewsDetails';

const Routing = ( )=> {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/details/:id" component={NewsDetails}></Route>
            <Footer/>
        </BrowserRouter>
    )
}

export default  Routing;
