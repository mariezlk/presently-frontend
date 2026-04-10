import { Flex, Text, Badge } from "@mantine/core";
import { useState, useEffect } from "react";

const EventFilter = ({wishes, addFilter, filterList, user}) => {

    const [events, setEvents] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/events")
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setEvents(data)
            } catch (error) {
                console.error(`Error fetching url:`, error)
            }
        }
        fetchData()
    }, [])

    return (  
        <Flex direction="column">
            <Text c="#5682B4" fz={17} fw={700} mb={10} style={{cursor: "default"}}>
                Events
            </Text>
            <Flex  justify="center">
                <Flex direction="column" w="50%">
                    {events?.map((event) => 
                        <Flex justify="space-between" mb={15} pl={5} onClick={() => addFilter("Event", event.ename)} style={{cursor: "pointer", borderRadius: "20px"}}
                              bg={filterList.some((fL) => fL.filterName == "Event" && fL.filterValue == event.ename) ? "#5682B4" : "#5682b400"}
                        >
                            <Text fz={13} c={filterList.some((fL) => fL.filterName == "Event" && fL.filterValue == event.ename) ? "#D5EAF5" : "#5682B4"}>
                                {event.ename}
                            </Text>
                            <Badge fz={10} w={30} bg="#F5F4D7" c="#5682B4"
                                    styles={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                {wishes?.filter((w) => w.fk_uid == user && w.fk_eid == event.eid).length}
                            </Badge>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
 
export default EventFilter;