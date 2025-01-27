
import React from 'react';



import { Box, ThemeProvider,createTheme,IconButton, Tooltip, Typography} from '@mui/material'; 
import styled from '@emotion/styled';




import HomeIcon from '@mui/icons-material/Home';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SettingsIcon from '@mui/icons-material/Settings';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#000000', 
    },  teritary: {
        main: '#f7fbfe', 
      },
  },
});

















const SidebarContainer = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '80px',position:"fixed",zIndex:"2",
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: theme.spacing(4),
    gap: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: theme.spacing(1),
    },
  }));
  
 
  const TopbarContainer = styled(Box)(({ theme }) => ({
    height: '10%',
    minWidth: '100vw',
    position:'fixed',
    backgroundColor: theme.palette.teritary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(4)}px`,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      padding: `0 ${theme.spacing(2)}px`,
    },
  }));
  

const MainContent = styled(Box)(({ theme }) => ({
  marginTop: '10vh', 
  marginLeft: '80px', 
  height: 'calc(100vh - 10vh)',
  width: 'calc(100vw - 80px)',
  backgroundColor: '#f4f4f4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0, 
    width: '100%',
  },
}));





  const SidebarIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.secondary.main,
  }));


const Navbar=(props)=>{
 

 

    return (
        <>
    






          <ThemeProvider theme={theme}>
      <Box display="flex" sx={{position:'relative'}}>

        <SidebarContainer>
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
        </SidebarContainer>

       
        <Box  position="relative">
     
          <TopbarContainer>
            <Typography variant="h6">Office Seat Booking</Typography>
            <Box display="flex" gap={2}>
              <Typography>Tuesday, 29 March 2022</Typography>
            <Typography>Level 1</Typography> 


            </Box>
          </TopbarContainer>

       
           <MainContent>
            <Typography variant="h4" color="textSecondary">
              Dashboard Content Goes Here
            </Typography>
          </MainContent>


        </Box>
      </Box>
    </ThemeProvider>


     
  </>

    )
}

export default Navbar;