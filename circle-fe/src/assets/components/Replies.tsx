import { RepliesType, ThreadType } from "@/types/ThreadType"
import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { BsDot } from "react-icons/bs"

function Replies(props: RepliesType) {
    const [ like, setLike ] = useState(false)

    function handleLike() {
        setLike(!like)
    }

    
    
    return(
        <Flex gap={3} borderBottom='1px solid gray' mt={3}>

            <Avatar size="sm" src="https://bit.ly/sage-adebayo" />

            <Box mb={4}>
                <HStack>
                    <Text
                        display="flex"
                        gap={1}
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                        cursor='pointer'
                    >
                        {props.users?.full_name}
                        <Text fontWeight="light" textAlign="justify" display="flex" color="whiteAlpha.600">
                            @{props.users?.username} <BsDot color="gray" size={24} />
                            <Text>{props?.created_at}</Text>
                        </Text>
                    </Text>
                </HStack>

                <Text fontSize="xs" color="whiteAlpha.800" fontWeight='light' mb={2}>
                    {props?.content}
                </Text>
            </Box>

        </Flex>
    )

}

export default Replies