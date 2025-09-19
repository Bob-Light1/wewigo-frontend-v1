import React, { useEffect, useRef, useState } from 'react'
import { dummyMessagesData, dummyUserData } from '../assets/assets'
import { ImageIcon, SendHorizonal } from 'lucide-react'

const ChatBox = () => {

  const messages = dummyMessagesData
  const [text, setText] = useState('')
  const [image, setImage] = useState(null) 
  const [user, setUser] = useState(dummyUserData)
  const messagesEndRef = useRef(null)

  const sendMessage = async () => {

  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth" })
  }, [messages])


  return user && (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center gap-2 p-2 md:px-10 xl:pl-42 bg-gradient-to-r from-[#e6eff7] to-[#c1d7ec]
      border-b border-gray-300'>
        <img src={user.profile_picture} alt={user.username} className='size-8 rounded-full'/>
        <div>
          <p className='font-medium'>{user.full_name}</p>
          <p className='text-sm text-gray-500 -mt-1.5'>@{user.username}</p>
        </div>
      </div>

      <div className='p-5 md:px-10 h-full overflow-y-scroll'>
        <div className='space-y-4 max-w-3xl mx-auto'>
          {
            messages.toSorted((a,b) => new Date(a.createdAt) - new Date (b.createdAt)).map((message, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${message.to_user_id !== user._id ? 'items-start' : 'items-end'}`}
              >
                <div className={`p-2 text-sm max-w-sm text-slate-700 rounded-xl shadow-md
                  ${message.to_user_id !== user._id ? 'rounded-bl-none bg-white' : 'rounded-br-none bg-[#dae7f3]'}`}>
                    {
                      message.message_type === 'image' && (
                      <img src={message.media_url} className='w-full max-sm rounded-lg mb-1' alt="" />)
                    }
                    <p>{message.text}</p>
                </div>
              </div>
            ))
          }

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className='px-4'>
          <div className='flex items-center gap-3 pl-5 p-1.5 bg-white w-full max-w-3xl mx-auto border
          border-gray-200 shadow-xl rounded-2xl mb-5'>
            <input 
              type="text" 
              className='flex-1 outline-none text-slate-700' 
              placeholder='Type a massage ...'
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />

            <label htmlFor="image">
              {
                image
                ? <img src={URL.createObjectURL(image)} alt="" className='h-8 rounded'/>
                :<ImageIcon className='size-9 text-gray-400 cursor-pointer rounded'/>
              }

              <input 
                type="file" 
                id='image' 
                accept='image/*'
                hidden
                onChange={(e) => setImage(e.target.files[0])} 
              />
            </label>

            <button 
              onClick={sendMessage}
              className='bg-gradient-to-br from-[#5d96ce] to-[#4989c8] hover:from-[#397cbe] hover:to-[#346faa]
              active:scale-95 cursor-pointer text-white p-2 rounded-full shadow-lg'
            >
              <SendHorizonal size={18}/>
            </button>
          </div>
      </div>
    </div>
  )
}

export default ChatBox
