import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='https://ztormdev.github.io/zetamovies/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='https://ztormdev.github.io/zetamovies/:category/:id'
                component={Detail}
            />
            <Route
                path='https://ztormdev.github.io/zetamovies/:category'
                component={Catalog}
            />
            <Route
                path='https://ztormdev.github.io/zetamovies'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
