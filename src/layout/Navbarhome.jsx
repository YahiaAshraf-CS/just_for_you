import React from 'react'
import navlogo from '../assets/images/justimg.png'
import ButtonLight from '../components/buttons/ButtonLight'
import ButtonPink from '../components/buttons/ButtonPink'
import '../style/Navbar.css'
import { NavLink } from 'react-router'

function Navbarhome() {
  return (
    <>
      <header className=' w-full h-fit bg-pink-10 *:shadow-lg shadow-pink-500 flex items-center justify-center'>
        <nav className=' w-full h-fit  flex items-center justify-center gap-5 md:justify-evenly md:gap-10 lg:justify-around xl:justify-between  min-w-full px-4 py-3 flex-wrap'>
                  <div className='logo w-fit h-fit px-2 py-1 bg-[var(--color-prinky)] rounded-3xl shadow-sm mr-6 hover:bg-pink-800 cursor-pointer transition-all duration-300 ease-in-out hover:scale-3d'><img src={ navlogo}  alt="" /></div>
                  <div className='btns w-fit gap-4 mr-6 h-fit flex items-center justify-center'>
                      <ButtonLight to="/Login"><span>Login</span></ButtonLight>
                      <ButtonPink to="/SignUp">Sign up</ButtonPink>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Navbarhome
