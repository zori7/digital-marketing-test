import {useState} from "react";
import {
    Button,
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    Link,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {grey} from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material"
import {useDispatch, useSelector} from "react-redux";
import {login, setProfile} from "@/store/appSlice";
import {useRouter} from "next/router";

const BaseInput = (props) => {
    const {label, required, ...rest} = props
    return (
        <FormControl required={required} fullWidth>
            {label && <InputLabel shrink><b>{label}</b></InputLabel>}
            <TextField size="small" variant="filled" sx={{mt: 1}} inputProps={{sx: {pt: 1}}} {...rest}/>
        </FormControl>
    )
}

export default function RegisterPage() {
    const profile = useSelector((state) => state.app.profile);
    const dispatch = useDispatch();
    const router = useRouter();

    const [agreeToTerms, setAgreeToTerms] = useState();

    const onFieldChange = (key) => (e) => {
        dispatch(setProfile({
            [key]: e.target.value
        }));
    }

    const finishRegistration = () => {
        router.push("/profile");
        dispatch(login());
    }

    return (
        <Stack px={{md: 8, sm: 2, xs: 2}} py={3}>
            <Typography variant="h4">Hello! Welcome.</Typography>
            <Typography variant="body2" mb={4}>Register below by entering your data</Typography>
            <Grid container rowSpacing={3} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={12} md={6}>
                    <BaseInput
                        label='Name'
                        placeholder='First Name'
                        required
                        value={profile.firstName}
                        onChange={onFieldChange("firstName")}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BaseInput
                        placeholder='Last Name'
                        required
                        value={profile.lastName}
                        onChange={onFieldChange("lastName")}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BaseInput
                        label='Email Address'
                        placeholder='johndoe@gmail.com'
                        required
                        value={profile.email}
                        onChange={onFieldChange("email")}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BaseInput
                        label='FEIN'
                        placeholder='1111111111'
                        required
                        value={profile.fein}
                        onChange={onFieldChange("fein")}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BaseInput
                        label='YOUR JOB TITLE'
                        placeholder='Eg. Project Manager, etc.'
                        value={profile.jobTitle}
                        onChange={onFieldChange("jobTitle")}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BaseInput
                        label='Phone Number'
                        placeholder='111-111-1111'
                        required
                        value={profile.phone}
                        onChange={onFieldChange("phone")}
                    />
                </Grid>
            </Grid>

            <Stack alignItems="center" direction="row" mb={3} mt={4}>
                <Checkbox value={agreeToTerms} onChange={(e, checked) => setAgreeToTerms(checked)}/>
                <Typography variant="body2">I agree to the </Typography>
                <Typography ml={1} variant="body2" component="div">
                    <Link href="#">Terms and Conditions</Link>
                </Typography>
            </Stack>
            <div>
                <Button disabled={!agreeToTerms || !profile.firstName} variant="contained" size="small"
                        sx={{
                            background: grey[500],
                            justifyContent: "flex-start",
                            height: '36px',
                            textTransform: "none"
                        }} onClick={finishRegistration}>
                    Sign up <ChevronRight sx={{ ml: 12 }} />
                </Button>
            </div>
        </Stack>
    )
}
