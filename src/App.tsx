// import {MuiTypography} from "./components/MuiTypography.tsx";
// import {MuiButton} from "./components/MuiButton.tsx";
// import {MuiTextField} from "./components/MuiTextField.tsx";
// import {MuiSelect} from "./components/MuiSelect.tsx";
// import {MuiRadioButton} from "./components/MuiRadioButton.tsx";
// import {MuiCheckbox} from "./components/MuiCheckbox.tsx";
// import {MuiSwitch} from "./components/MuiSwitch.tsx";
// import {MuiRating} from "./components/MuiRating.tsx";
// import {MuiAutoComplete} from "./components/MuiAutoComplete.tsx";
// import {MuiLayout} from "./components/MuiLayout.tsx";
// import {MuiCard} from "./components/MuiCard.tsx";
// import {MuiAccordion} from "./components/MuiAccordion.tsx";
// import {MuiImageList} from "./components/MuiImageList.tsx";
// import {MuiNavbar} from "./components/MuiNavbar.tsx";
// import {MuiBreadcrumbs} from "./components/MuiBreadcrumbs.tsx";
// import {MuiDrawer} from "./components/MuiDrawer.tsx";
// import {MuiSpeedDial} from "./components/MuiSpeedDial.tsx";
// import {MuiBottomNavigation} from "./components/MuiBottomNavigation.tsx";
// import {MuiAvatar} from "./components/MuiAvatar.tsx";
// import {MuiBadge} from "./components/MuiBadge.tsx";
// import {MuiList} from "./components/MuiList.tsx";
// import {MuiChip} from "./components/MuiChip.tsx";
// import {MuiTooltip} from "./components/MuiTooltip.tsx";
// import {MuiTable} from "./components/MuiTable.tsx";
// import {MuiAlert} from "./components/MuiAlert.tsx";
// import {MuiSnackbar} from "./components/MuiSnackbar.tsx";
// import {MuiDialog} from "./components/MuiDialog.tsx";
// import {MuiProgress} from "./components/MuiProgress.tsx";
// import {MuiSkeleton} from "./components/MuiSkeleton.tsx";
// import {MuiLoadingButton} from "./components/MuiLoadingButton.tsx";
// import {MuiPicker} from "./components/MuiPicker.tsx";
// import {MuiTabs} from "./components/MuiTabs.tsx";
// import MuiTimeline from "./components/MuiTimeline.tsx";

import {LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb'
import MuiMasonry from "./components/MuiMasonry.tsx";

export const App = () => {

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
                {/*<MuiTypography/>*/}
                {/*<MuiButton/>*/}
                {/*<MuiTextField/>*/}
                {/*<MuiSelect/>*/}
                {/*<MuiRadioButton/>*/}
                {/*<MuiCheckbox/>*/}
                {/*<MuiSwitch/>*/}
                {/*<MuiRating/>*/}
                {/*<MuiAutoComplete/>*/}
                {/*<MuiLayout/>*/}
                {/*<MuiCard/>*/}
                {/*<MuiAccordion/>*/}
                {/*<MuiImageList/>*/}
                {/*<MuiNavbar/>*/}
                {/*<MuiBreadcrumbs/>*/}
                {/*<MuiDrawer/>*/}
                {/*<MuiSpeedDial/>*/}
                {/*<MuiBottomNavigation/>*/}
                {/*<MuiAvatar/>*/}
                {/*<MuiBadge/>*/}
                {/*<MuiList/>*/}
                {/*<MuiChip/>*/}
                {/*<MuiTooltip/>*/}
                {/*<MuiTable/>*/}
                {/*<MuiAlert/>*/}
                {/*<MuiSnackbar/>*/}
                {/*<MuiDialog/>*/}
                {/*<MuiProgress/>*/}
                {/*<MuiSkeleton/>*/}
                {/*<MuiLoadingButton/>*/}
                {/*<MuiPicker/>*/}
                {/*<MuiTabs/>*/}
                {/*<MuiTimeline/>*/}
                <MuiMasonry/>
            </LocalizationProvider>
        </>
    );
}