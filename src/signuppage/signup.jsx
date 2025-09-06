import { useState } from "react";
import "./signup.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const SignupPage=()=>{

    const [userdata,setUserdata]=useState({
        name:"",
        email:"",
        password:""
    })

    const [errstatus,setErrstatus]=useState(false)

    function formfun(e){
        setErrstatus(false)
        const {name,value}=e.target;
        setUserdata({...userdata,[name]:value})
    }

    const nav=useNavigate()

  async function submitfun(e){
    e.preventDefault();
    const data=await axios.post("https://klickkbackend-2.onrender.com/useraccount/",userdata)
    if(data.data=="error"){
        setErrstatus(true)
    }
    else{
         nav("/")
    }
  }

    return(
        <div className="signmain">
            <div className="signmain2">
                <h1 className="signhead">Sign Up</h1>
                <form onSubmit={submitfun}>
                    <div className="signitems">
                        <h1 className="signitem">Name *</h1>
                        <input className="signinput" type="text" placeholder="name" name="name" onChange={formfun} required/>
                    </div>
                    <div className="signitems">
                        <h1 className="signitem">Email *</h1>
                        <input className="signinput"  type="email" placeholder="email" name="email" onChange={formfun} required/>
                        {errstatus?<p className="err">Sorry, Email is Already existed...</p>:<></>}
                    </div>
                    <div className="signitems">
                        <h1 className="signitem">Password *</h1>
                        <input className="signinput"  type="password" placeholder="password" name="password" onChange={formfun} required/>
                    </div>
                    <div>
                        <button className="sign" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;