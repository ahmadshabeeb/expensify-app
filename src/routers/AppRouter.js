import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import AddExpensePage from '.././components/AddExpensePage';
import EditExpensePage from '.././components/EditExpensePage';
import ExpensDashboardPage from '.././components/ExpensDashboardPage';
import LoginPage from '.././components/LoginPage';
import Header from '.././components/Header';
import HelpExpensePage from '.././components/HelpExpensePage';
import NotFoundPage from '.././components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} /> 
                <PrivateRoute path="/dashboard" component={ExpensDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>  
    </Router>
);

export default AppRouter; 