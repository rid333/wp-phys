import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NewsDetails from './pages/NewsDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import NewsList from './pages/NewsList';
import Error404 from './pages/Error404';
import AcademicStaffList from './pages/AcademicStaffDetails';
import ResearchDetails from './pages/ResearchDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          
          <Route path="academic-staff" element={<AcademicStaffList />} />
          <Route path="academic-staff/:id" element={<NewsDetails />} />

          <Route path="research-group/:slug" element={<ResearchDetails />} />
          
          <Route path="administrative" element={<NewsList />} />
          
          <Route path="news" element={<NewsList />} />
          <Route path="news/:newsId" element={<NewsDetails />} />
          
          <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
