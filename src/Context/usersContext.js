import { createContext,useState } from "react";


const UsersContext = createContext()

export function UsersProvider({children}){
    const [users, setUsers] = useState([])

    // function addUser(user) {
    //   setUsers([...users, user]);
    // }
  
    // function updateUser(user) {
    //   const userIndex = users.findIndex(
    //     (u) => u.personalNumber === user.personalNumber
    //   );
  
    //   users[userIndex] = user;
  
    //   setUsers([...users]);
    // }

  
    return(
        <UsersContext.Provider value={{setUsers,users}}>
                {children}
        </UsersContext.Provider>
    )
}

export default UsersContext


