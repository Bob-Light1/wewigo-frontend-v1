import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    
    <div className='w-80 h-170 flex flex-col items-center justify-between bg-white shadow rounded-xl gap-4'>
      <img src={project.picture} alt={project.title} className='w-full h-1/2 object-cover rounded-md'/>

      <div className='w-full h-[30%] flex flex-col items-center justify-center gap-1 px-4'>
        <div className='w-full h-[64%] flex flex-col items-center justify-center bg-white p-4 -mt-18 rounded-lg 
        shadow-xl border-b-4 border-b-[#000000]'>
           <span className='text-md font-bold'>{project.title}</span>
           <br />
           <span className='text-sm'>{project.description}</span>
        </div>
        
        <div className='w-[80%] h-[37%] flex flex-col items-center justify-center bg-white mt-2 p-4 rounded-lg 
        shadow-lg border-b-4 border-b-[#ff7f3e]'>
            <span className='font-bold text-center border-b-2'> {project.status} • {project.progress}% </span>
            <br />
            <span className='text-sm text-center'>deadline : {project.deadline}</span> 
        </div>
      </div>

      <button className='w-[60%] h-[8%] bg-[#4989c8] text-white hover:bg-[#ffffff] hover:text-black mb-4 
      mt-2 rounded-lg shadow-md border-b-4 border-white'>
        Work Now
      </button>
    </div>
  )
}

export default ProjectCard
