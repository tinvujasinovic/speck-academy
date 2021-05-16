import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {

    const { isAdmin } = useContext(AuthContext);

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