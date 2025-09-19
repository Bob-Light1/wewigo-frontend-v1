import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'
import StoryViewer from '../components/StoryViewer'

const Layout = () => {

  const user = dummyUserData
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewStory, setViewStory] = useState(null)
 
  return user ? (
    <div className='w-full flex h-screen'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className='flex-1 bg-slate-50'>
        <Outlet context={{ setViewStory }}/>
      </div>

      {/* Open X/Menu only if the stories page is not active*/}
      {!viewStory && (
        sidebarOpen ? (
          <X className='absolute top-3 right-3 p-2 z-40 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
            onClick={() => setSidebarOpen(false)}
         />
        ) : (
          
          <Menu className='absolute top-3 right-3 p-2 z-40 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
            onClick={() => setSidebarOpen(true)}
          />
        )
      )}

      {/* StoryViewer opened when a story is displayed*/}
      {viewStory && <StoryViewer viewStory={viewStory} setViewStory={setViewStory}/>}
    </div>
    ): (
      <Loading />
    )
}

export default Layout
