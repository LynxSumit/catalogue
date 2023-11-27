/* eslint-disable react/prop-types */
import {Card as CatalogueCard} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Card({img , title, desc , price}) {
  return (
    <CatalogueCard  sx={{ maxWidth: 345, bgcolor : "#e8e9eb", }}>
      <CardActionArea>
         <CardMedia
          component="img"
          height="100%"
          image={img}
          alt={title}
        /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {desc}
          </Typography>
        </CardContent>
      <CardActions color='primary'>
        <Button size="small"   variant='text' sx={{color : "black", background : "#cfcfcf"}}>
          {price}
        </Button>
      </CardActions>
      </CardActionArea>
    </CatalogueCard>
  );
}