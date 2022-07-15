
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'

export const Navbar = () => {
  return (
    <>
    <header className="navbar-container">

        <div className='navbar-items'>
            <Link to="home">
                <div className="twLogoNav">
                    <i className='bx bxl-twitter'></i>
                </div>
            </Link>


            <NavLink to="home">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-home-circle'></i>
                        <span className="leftItemText">Inicio</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="explore">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-hash'></i>
                        <span className="leftItemText">Explorar</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="notifications">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-bell'></i>
                        <span className="leftItemText">Notificaciones</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="messages" className={ ({ isActive }) => `${isActive? 'active':''}`}>
                <div className="inicioNav leftItem">
                    <div>
                        <i className="bx bx-envelope"></i>
                        <span className="leftItemText">Mensajes</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-bookmark'></i>
                        <span className="leftItemText">Guardados</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-detail'></i>
                        <span className="leftItemText">Listas</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-user'></i>
                        <span className="leftItemText">Perfil</span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="">
                <div className="inicioNav leftItem">
                    <div>
                        <i className='bx bx-dots-horizontal-rounded'></i>
                        <span className="leftItemText">Más opciones</span>
                    </div>
                </div>
            </NavLink>


        </div>



    </header>

</>
  )
}
