import { Grid } from "@mantine/core";
import MyWishBox from "./MyWishBox";

const MyWishlist = ({wishes, onSuccess, currentUser}) => {

    return (  
        <Grid mt={10}>
            {wishes?.filter((wish) => wish.fk_uid == currentUser).map((wish) => (
                <Grid.Col span={3}>
                    <MyWishBox wish={wish} onSuccess={onSuccess} owner="true"/>
                </Grid.Col>      
            ))}
        </Grid>
    );
}
 
export default MyWishlist;