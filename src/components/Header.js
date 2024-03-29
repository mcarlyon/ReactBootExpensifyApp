import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true }>Dashboard</NavLink>
        <NavLink to="/create">Add Expense</NavLink>
    </header>
);

export default Header;