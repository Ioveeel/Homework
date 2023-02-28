import React, { useContext, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import CustomToolbar from "./CustomToolbar";
import UsersContext from "../Context/usersContext";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link,useParams } from 'react-router-dom';

const NewTable = () => {
  const columns = [
    "სახელი",
    "გვარი",
    "პირადი ნომერი",
    "სქესი",
    "დაბადების თარიღი",
    "დაბადების ადგილი",
    "მისამართი",
   {
      name: "",
      label: "",
      options: {
       filter: true,
       sort: true,
       customBodyRender: () => {
        return (
          users.map((user) => {
          return  <Link key= {user.idNumber} to= {`/edit/${user.idNumber}`}>
              <MoreVertIcon className="cursor-pointer"/>
            </Link>

          })
        )
    }
      }
     },
  
  ];

  const { users, item } = useContext(UsersContext);

 

 

  // const newUsersArrayId = users.map((user) => user.idNumber);
//  const ragaca =  newUsersArrayId.parseInt('')
//  console.log(ragaca)

  const usersArray = users.map((user) => Object.values(user));
  

  const data = [
    ...usersArray,
    
  ];


  const options = {
    filterType: "dropdown",
    customToolbar: () => {
      return <CustomToolbar />;
    },
   
  };

return (


<MUIDataTable
data={data}
columns={columns}
options={options}
/>
) 
}
export default NewTable;
