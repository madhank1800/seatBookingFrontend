import * as React from 'react';
import { TextField,InputAdornment,Button, Typography, Divider } from '@mui/material';

import {Box} from '@mui/material';
import { styled } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StyledTextField=styled(TextField)(({theme})=>({

 

  })

)





const StyledForm=styled(Box)(({theme})=>({
     
  [theme.breakpoints.down('sm')]: {
  
  }
    
 

}))






const SignupForm=()=>{




  const [userRegisterData, setUserRegisterData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  


  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateFields = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!userRegisterData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!userRegisterData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(userRegisterData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!userRegisterData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (userRegisterData.password !== userRegisterData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);


    return !Object.values(newErrors).some((error) => error);
  };









  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("userRegisterData",userRegisterData);


   setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: '',
  }));

  };
  console.log("userRegisterData",userRegisterData);



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("inside submit",userRegisterData);
 

    if (validateFields()) {
      console.log('Form Submitted:', userRegisterData);

  try{
      const response=await axios.post('http://localhost:8080/api/user/register',userRegisterData);
      console.log("response",response);
      console.log("response1",response.data);
      console.log("response da",response.data.status);
      console.log("response da2",response.status);
      if(response.status===200){

        toast.success('User successfully registered!', {
          position: 'top-center',
          autoClose: 3000,
        });

    
        setUserRegisterData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      console.log(response);
    
    console.log(userRegisterData);
      }
  
      }catch(error){

        toast.error('Failed to register user.', {
          position: 'top-center',
          autoClose: 3000,
        });

      }
    }
  };
  


  

    return (
        <>
       
       <form onSubmit={handleSubmit}>
        <StyledForm>
        <Box mb={2}>
          <Typography  variant='h6' >Signup</Typography>
        </Box>
        <Box mb={2}>
       <StyledTextField
         placeholder='name'
         
         fullWidth
         variant='filled'
         size='small'
           name="name"
          // value="smd b"
          value={userRegisterData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
         slotProps={{
           input: {
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
         },
         }}
       />
</Box>
<Box  mb={2}>
       <StyledTextField
         placeholder='email'
           name="email"
           size='small'
            variant='filled'
            fullWidth
            value={userRegisterData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            mt={2}
         slotProps={{
           input: {
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          ),
         },
         }}
       />
</Box>
<Box   mb={2}>

        <StyledTextField
         placeholder='password'
           name="password"
          size='small'
          fullWidth
          variant='filled'
          value={userRegisterData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
         slotProps={{
           input: {
          startAdornment: (
            <InputAdornment position="start">
              <VisibilityIcon />
            </InputAdornment>
          ),
         },
         }}
       />
</Box>
<Box   mb={2}>

        <StyledTextField
         placeholder='Re-enter password'
           name="confirmPassword"
          size='small'
          fullWidth
          value={userRegisterData.confirmPassword}
          onChange={handleChange}
          variant='filled'
         slotProps={{
           input: {
          startAdornment: (
            <InputAdornment position="start">
              <VisibilityIcon/>
            </InputAdornment>
          ),
         },
         }}

         type="password"
         error={!!errors.confirmPassword}
         helperText={errors.confirmPassword}
       />
</Box>
<Button variant="contained" fullWidth type='submit'  >signup</Button>
<Box mt={2}><Divider sx={{borderBottomWidth: '50px',fontWeight:"bold"}} >or</Divider></Box>
<Link to="/login"> <Button variant="outlined" fullWidth type='submit' >click here for login page</Button></Link>


</StyledForm>
  </form>


  
        </>
    )
}


export default SignupForm