
import Home from './component/Home'
import Login from './component/Login'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <div className="App">
      <Navbar />
      {/* Other content can go here */}
    </div>
    <Routes>
    <Route path="/" element={
      <>
      <Login/>
      <Home/>
      </>
    }/>
    </Routes>
    </Router>
    </>
  )
}

export default App
