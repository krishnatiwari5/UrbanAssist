import React, { useState } from 'react'
import "./blog.css"
import Blogs from "../../data/blogs.json"

function Blog() {
    const [page, setPage] = useState(1);

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Math.ceil(Blogs.length / 4) && selectedPage !== page) {
          setPage(selectedPage)
        }
      }
  return (
    <div className="blogcon">
    
        { Blogs && Blogs.slice(page * 4 - 4, page * 4).map(blog => {
            return (
                <div className='blog'>
                <div className="blogimg">
                    <img src={blog.image_url} alt="" />
                </div>
                <div className="blogoverview">
                    <div className="bloghead">
                    <h2 className="blogtitle">{blog.name}</h2>
                    
                    <p className='blogauth'>- By @{blog.author}</p>
                    </div>
                    <p className="blogdesc">{blog.description}</p>
                    <button className='blogbtn'>Read More</button>
                    <div className="blogshortdetails">
                        <p className="blogdate">{blog.date}</p>
                            |
                        <p className="blogreadtime">{blog.readtime} min read</p>
                        |
                        <p className="blogreadtime">{blog.reviews} reviews</p>
                    </div>
                </div>
                </div>
            )
        })}
   
   { Blogs.length > 0 && <div className="pagination">

<span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
{[...Array(Math.ceil(Blogs.length / 4))].map((_, i) => {
  return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
})}
<span onClick={() => selectPageHandler(page + 1)} className={page < Math.ceil(Blogs.length / 4) ? "" : "pagination__disable"}>▶</span>
</div>
}

    </div>
   
  )
}

export default Blog