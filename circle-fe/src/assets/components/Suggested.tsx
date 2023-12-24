import { Avatar, Card, Text, HStack, VStack, Button } from "@chakra-ui/react"

function Suggested() {
    return (
        <Card bg="blackAlpha.600" p={4} mt={3}>
            <Text color="white" fontWeight="semibold">Suggested for you</Text>
            <HStack spacing={3} mt={3} justify="space-between">
                <HStack>
                    <Avatar size="sm" name="Yudha Prastyo" src="https://bit.ly/sage-adebayo" />
                    <VStack spacing={0} align={"start"}>
                        <Text fontSize="sm" fontWeight="semibold" color="white">
                        Yudha Prastyo
                        </Text>
                        <Text fontSize='xs' color='whiteAlpha.600'>@NoobClearZ</Text>
                    </VStack>
                </HStack>
                <Button
                    color="white"
                    size="xs"
                    rounded="full"
                    variant="outline"
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Follow
                </Button>
            </HStack>
        </Card>
    )
}

export default Suggested