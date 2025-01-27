import React,{useState} from 'react';
import { Box,Button, Typography, Tooltip, IconButton, createTheme, ThemeProvider,TextField } from '@mui/material';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SettingsIcon from '@mui/icons-material/Settings';
import Grid from '@mui/material/Grid2';
import SeatForm from './SeatBookingForm/SeatForm';
import DeskBookingMap from './DeskBooking/DeskBookingMap';
import axios from 'axios';
import { useContext } from 'react';
//import UseBookApi from "../../../Api/UseBookAPi";
//import { MyContext } from "../../../Context/MyContext";
import { MyContext } from '../../Context/MyContext';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Orders from './Orders/Orders';

//import Orderss from './Orders/Orderss';
import MapDetail from './MapDetail/MapDetail';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';






import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d6dda', 
    },
    secondary: {
      main: '#000000',
    },
    teritary: {
      main: '#f7fbfe', 
    },
  },
});

const Sidebar = styled(Box)(({ theme }) => ({
  gridArea: 'sidebar',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  gap: theme.spacing(4),
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(1),
  },
}));


const Navbar = styled(Box)(({ theme }) => ({
  gridArea: 'navbar',
  backgroundColor: theme.palette.teritary.main,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  color: theme.palette.secondary.main,
}));


const Dashboard = styled(Box)(({ theme }) => ({
  gridArea: 'dashboard',
  backgroundColor: '#eef3f7',

   padding:"30px"

}));


const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '80px 1fr',
  gridTemplateRows: 'auto 1fr',
  gridTemplateAreas: `
    "sidebar navbar"
    "sidebar dashboard"
  `,
  height: '100vh',
  
  width:'100vw',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateAreas: `
      "navbar"
      "sidebar"
      "dashboard"
    `,
  },
}));

const SidebarIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));



const StyledGridItem = styled(Grid)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,

  display: "flex", 
  flexDirection: "column", 
  justifyContent: "flex-start", 
  alignItems: "flex-start", 
  //overflow: "hidden",
  flexGrow: 1, 
  height: "auto", 
  //wordWrap: "break-word", 
  boxSizing: "border-box", 



}));



const Navbar1 = () => {

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("10");
  const [Bookingdesks, setBookingDesks] = useState([]);
 // const [selectedDate, setSelectedDate] = useState(null)
  console.log("selectedTImeSLot",selectedTimeSlot);

 const handleTimeSlotChange = (timeSlot) => {
  setSelectedTimeSlot(timeSlot);
};








const [selectedSeats, setSelectedSeats] = useState([]);



const handleSeatClick = (seat) => {
  const { _id, seatName,seatNumber, availability } = seat;

  const slot_time = availability[0]?.slot_time 

  setSelectedSeats((prevSelected) => [
    ...prevSelected,
    { _id, seatName,seatNumber, slot_time },
  ]);

  console.log(`Selected Seat:`, { _id, seatName, slot_time ,seatNumber});




};

console.log("selected SEats",selectedSeats);





  
  const { globalState} = useContext(MyContext);




const handleDateChange = async (newValue) => {
  setSelectedDate(newValue);

   if (newValue) {
    const formattedDate = newValue.format("YYYY-MM-DD");
    
    const apiData = { bookingsOnDay: formattedDate };
    console.log("api data",apiData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/book/bookingsOnDay",
        apiData,{
          // method: "POST",
          headers: {
           // "Content-Type": "application/json",
            authorization: `Bearer ${globalState.token}`, // Attach the token
          },
       
        }
      );
      console.log("API Response bookings day:", response.data);
      console.log("API Response bookings day:", response.data.getSeats);

      if(response.data.message==="sucess3" || response.data.message==='sucess1'){
        setBookingDesks(response.data.updatedSeats || []); 
      }else if(response.data.message==="sucess4" || response.data.message==='sucess2'){
        setBookingDesks(response.data.getSeats || []); 
      }else{
        console.log("response message",response.data.message);
      }




    } catch (error) {
      console.error("Error fetching bookings:", error);   
    }
   }
};

console.log("bookingdesks",Bookingdesks);





  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>

        <Sidebar>
          <Tooltip title="Home" placement="right">
            <SidebarIcon>
              <HomeIcon />
            </SidebarIcon>
          </Tooltip>
          <Tooltip title="Seat Booking" placement="right">
            <SidebarIcon>
              <EventSeatIcon />
            </SidebarIcon>
          </Tooltip>
          <Tooltip title="Settings" placement="right">
            <SidebarIcon>
              <SettingsIcon />
            </SidebarIcon>
          </Tooltip>
        </Sidebar>

    
        <Navbar>
          <Typography variant="h6">Office Seat Booking</Typography>
          <Box display="flex" gap={2}>
 
              


            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" alignItems="center" >
        <DatePicker
          label="Select a Date"
          value={selectedDate}
          onChange={handleDateChange}
        
          renderInput={(params) => <TextField {...params} />}
        />
      
      </Box>
    </LocalizationProvider>


          






          
      <Box className="time-slot-buttons">
        {["10", "01", "05"].map((timeSlot) => (
          <Button
            key={timeSlot}
            variant={selectedTimeSlot === timeSlot ? "contained" : "outlined"}
            onClick={() => handleTimeSlotChange(timeSlot)}
          >
            {timeSlot === "10" ? "10 AM" : timeSlot === "01" ? "1 PM" : "5 PM"}
          </Button>
        ))}
      </Box>




          </Box>
        </Navbar>

      
        <Dashboard>
        
            
           <Grid container spacing={2}  sx={{height:"100%"}}> 


            <StyledGridItem   spacing={2}     size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}   bgcolor="white">
             
              <SeatForm   selectedSeats={selectedSeats}   />
            </StyledGridItem>
            <StyledGridItem     size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}  bgcolor="#edf2f6" 
            
            sx={{
              position: "relative", 
              "::before": {
                content: '"Entrance"', 
                position: "absolute",
                right: "10px", 
                top: "50%", 
                transform: "translateY(-50%) rotate(-90deg)", 
                color: "#b7bec8", 
                fontSize: "15px", 
                fontWeight: "bold", 
                whiteSpace: "nowrap", 
              },
              
              
              "::after": {
                content: '""',
                position: "absolute",
                right: 0, 
                top: "50%", 
                transform: "translateY(-50%)",
                width: "5px", 
                height: "50%", 
                backgroundColor: "#dce5ef", 
              },
            }}
            
            >
            
              <DeskBookingMap      selectedTimeSlot={selectedTimeSlot}     handleSeatClick={handleSeatClick} 
              Bookingdesks={Bookingdesks}
              />
             
            </StyledGridItem>
            <StyledGridItem    sx={{height:"100%",width:"100%",rowGap:1}} size={{ xs: 12, sm: 6, md: 6, lg: 2, xl: 2 }} bgcolor="#eef3f7">
               <MapDetail/>
              
            
            </StyledGridItem>

      
          
            <StyledGridItem  sx={{display:"flex",justifyContent:'center',alignItems:"center",padding:"20px",textJustify:"auto",overflow:"hidden",color:'#b0bcc8'}}  size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}  bgcolor="#ffffff">         
              <Orders/> 
              
           
            
            
            </StyledGridItem>
            <StyledGridItem  sx={{display:"flex",justifyContent:'center',alignItems:"center",padding:"20px",textJustify:"auto",overflow:"hidden",color:'#b0bcc8'}}   size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}  bgcolor="#ffffff">
              Block 5 
            <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the .

</Typography>
            </StyledGridItem>
          
          </Grid> 

           
          

        </Dashboard>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Navbar1;
