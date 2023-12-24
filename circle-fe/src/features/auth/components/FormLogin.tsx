import { FormControl, Input, Text, Button, Box } from "@chakra-ui/react"
import { FormLoginHook } from "../hooks/FormLoginHook"

export default function FormLogin() {
    const { handleChange, handleLogin } = FormLoginHook()

    return (
        <FormControl
            isRequired
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            width={350}
            color={"white"}
        >
            <Text fontWeight={"bold"} fontSize={"40"} color={"green"} mb={-5}>circle</Text>
            <Text fontWeight={"bold"} fontSize={"20"}>Login to Circle</Text>
            <Input placeholder="Email/Username*" name="username" onChange={handleChange}/>
            <Input placeholder="Password*" name="password" type="password" onChange={handleChange}/>
            <Box display="flex" justifyContent={"flex-end"}>
				<Text fontSize={"sm"}>Forgot password?</Text>
			</Box>
            <Button
				backgroundColor={"green"}
				colorScheme="green"
				color={"white"}
                borderRadius={"full"}
                onClick={handleLogin}    
            >
				Login
			</Button>
            <Text fontSize={"sm"}>Don't have an account yet?</Text>
        </FormControl>
    )
}