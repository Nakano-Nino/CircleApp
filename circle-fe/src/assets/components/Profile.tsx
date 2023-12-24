import { Button, Box, Text, Card, Avatar, Flex, Stack, HStack,  } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { API } from "@/config/Api"
import { UserType } from "@/types/UserType"

function Profile() {
    const [profile, setProfile] = useState<UserType>()

    const getProfile = async () => {
        const res = await API.get("/user/1")
        setProfile(res.data)
    }

    useEffect(() => {
        getProfile()
    })

    return (
        <Card bg="blackAlpha.600" p={4}>
            <Text color="white" fontWeight={"semibold"}>My Profile</Text>
            <Box
                pos="relative"
                h="90px"
                mt={3}
                rounded="xl"
                bgImage= {"https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-71061.jpg?t=st=1702965113~exp=1702965713~hmac=9be135954e650cedc65693d8fd8f7d6b5a70d26e882fa30cc3117f0388a74876"}
            >
                <Box
                    pos="absolute"
                    bottom={-6}
                    left={4}
                    p={1}
                    bg="blackAlpha.800"
                    rounded="full"
                >
                    <Avatar size="md" name="Yudha Prastyo" src={profile?.photo_profile} />
                </Box>
            </Box>
            <Flex justify="right" mt={-6}>
                <Button
                    color="white"
                    size="xs"
                    rounded="full"
                    variant="outline"
                    mt={8}
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Edit Profile
                </Button>
            </Flex>

            <Stack spacing={0}>
                <Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
                    ✨{profile?.full_name}✨
                </Text>
                <Text fontSize='xs' color='whiteAlpha.600'>@{profile?.username}</Text>
                <Text fontSize='sm' color='whiteAlpha.800'>{profile?.bio}</Text>
                <HStack fontSize='sm'>
                    <HStack>
                        <Text color='whiteAlpha.800'>100</Text>
                        <Text color='whiteAlpha.600'>Following</Text>
                    </HStack>
                    <HStack>
                        <Text color='whiteAlpha.800'>5000</Text>
                        <Text color='whiteAlpha.600'>Followers</Text>
                    </HStack>
                </HStack>
            </Stack>
        </Card>
    )
}

export default Profile