import { UserContext, UsersProvider } from '../contexts/UserContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  
  return (
      <UsersProvider>
      <Component {...pageProps}  />
      </UsersProvider>
  )
}

export default MyApp
