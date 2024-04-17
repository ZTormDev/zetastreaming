import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/zetamovies/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/zetamovies/:category/:id'
                component={Detail}
            />
            <Route
                path='/zetamovies/:category'
                component={Catalog}
            />
            <Route
                path='/zetamovies'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
