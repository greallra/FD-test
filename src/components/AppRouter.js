import React from "react";
import MenuSections from './MenuSections';
import MenuSectionSelected from './MenuSectionSelected';
import MenuItemSelected from './MenuItemSelected';
import NavBar from './NavBar';
import Basket from './Basket';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function AppRouter() {
    return (
        <>
        <Router> 
           <NavBar />
           <Basket />
           <Switch>  
                 <Route
                    exact={true}
                    path="/"
                    component={MenuSections}
                />
                 <Route
                    exact={true}
                    path="/:MenuSectionId"
                    component={MenuSectionSelected}
                />
                 <Route
                    path="/:MenuSectionId/:MenuItemId"
                    component={MenuItemSelected}
                />
            </Switch>
        </Router>
        </>
    )
}