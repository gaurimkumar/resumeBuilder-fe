import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getResumes } from '../services/allAPI'
import { Box, Button, Grid, Typography } from '@mui/material'
import Preview from '../components/Preview'
import { Link } from 'react-router-dom'




const AllDownloads = () => {

  const [resumeDatas,setResumeDatas]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{

    try {

      let apiResponse=await getResumes()

      if(apiResponse.status==200){
        setResumeDatas(apiResponse.data)
      }else{
        toast.error('Api call failed')
      }

    } catch (error) {
      console.log(error)
      toast.error("Api call failed")
    }
  }

  return (
    <Box>

      {
        resumeDatas?.length>0 ? <Box>

          <Typography variant='h3' sx={{textAlign:'center',p:4}}>All Downloads</Typography>
          <Grid sx={{p:5}} spacing={3} container>

            {
            resumeDatas.map((eachResume,index)=>(

             <Grid size={6}> 
             <Button sx={{marginLeft:3}} as={Link} to={`/resumes/${eachResume.id}`}>View Details</Button>
             <Preview key={index} resumeData={eachResume}/>
             </Grid>
            ))
          }
          
          </Grid>
          
           </Box> : <Typography>No resumes available</Typography>
      }



    </Box>
  )
}

export default AllDownloads