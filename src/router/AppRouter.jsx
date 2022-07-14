import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages'
import { Navbar, RightComponent } from '../ui'


export const AppRouter = () => {
  return (
    <>
        <div className="container">
            <Navbar className="navbar-container"/>

            <div className='content-container'>
                <Routes>

                    <Route path="home" element={<HomePage />} />

                    <Route path='/*' element={<HomePage />} />

                </Routes>
            </div>

            <RightComponent className="right-container"/>

        </div>
    </>

  )
}
