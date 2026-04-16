import { Flex, Button, Text, Divider } from "@mantine/core";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return ( 
        <Flex h="10vh" bg="#5682B4" align="center" justify="space-between" style={{ position: "sticky", top: 0, zIndex: 100, alignSelf: "flex-start" }}>
            <Flex> 
                <Button h={45} w={175} radius={30} mx={30} 
                        c={location.pathname.includes("/meineWuensche") ? "#5682B4" : "#D5EAF5"}
                        bg={location.pathname.includes("/meineWuensche") ? "#D5EAF5" : "#5682B4"}
                        onClick={() => navigate(`/meineWuensche`)}
                >
                    Meine Wünsche
                </Button>
                <Button h={45} w={175} radius={30}
                        c={location.pathname.includes("/geschenkeFinden") ? "#5682B4" : "#D5EAF5"}
                        bg={location.pathname.includes("/geschenkeFinden") ? "#D5EAF5" : "#5682B4"}
                        onClick={() => navigate(`/geschenkeFinden`)}
                >
                    Geschenke finden
                </Button>
            </Flex>
            <Flex>
                <Text size="40px" c="#F5F4D7">
                    Presently
                </Text>
                <Flex direction="column" align="center" ml={10}>
                    <Text size="20px" c="#F5F4D7">
                        Schenken, was
                    </Text>
                    <Text size="20px" c="#F5F4D7">
                         gewünscht wird
                    </Text>
                </Flex>
            </Flex>
            <Flex>
                <Button variant="transparent" c="#D5EAF5" mx={5}  
                        onClick={() => navigate(`/help`)}
                >
                    <QuestionMarkIcon sx={{ fontSize: 35 }} />
                </Button>
                <Divider size={2} color="#D5EAF5" orientation="vertical" />
                <Button variant="transparent" c="#D5EAF5" mx={5}  
                        onClick={() => navigate(`/accountDetails`)}
                >
                    <PermIdentityIcon sx={{ fontSize: 40 }} />
                </Button>
            </Flex>
        </Flex>
    );
}
 
export default Navbar;