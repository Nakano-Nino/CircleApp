import { ThreadType } from "@/types/ThreadType"
import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { BsDot } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

function ThreadsDetail(props: ThreadType) {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate(`/thread/${props.id}`)
    }

    const [ like, setLike ] = useState(false)

    function handleLike() {
        setLike(!like)
    }
    
    return(
        <Flex gap={3} borderBottom='1px solid gray' mt={3}>

            <Avatar size="sm" src="https://bit.ly/sage-adebayo" />

            <Box mb={4} onClick={handleNavigate}>
                <HStack>
                    <Text
                        display="flex"
                        gap={1}
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                        cursor='pointer'
                    >
                        {props.users.full_name}
                        <Text fontWeight="light" textAlign="justify" display="flex" color="whiteAlpha.600">
                            @{props.users.username} <BsDot color="gray" size={24} />
                            <Text>{props.created_at}</Text>
                        </Text>
                    </Text>
                </HStack>

                <Text fontSize="xl" color="whiteAlpha.800" fontWeight='light' mb={2}>
                    {props.content}
                </Text>

                {/* {image && <Image src={image} />} */}

                <HStack spacing={6}>
                    <HStack
                        onClick={handleLike}
                        cursor="pointer"
                        color="whiteAlpha.600"
                        mt={2}
                    >
                        {like ? <AiFillHeart size={20} color="red"/> : <AiOutlineHeart size={20} />}
                        <Text fontSize="sm" color="whiteAlpha.600">
                            40
                        </Text>
                    </HStack>

                    <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
                        <BiCommentDetail size={20} />
                        <Text fontSize="sm" color="whiteAlpha.600">
                            30 Replies
                        </Text>
                    </HStack>
                </HStack>

            </Box>

        </Flex>
    )

}

export default ThreadsDetail