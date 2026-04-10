import { Grid } from "@mantine/core";
import WishBox from "./WishBox";

const Wishlist = ({wishes, onSuccess}) => {
    return (  
        <Grid mt={10}>
            {wishes?.map((wish) => (
                <Grid.Col span={3}>
                    <WishBox wish={wish} onSuccess={onSuccess}/>
                </Grid.Col>      
            ))}
        </Grid>
    );
}
 
export default Wishlist;