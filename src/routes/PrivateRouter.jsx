import React, {  useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const path = useLocation().pathname

    if(loading){
        return <Loading></Loading>
    }
    
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={path} to={'/auth/login'}></Navigate>
        </div>
    );
};

export default PrivateRouter;