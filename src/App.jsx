import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* default page */}
          <Route path="Menu" element={<Menu />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
    
