"use client"
import React, { useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("login")) {
      let uid = window.localStorage.getItem("login")
      refresh(uid)
    } else {
      setState({ login: false });
    }
    setLoading(false);
  },[]);

  const register = async (bodyData) => {
    try {
      const result = await axios.post('http://localhost:5000/users' , {...bodyData})
      if(result) {
        alert('register succesfully')
        router.push('/auth/login')
      }
  } catch (error) {
      alert('oop! haave someing wrong. try again later' + error)
      router.push('/auth/register')
  }
  }

  const login = async (username) => {
    try {
        const result = await axios.get('http://localhost:5000/users?username=' + username)
        if(result) {
            localStorage.setItem("login", result?.data?.data?._id );
            setState({...result?.data?.data , login: true });
            router.push('/')
        }
    } catch (error) {
        alert('user not found pless register before')
        router.push('/auth/register')
    }
  };

  const refresh = async (id) => {
    const result = await axios.get('http://localhost:5000/users/' + id)
    if(result) {
        setState({...result.data.data , login: true });
    }
  };

  const logout = () => {
    localStorage.removeItem("login");
    setState({ login: false });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout , register , loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the AuthContext
const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };