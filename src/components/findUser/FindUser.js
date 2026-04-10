import { Button, Flex, Text, TextInput, Highlight } from "@mantine/core";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";


const FindUser = ({searchedUser, setSearchedUser}) => {

    const [search, setSearch] = useState("");
    const [userList, setUserList] = useState();

    const filtered = userList?.filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/users")
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setUserList(data)
            } catch (error) {
                console.error(`Error fetching url:`, error)
            }
        }
        fetchData()
    }, [])

    return (  
        <Flex h="90vh" w="100%" justify="center" align="center" direction="column">
            <Text ta="center" mb={50} c="#5682B4" fz="50px" w="30vw" style={{lineHeight: "60px"}}>
                Suche nach
                demjenigen, den du
                beschenken willst:
            </Text> 
            <TextInput  placeholder="Suche..." name="usersearch" w="45vw" size="xl"
                        rightSection={<SearchIcon style={{ color: '#5682B4' }}/>} style={{cursor:"pointer"}}
                        value={search} onChange={(e) => setSearch(e.currentTarget.value)}
                        styles={{
                            input: {
                                backgroundColor: '#F5F4D7',
                                border: '0.5px solid #5682B4',
                                color: "#5682B4",
                                boxShadow: "4px 3px 5px #5682B4",
                            },
                            placeholder: {
                                color: '#5682B4'
                            }
                        }}
            />
            {search.length >= 3 && filtered.map(user => (
                <Button onClick={() => setSearchedUser(user)} w="45vw" size="md" color="#5682B4" bg="#FEFDE5" variant="outline" radius={0}
                        className="searchResultBtn">
                    <Highlight color="indigo" highlight={search}>
                        {user.username}
                    </Highlight>
                </Button>
            ))}
        </Flex>
    );
}
 
export default FindUser;