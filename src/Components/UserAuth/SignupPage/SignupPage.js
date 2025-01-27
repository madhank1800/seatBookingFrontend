

import * as React from 'react';
import Grid from '@mui/material/Grid2';
import SignupForm from './SignupForm';
import { Box, Typography } from '@mui/material';
import { ThemeProvider,createTheme } from '@mui/material'; 
import styled from '@emotion/styled';



const theme = createTheme();
const MGrid=styled(Grid)(({theme})=>({
     

    [theme.breakpoints.down('lg')]: { 


' .gridChildSecondSecond':{
    height:"100%",

},

'.gridChildSecond':{
margin:"50px",height:"100%"
},

'.gridChildSecondSecondsecond':{
    padding:"20px"

}


    }
,

    
    [theme.breakpoints.down('md')]: {


  '.gridChildFirst, .gridChildThird':{
     display:'none'
  },

 '.gridChildSecondFirst':{
  display:'none'
 },

 '.gridChildSecondSecondFirst':{
      maxWidth:"50%",
      position:'relative',overflow:'hidden'
 },

 '.gridChildSecondSecondsecond':{

    maxWidth:"50%",position:"relative",padding:"15px 15px 65px 15px",overflow:"hidden"
 }
,
' .gridChildSecondSecondThird':{
    display:'none'
 }
,
'.gridChildSecondSecondFirstFirst':{
// position:'relative',
// top:'-50%',left:'-50%'
},


' .gridChildSecond':{
    width:'100%',boxShadow:'0 0 30px #3578bf',margin:'50px 10px 10px 10px',   
}
,
'.Box1':{
position:'absolute',top:'-15%',left:'-15%',zIndex:'3'
}
,
'.Box2':{
    position:'absolute',bottom:'-70px',left:'-125px',zIndex:'5'
}
,

'.Box3':{
    position:'absolute',zIndex:"5",left:'40%',bottom:'90px'
}
,
'.Box4':{
  right:'-60px',bottom:"-60px"
}

       
  

    }

,


    [theme.breakpoints.down('sm')]: {



        '.gridChildFirst, .gridChildThird':{
            display:'none'
         },
         ' .gridChildSecond':{
              width:"100%"
         },
       
        '.gridChildSecondFirst':{
         display:'none'
        },

'.gridChildSecondSecondFirst':{
    display:'none'
 },

 ' .gridChildSecondSecondThird':{
    display:'none'
 }
         ,
' .gridChildSecondSecondsecond':{
    maxWidth:"100%",
    padding:"20px",
    // display:'flex',
    // justifyContent:"center",alignItems:"center"
}
,
        

      





    }



}))



const SignupPage=()=>{

    return (
        <>
            <ThemeProvider theme={theme}>
             <MGrid container sx={{height:{xl:"100vh",lg:"100vh"},backgroundColor:{lg:"#0b4d89",xl:"#0b4d89"}}} className='mainGrid' >
            <MGrid size={{xl:2,lg:2}} className='gridChildFirst'>
             <h6>jai sri ram</h6>
            </MGrid>
            <MGrid size={{xl:8,lg:8}} container direction="column" className='gridChildSecond'>
                <MGrid sx={{height:{lg:"10%",xl:"10%"}}}  className='gridChildSecondFirst'>
                <h6>jai sri ram</h6>
                </MGrid>
                <MGrid className='gridChildSecondSecond' size={{md:12,lg:12}} sx={{height:{xl:"80%",lg:"80%",md:"80%"} ,background:{lg:"#ffffff",xl:'#ffffff'},boxShadow:{
                    lg:"0 0 30px #3578bf",
                    xl:"0 0 30px #3578bf",
                    md:"0 0 30px #3578bf"},borderRadius:{lg:'15px',xl:"15px"},overflow:{lg:'hidden',xl:'hidden',md:'hidden'}} } container direction="row" >
                  
                 
                    <MGrid  className='gridChildSecondSecondFirst'  size={{xl:6,lg:6,md:6}} sx={{position:{lg:'relative',xl:'relative',md:'relative'}}} container>
                         <MGrid className="gridChildSecondSecondFirstFirst" display="flex" flexDirection="column" alignItems="flexStart"   zIndex="7" size={{xl:6,lg:6,md:6}} 
                          m={10}
                        //  sx={{ margin: '10px' }}
                       
                         > 
                          
                            <Typography variant='h6' sx={{color:"white",fontWeight:"bold"}}>WELCOME</Typography>
                            <Typography variant='h6' sx={{color:"white",fontSize:"13px"}}>YOUR  DETAILS FOR BOOKING</Typography>
                            <Typography variant='h6' sx={{color:"white",fontSize:"10px"}}>your details for booking your details for booking your details for booking your details for booking your details for booking</Typography>                       
                             </MGrid>
                        
                            
                    <Box className="Box1" sx={{position:{lg:'absolute',xl:'absolute',md:"absolute"},height:"100%",width:"100%",
                        // backgroundColor:"#3f82c0",
                        background: 'radial-gradient(circle, #3f82c0 0%, #357abd 25% , #186ab4 50%, #2474ba 75%, #003f6e 100%)',
                        borderRadius:"50%",top:'-15%',left:"-15%",zIndex:"1"}}></Box>
                    <Box   className="Box2" sx={{position:{lg:'absolute',xl:'absolute',md:"absolute"},xl:{position:'absolute'},height:"250px",width:"250px",
                        // backgroundColor:"#2474ba",
                        background: 'radial-gradient(circle, #3f82c0 0%, #357abd 25% , #2873b7 50%, #2474ba 70%, #003f6e 100%)',

                        borderRadius:"50%",bottom:'-70px',left:"-125px",zIndex:"3"}}></Box>
                    <Box    className="Box3"  sx={{position:{lg:'absolute',xl:'absolute',md:"absolute"},height:"200px",width:"200px",
                        backgroundColor:"#2474ba",
                        background: 'radial-gradient(circle, #3f82c0 0%, #357abd 25% , #2873b7 50%, #2474ba 70%, #003f6e 100%)',borderRadius:"50%",zIndex:"5",left:'50%',bottom:'70px'}}></Box>

                    </MGrid>
                    <MGrid   className='gridChildSecondSecondsecond'  sx={{padding:{lg:"30px 30px 10px 100px",xl:"30px 30px 10px 100px"},overflow:{lg:'hidden',xl:'hidden'},position:{lg:"relative",xl:'relative',sm:'relative'}}}   size={{xl:6,lg:6,sm:12,xs:12,md:6}}>
                        <SignupForm/>
                      
                        <Box className="Box4" sx={{position:{lg:'absolute',xl:'absolute',sm:'absolute'},height:{lg:"120px",xl:"120px",sm:"120px"},width:{lg:"120px",xl:"120px",sm:"120px"},backgroundColor:{lg:"#3f82c0",xl:"#3f82c0",sm:"#3f82c0"},borderRadius:{lg:"50%",xl:"50%",sm:"50%"},right:{lg:'-60px',xl:'-60px',md:'-60px'},bottom:{lg:"-60px",xl:"-60px",md:"-60px"}}}></Box>

                    </MGrid>
                </MGrid>
                    <MGrid sx={{height:"10%"}}   className='gridChildSecondSecondThird' >
                    <h6>jai sri ram</h6>
                    </MGrid>
               
               </MGrid>
               <MGrid size={{xl:2,lg:2}} className='gridChildThird' >
               <h6>jai sri ram</h6>
               </MGrid>

        </MGrid>

         </ThemeProvider> 
        </>
    )
}

export default SignupPage;