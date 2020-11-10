import React from 'react'
import { Link } from 'react-router-dom'


function PostsDisplay({postList}) {
    return (
        <div className="main-page">
            {
                postList.map(post => {
                    return (
                        <div className="post-container" key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                            <span><i>Published By: </i><b>{post.publisher}</b></span><br/>
                            <span><i>Published On: </i><b>{post.date}</b></span> <br/><br/>
                            <Link to={"/post/"+post.id}>
                                <button>view</button>
                            </Link>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostsDisplay
