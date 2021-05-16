import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({
    component: Component,
    isAdmin,
    ...rest
}) => {

    return (
        <Route {...rest} exact
            render={
                props => {
                    if (isAdmin === "true" || isAdmin === true) {
                        return <Component {...rest} {...rest} />
                    }
                    else {
                        return <Redirect exact to={
                            {
                                pathname: '/',
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            }
        />
    )
}

export default ProtectedRoute;