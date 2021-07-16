import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Respositories from './pages/Repositories';

export default function Routes() {
    //Container principal do React Router DOM
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Respositories} />
            </Switch>
        </BrowserRouter>
        </>
    )
}