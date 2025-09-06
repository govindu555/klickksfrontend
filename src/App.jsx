import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginPage from './loginpage/login';
import SignupPage from './signuppage/signup';
import LogoutPage from './logoutpage/logout';



const App=()=>{

  return (
    <>
      <div>
        <BrowserRouter>
           <Routes>
              <Route path='/' Component={LoginPage}/>
              <Route path='/account' Component={SignupPage}/>
              <Route path='/log/:id?' Component={LogoutPage}/>
           </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
