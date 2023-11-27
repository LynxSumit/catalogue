import { Box, Typography } from '@mui/material';
export default function Footer() {

  return (
  <Box sx={{bgcolor : "#555e68", display : "flex", justifyContent : "center", alignItems : "center", height : 50}}>
   <Typography variant="body1" color="initial" sx={{color : "whitesmoke", fontWeight : 670}}> Powered By NuLark Solutions</Typography>
  </Box>
  );
}