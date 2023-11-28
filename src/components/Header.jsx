import { CloudUpload, Edit } from '@mui/icons-material'
import { Box, Button, Grid, Input, Link, Modal, Paper,  Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {modifyHeader as changeHeader} from "../reducers/headerSlice"

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const style = {
  position: 'absolute',
  
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap : '2vmax',
  transform: 'translate(-50%, -50%)',
  width: {
    xs : "60%",
    md : "30%"
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Header = () => {
const dispatch = useDispatch()
const {title : headerTitle , subTitle : headersubTitle, background : headerbackground} = useSelector(state => state.header)
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState("");
  const [background, setBackground] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modifyHeader = () => {
  
    
dispatch(changeHeader({title , subTitle, background :  URL.createObjectURL(background)}))
console.log(title ,subTitle , background)
  }

 

  return (
    <Paper
    sx={{
      borderRadius : '0px',
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      mb: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${headerbackground})`,
    }}
  >
    {/* Increase the priority of the hero background image */}
    {<img style={{ display: 'none' }} src={headerbackground}  />}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      }}
    />
    <Grid container>
      <Grid item md={6} >
        <Box
          sx={{
            display : 'flex',
            alignSelf : 'center',
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection : 'column',
            position: 'relative',
            margin: 'auto',           width : '100vw',
            height : '32vh',
           
          }}
        >
        <Box display={'grid'} sx={{placeItems : 'center', gridTemplateColumns : '10fr 1fr'}}  width={"100%"}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
   {headerTitle}
          </Typography>
          <Button sx={{margin : "auto"}}  onClick={handleOpen} variant="subtitle1" to="#">
           <Edit sx={{fontSize : 30}}/>
          </Button>
        </Box>
          <Typography variant="h5" color="inherit" paragraph>
            {headersubTitle}
          </Typography>
          

          
          </Box>
    <Box >
    <Typography sx={{color : "whitesmoke", margin : ".4vmax 1vmax"}} variant="body1" color="initial">mail : abcd@email.com</Typography>
    <Typography sx={{color : "whitesmoke", margin : "1vmax"}} variant="body1" color="initial">phone : 8734823623</Typography>
    </Box>
    
        <Modal

        open={open}
        
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Input placeholder='Title' fullWidth={false} value={title} onChange={e => setTitle(e.target.value)}/>
          <Input placeholder='Sub-Title' value={subTitle} onChange={e => setSubTitle(e.target.value)} id="modal-modal-description" sx={{ mt: 2 }}/>
          <Button sx={{ width : "fit-content", alignSelf : 'center'}} component="label" variant="contained" startIcon={<CloudUpload/>}>
      Upload file
      <VisuallyHiddenInput onChange={e => setBackground(e.target.files[0])} type="file" />
    </Button>
      <Button  onClick={modifyHeader} variant='outlined' color='primary' sx={{color : "#555e68", width : "fit-content", alignSelf : 'center'}}>Change</Button>
      
        </Box>
      </Modal>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default Header
