import {Box, Tab} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiTabs = () => {

    const [value, setValue] = useState('1');
    const handleChange = (_event: SyntheticEvent, newValue: string) => setValue(newValue);

    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
                    <TabList
                        aria-label={'Tabs example'}
                        textColor={'secondary'}
                        indicatorColor={'secondary'}
                        // centered
                        variant={'scrollable'}
                        scrollButtons={'auto'}

                        onChange={handleChange}>
                        <Tab icon={<FavoriteIcon/>} iconPosition={'start'} label={'Tab one'} value={'1'} />
                        <Tab label={'Tab two'} value={'2'} />
                        <Tab label={'Tab three'} value={'3'} />
                        <Tab label={'Tab four'} value={'4'} />
                        <Tab label={'Tab five'} value={'5'} />
                        <Tab label={'Tab six'} value={'6'} />
                    </TabList>
                </Box>
                <TabPanel value={'1'}>Tab one</TabPanel>
                <TabPanel value={'2'}>Tab two</TabPanel>
                <TabPanel value={'3'}>Tab three</TabPanel>
                <TabPanel value={'4'}>Tab four</TabPanel>
                <TabPanel value={'5'}>Tab five</TabPanel>
                <TabPanel value={'6'}>Tab six</TabPanel>
            </TabContext>
        </Box>
    );
}