import {useEffect} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import {Box, Button, Stack, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "@/store/appSlice";

const SelectRole = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

    const onSelect = (role) => () => {
        dispatch(setProfile({ role }));
        router.push("/register");
    }

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/profile");
        }
    }, [isLoggedIn]);

    return (
        <>
            <Stack direction="row">
                <Box sx={{
                    width: "50%", height: "calc(100vh - 128px)", position: "relative", display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    }
                }}>
                    <Image src="/office-workers.jpg"
                           objectFit="cover"
                           layout="fill"
                           alt="role banner"
                    />
                </Box>
                <Box pl={8} pt={12}>
                    <Typography variant="h4" mb={1}>I am a...</Typography>
                    <Typography variant="body2" mb={4}>Select your role below</Typography>
                    <Stack direction='column' sx={{width: "180px"}} spacing={2}>
                        <Button variant="contained" fullWidth
                                onClick={onSelect("contractor")}
                                sx={{
                                    background: grey[500],
                                    justifyContent: "flex-start",
                                    height: '36px',
                                    textTransform: "none"
                                }}>
                            <Typography fontSize={12}>Contractor</Typography>
                        </Button>
                        <Button variant="contained" fullWidth
                                onClick={onSelect("publicBody")}
                                sx={{
                                    background: grey[500],
                                    justifyContent: "flex-start",
                                    height: '36px',
                                    textTransform: "none"
                                }}>
                            <Typography fontSize={12}>Public Body</Typography>
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default SelectRole;