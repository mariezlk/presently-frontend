import { Flex, Image, Text } from "@mantine/core";

const WishBox = ({wish}) => {
    return (  
        <Flex direction="column" bg="#F5F4D7" w="17vw" h="37vh" style={{ border: "5px solid #5682B4", borderRadius: "20px"}}>
            <Image w="100%" h="10vw" src={wish.picture} style={{ borderRadius: "15px"}} />
            <Text ml={5} size="sm" c="#5682B4">{wish.fk_cid}</Text>
            <Flex c="#5682B4" align="center" justify="center" h="10vh">
                <Text fw={700} ta="center" w="12vw" size="xl">{wish.title}</Text>
            </Flex>
        </Flex>
    );
}
 
export default WishBox;