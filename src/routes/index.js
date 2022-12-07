import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'
import ProfilePage from '../pages/ProfilePage'
import { Route, Navigate } from 'react-router-dom'

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
      path: '/profile',
      exact: true,
      element: <ProfilePage />,
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
