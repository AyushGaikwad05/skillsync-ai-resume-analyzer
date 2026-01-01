import Hero from './components/hero/Hero'
import Card from './components/cards/Card'
import Navbar from './components/navbar/Navbar'
import UploadScreen from './pages/UploadScreen'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ResultScreen from './pages/ResultScreen'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"  
          element={
            <>
              <Hero />
              <div id="feature-section">
                <Card />
              </div>
            </>
          }
        />

        <Route
          path="/upload"
          element={<UploadScreen />}
        />

        <Route
          path="/result"
          element={<ResultScreen />}
        />
      </Routes>
    </>
  )
}

export default App
