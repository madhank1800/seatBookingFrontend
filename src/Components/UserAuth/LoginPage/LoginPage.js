import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import styled from '@emotion/styled';
import { VisibilityOff,Visibility, } from '@mui/icons-material';
import {useMediaQuery, TextField,InputAdornment,IconButton } from '@mui/material';
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import { ThemeProvider,createTheme } from '@mui/material'; 
import laptopGirl3 from '../../../images/laptopGirl3.png';
//import Button from '@mui/material/Button';
import { useContext } from 'react';
import { MyContext } from '../../../Context/MyContext';
import UseFetch from '../../../Api/FetchApi';
import { useNavigate } from 'react-router-dom';

const StyledBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'100%',
    position:'absolute',
    left:0,
    top:0,
    overflow:"hidden",
    background:'linear-gradient(to right,#9ecadc ,#e8a8d9)',

   
  [theme.breakpoints.down('sm')]: {
    '& > div:nth-of-type(1), & > div:nth-of-type(3)': {
      display: 'none',
    },
  },



   }

));


const theme = createTheme();





const StyledChild=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'70%',
    height:'100vh',

    
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& > div:nth-of-type(3)': {
        display: 'none', 
      },
      '& > div:nth-of-type(2)': {
        flex: '1 0 100%',
        display: 'flex',
        justifyContent: 'center', 
         alignItems: 'center', 
        
      },
    },
    
    
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& > div:nth-of-type(3)': {
        display: 'none', 
      },
      '& > div:nth-of-type(2)': {
        flex: '1 0 100%', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
      
      },
    },
    
    

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '& > div:nth-of-type(1), & > div:nth-of-type(3)': {
        display: 'none', 
      },
      '& > div:nth-of-type(2)': {
        flex: '1 0 0', 
        '& > div:nth-of-type(3)': {
          flexDirection: 'row', 
        },
      },
    },





         
    '& >div:nth-of-type(1)':{
        flex:'0 0 10%' ,
    
   



      


    }
    ,
    '& >div:nth-of-type(2)':{
        display:'flex',
        flex:'0 0 80%',
        flexDirection:'row',   
  

      boxShadow:'0 0 30px #e8a8d9',
      borderRadius:'15px',
     





      [theme.breakpoints.down('sm')]: {
        '& > div:nth-of-type(2)': {
          '& > div:nth-of-type(1)': {
            flex: '1 0 0', 
          },
          '& > div:nth-of-type(2)': {
            flex: '1 0 0', 
          },
          '& > div:nth-of-type(3)': {
            flex: '1 0 0', 
            flexDirection: 'column', 
          },
        },
      },










      
     '& >div:nth-of-type(1)':{
         flex:'0.5 0 0',
         backgroundColor:"white", borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"
    
     },
     '& >div:nth-of-type(2)':{
        flex:'3.5 0 0',
        backgroundColor:"white",
       
    //    display:'flex',
    //         flexGrow:'4.5'
          flexDirection:'column',
          display:'flex',









          '&>div:nth-of-type(1)':{
              flex:'1 0 0'
          },
          '&>div:nth-of-type(2)':{
                flex:'6 0 0'
          },
          '&>div:nth-of-type(3)':{
                flex:'3 0 0',
                flexDirection:"column",
              
          },
    
     },
     '& >div:nth-of-type(3)':{
   
        flex:'6 0 0',
        display:'flex',
        flexDirection:'row'
     ,
     backgroundColor:"white",borderTopRightRadius:"5%",borderBottomRightRadius:"5%",
   



'& >div:nth-of-type(1)':{
  flex:'5 0 0',
}
,'& >div:nth-of-type(2)':{
  flex:'5 0 0',
  backgroundColor:"#c0dbea",
  borderTopLeftRadius:"5%",
   borderBottomLeftRadius:"5%",
   borderTopRightRadius:"5%",
   borderBottomRightRadius:"5%"
}




     }
        
    },
    '&> div:nth-of-type(3)':{
        flex:'0 0 10% ',
      

    }
}))

const CustomTextField=styled(TextField)(({theme})=>({

    '& .MuiInputBase-root':{
        marginBottom:"2%",
        marginTop:"2%",
         backgroundColor: '#c0dbea'
    },
'& .MuiFilledInput-root,& .MuiOutlinedInput-root': {
    
        textDecoration:'none',
        borderBottom: 'none',
     backgroundColor: '#c0dbea', 
    
    height: '40px', 
   
    '&:before': {
      borderBottom: 'none', 
      textDecoration:'none',
      
    },
    '&:after': {
      borderBottom: 'none', 
      textDecoration:'none',
    
    },
    '&:hover:before': {
      borderBottom: 'none', 
 
    },
  },
  '& .MuiInputAdornment-root': {

  },
  '& .MuiTextField-root':{
    color:"green"
  }


}))

