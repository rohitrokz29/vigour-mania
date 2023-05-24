import React,{useState,useEffect,useContext,createContext} from 'react'

const UserContext = () => {
	const userContext=createContext();
	const [user, setUser] = useState({email:""})
	const signIn=(e)=>{
		e.preventDefault()
		console.log(userData);
	}
	return (
		<userContext.Provider>
		<Lower signIn={signIn} />
		</userContext.Provider>
	)
}

export default UserContext