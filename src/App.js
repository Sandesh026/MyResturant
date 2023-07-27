import Layout from "./componants/Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./componants/pages/Home"
import About from "./componants/pages/About"
import Contact from "./componants/pages/Contact"
import Menu from "./componants/pages/Menu"
import Pagenotfound from "./componants/pages/Pagenotfound"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
