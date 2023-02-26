import React, { useContext, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import CustomToolbar from "./CustomToolbar";
import UsersContext from "../Context/usersContext";

const NewTable = () => {
  const columns = [
    "სახელი",
    "გვარი",
    "პირადი ნომერი",
    "სქესი",
    "დაბადების თარიღი",
    "დაბადების ადგილი",
    "მისამართი",
  ];

  const { users, item } = useContext(UsersContext);

  const [newUser, setNewUser] = useState([]);

  console.log(newUser);

  const data = [
    
  ]

  useEffect(() => {}, []);

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
