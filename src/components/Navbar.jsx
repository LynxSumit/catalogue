import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import {  AccountCircle, Category } from '@mui/icons-material';
export default function Navbar() {
  return (
    <Box
      sx={{
        bgcolor : '#555e68',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        height : '10vh'
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' }, marginLeft : '2vmax' }}
      >
    
      <Category  sx={{color : 'whitesmoke', fontSize : 30}}/>
       
       
      </Stack>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant="plain" color="neutral" >
          <Category sx={{fontSize : 30, marginLeft : '2vmax',color : 'whitesmoke'}} />
        </IconButton>
       
      </Box>

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
  sx={{marginRight : "1.3vmax"}}
    slots={{ root: IconButton }}
    slotProps={{ root: { variant: 'outlined', color: 'secondary',  } }}
  >
    <AccountCircle sx={{fontSize : 30,color : 'whitesmoke'}}   />
  </MenuButton>
  <Menu  >
    <MenuItem>Profile</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
</Dropdown>
        
      
      </Box>
    </Box>
  );
}
