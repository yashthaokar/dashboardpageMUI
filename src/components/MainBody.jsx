import React from 'react'
import {Box} from '@mui/material'

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MainBody = () => {
  const style1={
    bgcolor:'white',
    margin:1,
    padding:2,
    borderRadius:'.50rem'
  }
  const style2={
    bgcolor:'white',
    padding:2,
    margin:1,
    borderRadius:'.50rem',
    display:"flex",
    justifyContent:'center'
  }
  return (
  <div className="main" >
    <Box  style={{display:'flex', padding:"1rem", justifyContent:'center'}}>      
      <Box sx={style1}  padding={'.75rem'} width={'50%'} display={'flex'}>  
      <Box>  
      <ListItem button >        
        <ListItemText primary="Sales" secondary="Today" />
      </ListItem> 
      <ListItem button >
        <h3>PLN.000</h3>        
      </ListItem> 
      </Box>
      <Box>
             <img src="https://img.icons8.com/fluency/100/100/combo-chart.png" alt="" />

      </Box>
      </Box>
      <Box sx={style1}  padding={'.75rem'} width={'50%'} display={'flex'}> 
      <Box>
      <ListItem button >        
        <ListItemText primary="Orders" secondary="Today" />
      </ListItem> 
      <ListItem button >
        <h3>0</h3>        
      </ListItem> </Box>    
      
      <Box>
             <img src="https://img.icons8.com/nolan/100/100/task.png" alt="" />
      </Box>
      </Box>
    </Box>
    
    <Box sx={style2} width={'94%'}  style={{display:"inline-block"}}>
    <ListItem button >
              <div class="btn-group dropend">
  <button type="button" class="btn ">
   <b>6</b> Orders are reddy to fullfill
  </button>
  <button type="button" class="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
    <li>sxy</li>
    <li>sxy</li>
    <li>sxy</li>
  </ul>
</div>
      </ListItem> 
      <ListItem button >
              <div class="btn-group dropend">
  <button type="button" class="btn ">
   <b>3</b> Pyament to capture
  </button>
  <button type="button" class="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
    <li>yash</li>
    <li>ssdfh77</li>
    <li>sxy</li>
  </ul>
</div>
      </ListItem>
      <ListItem button >
              <div class="btn-group dropend">
  <button type="button" class="btn ">
   <b>0</b> No product are out of Stock
  </button>
  <button type="button" class="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
    
  </ul>
</div>
      </ListItem>

   
    </Box>


    <Box sx={style2}  width={'94%'} style={{ marginTop:'5px'}} >  
      <Box>  
      <ListItem button >
        <h2>Top Product</h2>        
      </ListItem> 
      <ListItem button >        
        <ListItemText primary="No Product Found" />
      </ListItem> 
      </Box>
      </Box>

  </div>
  )
}

export default MainBody