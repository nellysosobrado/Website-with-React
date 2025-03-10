import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppStore from './pages/AppStore'
import GooglePlay from './pages/GooglePlay'
import Discover from './pages/Discover'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

function App() {
  
  return (
    <>
      <BrowserRouter>
        
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/appstore" element={<AppStore />} />
              <Route path="/googleplay" element={<GooglePlay />} />
              <Route path="/discover" element={<Discover />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
