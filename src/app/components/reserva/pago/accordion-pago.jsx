import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ChangeInput from "../change-input/change-input";
import { useState } from "react";


function AccordionPago({ person, suite, night, changePrice }) {

    const [totalPerson, setTotalPerson] = useState(person);
    const [typeSuite, setTypeSuite] = useState(suite);
    const [totalNight, setTotalNight] = useState(night);

    const handleChangeSuite =(e)=>{
        changePrice();
    }

    return (
        <Accordion sx={{
            width: '100%',
            boxShadow: 'none',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'none'
            },
            '& .css-1f773le-MuiButtonBase-root-MuiAccordionSummary-root': { padding: '0' }
        }}>
            <AccordionSummary
                expandIcon={<Button variant="outlined" color="error">
                    Editar
                </Button>}

                aria-controls="panel1-content"
                id="panel1-header"
            >
                <h2>
                    {`${totalPerson} Personas, ${suite}, ${totalNight} noches`}
                </h2>
            </AccordionSummary>
            <AccordionDetails className="grid gap-6">
                <div className="flex items-center gap-4">
                    <ChangeInput
                        setValue={setTotalPerson}
                        value={totalPerson}
                        maxValue={6}
                        colorText='var(--principal)'
                        smallIcon
                        changePrice={changePrice}
                    ></ChangeInput>
                    personas
                </div>
                <div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Suite</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Suite"
                            onChange={handleChangeSuite}
                        >
                            <MenuItem value={10}>Suite principal</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex items-center gap-4">
                    <ChangeInput
                        setValue={setTotalNight}
                        value={totalNight}
                        maxValue={6}
                        colorText='var(--principal)'
                        smallIcon
                        changePrice={changePrice}
                    ></ChangeInput>
                    noches
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordionPago;