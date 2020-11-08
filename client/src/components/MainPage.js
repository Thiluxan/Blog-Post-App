import React,{useState,useEffect} from 'react'
import axios from 'axios'

function MainPage() {
    const [postList, setPostList] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3001/api/get')
         .then(response => {
             setPostList(response.data)
         })
    },[])
    return (
        <div className="main-page">
            {
                postList.map(post => {
                    return (
                        <div className="post-container">
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                            <span><i>Published By: </i><b>{post.publisher}</b></span><br/>
                            <span><i>Published On: </i><b>{post.date}</b></span> <br/><br/>
                            <button>view</button>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default MainPage
