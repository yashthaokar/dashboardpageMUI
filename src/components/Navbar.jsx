import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Chip } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navbar = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box component="nav" aria-label="My site" className='nav'>
      <List role="menubar" row>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <BoltOutlinedIcon />

          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Channel-PLN</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Channel_PLN1</MenuItem>
        <MenuItem value={20}>Channel_PLN2</MenuItem>
        <MenuItem value={30}>Channel_PLN3</MenuItem>
      </Select>
      </FormControl>
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
         
            <Box className="nav-email">
            <Stack direction="row">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
             <Chip label=" hello235@gmail.com" />         
          </ListItemButton>
            </Stack>
            </Box>            
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            {/* <Person /> */}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Navbar