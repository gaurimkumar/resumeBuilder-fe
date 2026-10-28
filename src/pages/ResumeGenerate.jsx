import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';



const ResumeGenerate = () => {
  return (
    <>
    <Box>
      <Typography variant='h4' sx={{textAlign:'center',marginTop:'50px',fontFamily: "Georgia, serif",fontWeight:'600'}}>
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>
      
     <Grid container sx={{marginLeft:'220px',marginTop:'80px'}}>
                <Grid size={6}>
                
                 <Box sx={{textAlign:'center',width: 450,
        height: 250,
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 2,
        padding:3 }}>
                  <Typography sx={{color:'blue',fontSize:'40px'}}><FaFileAlt /></Typography>
                   <Typography variant='h5' sx={{fontWeight:'600',fontFamily: "Georgia, serif"}}>
                    Add Your Details
                  </Typography> <br />
                  <Typography>Our AI will generate Skills & Summary</Typography><br />
                  <Typography sx={{fontWeight:'600'}}>Step 1</Typography>
                 </Box>
                </Grid>

                 <Grid size={6}>
                    <Box sx={{textAlign:'center',width: 450,
            height: 250,
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 2,
        padding:3}}>
                     <Typography sx={{color:'red',fontSize:'40px'}}><FaFileDownload /></Typography>
                   <Typography variant='h5' sx={{fontWeight:'600',fontFamily: "Georgia, serif"}}>
                   Download your Resume
                  </Typography><br />
                  <Typography>Download CV as PDF and start applying</Typography><br />
                  <Typography sx={{fontWeight:'600'}}>Step 2</Typography>
                    </Box>
                </Grid>

       </Grid>

       <Button variant="contained"
           component={Link} to="/resume-details"
          sx={{
            backgroundColor: "#9a6749",

            color: "white",

            fontFamily: "Georgia, serif",

            fontSize: "15px",

            marginLeft:"700px",
            marginTop:"60px",
            marginBottom:"100px",
            fontWeight: "bold",

            

            padding: "6px 18px",

            borderRadius: "6px",}}


            >LET'S START</Button>


    </Box>
    
    
    </>
  )
}

export default ResumeGenerate