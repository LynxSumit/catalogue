import {Card,  Chip } from '@mui/joy';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { useState } from 'react';

export default function CARD({img,title,desc,price}) {
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };


  return (
    <Card onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}  sx={{ minHeight: '280px', width: 'auto' }}>
   
     
      <CardCover>
        <img
        
        style={{height : '100%'}}
          src={img}
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{display : 'flex', justifyContent: 'flex-end', flexDirection : 'column' }}>
      <Chip sx={{}}>Price : {price}</Chip>

        <Typography level="body-md" textColor="#fff">
        {title}
        </Typography>
        {isMouseOver && 
        <Typography
        sx={{transition : 'ease-in', transitionDuration : '.8s', msTransitionProperty : 'all'}}
        level='body-sm'
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {desc}
        </Typography>
     }
      </CardContent>
    </Card>
  );
}
