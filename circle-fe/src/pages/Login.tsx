import FormLogin from "@/features/auth/components/FormLogin";
import { Box } from "@chakra-ui/react"; 

export default function Login() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bg={"blackAlpha.900"}
        >
            <FormLogin />
        </Box>
    );
}
