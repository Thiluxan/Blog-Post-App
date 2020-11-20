import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:[]
        }
    }

    componentDidMount(){
                const id = this.props.match.params.id
                axios.get(`http://localhost:3001/api/get/${id}`)
                .then(response => {
                    console.log(response.data)
                    this.setState({post:response.data})
                })
            }

    
    render() {
        const post = this.state.post
        return (
            <div>
                <Header/>
                {post.map(post => (
                    <div className="view-post" key={post.id}>
                        <h1>{post.title}</h1>
                        <span><i>Published By: </i><b>{post.publisher}</b></span><br/>
                        <span><i>Published On: </i><b>{post.date}</b></span> <br/><br/>
                        <p>{post.body}</p>
                </div>
                ))}
                
            </div>
        )
    }
}
