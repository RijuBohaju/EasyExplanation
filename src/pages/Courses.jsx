import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/Courses.css"
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


function Courses() {
  return (
    <Layout>
      <div className='course' >
        <h1>Our <span style={{color: '#4188BC', fontWeight:'bold'}}>Courses</span></h1>
        <Grid container spacing={5}>
  <Grid item xs={6} style={{marginBottom:'40px'}}>
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
      <h4>C Programminng</h4>
      <p>vcfcfc</p>
      <Link to="/">
         <button>Learn C</button>
      </Link>
    </div>
    </Box>
  </Grid>
  <Grid item xs={6} style={{marginBottom:'40px'}}>
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
      <p>vcfcfc</p>
      <Link to="/">
         <button>Learn C</button>
      </Link>
    </div>
    </Box>
  </Grid>
  </Grid>

  <Grid container spacing={2} style={{marginBottom:'15px'}}>
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid>
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid>
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid>
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid> 
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid> 
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid> 
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid> 
  <Grid item xs={3} >
    <Box sx={{p:2, bgcolor:'lightblue', borderRadius:'5px'}}>
    <div className='card'>
    <h4>C Programminng</h4>
    </div>
    </Box>
  </Grid> 
</Grid>
      </div>
    </Layout>
  )
}

export default Courses
