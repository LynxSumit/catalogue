import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { Menu as MenuIcon } from '@mui/icons-material';
import {   Category } from '@mui/icons-material';
export default function Navbar() {
  return (
    <Box
      sx={{
        bgcolor : '#FFF',
        display: 'flex',
        flexGrow: 1,
        width : '100vw',
        flexDirection : 'row-reverse',
        justifyContent: 'space-between',
        height : '88px',
        boxShadow : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
   
      }}
    >
      <Stack
      
        justifyContent="center"
        alignItems="center"
        
        spacing={1}
        sx={{ display:  'flex',margin : '2vmax',   }}
      >
    
      <Category  sx={{color : '#000', height : '34px', width : '34px'}}/>
       
       
      </Stack>
      

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
       
        
        <Dropdown  >
  <MenuButton
  sx={{margin : "2vmax"}}
    slots={{ root: IconButton }}
    slotProps={{ root: { variant: 'outlined', color: 'secondary',  } }}
  >
    <MenuIcon sx={{height : '34px', width : '34px',  color : '#000'}}   />
  </MenuButton>
  <Menu sx={{margin : '2vmax'}} >
    <MenuItem>Profile</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
</Dropdown>
        
      
      </Box>
    </Box>
  );
}
