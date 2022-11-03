import Mark from "./Components/Mark";
import Login from './Components/login_component';
import SignUp from "./Components/signup_component";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import UserDetails from './Components/userDetails';





function App() {
  return (
     <>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/register" element={<SignUp/>}></Route>
    <Route path="/markup" element={<Mark/>}></Route>
    {/* <Route path="/userdetails" element={<UserDetails/>}></Route> */}
    </Routes>
    </BrowserRouter>
    
  
     </>
    
  );
}

export default App;
