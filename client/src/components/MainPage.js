import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import PostsDisplay from './PostsDisplay'
import Pagination from './Pagination'

function MainPage(props) {
    const [postList, setPostList] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(4)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (number) => {
        setCurrentPage(number);
    }

    useEffect(() =>{
        axios.get('http://localhost:3001/login')
        .then(response => {
            console.log(response.data);
            if(response.data.loggedIn) {
                axios.get('http://localhost:3001/api/get')
                .then(res => {
                    setPostList(res.data)
                })
            }
            else{
                window.location.replace("/")
            }
        })
        
    },[])

    const logout = () => {
        axios.get('http://localhost:3001/logout')
        .then((response) => {
            console.log("Logged out")
        })
    }


    return (
        <div>
            <PostsDisplay postList={currentPosts}  />
            <Pagination postsPerPage={postsPerPage} totalPosts={postList.length} Paginate={changePage} />
            <br/><br/>
            
        </div>
    )
}

export default MainPage
