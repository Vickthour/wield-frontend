import React from 'react'
import Post from './Post'
import StoryPane from './StoryPane'

const MainPane = () => {
  return (
    <div className=' sm:col-span-6 space-y-4'>
      <StoryPane/>
      <Post/>
    </div>
  )
}

export default MainPane