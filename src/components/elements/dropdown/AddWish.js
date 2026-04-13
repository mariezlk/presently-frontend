import { Flex, Title, Button } from "@mantine/core";
import InputRow from "./InputRow";
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";

const AddWish = ({ onClose, onSuccess }) => {

    const categoryData = ["Haushalt", "Kleidung", "Kosmetik", "Lebensmittel", "Spielzeug", "Sport", "Technik", "Sonstiges"]
    const eventData = ["Geburtstag", "Hochzeit", "Weihnachten", "Ostern", "Abschluss"]

    const [errors, setErrors] = useState({});

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [event, setEvent] = useState("");
    const [picture, setPicture] = useState("");
    const [favorit, setFavorit] = useState("");

    const [wishCategory, setWishCategory] = useState();
    const [wishEvent, setWishEvent] = useState();

    const validate = () => {
        const newErrors = {};
        if (!title) newErrors.title = "Titel ist erforderlich";
        if (!price) newErrors.price = "Preis ist erforderlich";
        if (isNaN(parseFloat(price))) newErrors.price = "Preis muss eine Zahl sein";
        if (!category) newErrors.category = "Kategorie ist erforderlich";
        if (!link) newErrors.link = "Link ist erforderlich";
        return newErrors;
    }

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
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            const response = await fetch("http://localhost:8000/wishes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fk_uid: 1, //anpassen bei backend implement
                    fk_cid: wishCategory?.find((c) => c.cname == category).cid,
                    fk_eid: wishEvent?.find((e) => e.ename == event)?.eid ?? null,      
                    title: title,
                    price: parseFloat(price),
                    isFavorit: favorit,
                    bought: false,
                    picture: picture,
                    url: link
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            onSuccess()
            onClose()
        } catch (error) {
            console.error("Error posting wish:", error);
        }
    }

    return (  
        <Flex w="40vw" h="70vh" direction="column" align="center" justify="center">
            <Title c="#5682B4" fz={35} mb={30} mt={-30}>
                Wunsch hinzufügen
            </Title>
            <InputRow title="Titel*" inputType="text" value={title} onChange={setTitle} error={errors.title}/>
            <InputRow title="Link*" inputType="text" value={link} onChange={setLink} error={errors.link}/>
            <InputRow title="Preis*" inputType="text" value={price} onChange={setPrice} error={errors.price}/>
            <InputRow title="Kategorie*" inputType="select" selectData={categoryData} value={category} onChange={setCategory} error={errors.category}/>
            <InputRow title="Event" inputType="select" selectData={eventData} value={event} onChange={setEvent}/>
            <InputRow title="Bild" inputType="text" value={picture} onChange={setPicture}/>
            <InputRow title="Favorit" inputType="check" value={favorit} onChange={setFavorit}/>
            <Flex w="100%" justify="center" mt={10} mb={-30}>
                <Button w="49%" h={45} bg="#5682B4" c="#D5EAF5" fz="18px"
                        leftSection={<AddIcon />} onClick={handleSubmit}
                >
                    Wunsch hinzufügen
                </Button>
            </Flex>
        </Flex>
    );
}
 
export default AddWish;