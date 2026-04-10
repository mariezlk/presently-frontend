import { Select } from "@mantine/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SortDropDown = () => {
    return (  
        <Select
            w={250}
            rightSection={<ExpandMoreIcon style={{ color: '#D5EAF5' }}/>}
            placeholder="Sortierung"
            data={['Favoriten', 'Kategorie', 'Events', 'Preis']}
            className="selectSort"
            styles={{
                input: {
                    backgroundColor: '#5682B4',
                    borderColor: '#5682B4',
                    color: "#D5EAF5"
                },
                placeholder: {
                    color: '#D5EAF5',
                },
                dropdown: {
                    backgroundColor: "#FEFDE5",
                    borderColor: '#5682B4',
                    color: '#5682B4',
                }
            }}
        />
    );
}
 
export default SortDropDown;