import { Flex, Image, Text, Button } from "@mantine/core";
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from "react";

const WishBox = ({wish}) => {

    const [wishCategory, setWishCategory] = useState();
    const [wishEvent, setWishEvent] = useState()
    const formatPrice = (num) => num.toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2,})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/categories")
                const response2 = await fetch("http://localhost:8000/events")
                if (!response.ok || !response2.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                const data2 = await response2.json()
                setWishCategory(data)
                setWishEvent(data2)
            } catch (error) {
                console.error(`Error fetching url:`, error)
            }
        }
        fetchData()
    }, [])

    return (  
        <Flex direction="column" bg="#F5F4D7" w="17vw" h="37vh" style={{ border: "5px solid #5682B4", borderRadius: "20px"}}>
            <Image w="100%" h="10vw" src={wish.picture} style={{ borderRadius: "15px"}} />
            <Text ml={5} size="sm" c="#5682B4">{wishCategory?.find((category) => category.cid == wish.fk_cid).cname}</Text>
            <Flex c="#5682B4" align="center" justify="center" h="10vh">
                <Text fw={700} ta="center" w="12vw" size="xl">{wish.title}</Text>
            </Flex>
            <Flex c="#5682B4" align="end" justify="space-between" h="10vh" px={10} mb={10}>
                <Text align="center">{wish.isFavorit ? <StarIcon sx={{ fontSize: 30 }} /> : ""}</Text>
                <Button component="a" href={wish.url} target="_blank" c="#D5EAF5"  fz={18} radius={20} w="7.5vw" ta="center" bg="#5682B4">{formatPrice(wish.price)} €</Button>
            </Flex>
        </Flex>
    );
}
 
export default WishBox;