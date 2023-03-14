import {AppBar, Box, Button, Link, Stack, Toolbar} from "@mui/material";
import NextLink from "next/link";
import {grey} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {store} from "@/store";

const AppHeader = () => {
    const isLoggedIn = useSelector((state) => state.app.isLoggedIn);
    return (
        <AppBar position="static" sx={{ background: "white", color: grey[600]}}>
            <Toolbar>
                <Box  sx={{ flexGrow: 1 }}>
                    <NextLink href="/" passHref legacyBehavior>
                        <Link sx={{ fontSize: "20px" }} underline="none">
                            Digital Marketing
                        </Link>
                    </NextLink>
                </Box>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <a href="#">español</a>
                    {isLoggedIn && <Button variant="contained" sx={{background: grey[500]}} size="small">Sign out</Button>}
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader;
