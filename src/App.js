import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.scss'
import routes from './routes'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

function App() {
   const user = useSelector(state => state.authReducer.authData)
   console.log('user: ', user)
   return (
      <div className='App'>
         <div className='blur' style={{ top: '-18%', right: 0 }}></div>
         <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
         <Routes>{routes(user)}</Routes>
      </div>
   )
}

export default App
