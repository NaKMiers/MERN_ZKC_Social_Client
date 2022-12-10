import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'
import ProfilePage from '../pages/ProfilePage'
import NotFoundPage from '../pages/NotFoundPage'
import {Route, Navigate} from 'react-router-dom'
import ChatPage from '../pages/ChatPage'

const routes = [
   {
      path: '/',
      exact: true,
      element: <HomePage />,
   },
   {
      path: '/auth',
      exact: true,
      element: <AuthPage />,
   },
   {
      path: '/profile/:id',
      exact: false,
      element: <ProfilePage />,
   },
   {
      path: '/chat',
      exact: false,
      element: <ChatPage />,
   },
   {
      path: '*',
      exact: false,
      element: <NotFoundPage />,
   },
]

const renderRoute = user =>
   routes.map(route => (
      <Route
         key={route.path}
         path={route.path}
         exact={route.exact}
         element={
            route.path === '/auth' ? (
               user ? (
                  <Navigate to='/' />
               ) : (
                  route.element
               )
            ) : user ? (
               route.element
            ) : (
               <Navigate to='/auth' />
            )
         }
      />
   ))

export default renderRoute
