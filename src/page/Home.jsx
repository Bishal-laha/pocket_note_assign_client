import AppLayout from "../layout/AppLayout";
import { Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Home = ({ isMobileScreen, setIsMenuOpen }) => {
    return (
        <Box height={"100%"} width={"100%"} >
            {isMobileScreen && <div onClick={() => setIsMenuOpen(true)} className="ml-2 mt-2"><MenuIcon fontSize="large" /></div>}
            <div>
                <img src="/home_img.svg" className="mx-auto w-[45%] h-[45%]" alt="image" />
                <Typography p={"2rem"} variant="h3" color={"black"} textAlign={"center"} >Pocket Notes</Typography>
                <div className="w-[70%] mx-auto text-center">
                    <p >Send and receive messages without keeping your phone online.</p>
                    <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
            </div>
        </Box>
    )
}

export default AppLayout()(Home);