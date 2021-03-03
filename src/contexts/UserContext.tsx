import axios from "axios";
import Cookies from "js-cookie";
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
interface UserContextData {
  userName:string
  getGitUser:() =>void
  setUserName:Dispatch<SetStateAction<string>>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export function UsersProvider({ 
  children,
} : UserProviderProps) {
  const [userName,setUserName] = useState('CHABALU')

  const router = useRouter()
  


   async function getGitUser(){
    try {
      console.log("DENTRO DO GETGITUSER "+userName)
      await axios.get(`https://api.github.com/users/${userName}`)
    .then(res => {
      const user = res.data;
      router.push('/UserPage')
    })
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const fetchData = async () => {
       const data = await getGitUser()
    }
  
    fetchData();
  }, [userName]);



  return(
    <UserContext.Provider value={{
      userName,
      getGitUser,
      setUserName,
    }}>
      {children}
    </UserContext.Provider>
  )
}