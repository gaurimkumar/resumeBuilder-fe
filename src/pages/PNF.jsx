

import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'


const PNF = () => {
  return (
   <Box style={{textAlign:'center'}}>
     <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAf4NE_UbsHbZAyU_JsSoCVnqYsW8GlWxdPGXKry_djCZlPrmbTmznrLc&s=10" alt="" />
     
     <Box>
      <Button sx={{backgroundColor:'orange',color:'white',px:3,marginBottom:10}} component={Link} to={'/'}>Go to Home Page</Button>
     </Box>
   </Box>
  )
}

export default PNF