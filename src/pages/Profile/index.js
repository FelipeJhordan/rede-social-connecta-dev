import React, {useState} from 'react'
import { Grid, Container, Tabs, Tab, Typography, Box } from '@material-ui/core'
import AccountProfile from './AccountProfile'
import Post from './Posts'
import Connections from './Connections'

function Profile() {
    const [tab, setTab] = useState(0)

    const handleChange = (handle, newValue) => {
        setTab(newValue)
    }

    const TabPanel =  (props) => {
        const { children, value, index, ...other} = props

        return (
            <Typography 
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`wrapped-tabpanel-${index}`}
                aria-labelledby={`wrapped-tab-${index}`}
                {...other}>
                    { value === index && <Box p={3}>
                        {children}    
                    </Box>}
            </Typography>
        )
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} xs={12}>
                <Grid item md={4}>
                    <AccountProfile />
                </Grid>
                <Grid item md={8}>
                    <Tabs value={tab} onChange={handleChange}>
                        <Tab label='Posts'/>
                        <Tab label='Conexões'/>
                    </Tabs>
                   <TabPanel value={tab} index={0}>
                      <Post /> 
                   </TabPanel>
                   <TabPanel value={tab} index={1}>
                        <Connections /> 
                   </TabPanel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile