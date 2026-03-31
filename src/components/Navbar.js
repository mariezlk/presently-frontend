import { Flex, Button, Text, Box } from "@mantine/core";


const Navbar = () => {
    return ( 
        <Flex h={80} bg="#5682B4" align="center" justify="space-between">
            <Flex>
                <Button h={45} w={175} mx={30} bg="#D5EAF5" c="#5682B4" radius={30}>
                    Meine Wünsche
                </Button>
                <Button h={45} w={175} bg="#D5EAF5" c="#5682B4" radius={30}>
                    Geschenke finden
                </Button>
            </Flex>
            <Flex>
                <Text size="40px" c="#F5F4D7">
                    Presently
                </Text>
                <Flex direction="column" align="center" ml={10}>
                    <Text size="20px" c="#F5F4D7">
                        schenken was 
                    </Text>
                    <Text size="20px" c="#F5F4D7">
                        gewünscht wird
                    </Text>
                </Flex>
            </Flex>
            <Flex>
            </Flex>
        </Flex>
    );
}
 
export default Navbar;