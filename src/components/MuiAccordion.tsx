import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandIcon from "@mui/icons-material/ExpandMore";
import {useState} from "react";

export const MuiAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (isExpanded: boolean, panel: string) => setExpanded(isExpanded ? panel : false)

    return (
        <>
            <Accordion
                expanded={expanded === 'panel_1'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel_1')}
            >
                <AccordionSummary
                    id={'panel_header_1'}
                    aria-controls={'panel_content_1'}
                    expandIcon={<ExpandIcon/>}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel_2'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel_2')}
            >
                <AccordionSummary
                    id={'panel_header_2'}
                    aria-controls={'panel_content_2'}
                    expandIcon={<ExpandIcon/>}
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel_3'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel_3')}
            >
                <AccordionSummary
                    id={'panel_header_3'}
                    aria-controls={'panel_content_3'}
                    expandIcon={<ExpandIcon/>}
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </>
    );
}