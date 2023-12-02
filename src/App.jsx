import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import LoginForm from "./page/LoginForm";
import RegistrationForm from './page/RegistrationForm';
import Home from './page/Home';
import About from "./page/About";

function App() {
 return (
   <div className="App h-full">
     <BrowserRouter>
     <NavbarMenu />
     {/* <Header /> */}
       <Routes>
         <Route >
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="register" element={<RegistrationForm />} />
           <Route path="login" element={<LoginForm />} />
         </Route>
       </Routes>
       {/* <Dropdown /> */}
     </BrowserRouter>
   </div>
 )
}

export default App