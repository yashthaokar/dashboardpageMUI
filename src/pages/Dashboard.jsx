import React from 'react'
import MainBody from '../components/MainBody'
import RightSidebar from '../components/RightSidebar'
import LeftSideMenuBar from '../components/LeftSideMenuBar'
import { Grid } from "@mui/material"
import { Box } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Dashboard = () => {
    return (
        <>


            <Grid container >
                <Grid item xs={2}>
                    <LeftSideMenuBar />
                </Grid>

                <Grid item xs={10}>
                    <Box>
                        <Box width={'100%'} padding={'1rem'}>
                            <h3>Hello there, admin@exmaple.com</h3>
                            <ListItem >
                                <ListItemText primary="Here is some information we gathered about your store" ></ListItemText>
                            </ListItem>
                        </Box>
                        <Grid container style={{margin:"1rem"}}>
                            <Grid item xs={9} >
                                <MainBody />
                            </Grid>
                            <Grid item xs={3} style={{paddingRight:"1rem"}}>
                                <RightSidebar />
                            </Grid> 

                        </Grid>

                    </Box>
                </Grid>
            </Grid>
        </>

    )
}

export default Dashboard