const LoginPage=()=>{

  const navigate = useNavigate();
const [showPassword,setshowPassword]=useState(false);
const isSmallScreen = useMediaQuery('(max-width: 768px)');
function handleTogglePasswordVisibility(){
setshowPassword((prev)=>!prev);
}





const [formData, setFormData] = React.useState({
  email: '',
  password:''
})




const { globalState, setGlobalState } = useContext(MyContext);
console.log("set", setGlobalState);
    console.log("token", globalState);
















console.log(formData);
const changeHandler = (event) => {
  const { name, value } = event.target;
  setFormData((prev) => {
    return {...prev,[name]:value}
  })
  console.log(formData);
}


const submitHandler = async (event) => {
  event.preventDefault();
  const response = await UseFetch(`login`, formData);
  console.log("response",response);

  await setGlobalState((prev) => {
    return { ...prev, token: response.data.token, role: response.data.role,id:response.data._id,email:response.data.email };
  });

    if (response.data.role === "user") {
     navigate("/home");
    } else if (response.data.role === "admin") {
   navigate("/home");
    }
}






    return (
        <>
          <ThemeProvider theme={theme}>
        <StyledBox >
            <Box  sx={{width:"15%",height:'100vh'}}>

              </Box>
     
           
            
            <StyledChild>
           
               <Box ></Box>

                  

               <Box >
                  <Box sx={{display:isSmallScreen?'none':'block'}}>
                  
                    </Box>
                  <Box >
                    <Box >
                 
                      </Box>
                    <Box >
                          <Box>
                            <h2 style={{color:"#e8a8d9"}}>Logo here</h2>
                          </Box>
                          <Box>
                            <p>welcome back</p>
                            <h2 style={{marginBottom:"2%"}}>
                              Log In
                              </h2>
                          </Box>
                          <form   onSubmit={submitHandler}>
                          <Box sx={{display:"flex",flexDirection:"column"}}>
                            <Box>
                                <label>Email</label>
                            </Box>
                            <Box >
                      
                                <CustomTextField type="email" placeholder='email'  fullWidth size="small"   variant="filled"
                                  name="email"

                                  value={formData.email}
                                   onChange={changeHandler}
                                     
                                           />
                            </Box>
                          </Box>
                          <Box sx={{display:"flex",flexDirection:"column",}}>
                            <Box sx={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
                                <label>password</label>
                                <span>forget password?</span>
                            </Box>
                         

                                    <Box >
                                      <CustomTextField
                                     id="password"
                                      type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        variant="filled"
                                        focused
                                          fullWidth
                                          value={formData.password}
                                            onChange={changeHandler}
                                            size="small"
                                               placeholder="password"
                                       InputProps={{
                                  endAdornment: (
                                <InputAdornment position="end">
                                 <IconButton
                                    onClick={handleTogglePasswordVisibility}
                           
                                      >
                                       {showPassword ? <VisibilityOff sx={{color:"#d885a3"}}/> : <Visibility sx={{color:"#d885a3"}}/>}
                                    </IconButton>
                                     </InputAdornment>
                                        ),
                                        }}
                                       />
                                       </Box>
                                        <Box sx={{display:'flex',justifyContent:'center',marginTop:"5%"}}>
                               
                                           <div style={{backgroundColor:"#d885a3",display:"flex",padding:"5px",borderRadius:"10px"}}>
                                         <button style={{border:"none",background:"transparent",fontWeight:"bold",color:"white",cursor:"pointer"}}>LOGIN</button>
                                        < EastTwoToneIcon  sx={{color:"white",cursor:"pointer"}}/>
                                        </div>

                                       </Box>

                          </Box>
                          </form>

                    </Box>
                     <Box >
                      <SocialIcons/>
                     </Box> 
                  </Box>
                  {!isSmallScreen && (
                  <Box  sx={{position:"relative", 
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',}} >
                    
                    <img src={laptopGirl3} alt="laptopGirl"
                     // height="450px"
                       //weight="400px"  
                        style={{
                  position: 'absolute',
                  // top: '5%',
                  //  left:"15%",
                 zIndex:10,

                 width: '100%',
                 height: '100%',
                 objectFit: 'contain',

                }}/>
            
                    <Box>
                      
                    </Box>
                     <Box>
         
                      </Box>
                  </Box>)}
               </Box>



               <Box sx={{  display: isSmallScreen ? 'none' : 'block',}}>
          
                
                </Box>
             
            </StyledChild>
           
            <Box sx={{width:"15%",height:'100vh'}}>
           
              </Box>
        </StyledBox>
        </ThemeProvider>
        </>
    )
}

export default LoginPage;