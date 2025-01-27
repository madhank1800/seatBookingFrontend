//import React from "react";
import React, { useEffect, useState, useContext } from "react";
import "./DeskBookingMap.css";
import Grid from '@mui/material/Grid2';
import {  Box,Tooltip  } from "@mui/material";
import { MyContext } from "../../../Context/MyContext";


//import axios from "axios"; 
import SeatFetchApi from "../../../Api/SeatFetchApi";
const DeskBookingMap = ({selectedTimeSlot,handleSeatClick,Bookingdesks }) => {


  console.log("handleSeatClick",handleSeatClick);

  console.log("BookingDesks in desk booking map",Bookingdesks);
  

  const selectedTimeSlot1=selectedTimeSlot;
console.log(" selected time slot props detail boking map",selectedTimeSlot1);







      
  const { globalState,setGlobalState } = useContext(MyContext); 
  const [desks, setDesks] = useState([]); 
  console.log("desks seats",desks);





  console.log("Booking desks aafter booking data is future",Bookingdesks);


  useEffect(() => {
    const fetchDesks = async () => {
      try {
        const response = await SeatFetchApi(`allseats`, {
          headers: {
            Authorization: `Bearer ${globalState.token}`, 
          },
        });
     
        setDesks(response.data.updatedSeats); 
      } catch (error) {
        console.error("Error fetching desks:", error);
      }
    };

    if (globalState.token) {
      fetchDesks();
    }
  },
    [globalState.token]
  
  );

  console.log("desks seats",desks);


  

  useEffect(() => {
    if (Bookingdesks.length > 0) {
      setDesks(Bookingdesks); 
    }
  }, [Bookingdesks]);























 const filtered = desks
 .map((desk) => {
   const matchedSlot = desk.availability.find((slot) => slot.slot_time === selectedTimeSlot);
   if (matchedSlot) {
     return {
       ...desk,
       availability: [matchedSlot], 
     };
   }
   return null; 
 })
 .filter((desk) => desk !== null);

console.log("filtered",filtered);















const { totalSeats, availableSeats, bookedSeats } = filtered.reduce(
  (acc, desk) => {
    console.log("reducer desk",desk);
    acc.totalSeats += 1; 
 
    const isSeatAvailable = desk.availability.some(slot => slot.isAvailable);
    if (isSeatAvailable) {
      acc.availableSeats += 1;
    } else {
      acc.bookedSeats += 1;
    }
    return acc;
  },
  { totalSeats: 0, availableSeats: 0, bookedSeats: 0 } 
);
console.log("total seats",totalSeats);
console.log("availableSeats",availableSeats);
console.log("bookedSeats",bookedSeats);




 useEffect(() => {
  setGlobalState((prevState) => ({
    ...prevState,
    seats: {
      totalSeats,
      availableSeats,
      bookedSeats,
    },
  }));
}, [totalSeats, availableSeats, bookedSeats, setGlobalState]);




  


  

const desks1 = filtered.slice(0, 4);
console.log("desks1",desks1);
const desks2 = filtered.slice(4, 14); 
const desks3 = filtered.slice(14, 17); 
const desks4 = filtered.slice(17, 21); 
const desks5 = filtered.slice(21, 25); 
const desks6 = filtered.slice(25, 35); 









 
  return (
    <>
       
    
    <Grid 
      container 
      spacing={1} 
      sx={{
       // height: "100vh", 
        gridTemplateColumns: "1fr 1fr", 
        gridTemplateRows: "1fr 1fr", 
        display: "grid",
      }}
    >

      <Grid item sx={{ gridColumn: "1", gridRow: "1" }} size={{xs:12,sm:12}}>


      <Box container  className="layout-container">
        {desks1.map((desk,index)=>(

          <>
         <Box item key={desk.id} className="child-container"      onClick={() => handleSeatClick(desk)} >
          {desk.seatNumber===3?(<>
          <Box className="spaceForrowCss"></Box>
          </>):(<></>)}

          <Tooltip title={desk.seatName || "Seat"} arrow>
          <Box className="seatDesign" key={desk.id}>
            
          {desk.seatNumber % 2 === 0 ? (
  <Box className={`seat-circle-right ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

  </Box>
) :  ( <Box className={`seat-circle-left ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

</Box>)}
 
          </Box>
          </Tooltip>
          </Box>
          </>
         
      
        )

        )}








{desks2.map((desk,index)=>(

<>

<Tooltip title={desk.seatName || "Seat"} arrow>
<Box item key={desk.seatNumber} className="secondRowClass"     onClick={() => handleSeatClick(desk)} >
{/* {desk.id===2?(<>
<Box className="spaceForrowCss"></Box>
</>):(<></>)} */}
<Box className="seatDesignDown" key={desk.seatNumber}>
  
{desk.id <=9? (
<Box className={`seat-circle-up ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

</Box>
) :  ( <Box className={`seat-circle-down ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

</Box>)}

 

</Box>

</Box>
</Tooltip>
</>


)

)}


    </Box>

    </Grid>


    <Grid item sx={{ gridColumn: "1", gridRow: "2" }} size={{xs:12,sm:12}}>

    <Box className="room-edge-css">
    <Box className="officeRoom2">
 
      <Box className="seatTable">
         {desks3.map((desk,index)=>( 
  <Box    onClick={() => handleSeatClick(desk)}             >
<     Tooltip title={desk.seatName || "Seat"} arrow >
          <Box key={desk.seatNumber} className={`seat-circle-side ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}
          
          style={{
            top: `calc(${10 + (index / (desks3.length - 1)) * 80}%)`, 
            transform: 'translateY(-50%)', 
          }}
          ></Box>
          </Tooltip>
          </Box>
        
      )
      
      )
        
    
}

       </Box> 




      <Box className="round-table">
        {
desks4.map((desk,index)=>(
  
  <Box  key={desk.seatNumber}  onClick={() => handleSeatClick(desk)}>

  <Tooltip title={desk.seatName || "Seat"} arrow>
  <Box key={desk.seatNumber} className={`seat-circle-round  ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}
  style={{
    top: index === 0 ? '-10px' : index === 2 ? 'calc(100% - 10px)' : '50%',
    left: index === 1 ? 'calc(100% - 10px)' : index === 3 ? '-10px' : '50%',
    transform:
      index === 0 || index === 2
        ? 'translateX(-50%)'
        : 'translateY(-50%)',
  }}
  
  ></Box>
  </Tooltip>
  </Box>
))
        }
        
        </Box>
    </Box>
   </Box>


</Grid>



<Grid item sx={{ gridColumn: "2", gridRow: "1 / 3" }} size={{xs:12,sm:12}}>

       <Box container  className="layout-container">
        {desks5.map((desk,index)=>(

          <>
         <Box item key={desk.seatNumber} className="child-container"   onClick={() => handleSeatClick(desk)} >
          {desk.seatNumber===24?(<>
          <Box className="spaceForrowCss"></Box>
          </>):(<></>)}

          <Tooltip title={desk.seatName || "Seat"} arrow>
          <Box className="seatDesign" key={desk.seatNumber}>
            
          {desk.seatNumber % 2 === 1? (
  <Box className={`seat-circle-right  ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

  </Box>
) :  ( <Box className={`seat-circle-left ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

</Box>)}

          </Box>
          </Tooltip>
          </Box>
          </>
         
      
        )

        )}








{desks6.map((desk,index)=>(

<>


<Box item key={desk.seatNumber} className="secondRowClass"   onClick={() => handleSeatClick(desk)}>
{/* {desk.id===2?(<>
<Box className="spaceForrowCss"></Box>
</>):(<></>)} */}
<Tooltip title={desk.seatName || "Seat"} arrow>
<Box className="seatDesignDown" key={desk.seatNumber}>
  
{desk.seatNumber <=30? (
<Box className={`seat-circle-up ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

</Box>
) :  ( <Box className={`seat-circle-down ${desk.availability[0]?.isAvailable ? "available" : "unavailable"}`}>

</Box>)}

 

</Box>
</Tooltip>
</Box>

</>


)

)}


    </Box>

</Grid>



</Grid>

    
    </>
   
    
  );








};





export default DeskBookingMap;
