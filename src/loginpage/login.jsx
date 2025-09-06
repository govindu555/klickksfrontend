import { useEffect, useState } from "react";
import "./login.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage=()=>{

    const [totaldata,setTotaldata]=useState([])

    const [emailstatus,setEmailstatus]=useState(false)
    const [passwordstatus,setPasswordstatus]=useState(false)

    useEffect(()=>{
        loginfun()
    },[])

    async function loginfun(){
        const data=await axios.get("https://klickkbackend-2.onrender.com/getdata")
        setTotaldata(data.data)
    }

    const [userdata,setUserdata]=useState({
        email:"",
        password:""
    })

    function formfun(e){
        setEmailstatus(false)
        setPasswordstatus(false)
        const {name,value}=e.target;
        setUserdata({...userdata,[name]:value})
    }

    const nav=useNavigate()
  
    function submitfun(e){
        e.preventDefault();
        const data=totaldata.find(item=>item.email==userdata.email || item.password==userdata.password)
        if(data.email==userdata.email){
            if(data.password==userdata.password){
                  nav(`/log/${data._id}`)
            }
            else{
                setPasswordstatus(true)
            }
        }
        else{
              setEmailstatus(true)
        }
    }


    return(
        <div className="loginmain">
            <div className="loginmain2">
                <h1 className="loginhead">Login</h1>
                <form onSubmit={submitfun}>
                    <div className="loginitems">
                        <h1 className="loginitem">Email *</h1>
                        <input className="logininput" type="email" placeholder="email" name="email" onChange={formfun} required/>
                        {emailstatus?<p className="err">Sorry, Email is wrong Try again...</p>:<></>}
                    </div>
                    <div className="loginitems">
                        <h1 className="loginitem">Password *</h1>
                        <input className="logininput" type="password" placeholder="password" name="password" onChange={formfun} required/>
                        {passwordstatus?<p className="err">Sorry, Password is wrong Try again...</p>:<></>}
                    </div>
                    <div>
                        <button className="login" type="submit">Login</button>
                    </div>
                    <p>If has no account ? <NavLink to="/account">Sign Up</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;