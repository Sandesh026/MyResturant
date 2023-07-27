import React from 'react'
import Layout from '../Layout'
import { Box, Typography } from '@mui/material';


const About = () => {
  return (
    <Layout>
      <Box  sx={{
        my:15,
        textAlign:"center",
         p:2,
        "& h4":{
            fontWeight:'bold',
            my:2,
          fontSize:'2rem',
        },
        "& p":{
          textAlign:'justify',
         
        },
        "@media(max-width 600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem'
          }


        }
      }} >
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          These days, there have been a number of hotels in various cities, towns and countries. From when I was young to now, I have visited many inns since I loved to travel to somewhere. I had any feeling and impression about hotels where I have been before I became eighteen years old. Hotels were just hotels that I needed to stay for the night. No more than that I thought. Before I went to Canada to study English in 2011, my family had a plan to travel somewhere and stay in a hotel for my farewell in Korea. After we visited many attractions, we were heading to the hotel that we made a reservation. When I saw the entrance of the hotel, I was surprised at first, and when we went inside of the hotel, I was surprised again. For two days, I was very impressed and I thought a lot in positive ways. I always had a desire to visit again and I wanted to get a hotel like that inn. It was the first time for me to know what I want to become. The trip to the hotel was totally changed my life and my dream.
        </p>
        <br/>
        <p>
        These days, there have been a number of hotels in various cities, towns and countries. From when I was young to now, I have visited many inns since I loved to travel to somewhere. I had any feeling and impression about hotels where I have been before I became eighteen years old. Hotels were just hotels that I needed to stay for the night. No more than that I thought. Before I went to Canada to study English in 2011, my family had a plan to travel somewhere and stay in a hotel for my farewell in Korea. After we visited many attractions, we were heading to the hotel that we made a reservation. When I saw the entrance of the hotel, I was surprised at first, and when we went inside of the hotel, I was surprised again. For two days, I was very impressed and I thought a lot in positive ways. I always had a desire to visit again and I wanted to get a hotel like that inn. It was the first time for me to know what I want to become. The trip to the hotel was totally changed my life and my dream.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
