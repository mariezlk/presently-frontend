import { Flex, Title, Text, TextInput, Button, Anchor } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

const Register = () => {

    const navigate = useNavigate()

    return (
        <Flex direction="column" h="100vh" w="100vw" justify="center" align="center" bg="#D5EAF5">
            <Flex align="baseline" mb={20}>
                <Title fz={60} fw={500} c="#5682B4">Presently</Title>
                <Title fz={40} fw={500} c="#5682B4">- Schenken, was gewünscht wird</Title>
            </Flex>
            <Flex direction="column" bg="#F5F4D7" mt={20} w="40vw" justify="center" align="center" style={{border: "7px solid #5682B4",boxShadow: "5px 5px 20px #5682B4", backgroundColor: "#FEFDE5", borderRadius: 12, padding: 20}}>
                <Title c="#5682B4" fz={40} fw={500} mt={10} mb={30}>
                    Registrieren
                </Title>
                <Flex w="30vw" justify="space-between" my={20}>
                    <Text fz={20} c="#5682B4">E-Mail:</Text>
                    <TextInput />
                </Flex>
                <Flex w="30vw" justify="space-between" my={20}>
                    <Text fz={20} c="#5682B4">Passwort:</Text>
                    <TextInput />
                </Flex>
                <Flex w="30vw" justify="space-between" my={20}>
                    <Text fz={20} c="#5682B4">Passwort wiederholen:</Text>
                    <TextInput />
                </Flex>
                <Button w="12vw" onClick={() => navigate('/meineWuensche')} bg="#5682B4" mb={20} mt={30} leftSection={<LoginIcon style={{marginRight: 10}}/>}>
                    Account anlegen
                </Button>
                <Anchor onClick={() => navigate("/login")} target="_blank" underline="hover" c="#5682B4" mb={20}>
                    Sie haben schon einen Account?
                </Anchor>
            </Flex>
        </Flex>  
    );
}
 
export default Register;