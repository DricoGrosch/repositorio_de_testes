import { useContext, useState, useCallback, useEffect } from 'react'
import { UserContext, UsersProvider } from '../contexts/UserContext'
import styles from '../styles/pages/UserPage.module.css'



const UserPage = () =>{
  const {userName,setUserName} = useContext(UserContext)
  
    
  useEffect(() => {
    console.log("NOVO NOME "+userName)
    
  },[userName])



  const [textInput,setTextInput] = useState('')


  return (
    <UsersProvider>
    <div className={styles.container}>
      <section>
        <div>
          <img src="icons/SimboloIcon.svg" alt="Simbolo"/>
        </div>
        <div>
          <img src="/Logo.svg" alt="logo"/>
          <h1>Bem Vindo</h1>
          <p><img src="icons/Github.svg" alt=""/>Faça login com seu Github para começar</p>
          <div className={styles.loginButton}>
            <input type="text" value={textInput}  onChange={(e)=> setTextInput(e.target.value)}/>
            <button type='button' onClick={()=>setUserName(textInput)}><img src="icons/Vector.svg" alt=""/></button>
          </div>
          
        </div>

      </section>
    </div>
    </UsersProvider>
  )

}
export default UserPage