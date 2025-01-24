import { Typography } from '@mui/joy';
import Card from '@mui/joy/Card';

import Box from '@mui/system/Box';

export default function MainCard() {
  return (
    <Card variant="outlined" sx={{ margin: 5, backgroundColor: 'black', height: '80%', align='center' }}>
      <Typography level="h1" align='center' color='yellow' sx={{paddingTop: '20px'}} >FUCK YOU!</Typography>
      

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* <AspectRatio> */}
        <img
          style={{
            width: '80%',
            
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
          src={require('../img/photo1.jpg')}
          loading="lazy"
          alt=""
        />
      </Box>
      

      {/* </AspectRatio> */}
    </Card>
  );
}
