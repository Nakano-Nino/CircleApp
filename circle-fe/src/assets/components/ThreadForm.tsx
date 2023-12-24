import { API } from "@/config/Api";
import { Avatar, Box, Button, FormControl, HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi"

type Thread = {
	content: string,
	image: string,
	users: number
}

function ThreadForm({ getThread }: {getThread: () => Promise<void>}) {
	const [form, setForm] = useState<Thread>({
		content: "",
		image: "",
		users: 1
	})

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}
	
	async function threadPost() {
		await API.post("/thread", form)
		getThread()
	}

    return (
        <form encType="multipart/form-data">
            <Text color="white" fontWeight="semibold" fontSize="xl" mt="4">Home</Text>
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
							placeholder="What is happening?!"
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
							onClick={threadPost}
                        >
							Post
						</Button>
					</HStack>
				</HStack>
			</FormControl>
		</form>
    )
}

export default ThreadForm