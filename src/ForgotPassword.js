import axios from "axios";
import React, {useState} from "react";
import './forgotPassword.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword(){
    const [data, setdata] = useState(initialState)

    const {email, err, success} = data
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

    const forgotPassword = async() => {
        try {
            axios.post("https://luminous-liquor.herokuapp.com/forgotPassword", {email}).then((res) => {
            if(res.data.message === 'Check your Mail'){
                setOpenInfo(true)
            }
            else if(res.data.message === 'Not good email'){
                setOpenInfo2(true)
            }
            //navigate("/login");
  })
        } catch (err) {
            alert(err)
        }
    }
    return(
        <div className="fg_pass">
            <h2>Forgot Password</h2>
            <div className="row">
                <label htmlFor="email">Enter Your Email Address</label>
                <input type="email" name="email" id="email" value={email} onChange={HandleChange}/>
                <button onClick={forgotPassword}>Verify Email</button>
            </div>

            <Stack>
        <Snackbar open={openInfo} autoHideDuration={3000} onClose={handleCloseInfo}>
       <Alert onClose={handleCloseInfo} severity="info" sx={{ width: '100%' }}>
       Check your email to change the password.
       </Alert>
       
     </Snackbar> 

     <Snackbar open={openInfo2} autoHideDuration={3000} onClose={handleCloseInfo2}>
       <Alert onClose={handleCloseInfo2} severity="info" sx={{ width: '100%' }}>
       Email does not exist. Please Register First.
       </Alert>
       
     </Snackbar> 
        </Stack>

        

        </div>
    )
}

export default ForgotPassword