import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export const MuiCard = () => {

    return (
        <Box width={'300px'}>
            <Card>
                <CardMedia
                    component={'img'}
                    height={'300'}
                    image={'https://picsum.photos/seed/picsum/1500/1500'}
                    alt={'Img'}
                />
                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'div'}>React</Typography>
                    <Typography gutterBottom variant={'body2'} color={'text.secondary'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size={'small'}>Share</Button>
                    <Button size={'small'}>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
}