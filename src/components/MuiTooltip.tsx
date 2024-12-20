import {IconButton, Tooltip} from "@mui/material";
import {Delete} from "@mui/icons-material";

export const MuiTooltip = () => {
    return (
        <Tooltip
            title={'Delete'}
            placement={'right'}
            arrow
            enterDelay={500}
            leaveDelay={200}
        >
            <IconButton>
                <Delete color={'error'} />
            </IconButton>
        </Tooltip>
    );
}