import { Button, Input } from "@mui/material";
import { useState } from "react";
import {  Container } from "react-bootstrap";
import { saveAdminData } from "./Services";
import { useNavigate } from "react-router-dom";

export function SignUp()
{    
            const[data,setData]=useState({});
         
           
            const navigate = useNavigate();
            const handleChange=(event)=>{
                       setData((prevData)=>({
                           ...prevData,
                           [event.target.name]:event.target.value
                       }))
                    
            }
        const handleSubmit =async (event)=>{
                    event.preventDefault();
                    const res =  await saveAdminData(data);
                    if(res)
                    {
                        alert("signup successfully");
                       event.target.reset();
                        navigate("/");
                    }
                    else{
                          console.log(res);   
                    }
                    
        }
        const handleSign=()=>{
                 navigate("/signin");
             

        }
       
      
    return(
        <>
            <div > 
                 <Container  className="pt-5 pb-2 d-flex justify-content-center align-item-center">
                         <div className="p-1 d-flex justify-content-center align-items-center" style={{backgroundColor:"pink",width:450,height:550}} >
                         <form onSubmit={handleSubmit}>
                         <Input type="text"  placeholder="name" name="name" className="pt-2" onChange={handleChange}/><br></br>
                         <Input type="number"  placeholder="number" name="number" className="pt-2" onChange={handleChange}/><br></br>
                         <Input type="email"  placeholder="gmail" name="gmail" className="pt-2" onChange={handleChange}/><br></br>
                         <Input type="password"  placeholder="password" name="password" className="pt-2" onChange={handleChange} /><br></br>
                         <Button type="submit" className="pt-3 me-5">submit</Button>
                         <Button className="mt-3" onClick={handleSign}>SignIn</Button>

                          </form>
                         </div>
                 </Container>
                 
            </div>

        
        </>
    )
}