import { Box, Flex, Text } from "@mantine/core";
import MyWishlist from "./elements/MyWishlist";
import SortDropDown from "./elements/SortDropDown";
import FilterBox from "./elements/FilterBox";

const MyPresents = () => {
    return (  
        <Flex justify="space-between" h="100%">
            <Box w="80vw" mx="30px" my="15px">
                <Flex justify="space-between">
                    <Text c="#5682B4" size="40px">
                        Meine Wünsche:
                    </Text> 
                    <SortDropDown />   
                </Flex>
                <MyWishlist />
            </Box>
            <FilterBox />
        </Flex>
    );
}
 
export default MyPresents;