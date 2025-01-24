import { Typography } from '@mui/joy';
import Card from '@mui/joy/Card';

import Box from '@mui/system/Box';

export default function MainCard() {
  return (
    <Card variant="outlined" sx={{ margin: 5, backgroundColor: 'lightblue' }}>
      <Typography level="h1">FUCK YOU!</Typography>
      

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* <AspectRatio> */}
        <img
          style={{
            width: '80%',
            padding: '10px',
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
