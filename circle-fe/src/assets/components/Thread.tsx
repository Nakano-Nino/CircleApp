import { ThreadType } from "@/types/ThreadType"
import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { BsDot } from "react-icons/bs"
import { useNavigate, useParams } from 'react-router-dom'
import { API } from "@/config/Api"

function Thread(props: ThreadType) {
    const [isLiked, setIsLiked] = useState(false)
    const [repliesCount, setRepliesCount] = useState(0)
    const navigate = useNavigate();
    function handleNavigate() {
        navigate(`/thread/${props.id}`)
    }

    const handleLike = async () => {
        setIsLiked(!isLiked)
    }

    const getRepliesCount = async () => {
        const res = await API.get(`/replies`)
        setRepliesCount(res.data.length)
    }

    useEffect(() => {
        getRepliesCount()
    })

    return (
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
                        {props.users.full_name}
                        <Text fontWeight="light" textAlign="justify" display="flex" color="whiteAlpha.600">
                            @{props.users.username} <BsDot color="gray" size={24} />
                            <Text>{props.created_at}</Text>
                        </Text>
                    </Text>
                </HStack>

                <Text fontSize="xs" color="whiteAlpha.800" fontWeight='light' mb={2} onClick={handleNavigate} cursor="pointer">
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
                        {isLiked ? <AiFillHeart size={20} color="red" /> : <AiOutlineHeart size={20} />}
                        <Text fontSize="sm" color="whiteAlpha.600">
                            20
                        </Text>
                    </HStack>

                    <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
                        <BiCommentDetail size={20} />
                        <Text fontSize="sm" color="whiteAlpha.600">
                            {repliesCount} Replies
                        </Text>
                    </HStack>
                </HStack>

            </Box>

        </Flex>
    )

}

export default Thread