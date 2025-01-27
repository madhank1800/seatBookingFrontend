import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const FallbackComponent = () => {
    console.log("fallback componet");
   return (
     <Box sx={{ display: "flex",justifyContent:"center" }}>
       <CircularProgress />
     </Box>
   );
}

export default FallbackComponent