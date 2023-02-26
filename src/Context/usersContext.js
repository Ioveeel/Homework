import { createContext,useState } from "react";


const UsersContext = createContext()

export function UsersProvider({children}){
    const [users, setUsers] = useState([])

// console.log(users)

  
    



    return(
        <UsersContext.Provider value={{setUsers,users}}>
                {children}
        </UsersContext.Provider>
    )
}

export default UsersContext