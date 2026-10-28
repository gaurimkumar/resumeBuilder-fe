import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import { Stack } from '@mui/material';
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'black'}} position="static">
        <Toolbar>
         
           <Stack direction={'row'} sx={{gap:60,marginTop:'100px',marginBottom:'50px'}}>
          <Box sx={{marginLeft:'50px'}}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Typography sx={{width:'450px',textAlign:'justify',marginTop:'11px',lineHeight:'2'}} >An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</Typography>
          </Box>
          <Stack direction={'column'} sx={{gap:2}}>
            <Typography variant='h5'>Contact Us</Typography>
            <Typography><CgMail />  resumebuilder@gmail.com</Typography>
            <Typography><FaPhoneAlt />  9087654321</Typography>
            <Typography variant='h5'>Connect With Us</Typography>
            <Stack direction={'row'} sx={{gap:2}}>
              <Typography><FaInstagram /></Typography>
            <Typography><FaFacebook /></Typography>
            <Typography><FaWhatsapp /></Typography>
            </Stack>
          </Stack>
      </Stack>
      
        </Toolbar>
        <Typography sx={{textAlign:'center',marginBottom:'50px'}}>Designed & built with ❤️ using React</Typography>
      </AppBar>
    </Box>
  )
}

export default Footer