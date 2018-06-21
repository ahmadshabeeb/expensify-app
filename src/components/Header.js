import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from  'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1> 
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink> <br/>
        <button
            onClick={startLogout}
        >Log out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);