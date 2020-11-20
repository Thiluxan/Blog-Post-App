import React from 'react'
import axios from 'axios'

function Header() {

    const logout = () => {
        axios.get('http://localhost:3001/logout')
            .then((response) => {
                console.log("Logged out")
        })
    }

    return (
        <div>
            <div className="navbar">
                <div className="links">
                <a href="/home">Main Page</a>
                <a href="/create">Create Post</a>
                <a href="/" onClick={logout} style={{marginLeft:"1050px"}}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Header
