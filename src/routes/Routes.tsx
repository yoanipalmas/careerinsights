import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import TestOrientacion from "../features/pages/TestOrientacion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import DianaSection from "../pages/DianaSection";
import TalleresCharlasPage from "../pages/TalleresCharlasPage";
import Sesion1a1 from "../pages/Sesion1a1";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Junior from "../pages/Junior";
import Senior from "../pages/Senior";
import Empresa from "../pages/Empresa";
import ITBasics from "../pages/ITBasics";



const AppRoutes = () => (
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestOrientacion />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/metodo" element={<DianaSection />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/talleres-charlas" element={<TalleresCharlasPage />} />
      <Route path="/sesion-1a1" element={<Sesion1a1 />} />
      <Route path="/junior" element={<Junior />} />
      <Route path="/senior" element={<Senior />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/it-basics" element={<ITBasics />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

export default AppRoutes;
