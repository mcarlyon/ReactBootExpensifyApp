//Higher Order Component (HOC) - Component that renders a component
//Reuse Code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Do not share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <div>
                    <p>LoggedIn</p>
                    <WrappedComponent {...props}/>
                </div>
            ) : (
                <p>Please log in to view</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="deets"/>, document.getElementById('app'));