import { useState, useEffect } from 'react'
import { CardsPeject } from './CardsProject'
import { projectsData, projectsNav } from '../../data'

export const Projects = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projecs, setProjecs] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setProjecs(projectsData)
    } else {
      const newProject = projectsData.filter((projec) => {
        return projec.category.toLowerCase() === item.name
      })
      setProjecs(newProject)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  return (
    <section id='projects' className='text-white gradian_section'>
      <div className='py-28'>
        <div className='text-center'>
          <h3 className='text-4xl font-semibold'>
            My <span className='text-primary'>Projects</span>
          </h3>
        </div>
        <br />
        <nav className='mt-12 mb-6 rounded-lg '>
          <ul className='flex min-w-fit flex-wrap justify-center items-center gap-2 px-2 sm:px-8 text-sm sm:text-md md:text-base'>
            {projectsNav.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => handleClick(e, index)}
                  className={`${
                    active === index ? 'text-primary bg-gray-700' : ''
                  } border rounded-sm px-6 py-2 cursor-pointer duration-500 hover:text-primary`}
                >
                  {item.name}
                </li>
              )
            })}
          </ul>
        </nav>
        <section className='grid justify-center'>
          <CardsPeject projecs={projecs} />
        </section>
      </div>
    </section>
  )
}
