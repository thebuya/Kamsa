"use client";


import React, {useEffect} from 'react'

const  Blog = () => {
  useEffect(() => {
    const navBlogElement = document.getElementById('navBlog');
    if (navBlogElement) {
      navBlogElement.classList.add('active-link');
    }
  }, []);

  
  return (
    <div className='kamsa-container '> 
      <h1 className="heading">
      Financial Insights:{" "}
          <span className="highlight">
          Trusted Source for Updates on Sustainable Finance and Grants
          </span>.
      </h1>
    </div>
  )
}

export default Blog