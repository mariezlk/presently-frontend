import { Flex, Text, Divider } from "@mantine/core";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Help = () => {
    return (  
        <Flex px={50} py={50} w="100vw">
            <Flex justify="center" w="50vw" direction="column" ta="center">
                <Text c="#5682B4" size="40px" mb={40}>
                    Benötigen Sie Hilfe?
                </Text> 
                <Flex w="100%" justify="center" direction="column" ta="center" align="center"> 
                    <Text w="40%" c="#5682B4" fz={20} mb={40}>
                        Gerne helfen wir Ihnen telefonsich oder auch per E-Mail bei Fragen weiter!
                    </Text>
                    <Flex w="50%" justify="space-between" align="center">
                        <Text c="#5682B4" fz={20} mb={20}><EmailIcon style={{ verticalAlign: 'middle', marginBottom: "4px", marginRight: "10px" }}/>E-Mail:</Text>
                        <Text c="#5682B4" fz={20} mb={20}>presently@web.de</Text>
                    </Flex>
                    <Flex w="50%" justify="space-between">    
                        <Text c="#5682B4" fz={20}><LocalPhoneIcon style={{ verticalAlign: 'middle', marginBottom: "4px", marginRight: "10px" }}/>Telefon:</Text>
                        <Text c="#5682B4" fz={20}>+49 1234 567890</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Divider size={2} color="#5682B4" h="77vh" orientation="vertical" />
            <Flex justify="center" w="50vw" direction="column" ta="center">
                <Text c="#5682B4" size="40px" mb={40}>
                    Einführung
                </Text>  
                <Flex w="100%" justify="center" direction="column" ta="center" align="center"> 
                    <Text w="90%" c="#5682B4" fz={18} mb={40}>
                        1. Erstelle dir ein Konto oder melde dich an, falls du bereits eines hast.
                    </Text>
                    <Text w="90%" c="#5682B4" fz={18} mb={40}>
                        2. Deine eigene Wunschliste findest du über den Reiter "Meine Wünsche".
                    </Text>
                    <Text w="90%" c="#5682B4" fz={18} mb={40}>
                        3. Füge deine Wüsche zu deiner Liste hinzu, um deinen Freunden das Finden eines Geschenks für dich zu vereinfachen.
                    </Text>
                    <Text w="90%" c="#5682B4" fz={18} mb={40}>
                        4. Über den Reiter "Geschenk finden" kann st du nach deinen Freunden suchen und über ihre Wunschliste das ideale Geschenk finden.
                    </Text>
                    <Text w="90%" c="#5682B4" fz={18} mb={40}>
                        5. Durch Clicken auf den jeweiligen Wunsch wirst du direkt auf einen Onlineshop weitergeleitet, der das Produkt vertreibt, insofern ein solcher Link hinterlegt ist.
                    </Text>
                    <Text w="90%" c="#5682B4" fz={18} mb={40}>
                        6. Bitte vergiss nicht den Wunsch als gekauft zu markieren, wenn du entscheiden hast den Wunsch zu verschenken, um Missverständnisse zu vermeiden.
                    </Text>
                </Flex>
            </Flex>       
        </Flex>
    );
}
 
export default Help;