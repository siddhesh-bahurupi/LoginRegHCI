import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Img from './wallpaper.jpeg'

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://logreghci.herokuapp.com/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
         <div style={{backgroundColor:"#FB9403"}}>  
        <div  className="login">
            <h1>Social Media Login</h1>
            <img style={{width:"200px",backgroundColor:"#FB9403"}} src= {Img} alt="pic" />

            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>

            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </div>
    )
}

export default Login