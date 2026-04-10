import { Badge, Box, Flex, Grid, Text } from "@mantine/core";
import { useState, useEffect } from "react";

const CategoryFilter = ({wishes, addFilter, filterList, user}) => {

    const [categorys, setCategorys] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/categories")
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setCategorys(data)
            } catch (error) {
                console.error(`Error fetching url:`, error)
            }
        }
        fetchData()
    }, [])
    

    return (  
        <Flex direction="column" mb={20}>
            <Text c="#5682B4" fz={17} fw={700} mb={10} style={{cursor: "default"}}>
                Kategorien
            </Text>
            <Grid>
                {categorys?.map((category) => 
                    <Grid.Col span={6} mb={-5}>
                        <Flex justify="space-between" align="center" pl={5} h={20} onClick={() => addFilter("Kategorie", category.cname)} style={{cursor: "pointer", borderRadius: "20px"}}
                              bg={filterList.some((fL) => fL.filterName == "Kategorie" && fL.filterValue == category.cname) ? "#5682B4" : "#5682b400"}>
                            <Text fz={13} c={filterList.some((fL) => fL.filterName == "Kategorie" && fL.filterValue == category.cname) ? "#D5EAF5" : "#5682B4"}>{category.cname}</Text>
                            <Badge fz={10} w={30} bg="#F5F4D7" c="#5682B4"
                                   styles={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                {wishes?.filter((w) => w.fk_uid == user && w.fk_cid == category.cid).length}
                            </Badge>
                        </Flex>
                    </Grid.Col>
                )}
            </Grid>
        </Flex>
    );
}
 
export default CategoryFilter;