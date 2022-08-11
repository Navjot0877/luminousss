import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import './activation.css'
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ActivationEmail(){
const {activation_token} = useParams()
   const navigate = useNavigate();
   const [openError, setOpenError] = React.useState(false);

   const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };
    
        const activationEmail = () => {
            console.log(activation_token)
            if(activation_token){
            try {
                axios.post("https://luminous-liquor.herokuapp.com/activate", {activation_token}).then((res) => {
                    if(res.data.message === 'Error'){
                        setOpenError(true)
                    }
                    else{
                 navigate("/login");
                    }
      })
            } catch (err) {
        alert("Token Expired")     
            }
        }
    } 
    



    return(
        
        <div class="container-sm">
        <div className="active">
            <p>In order to access your account, please click the button bellow-</p>
        <input type="button" value="ACTIVATE" onClick={activationEmail} />
        </div>
        <Stack>
        <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
       <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
       Error Your Link Has been Expired. Please Register Again
       </Alert>
       
     </Snackbar> 
        </Stack>
        </div>

       
       
    )

}

export default ActivationEmail