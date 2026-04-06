import { Box, Button, Popover } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import AddWish from "./dropdown/AddWish";

const FilterBox = () => {
    return (  
        <Box w="23vw" h="90vh" bg="#D5EAF5" px="30px" py="15px">
            <Popover withOverlay overlayProps={{ zIndex: 10, blur: '5px' }} zIndex={11}>
                <Popover.Target>
                    <Button h="10%" fz={20} w="100%" bg="#F5F4D7" c="#5682B4" radius={15} leftSection={<AddIcon sx={{alignItems: "center", fontSize: 35 }} />}>
                        Wunsch hinzufügen
                    </Button>
                </Popover.Target>
                <Popover.Dropdown style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                                          border: "7px solid #5682B4", backgroundColor: "#FEFDE5", borderRadius: 12, padding: 20}}>
                    <AddWish />
                </Popover.Dropdown>
            </Popover>
        </Box>
    );
}
 
export default FilterBox;