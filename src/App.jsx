import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import Navbar from "./components/Navbar";
import LoginForm from "./page/LoginForm";
import RegistrationForm from './page/RegistrationForm';
import Home from './page/Home';
// import Dropdown from "./components/Dropdown";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
     <Navbar />
       <Routes>
         <Route >
           <Route path="/" element={<Home />} />
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