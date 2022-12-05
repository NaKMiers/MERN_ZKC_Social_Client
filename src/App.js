import './App.css'
import HomePage from './pages/HomePage'

function App() {
   return (
      <div className='App'>
         <div className='blur' style={{top: '-18%', right: 0}}></div>
         <div className='blur' style={{top: '36%', left: '-8rem'}}></div>
         <HomePage />
      </div>
   )
}

export default App
