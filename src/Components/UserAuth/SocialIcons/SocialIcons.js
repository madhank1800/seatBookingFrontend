import * as React from 'react';
import { Box,IconButton,Tooltip } from '@mui/material';
import { styled } from '@mui/material';
import { GitHub,Facebook, Google  } from '@mui/icons-material';

import {Link} from 'react-router-dom';

const socialIcons = [
    { id: 'github', icon: <GitHub />, link: 'https://github.com', tooltip: 'GitHub' },
    { id: 'facebook', icon: <Facebook />, link: 'https://facebook.com', tooltip: 'Facebook' },
    { id: 'google', icon: <Google />, link: 'https://google.com', tooltip: 'Google' },
  ];


  const IconContainer=styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2), // Add spacing between icons
     marginTop: theme.spacing(2), // Optional: margin for placement
     marginBottom:theme.spacing(2)
  }))

const SocialIcons=()=>{

    return (

        <>
        <p style={{display:"flex",justifyContent:"center",marginTop:"2%",fontSize:"0.9rem",color:"#c1b9da"}}>connection with</p>
        <IconContainer>
           
              {socialIcons.map(({id,icon,link,tooltip})=>(
                   <Tooltip key={id} title={tooltip}>
                   <IconButton
                     component="a"
                     href={link}
                     target="_blank"
                     rel="noopener noreferrer"
                     sx={{
                       color: '#1976d2', // Use theme color
                       transition: 'color 0.3s',
                       border:'1px solid #c1b9da',
                       borderRadius:'20px/19px',
                       width:'100px',height:"38px",
                       '&:hover': {
                         color: '#1976d2', // Optional: Add hover effect color
                       },
                     }}
                   >
                     {icon}
                   </IconButton>
                 </Tooltip>
              ))}
        
        </IconContainer>
        <Box sx={{display:"flex",justifyContent:"center",fontSize:"0.9rem",gap:"2%"}}>
            <p  style={{color:"#c0dbea"}}>dont have account?</p>
            <Link to="/signup" style={{color:"#e6a8d8",textDecoration:"none",fontWeight:"bold"}}>signup for free</Link>
        </Box>
        </>
    )
}

export default SocialIcons;