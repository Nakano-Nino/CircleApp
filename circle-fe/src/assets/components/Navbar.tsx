import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate(`/`)
    }

    return (
        <Stack h="full" justify="space-between" position={"fixed"} >

            <Box width="100%">
            <Box marginLeft={10}>
            <Text fontWeight={'bold'} color={'green'} fontSize={50}>circle</Text>

                <Stack mt={3} spacing={6}>

                    <HStack cursor="pointer" color="white" onClick={handleNavigate}>
                        <AiOutlineHome size={25} />
                        <Text fontSize="sm  ">Home</Text>
                    </HStack>
                    <HStack cursor="pointer" color="white">
                        <TbUserSearch size={25} />
                        <Text fontSize="sm  ">Search</Text>
                    </HStack>
                    <HStack cursor="pointer" color="white">
                        <AiOutlineHeart color="transparant" size={25} />
                        <Text fontSize="sm  ">Follows</Text>
                    </HStack>
                    <HStack cursor="pointer" color="white">
                        <AiOutlineUser size={25} />
                        <Text fontSize="sm  ">Profile</Text>
                    </HStack>

                    <Button size='sm' rounded="full" colorScheme="whatsapp" marginRight={10}>
                        Create Post
                    </Button>
                    
                </Stack>
            </Box>
            </Box>

            <HStack cursor="pointer" color="white" marginLeft={10} marginTop={"auto"} marginBottom={7}>
                        <BiLogOut size={25} />
                        <Text fontSize="sm  ">Logout</Text>
            </HStack>
        </Stack>
    );
}

export default Navbar;