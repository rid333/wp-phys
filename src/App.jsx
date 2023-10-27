import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NewsDetails from './pages/NewsDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import NewsList from './pages/NewsList';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:id" element={<NewsDetails />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
