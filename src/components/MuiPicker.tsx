import {Stack} from "@mui/material";
import {useState} from "react";
import {DatePicker, StaticDateTimePicker, StaticTimePicker} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
import dayjs from "dayjs";

export const MuiPicker = () => {

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>();
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>();

    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker
                label={'Date picker'}
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />
            <StaticTimePicker
                defaultValue={dayjs('2022-04-17T15:30')}    
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
            />
            <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </Stack>
    )
}