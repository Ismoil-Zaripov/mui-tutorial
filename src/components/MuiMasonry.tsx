import {Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography} from "@mui/material";
import {Masonry} from "@mui/lab";
import ExpandIcon from "@mui/icons-material/ExpandMore";

const MuiMasonry = () => {

    const heights = [78,234,28,56,34,78,92,347,23,298,49,82,33];

    return (
        <Box sx={{ width: 500, minHeight: 400 }}>
            <Masonry
                columns={4}
                spacing={2}
                >
                {heights.map((height, index) => (
                    <Paper
                        sx={{
                            // display: "flex",
                            // justifyContext: "center",
                            // alignItems: "center",
                            // height,
                            border: "1px solid",
                        }}
                    >
                        <Accordion sx={{ minHeight: height }}>
                            <AccordionSummary expandIcon={<ExpandIcon/>}>
                                <Typography>Accordion {index + 1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>Content</AccordionDetails>
                        </Accordion>
                    </Paper>
                ))}
            </Masonry>
        </Box>
    );
}

export default MuiMasonry;