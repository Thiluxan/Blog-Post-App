import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PostsDisplay from './PostsDisplay'
import Pagination from './Pagination'

function MainPage() {
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
        axios.get('http://localhost:3001/api/get')
         .then(response => {
             setPostList(response.data)
         })
    },[])


    return (
        <div>
            <PostsDisplay postList={currentPosts}  />
            <Pagination postsPerPage={postsPerPage} totalPosts={postList.length} Paginate={changePage} />
        </div>
    )
}

export default MainPage
