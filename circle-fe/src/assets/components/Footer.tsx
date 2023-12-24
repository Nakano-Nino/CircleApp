import { Text, Card } from "@chakra-ui/react"
function Footer() {
    return (
        <Card bg="blackAlpha.600" p={4} mt={3}>
            <Text color="white" fontWeight="semibold" fontSize={"sm"}>Developed by Yudha Prastyo</Text>
            <Text color="whiteAlpha.600" fontSize={"xs"}>Powered by Dumbways Indonesia</Text>
        </Card>
    )
}

export default Footer