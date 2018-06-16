import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import AddExpensePage from '.././components/AddExpensePage';
import EditExpensePage from '.././components/EditExpensePage';
import ExpensDashboardPage from '.././components/ExpensDashboardPage';
import Header from '.././components/Header';
import HelpExpensePage from '.././components/HelpExpensePage';
import NotFoundPage from '.././components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>  
    </BrowserRouter>
);

export default AppRouter; 