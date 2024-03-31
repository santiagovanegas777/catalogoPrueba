import {useEffect} from 'react'

const Logout = ({setUser}) => {


    const handleLogout = () =>{
        setUser(null);
    }

    useEffect(() => {
      handleLogout()
    }, []);

  return (
    <h1>Adios vuelve pronto</h1>
  )
}

export default Logout