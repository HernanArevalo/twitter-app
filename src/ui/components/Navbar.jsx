
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navbar.css'

export const Navbar = () => {

    const { pathname } = useLocation();

    const navBar = useRef()

    const [navBarWidth, setNavBarWidth] = useState(200)

    useLayoutEffect(()=> {

        const navBarWidth =  navBar.current.getBoundingClientRect().width 

        setNavBarWidth(navBarWidth)


    } )

  return (
    <>
    <nav className="navbar-container" ref={ navBar }>

        <div className='navbar-items'>
            <Link to="/home">
                <div className="twLogoNav">
                    <i className='bx bxl-twitter'></i>
                </div>
            </Link>

            <div>
                <NavLink 
                    to="home"
                    className={({isActive}) =>
                        isActive? 'active': 'inactive' }
                    >
                    <div className="inicioNav leftItem">
                        <div>
                            
                            {
                                pathname.includes('/home')
                                ?
                                <i className='bx bxs-home-circle'></i>
                                :
                                <i className='bx bx-home-circle'></i>
                            }

                                <span className="leftItemText">Inicio</span>

                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="explore"
                    className={({isActive}) =>
                        isActive? 'active': '' }
                >
                    <div className="inicioNav leftItem">
                        <div>

                            <i className='bx bx-hash'></i>
                            <div className="leftItemText">
                                <span>Explorar</span>
                            </div>

                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="notifications"
                    className={({isActive}) =>
                        isActive? 'active': '' }
                >
                    <div className="inicioNav leftItem">
                        <div>
                            {
                                pathname.includes('/notifications')
                                ?
                                <i className='bx bxs-bell'></i>
                                :
                                <i className='bx bx-bell'></i>
                            }

                            <div className="leftItemText">
                                <span>Notificaciones</span>
                            </div>
                            
                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="messages"
                    className={ ( {isActive} ) =>
                        isActive? 'active': '' }
                >
                    <div className="inicioNav leftItem">
                        <div>
                            {
                                pathname.includes('/messages')
                                ?
                                <i className='bx bxs-envelope'></i>
                                :
                                <i className='bx bx-envelope'></i>
                            }

                            <div className="leftItemText">
                                <span>Mensajes</span>
                            </div>

                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="saves"
                    className={({isActive}) =>
                        isActive? 'active': '' }
                >
                    <div className="inicioNav leftItem">
                        <div>

                            {
                                pathname.includes('/saves')
                                ?
                                <i className='bx bxs-bookmark'></i>
                                :
                                <i className='bx bx-bookmark'></i>
                            }

                            <div className="leftItemText">
                                <span>Guardados</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="lists"
                    className={({isActive}) =>
                        isActive? 'active': '' }
                >
                    <div className="inicioNav leftItem">
                        <div>

                            {
                                pathname.includes('/lists')
                                ?
                                <i className='bx bxs-detail'></i>
                                :
                                <i className='bx bx-detail'></i>
                            }

                            <div className="leftItemText">
                                <span>Listas</span>
                            </div>
                            
                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to="profile"
                    className={({isActive}) =>
                        isActive? 'active': '' }
                >
                    <div className="inicioNav leftItem">
                        <div>

                            {
                                pathname.includes('/profile')
                                ?
                                <i className='bx bxs-user'></i>
                                :
                                <i className='bx bx-user'></i>
                            }

                            <div className="leftItemText">
                                <span>Perfil</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink 
                    to=""
                    className={({isActive}) =>
                        isActive? 'active': ''
                }
                >
                    <div className="inicioNav leftItem">
                        <div>
                            <i className='bx bx-dots-horizontal-rounded'></i>
                            <span className="leftItemText">Más opciones</span>
                        </div>
                    </div>
                </NavLink>
            </div>

        </div>



    </nav>

</>
  )
}
