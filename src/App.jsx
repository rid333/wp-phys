import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PostDetails from './pages/PostDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Error404 from './pages/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="news/:id" element={<PostDetails />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
