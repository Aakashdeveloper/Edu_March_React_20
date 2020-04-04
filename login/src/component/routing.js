import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './header';
import Register from './RegisterComponent';
import Login from './LoginComponent';
import Profile from './Profile';
import User from './User';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/user" component={User}></Route>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;