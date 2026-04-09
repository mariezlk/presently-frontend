import { Grid } from "@mantine/core";
import WishBox from "./WishBox";

const MyWishlist = ({wishes, onSuccess}) => {

    const user = 1

    return (  
        <Grid mt={10}>
            {wishes?.filter((wish) => wish.fk_uid == user).map((wish) => (
                <Grid.Col span={3}>
                    <WishBox wish={wish} onSuccess={onSuccess}/>
                </Grid.Col>      
            ))}
        </Grid>
    );
}
 
export default MyWishlist;