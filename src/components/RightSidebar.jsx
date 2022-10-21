import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper', 
    textAlign:'center'
  };
const inner={
  margin:'.75rem '
}

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <h4>Activity</h4>
      <ListItem button sx={inner}>
        <ListItemText primary="Order #11788 was placed" secondary="20 mints ago" />
      </ListItem> 
      <ListItem button sx={inner}>
        <ListItemText primary="Order #12788 was placed" secondary="1day ago" />
      </ListItem>  
      <ListItem button sx={inner}>
        <ListItemText primary="Order #11889 was placed" secondary="2day ago" />
      </ListItem>  
      <ListItem button sx={inner}>
        <ListItemText primary="Order #11890 was placed" secondary="2day ago" />
      </ListItem>       
      <ListItem button sx={inner}>
        <ListItemText primary="Order #11918 was placed" secondary="2day ago" />
      </ListItem>   
      <ListItem button sx={inner}>
        <ListItemText primary="Order #11887 was placed" secondary="2day ago" />
      </ListItem>                  
    </List>
  );
}
