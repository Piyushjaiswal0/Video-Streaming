
import './App.css'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <div className="App">
      <Navbar />
      {/* Other content can go here */}
      <div className="pt-20 bg-black min-h-screen text-white">
        <h1 className="text-5xl text-center py-10">Welcome to the Netflix Clone!</h1>
        {/* More sections can be added below */}
      </div>
    </div>
    </>
  )
}

export default App
