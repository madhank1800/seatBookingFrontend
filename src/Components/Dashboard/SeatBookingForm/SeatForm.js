

import React,{useState,useEffect} from "react";
import Grid from '@mui/material/Grid2';
import TextField from "@mui/material/TextField";
import { Typography,Box } from '@mui/material';
import { toast } from 'react-toastify';
import { useContext } from 'react';
//import UseBookApi from "../../../Api/UseBookAPi";
import { MyContext } from "../../../Context/MyContext";
//import { createTheme, ThemeProvider} from "@mui/material/styles";
//import './SeatBookingForm';
//import './seatCss.css';
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import axios from "axios";
//import { Height } from "@mui/icons-material";
//import Button from "@mui/material/Button";
const StyledGridForm=styled(Grid)(({theme})=>({
    
}));




const CustomTextField = styled(TextField)(({ theme }) => ({


    "& .MuiOutlinedInput-root": {
      borderRadius: "15px", 
      backgroundColor: "#edf2f6", 
         height:'30px',
      "& fieldset": {
  
      },
      "&:hover fieldset": {
    
      },
      "&.Mui-focused fieldset": {
      
      },
    },
    "& .MuiInputBase-input": {
      fontSize: "16px", 
      padding: "12px 14px", 
      
    },
    "& .MuiFormLabel-root": {
        fontSize: "16px",
        color: "#666", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", 
        margin: "0", 
        transform: "none",
    
    },
    "& .MuiFormLabel-root.Mui-focused": {

    },
  }));








// const theme = createTheme({
//     components: {
//       MuiTextField: {
//         styleOverrides: {
//           root: {
//             "& .MuiOutlinedInput-root": {
//               borderRadius: "8px",
//               backgroundColor: "#f5f5f5",
//               "&:hover fieldset": {
//                 borderColor: "blue",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "green",
//               },
//             },
//             "& .MuiFormLabel-root": {
//               fontSize: "14px",
//               color: "gray",
//             },
//           },
//         },
//       },
//     },
//   });
  


// Custom-styled Button
const SmallButton = styled(Button)(({ theme }) => ({
    fontSize: "11px", 
    padding: "6px 6px", 
    borderRadius: "8px", 

  }));


const SeatForm=({selectedSeats})=>{

 console.log("seat form selectedseats",selectedSeats);

 
  const selectedseatbyEmployee = selectedSeats[selectedSeats.length - 1];

  const {
    seatName = "", 
    slot_time = "",_id=""

  } = selectedseatbyEmployee|| {}

console.log("seatidid",_id);






  
  const { globalState, setGlobalState } = useContext(MyContext);
  console.log("set-seatForm", setGlobalState);
      console.log("token-seatForm", globalState);
      console.log("token-seatForm token", globalState.token);

      const { id, email } = globalState || {};

console.log("_id of employee",id);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: email || '',
    bookingDate: '',
    seatName:seatName ||'',
    individual: '',
    slot_time: slot_time || '',
    timeTo: '',
  });


 useEffect(() => {
  setFormData((prevData) => ({
    ...prevData,
    seatName: seatName,
    slot_time: slot_time,
  }));
}, [seatName, slot_time]);



   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));



    console.log("seat form data  inside inside",formData);

  };




  console.log("global state booking 2 :",globalState);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const BookingDataOfEmployee = {
      ...formData,
      seatId: selectedseatbyEmployee._id,
      employee: globalState.id, 
    };
    console.log('Form Data to submit:', BookingDataOfEmployee);


try{


  const response=await axios.post(`http://localhost:8080/api/book/seat`,BookingDataOfEmployee,  {
   // method: "POST",
   headers: {
    // "Content-Type": "application/json",
     authorization: `Bearer ${globalState.token}`, 
   },

 }

);
console.log("response of booking",response);

if(response.status===201){
    toast.success('Booking succesfully created', {  
            position: 'top-center',
            autoClose: 3000,
          });


   const newBooking = response.data.booking; 

   console.log("newBooking",newBooking);
   setGlobalState((prevState) => ({
     ...prevState,
     bookings: [...prevState.bookings, newBooking], 
   }));



   console.log("global state booking",globalState);
}

}catch(error){

   toast.error('Mentioned booking day is already completed and try new diffrent days', {
           position: 'top-center',
           autoClose: 3000,
         });
}

  };







console.log("seat form data",formData);
    return (
        <>
        
        <form  onSubmit={handleSubmit}>
            <Box sx={{display:'flex',justifyContent:'center'}}>
         <Typography  sx={{height:"30px",width:"150px",textAlign:"center" ,border:'1px',backgroundColor:"#3d6dda",borderBottomRightRadius:"10px",borderBottomLeftRadius:"10px",color:'white'}}>SEAT BOOKING</Typography> 
            </Box>

        <StyledGridForm container spacing={2} sx={{padding:'20px',paddingTop:'30px'}}>
            {/* <Box>
              <Typography>Seat Booking</Typography>
            </Box> */}









            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField   placeholder="firstname" name="firstName"

onChange={handleInputChange}
            />
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            
            <CustomTextField  placeholder="lastname"   name="lastName" value={formData.lastName}
               onChange={handleInputChange}
            />
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField  placeholder="email" name="email"  value={globalState.email}
               onChange={handleInputChange}
            />
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField   placeholder="calender" type="date" name="bookingDate"  value={formData.bookingDate}
               onChange={handleInputChange}
            />
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField  placeholder="seat" value={seatName} name="seatName"   onChange={handleInputChange}/>
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField  placeholder="individual"/>
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField  placeholder=" time from"  value={slot_time}  name="slot_time"  onChange={handleInputChange}/>
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <CustomTextField  placeholder="time" disabled/>
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <SmallButton variant="contained" onClick={handleSubmit}>Confirm Booking</SmallButton>
            </StyledGridForm>
            <StyledGridForm  size={{xs:12,sm:12,md:6,lg:6,xl:6}}>
            <SmallButton variant="outlined">Cancel Booking</SmallButton>
            </StyledGridForm>
            </StyledGridForm> 

        </form>
      
        </>
    )
}

export default SeatForm;