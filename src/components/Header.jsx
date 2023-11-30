import { CloudUpload, Edit } from '@mui/icons-material'
// import { Box, Button, Grid, Input,  Modal, Paper,  Typography, styled } from '@mui/material'
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {modifyHeader as changeHeader} from "../reducers/headerSlice"
import { Box, Button, DialogContent, DialogTitle, FormControl, FormLabel, Grid, Input, Modal, ModalDialog, Sheet, Stack, SvgIcon, Typography } from '@mui/joy';
import {styled} from '@mui/joy';

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
setOpen(false);

  }

 

  return (
    <Sheet
    sx={{
      borderRadius : '0px',
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      mb: 1,
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${headerbackground})`,
    }}
  >
   
   
      <Grid item   >
      <Button sx={{display : {xs : 'none', md : 'block'},  float : 'inline-end'}}   onClick={handleOpen} variant="subtitle1" to="#">
           <Edit color='action' sx={{fontSize : 30}}/>
          </Button>
    <Grid container>
        <Box
          sx={{
          display : 'flex' ,
    justifyContent : 'center',
    width : '100vw',
    flexDirection : 'column',
textAlign : 'center',
marginTop : '2vmax'
          }}
        >

        
          <Typography level="h1" variant="h" color='warning' gutterBottom>
   {headerTitle}
          </Typography>
          
        
          <Typography textOverflow={'clip'} sx={{ wordWrap : 'break-word'}} level="h3" color="neutral" paragraph>
            {headersubTitle}
          </Typography>
          

          
          </Box>
    <Box display={'flex'} justifyContent={ 'space-between'} width={"100%"}>
    <Box sx={{margin : '1vmax'}}>
    <Typography sx={{color : "", }} variant="body1" color="danger">mail : abcd@email.com</Typography>
    <Typography sx={{color : "",}} variant="body1" color="danger">phone : 8734823623</Typography>

    </Box>
    <Button sx={{display : {xs : 'block', md : 'none'},  float : 'inline-end'}}   onClick={handleOpen} variant="subtitle1" to="#">
           <Edit color='error' sx={{fontSize : 30}}/>
          </Button>
    </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Update Header</DialogTitle>
          <DialogContent>Fill data to update Header</DialogContent>
          <form
            onSubmit={modifyHeader}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input color='neutral' autoFocus placeholder='Title' fullWidth={false} value={title} onChange={e => setTitle(e.target.value)}/>

              </FormControl>
              <FormControl>
                <FormLabel>SubTitle</FormLabel>
                <Input color='neutral' autoFocus placeholder='Sub-Title' value={subTitle} onChange={e => setSubTitle(e.target.value)} id="modal-modal-description" sx={{ mt: 2 }}/>
       
              </FormControl>
              <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      variant="outlined"
      color="neutral"
      startDecorator={
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </SvgIcon>
      }
    >
      Upload a file
      <VisuallyHiddenInput put onChange={e => setBackground(e.target.files[0])} type="file" accept='img/*' />
    </Button>
              <Button color='neutral' type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      </Grid>
    </Grid>
  </Sheet>
  )
}

export default Header

// import React from 'react'

// const Header = () => {
//   return (
    
//   )
// }

// export default Header

