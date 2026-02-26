import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeProvider'

const LoginPage = ({setUser}) => {
    const [email,setEmail] = useState()
    const [password,setPassword] =useState()
    const [regUser,setRegUser] = useState()
    const navigate = useNavigate()

    const {theme} = useContext(ThemeContext)

    function handleSubmit(event){
        event.preventDefault()
        if(regUser.email == email  && regUser.password == password){
            setUser(regUser)
            navigate('/dashboard')
        }else{
            alert("Invalid Credentials...")
            navigate('/')
        }
    }


    function fetchUser(){
       setRegUser(JSON.parse(localStorage.getItem('userB69')))
    }

    useEffect(()=>{
        fetchUser()
    },[])

    return (
        <>
            <div className={`container w-50 mx-auto mt-5 ${theme == 'dark' && 'bg-dark text-white'}`}>
                <h3>Login here</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to='/register' >If not registered</Link>
                </form>
            </div>
        </>

    )
}

export default LoginPage