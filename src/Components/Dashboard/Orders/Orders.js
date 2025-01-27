

import React ,{useCallback, useEffect, useState}from "react";

//import { Typography } from "@mui/material";
import { MyContext } from "../../../Context/MyContext";
import { useContext } from "react";
import axios from "axios";

import { toast } from 'react-toastify';






const Orders=()=>{


    const [BookingsData,setBookingsData]=useState([]);
      
  const { globalState} = useContext(MyContext); 
 const { bookings } = globalState; 


const employeeDetail=globalState.id;

const fetchBookings = useCallback( async () => {
    try {
   
      const response = await axios.post(
        `http://localhost:8080/api/book/getEmployeeOrders`,{employeeDetail},
        {
          headers: {
            Authorization: `Bearer ${globalState.token}`,
          },
        }
      );



      if(response.data.bookings){
        const limitingBookings=response.data.bookings.reverse().slice(0, 15)
        setBookingsData(limitingBookings);
      }

      console.log("response of orders",response.data.bookings);
      console.log("response of orders1",response.data.bookings.bookingDate());
      console.log("date current froabyavaadhm",new Date(response.data.bookings.bookingDate).toLocaleDateString());
    
    } catch (error) {
    
    }
  },[employeeDetail,globalState.token]);
  




useEffect(() => {
  
    if(globalState.token){
      fetchBookings();
    }

  },[bookings]);


    return (
    
<div style={{ padding: "10px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Bookings</h1>
      {BookingsData.length === 0 ? (
        <p style={{ textAlign: "center" }}>No bookings available</p>
      ) : (
        <table style={{ width: "auto", borderCollapse: "collapse" ,overflowX:"auto",   
           }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>First Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Seat Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Slot Time</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {BookingsData.map((booking, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {booking.firstName || "N/A"}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {booking.seatName || "N/A"}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {booking.slot_time || "N/A"}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                {booking.bookingDate 
    ? new Date(booking.bookingDate).toISOString().split('T')[0] 
    : "N/A"}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;