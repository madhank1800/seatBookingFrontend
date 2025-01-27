import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { MyContext } from "../../../Context/MyContext";
import { useContext } from "react";

const Orderss = () => {
  const { globalState } = useContext(MyContext);
  const bookings = globalState.bookings || [];

  return (
    <Box sx={{ width: "100%", overflowX: "auto", padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "center" }}>
        Booking Details
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="booking table">
          <TableHead>
            <TableRow>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Seat Name</TableCell>
              <TableCell align="center">Seat Number</TableCell>
              <TableCell align="center">Booking Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{booking.firstName}</TableCell>
                  <TableCell align="center">{booking.seatName}</TableCell>
                  <TableCell align="center">{booking.slot_time}</TableCell>
                  <TableCell align="center">{booking.bookingDate}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No bookings available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orderss;
