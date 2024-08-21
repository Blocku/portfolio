import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { Home } from './pages/home/home'
import { Projects } from './pages/projects/projects'
import { Settings } from './pages/settings/settings'
import { Error } from './pages/error/error'

import './App.css'

function App() {
  
  const [openMenu, setOpenMenu] = useState(false)
  const pages = [{
    name: 'projects',
    link: 'projects',
  }, 
  {
    name: 'github',
    link: 'https://github.com/Blocku/portfolio',
  }
]

  

  // function active(name){
  //   pages.map((page) => {
  //     if(page.name === name){
  //       page.active = !page.active
  //       console.log(page)
  //     }
  //     return page
  //   })
  // }

  // const pages = [
  //   {
  //     name: 'projects',
  //     link: 'projects',
  //   },
  //   {
  //     name: '',
  //     link: '',
  //   }
  // ]
 
  return (
    <section className='space-y-20' >
      <header className='flex justify-between items-center border-b border-zinc-300 p-5' >
        <Link to="/" className='text-lg font-medium' >Portfolio</Link>
        <button onClick={() => setOpenMenu(true)} >
          <svg className="w-6 h-6 stroke-2 stroke-black">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        { openMenu && 
          <>
            <article className='bg-white w-[70dvw] absolute z-20 rounded top-5 right-5' >
              <button className='absolute top-6 right-5' onClick={() => setOpenMenu(false)} >
                <svg className="w-6 h-6 stroke-2 stroke-black">
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <nav>
                <ul className='flex flex-col space-y-3 p-5'>
                  {pages.map(todo => (
                    <li key={todo.name} onClick={() => setOpenMenu(false)} className='w-max h-max text-lg font-medium'>
                      <Link to={todo.link} >{todo.name}</Link>
                    </li>
                  ))} 
                </ul>
              </nav>
            </article> 

            <span onClick={() => setOpenMenu(false)} className='absolute z-10 w-dvw h-dvh bg-black/10 backdrop-blur-[2px] top-0 right-0' ></span>
          </>
        }
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='projects' element={<Projects />}></Route>
        {/* <Route path='settings' element={<Settings/>}></Route> */}
        <Route path='*' element={ <Error/> }></Route>
      </Routes>
    </section>
  )
}

export default App
