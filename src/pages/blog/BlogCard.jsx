import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box } from '@mui/system';
export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2021/thumbs/470_crop_HC_7654_MOONCAKE_2021_KV_1920X1080.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx = {{fontWeight:500, fontSize:"1.0rem"}}>
             BÁNH TRUNG THU HIGHLANDS COFFEE - Sẻ chia tinh túy Đất Việt
          </Typography>
          <Box sx = {{display:"flex", alignItems:"center"}}>
            <CalendarMonthIcon sx={{mr:"5px", color:"#b22830"}}/>
            <span>27/06/2022, 10:19</span>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
