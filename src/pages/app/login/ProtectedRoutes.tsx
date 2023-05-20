import React, {useEffect} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie'


const ProtectedRoutes = () => {

    const [cookies] = useCookies(['token'])
    const navigate = useNavigate();

    const token = cookies.token;
    const isAuthenticated = token ? true : false;


    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { replace: true });
        }
    },[]);


    return <Outlet />;
    
}

export default ProtectedRoutes