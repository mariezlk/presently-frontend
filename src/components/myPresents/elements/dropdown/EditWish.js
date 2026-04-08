import { Flex, Title, Button } from "@mantine/core";
import InputRow from "./InputRow";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";

const EditWish = ({ onClose }) => {

    const categoryData = ["Haushalt", "Kleidung", "Kosmetik", "Lebensmittel", "Spielzeug", "Sport", "Technik", "Sonstiges"]
    const eventData = ["Geburtstag", "Hochzeit", "Weihnachten", "Ostern", "Abschluss"]

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [event, setEvent] = useState("");
    const [picture, setPicture] = useState("");
    const [favorit, setFavorit] = useState("");

    const [wishCategory, setWishCategory] = useState();
    const [wishEvent, setWishEvent] = useState()

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

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:8000/wishes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fk_uid: 1,
                    fk_cid: wishCategory?.find((c) => c.cname == category).cid,
                    fk_eid: wishEvent?.find((e) => e.ename == event)?.eid ?? null,      
                    title: title,
                    price: parseFloat(price),
                    isFavorit: favorit,
                    picture: picture,
                    url: link
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            onClose()
        } catch (error) {
            console.error("Error posting wish:", error);
        }
    }

    return (  
        <Flex w="40vw" h="70vh" direction="column" align="center" justify="center">
            <Title c="#5682B4" fz={35} mb={30} mt={-30}>
                Wunsch bearbeiten oder löschen
            </Title>
            <InputRow title="Titel" placeholder="" inputType="text" value={title} onChange={setTitle}/>
            <InputRow title="Link" placeholder="" inputType="text" value={link} onChange={setLink}/>
            <InputRow title="Preis" placeholder="" inputType="text" value={price} onChange={setPrice}/>
            <InputRow title="Kategorie" placeholder="" inputType="select" selectData={categoryData} value={category} onChange={setCategory}/>
            <InputRow title="Event" placeholder="" inputType="select" selectData={eventData} value={event} onChange={setEvent}/>
            <InputRow title="Bild" placeholder="" inputType="text" value={picture} onChange={setPicture}/>
            <InputRow title="Favorit" placeholder="" inputType="check" value={favorit} onChange={setFavorit}/>
            <Flex w="100%" justify="space-between" mt={10} mb={-30}>
                <Button w="49%" h={45} bg="#F5F4D7" c="#5682B4" fz="18px"
                        leftSection={<DeleteIcon />} onClick={handleSubmit}
                >
                    Wunsch löschen
                </Button>
                <Button w="49%" h={45} bg="#5682B4" c="#D5EAF5" fz="18px"
                        leftSection={<EditIcon />} onClick={handleSubmit}
                >
                    Wunsch bearbeiten
                </Button>
            </Flex>
        </Flex>
    );
}
 
export default EditWish;