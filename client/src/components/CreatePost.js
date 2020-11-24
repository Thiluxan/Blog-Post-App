import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

function CreatePost(props) {
    const [title,setTitle] = useState('')
    const [publisher,setPublisher] = useState('')
    const[post,setPost] = useState('')
    const[description,setDescription] = useState('')

    const submitPost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/create',{
            title:title,
            publisher:publisher,
            content:post,
            description:description,
        })
        .then(response => {
            window.location.replace('/home')
        })

    }

    return (
        <div>
            <Header />
            <div className="create-post">
                <div className="uplaod">
                    <label>Title</label><br/>
                    <input type="text" 
                    name="title" 
                    value = {title}
                    onChange={e => setTitle(e.target.value)}/> 
                    <br/> <br/>

                    <label>Publisher</label><br/>
                    <input type="text"
                    name="publisher"
                    value={publisher}
                    onChange={e => setPublisher(e.target.value)}/>
                    <br/> <br/>

                    <label>Description</label><br/>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>


                    <br/> <br/>
                    <label>Post</label><br/>
                    <textarea 
                    name="post"
                    value={post}
                    onChange={e => setPost(e.target.value)}/>
                    <br/><br/>
                    <button type="submit" onClick={submitPost}>Add Post</button>
                </div>            
            </div>
        </div>
    )
}

export default CreatePost
