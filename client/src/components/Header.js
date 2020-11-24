import React,{useRef,useState} from 'react'
import axios from 'axios'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function Header() {

    const [error,setError] = useState('')
    const {currentUser,logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try{
            await logout()
            history.push('/login')
        }
        catch(err) {
            setError('Failed to log out')
        }
    }

    return (
        <div>
            <div className="navbar">
                <div className="links">
                <a href="/home">Main Page</a>
                <a href="/create">Create Post</a>
                <a href="/profile">Profile</a>
                <a href="/" onClick={handleLogout} style={{marginLeft:"650px"}}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Header
