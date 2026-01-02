import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { dummyProjectsData} from '../assets/assets'
import ProjectCard from '../components/ProjectCard';
import { Plus } from 'lucide-react';

const Project = () => {

    const [projects, setProjects] = useState(dummyProjectsData);
    const [loading, setLoading] = useState(false)
    const [projectFeeds, setProjectFeeds] = useState([])

    const fetchProjects = async () => {
            setProjectFeeds(dummyProjectsData)
            setLoading(false)
        }
    
    const handleSearch = async (e) => {
    if(e.key === 'Enter'){
        setProjects([])
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 1000)
    }
    }

    useEffect(() => {
        fetchProjects()
        }, [])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8 mx-4 px-4'>
        <div className='mx-auto p-6'>
            <div className='mt-6 mb-16 text-center'>
                <h1 className='text-3xl font-bold'>All Your Projects</h1>
            </div>
            <div className='flex items-center justify-center gap-10 m-4'>
                <button className='relative w-12 h-12 bg-[#4989c8] rounded-full text-white'>
                    <Plus className='w-8 h-8 absolute top-2 left-2'/>
                </button>
                <button className='w-24 h-10 bg-black text-white rounded-md'>
                    new project
                </button>
            </div>

            <div className='pl-6 mb-4 text-center'>
                <span className='text-md font-semibold'>Chose a project to work on :</span>
            </div>

            <div className='max-w-7xl flex flex-wrap items-center justify-center p-4 gap-6'>
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project}/>
                ))}
            </div>
        </div>
    </div>
  ) : (<Loading />)
}

export default Project
