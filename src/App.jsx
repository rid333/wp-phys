import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PostDetails from './pages/PostDetails'
import './index.css'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
