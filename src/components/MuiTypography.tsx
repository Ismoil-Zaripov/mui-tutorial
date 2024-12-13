import {Typography} from "@mui/material";

export const MuiTypography = () => {
    return (
        <>
            <Typography variant={'h1'}> Heading 1</Typography>
            <Typography variant={'h2'}> Heading 2</Typography>
            <Typography variant={'h3'}> Heading 3</Typography>
            <Typography variant={'h4'} component={'h1'} gutterBottom> Heading 4</Typography>
            <Typography variant={'h5'}> Heading 5</Typography>
            <Typography variant={'h6'}> Heading 6</Typography>

            <Typography variant={'subtitle1'}> Subtitle 1</Typography>
            <Typography variant={'subtitle2'}> Subtitle 2</Typography>

            <Typography variant={'body1'}> Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
                el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que
                tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo
                "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos
                paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al
                hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se
                encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas
                veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el
                estilo).</Typography>
            <Typography variant={'body2'}> Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
                el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que
                tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo
                "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos
                paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al
                hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se
                encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas
                veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el
                estilo).</Typography>
        </>
    );
}