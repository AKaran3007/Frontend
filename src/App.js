import Mark from "./Components/Mark";
import Login from './Components/login_component';
import SignUp from "./Components/signup_component";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserDetails from './Components/userDetails';






function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          
              <Routes>
                <Route exact path="/" element={<Login />}></Route>
                <Route path="/signin" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/markup" element={<Mark />}></Route>
                <Route path="/userdetails" element={<UserDetails />}></Route>
              </Routes>
            

        </div>
        
      </BrowserRouter>


    </>

  );
}

export default App;
