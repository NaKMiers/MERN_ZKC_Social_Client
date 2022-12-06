import './App.scss'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'

function App() {
   return (
      <div className='App'>
         <div className='blur' style={{ top: '-18%', right: 0 }}></div>
         <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
         {/* <HomePage /> */}
         <ProfilePage />
         {/* <AuthPage /> */}
      </div>
   )
}

export default App
