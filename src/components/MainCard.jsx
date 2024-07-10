import { Typography } from '@mui/joy';
import Card from '@mui/joy/Card';

import Box from '@mui/system/Box';

export default function MainCard() {
  return (
    <Card variant="outlined" sx={{ margin: 5, backgroundColor: 'lightblue' }}>
      <Typography level="h1">Чи знали ви що?</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        10 липня
      </Typography>
      <Typography fontSize="xl" sx={{}}>
        В цей день народилась визначна постать українського суспільства, один з
        найвеличніших хокеїстів сьогодення
      </Typography>

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
      <Typography fontSize="xl">
        Лауреат міжнародних конкурсів майстрів на всі руки
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* <AspectRatio> */}
        <img
          style={{
            height: '80%',
            width: '40%',
            padding: '10px',
          }}
          src={require('../img/image2.jpeg')}
          loading="lazy"
          alt=""
        />
      </Box>
      <Typography level="h1" sx={{ color: 'red' }}>
        Редакція щотижневика вітає нашого співвітчизника, та бажає щастя,
        міцного здоровля, та мирного неба!
      </Typography>

      {/* </AspectRatio> */}
    </Card>
  );
}
