import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageHome from './components/PageHome/PageHome';


export default (
    <Switch>
        <Route exact path='/' component={PageHome} />
    </Switch>
)