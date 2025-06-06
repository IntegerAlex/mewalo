import BlogBanner from '@/components/BlogBanner/BlogBanner'
import BlogContent from '@/components/BlogContent/BlogContent'
import FreeShipping from '@/components/FreeShipping/FreeShipping'
import SubscribeComp from '@/components/Subscribe/SubscribeComp'
import React from 'react'

const BlogPage = () => {
  return (
    <>  
    <BlogBanner/>
    <BlogContent/>
    <FreeShipping/>
    <SubscribeComp/>
    </>
  )
}

export default BlogPage