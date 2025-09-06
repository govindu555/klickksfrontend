import { useNavigate, useParams } from "react-router-dom";
import "./logout.css"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";


const LogoutPage=()=>{
  
    const p=useParams()
    const id=p.id

    useEffect(()=>{
          logoutfun()
    },[])

    const [dataone,setDataone]=useState({})

    async function logoutfun(){
         const data=await axios.get("https://klickkbackend-2.onrender.com/onedata/"+id)
         setDataone(data.data)
    }

    const nav=useNavigate()

    function backfun(){
        nav("/")
    }

    return(
        <div>
            <div className="logoutmain">
                <h1 className="logouthead">KLICKKS</h1>
                <h1 className="logout" onClick={backfun}>LogOut<BsBoxArrowRight /></h1>
            </div>
            <div className="logoutmain2">
                <h1 className="logouthead2" onClick={backfun}>Home Page</h1>
            </div>
            <div className="logoutmain3">
                <h1 className="logouthead3">Hii, <span>{dataone.name}</span> Welcome to Klickks...</h1>
            </div>
        </div>
    )
}

export default LogoutPage;