import apiOrigin from './api';

export const getAllUsers = token => {
    return fetch(`${apiOrigin}api/user`, {
        headers:{
            'auth-token':token
        }
    })
    .then(res=>res.json());
}