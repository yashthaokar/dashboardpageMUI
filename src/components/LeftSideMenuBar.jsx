import React from 'react'
import {  ListItem, Paper } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Margin } from '@mui/icons-material';

const LeftSideMenuBar = () => {
  const hover=(e)=>{
    e.target.style.background = 'white';
    e.target.style.color= 'black';
  
  }
  const hoverout=(e)=>{
    e.target.style.background ='#e0e0e0';
    e.target.style.color= '';
  }
  const style = {
    width: '100%',
    bgcolor: '#e0e0e0',
   color:'#5a5e9a',
    fontWeight:'900',
    margin:"1"
   };
  return (
    <div className='leftside'>
      <Paper>    
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem variant="text" button={true} onMouseOver={hover} onMouseLeave={hoverout}><h1>S</h1></ListItem>
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
            <DashboardOutlinedIcon />
            <ListItemText primary="Home"onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>        
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <BusinessCenterOutlinedIcon />
            <ListItemText primary="Catalog" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>         
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <ShoppingCartOutlinedIcon />
            <ListItemText primary="Orders" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>      
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <PersonOutlineOutlinedIcon />
            <ListItemText primary="Customers" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>          
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <DiscountOutlinedIcon />
            <ListItemText primary="Discounts" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>         
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <TextSnippetOutlinedIcon />
            <ListItemText primary="Pages" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>          
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <GridViewOutlinedIcon />
            <ListItemText primary="Apps" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>        
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <LanguageOutlinedIcon />
            <ListItemText primary="Translations" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>  
          <ListItem button onMouseOver={hover} onMouseLeave={hoverout}>
          <SettingsOutlinedIcon />
            <ListItemText primary="Configration" onMouseOver={hover} onMouseLeave={hoverout}/>
          </ListItem>              
        </List>
       
      </Paper>  

    </div>
  )
}

export default LeftSideMenuBar