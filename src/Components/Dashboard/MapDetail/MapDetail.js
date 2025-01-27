

import React from "react";
import Grid from '@mui/material/Grid2';
import { Box,Typography } from "@mui/material";
import WeekendIcon from '@mui/icons-material/Weekend';
import { useContext } from "react";
import { MyContext } from "../../../Context/MyContext";

const MapDetail=()=>{

  
  
  
        
    const { globalState } = useContext(MyContext); 
    return (
        <>
        <Grid item      
         sx={{backgroundColor:"white" ,height:"auto",width:"100%",padding:'8px',
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",}}>

  <Box
    sx={{
      display: "flex", 
      alignItems: "center",
      marginBottom: "8px", 
    }}
  >
    <Box
      sx={{
        width: "16px",
        height: "16px",
        backgroundColor: "green",
        borderRadius: "50%",
        marginRight: "8px", 
      }}
    />
    <Typography variant="body2" sx={{ color: "black" }}>
      Available Seats
    </Typography>
  </Box>

  <Box
    sx={{
      display: "flex", 
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        width: "16px",
        height: "16px",
        backgroundColor: "red",
        borderRadius: "50%", 
        marginRight: "8px", 
      }}
    />
    <Typography variant="body2" sx={{ color: "black" }}>
      Booked Seats
    </Typography>
  </Box>
        </Grid>
        <Grid item 
       
        sx={{backgroundColor:"white" ,height:"auto",width:"100%", display: "flex", 
    alignItems: "center", 
    padding: "8px",}}>




<Box
    sx={{
      marginRight: "8px", 
      display: "flex", 
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <WeekendIcon  fontSize="large"   sx={{ fontSize: "24px", color: "blue" }}/>

  </Box> 


  <Box>
    <Typography
      variant="body1"
      sx={{
        fontSize: "16px", 
        color: "black",
        lineHeight: 1.5, 
      }}
    >
      {globalState.seats.totalSeats}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontSize: "14px", 
        color: "gray",
        lineHeight: 1.5, 
      }}
    >
      total seat
    </Typography>
  </Box>
   
</Grid>
<Grid item 
       
       sx={{backgroundColor:"white" ,height:"auto",width:"100%", display: "flex",
   alignItems: "center", 
   padding: "8px",}}>




<Box
   sx={{
     marginRight: "8px", 
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
   }}
 >
   <WeekendIcon  fontSize="large"   sx={{ fontSize: "24px", color: "blue" }}/>

 </Box> 

 <Box>
   <Typography
     variant="body1"
     sx={{
       fontSize: "16px", 
       color: "black",
       lineHeight: 1.5, 
     }}
   >
        {globalState.seats.availableSeats}
   </Typography>
   <Typography
     variant="body2"
     sx={{
       fontSize: "14px", 
       color: "gray",
       lineHeight: 1.5, 
     }}
   >
     Available Seats
   </Typography>
 </Box>
  
</Grid>
<Grid item 
       
       sx={{backgroundColor:"white" ,height:"auto",width:"100%", display: "flex", 
   alignItems: "center", 
   padding: "8px",}}>




<Box
   sx={{
     marginRight: "8px", 
     display: "flex", 
     alignItems: "center",
     justifyContent: "center",
   }}
 >
   <WeekendIcon  fontSize="large"   sx={{ fontSize: "24px", color: "blue" }}/>

 </Box> 


 <Box>
   <Typography
     variant="body1"
     sx={{
       fontSize: "16px", 
       color: "black",
       lineHeight: 1.5, 
     }}
   >
     {globalState.seats.bookedSeats}
   </Typography>
   <Typography
     variant="body2"
     sx={{
       fontSize: "14px", 
       color: "gray",
       lineHeight: 1.5,
     }}
   >
     Booked seats
   </Typography>
 </Box>
  
</Grid>
        </>
    )
}

export default MapDetail;