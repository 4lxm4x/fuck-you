import { AspectRatio, CardOverflow, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import Box from '@mui/system/Box';

export default function MainCard() {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Card variant="outlined" sx={{ alignSelf: 'center' }}>
        <CardOverflow>
          <Typography level="h1">Чи знали ви що?</Typography>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            10 липня
          </Typography>
          <Typography>
            В цей день народилась визначна постать українського суспільства,
            один з найвеличніших хокеїстів сьогодення
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/* <AspectRatio> */}
            <img
              style={{
                height: '100%',
                width: '50%',
                padding: '10px',
              }}
              src={require('../img/photo1.jpg')}
              loading="lazy"
              alt=""
            />
          </Box>
          {/* </AspectRatio> */}
        </CardOverflow>
      </Card>
    </div>
  );
}
