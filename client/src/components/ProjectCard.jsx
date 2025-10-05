import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    
    <div className='w-75 h-130 bg-gray-100 flex flex-col items-center justify-between gap-2 shadow-lg'>
      <img src={project.picture} alt={project.title} className='w-full h-1/2 object-cover rounded-md'/>

      <div className='w-full h-[30%] flex flex-col justify-between gap-1 px-4'>
        <span className='text-md font-bold'>{project.title}</span>
        <span className='text-sm'>{project.description}</span>
        <div>
            <span className='font-bold'> {project.status} • {project.progress}% </span>
            <br />
            <span className='text-sm'>deadline : {project.deadline}</span> 
        </div>
      </div>

      <button className='w-full h-[10%] bg-[#4989c8] text-white rounded-lg hover:bg-[#346faa]'>Work now</button>
    </div>
  )
}

export default ProjectCard
