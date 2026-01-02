import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import Layout from './pages/Layout'
import Project from './pages/Project'
import Finance from './pages/Finance'
import Stores from './pages/Stores'
import { useUser } from '@clerk/clerk-react'
import {Toaster} from 'react-hot-toast'
import { Import } from 'lucide-react'



const App = () => {

  const {user} = useUser()
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Layout/>}>
          <Route index element={<Feed/>} />
          <Route path='messages' element={<Messages/>} />
          <Route path='messages/:userId' element={<ChatBox/>} />
          <Route path='stores' element={<Stores/>} />
          <Route path='finance' element={<Finance/>} />
          <Route path='project' element={<Project/>} />
          <Route path='connections' element={<Connections/>} />
          <Route path='discover' element={<Discover/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='profile/:profileId' element={<Profile/>} />
          <Route path='create-post' element={<CreatePost/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
