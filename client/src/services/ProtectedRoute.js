import React,{useState,useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import axios from 'axios'

export default function ProtectedRoute({component:Component,...rest}) {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/login')
        .then(response => {
        console.log(response.data);
        if(response.data.loggedIn) {
            setLogin(true);
            console.log(login)
        }
        })
    },[])

    return (
        <Route 
            {...rest}
            render = {props => {
                if(login) {
                    return <Component {...props} />;
                }
                else{
                    return(
                        <Redirect 
                            to={{
                                pathname:"/",
                                state:{
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }}
        />
    )
}
