import { Route, Routes } from 'react-router-dom'

import { ExplorePage, HomePage, MessagesPage, NotificationsPage } from '../pages'
import { Navbar, RightComponent } from '../ui'


export const AppRouter = () => {
  return (
    <>
        <div className="container">
            <Navbar className="navbar-container"/>

            <div className='content-container'>
                <Routes>

                    <Route path="home" element={<HomePage />} />
                    <Route path="explore" element={<ExplorePage />} />
                    <Route path="notifications" element={<NotificationsPage />} />
                    <Route path="messages" element={<MessagesPage />} />

                    <Route path='/*' element={<HomePage />} />

                </Routes>
            </div>

            <RightComponent className="right-container"/>

        </div>
    </>

  )
}
