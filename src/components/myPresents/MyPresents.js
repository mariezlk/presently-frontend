import { Box, Flex, Text } from "@mantine/core";
import MyWishlist from "./elements/MyWishlist";
import SortDropDown from "./elements/SortDropDown";
import FilterBox from "./elements/FilterBox";
import { useState, useEffect } from "react";
import FilterList from "./elements/FilterList";

const MyPresents = () => {

    const [wishes, setWishes] = useState();
    const [filterList, setFilterList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/wishes")
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setWishes(data)
        } catch (error) {
            console.error(`Error fetching url:`, error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (  
        <Flex justify="space-between" h="100%">
            <Box w="80vw" mx="30px" my="15px">
                <Flex justify="space-between">
                    <Text c="#5682B4" size="40px" mb={20}>
                        Meine Wünsche:
                    </Text> 
                    <SortDropDown />   
                </Flex>
                {filterList.length > 0 && <FilterList filterList={filterList}/>}
                <MyWishlist wishes={wishes} onSuccess={fetchData}/>
            </Box>
            <FilterBox wishes={wishes} onSuccess={fetchData} filterList={filterList} setFilterList={setFilterList}/>
        </Flex>
    );
}
 
export default MyPresents;