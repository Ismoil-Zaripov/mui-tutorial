import {Box, Divider, Paper, Stack} from "@mui/material";
import React from "react";

const Grid = React.lazy(() => import("@mui/material/Grid2"))

export const MuiLayout = () => {

    return (
        <Paper sx={{ padding: '32px' }} elevation={4}>
            <Stack
                sx={{ border: '1px solid' }}
                direction={'row'}
                divider={<Divider orientation={'vertical'} flexItem />}
                spacing={2}>
                <Box
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        height: "100px",
                        width: "100px",
                        padding: "16px",
                        "&:hover": {
                            backgroundColor: "primary.light",
                        }
                    }}
                >
                    Layout
                </Box>
                <Box
                    display={'flex'}
                    width={'100px'}
                    height={'100px'}
                    bgcolor={'success.light'}
                    p={2}
                >
                    Layout #2
                </Box>
            </Stack>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid
                        py={2}
                        key={index}
                        size={{ xs: 12, sm: 6, md: 3 }}
                    >
                        <Box
                            bgcolor={'success.light'}
                            p={2}
                        >{index + 1}</Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}