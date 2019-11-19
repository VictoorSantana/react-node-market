import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import Services from './services';
import ProductAdd from './productadd';
import ProductSell from './productsell';
import Forbidden from './forbidden';

import Api from '../helper/Api';

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route {... rest} 
    render={props => Api.isAuthenticated() ? (
        <Component {... props}></Component>
    ): (
        <Redirect to={{ pathname: "/", state: { from: props.location } }}></Redirect>
    )
    }
    
    ></Route>
);

const IndexRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={(props) => <Login {... props}></Login>}></Route>
            <PrivateRoute path="/services" component={(props) => <Services {... props}></Services>}></PrivateRoute>
            <PrivateRoute path="/productadd" component={(props) => <ProductAdd {... props}></ProductAdd>}></PrivateRoute>
            <PrivateRoute path="/forbidden" component={(props) => <Forbidden {... props}></Forbidden>}></PrivateRoute>
            <PrivateRoute path="/productsell" component={(props) => <ProductSell {... props}></ProductSell>}></PrivateRoute>
        </Switch>
    </BrowserRouter>
);
 
export default IndexRoutes;
