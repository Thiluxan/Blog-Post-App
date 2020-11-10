import React from 'react'

export default function Pagination({postsPerPage,totalPosts,Paginate}) {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(page => (
                    <li key={page} className="page-item">
                        <a 
                         onClick = {() => Paginate(page)}
                        href="#" className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}