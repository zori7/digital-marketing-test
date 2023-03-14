import {Box, Button, Divider, Grid, Link, Stack, styled, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {grey} from "@mui/material/colors";

const StyledIcon = styled('div')({
    backgroundColor: grey[300],
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: grey[600]
})

const ProjectItem = (props) => {
    return (
        <Stack p={3} mt={2} sx={{border: '1px solid grey'}} direction='row' alignItems='flex-end' justifyContent="space-between">
            <div>
                <Typography fontWeight={700}>ProjectName{props.projectNumber}</Typography>
                <Typography mt={0.5} variant='body2'>{props.firstName} Contractor</Typography>
                <Typography mt={0.5} variant='body2'>Newark, New Jersey</Typography>
                <Typography mt={0.5} variant='body2'>ID: 123456789</Typography>
            </div>
            <Stack justifyContent='flex'>
                <Button sx={{ backgroundColor: grey[500], mb: 1}} size='small' variant='contained'>View Certified Payroll Info</Button>
                <Link sx={{color: grey[500], cursor: "pointer", fontSize: "0.9em"}}>Last Submitted Certified Payroll 03/14/2023</Link>
            </Stack>
        </Stack>
    )
}

const Profile = () => {
    const profile = useSelector((state) => state.app.profile);
    const role = profile.role === 'contractor' ? 'Contractor' : 'Public Body'

    return (
        <>

            <Stack spacing={3} direction='row' p={4}>
                <Box>
                    <StyledIcon>
                        {profile.role === 'contractor' ? <AccountCircleIcon/> : <AccountBalanceIcon/>}
                    </StyledIcon>
                </Box>
                <Box p={0.5} width='100%'>
                    <Typography variant='h4'>{profile.firstName} {role} Page</Typography>
                    <Stack direction='row' spacing={7} mt={4}>
                        <Link underline='none'><Typography fontSize={25}>Contracts</Typography></Link>
                        <Link sx={{color: grey[600]}} underline='none'><Typography fontSize={25}>Staff</Typography></Link>
                        <Link sx={{color: grey[600]}} underline='none'><Typography fontSize={25}>Profile</Typography></Link>
                    </Stack>
                    <Stack direction='row' mt={3} mb={2}>
                        <Typography mr='auto'>View/add contracts and see certified payroll
                            for your projects here
                        </Typography>
                        <Button sx={{backgroundColor: grey[500]}} variant='contained' startIcon={<AddIcon/>} size='small'>Add Contract</Button>
                        <Button sx={{backgroundColor: grey[500], ml: 1.5}} variant='contained' startIcon={<SearchIcon/>} size='small'>Find Contract</Button>
                    </Stack>
                    <Divider/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <ProjectItem projectNumber={1} firstName={profile.firstName}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ProjectItem projectNumber={2} firstName={profile.firstName}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ProjectItem projectNumber={3} firstName={profile.firstName}/>
                        </Grid>

                    </Grid>
                </Box>
            </Stack>

        </>
    )
}

export default Profile;