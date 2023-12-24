import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "@/assets/components/Navbar";
import Profile from "@/assets/components/Profile";
import Footer from "@/assets/components/Footer";
import Suggested from "@/assets/components/Suggested";

function Main() {
    return (
        <Grid gridTemplateColumns="270px 1.5fr 1fr" bg="blackAlpha.900" minH="100vh" position={"static"}>
            <GridItem px={10} py={4} borderRight="1px solid gray">
                <Navbar />
            </GridItem>
            <GridItem px={6} py={4} borderRight="1px solid gray" overflow="auto">
                <Outlet />
            </GridItem>
            <GridItem px={6} py={4} position={"relative"}>
                <Box top={5} right={0}>
                    <Profile />
                    <Suggested />
                    <Footer />
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Main