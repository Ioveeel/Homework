import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';



const CustomToolbar = () => {
   
     
  return (
    <div className="absolute top-[3px] right-[217px]">
        <Tooltip title={"custom icon"} >
        <IconButton>
        <Link to='/form'>
          <AddIcon className="text-200-red cursor-pointer" />
        </Link>
    </IconButton>
        </Tooltip>
   
  </div>
  )
}

export default CustomToolbar