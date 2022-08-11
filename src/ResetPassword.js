import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword(){
    const navigate = useNavigate()
    const [data, setdata] = useState(initialState)

    const {token} = useParams()

    const {password, cf_password, err, success} = data
    const [openInfo, setOpenInfo] = React.useState(false);

    const handleCloseInfo = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
 
     setOpenInfo(false);
   };

   const [openInfo2, setOpenInfo2] = React.useState(false);

   const handleCloseInfo2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenInfo2(false);
  };

    const HandleChange = e => {
        const {name, value} = e.target
        setdata({...data, [name]:value, err:'', success:''})
    }
     
    const resetPassword = async() =>{
        if(password === cf_password){
        try {
            axios.post("https://luminous-liquor.herokuapp.com/reset", {password}, {
                headers: {Authorization: token}
            }).then((res) => {
             navigate("/login");
  })
        } catch (err) {
            setOpenInfo2(true);
        }
    }else{
        setOpenInfo(true)
    }
    }

    console.log(token)
    return(
        <div className="fg_pass">
            <h2>Reset Password</h2>
            <div className="row">
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" name="password" id="password" value={password} onChange={HandleChange}/>

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" value={cf_password} onChange={HandleChange}/>
                <button onClick={resetPassword}>Reset Password</button>
            </div>
            <Stack>
        <Snackbar open={openInfo} autoHideDuration={3000} onClose={handleCloseInfo}>
       <Alert onClose={handleCloseInfo} severity="info" sx={{ width: '100%' }}>
       Both the passwords does not match. Please make sure they are same.
       </Alert>
       
     </Snackbar> 
     </Stack>

     <Stack>
        <Snackbar open={openInfo2} autoHideDuration={3000} onClose={handleCloseInfo2}>
       <Alert onClose={handleCloseInfo2} severity="error" sx={{ width: '100%' }}>
       Link has been Expired. Please try again.
       </Alert>
       
     </Snackbar> 
     </Stack>
        </div>
    )
}

export default ResetPassword