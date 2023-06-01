import { useDispatch } from "react-redux"
import Login from "./Login"
import { login } from "../../../store/auth/authSlice"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
useNavigate

const LoginContainer = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({});

  const navigate = useNavigate()


  useEffect(()=>{
    const getUsers = async ()=>{
      let res = await axios.get("http://localhost:5000/user")
      setUsers(res.data)
    }
    getUsers()
    
  }, [])

  const handleChange = (event) => {
    setUser(event.target.value);
  };

const dispatch = useDispatch()

const loginFn = ()=>{
    if(user.name){
      dispatch(login(user))
    navigate("/")
    } else {
      alert("Debe seleccionar un usuario")
    }
}
  return (
    <Login loginFn={loginFn} handleChange={handleChange} users={users}/>
  )
}

export default LoginContainer