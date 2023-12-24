import { Avatar, Box, Button, FormControl, HStack, Input, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BiImageAdd } from "react-icons/bi"
import {API} from "@/config/Api"

type Replies = {
	content: string,
	image: string,
	users: number,
	threads: number
}

function ReplyForm({ getReplies }: {getReplies: () => Promise<void>}) {
	const params = useParams()
	const [form, setForm] = useState<Replies>({
		content: "",
		image: "",
		users: 2,
		threads: Number(params.id)
	})

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}

	async function replyPost() {
		await API.post("/replies", form)
		getReplies()
	}

	console.log(form);
	

    return (
        <form encType="multipart/form-data">
			<FormControl>
				<HStack
					justify="space-between"
					mb={15}
					borderBottom={"1px solid gray"}
					p={5}>
					<HStack w={"full"} ml={-5}>
						<Avatar
							size="sm"
							mr={2}
							name="Yudha Prastyo"
							src="https://bit.ly/sage-adebayo"
						/>
						<Input
							variant="unstyled"
							color="whiteAlpha.400"
							placeholder="Type your reply!"
							_focus={{ color: "white" }}
							name="content"
							onChange={handleChange}  
						/>
					</HStack>
					<HStack>
						<Box cursor="pointer">
							<BiImageAdd size={25} color="green" />
							<Input
								type="file"
								name="image"
								style={{ display: "none" }}
							/>
						</Box>
						<Button
							colorScheme="whatsapp"
							size="xs"
							px={3}
							rounded="full"
							onClick={replyPost}
                        >
							Reply
						</Button>
					</HStack>
				</HStack>
			</FormControl>
		</form>
    )
}

export default ReplyForm