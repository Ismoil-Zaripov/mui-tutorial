import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {

    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label={'breadcrumb'}
                separator={<NavigateNextIcon fontSize={'small'} />}
                maxItems={2}
                // itemsAfterCollapse={2}
                itemsBeforeCollapse={2}
            >
                <Link underline={'hover'} href={'#'}>Home</Link>
                <Link underline={'hover'} href={'#'}>Catalog</Link>
                <Link underline={'hover'} href={'#'}>Assertions</Link>
                <Link underline={'hover'} href={'#'}>Images</Link>
                <Link underline={'hover'} href={'#'}>2024</Link>
                <Link underline={'hover'} href={'#'}>11</Link>
                <Typography>19</Typography>
            </Breadcrumbs>
        </Box>
    );
}