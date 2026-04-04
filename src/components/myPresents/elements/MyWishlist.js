import { Grid } from "@mantine/core";
import { useState, useEffect } from "react";
import WishBox from "./WishBox";

const MyWishlist = () => {

    const [wishes, setWishes] = useState();
    const user = 1

    useEffect(() => {
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
        fetchData()
    }, [])

    console.log(wishes)

    return (  
        <Grid mt={30}>
            {wishes?.filter((wish) => wish.fk_uid == user).map((wish) => (
                <Grid.Col span={3}>
                    <WishBox wish={wish}/>
                </Grid.Col>      
            ))}
        </Grid>
    );
}
 
export default MyWishlist;