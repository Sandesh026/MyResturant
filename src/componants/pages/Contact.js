import React from 'react';
import Layout from '../Layout';
import EmailIcon from '@mui/icons-material/Email';
import CallEndIcon from '@mui/icons-material/CallEnd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
  
  <Box sx={{my:5, ml:10,"& h4 ":{fontWeight:'bold',mb:2}}} >
    <Typography variant='h4'>
      Contact My Resturant
    </Typography>
    <p>
    Knowing common English words is necessary for everyday activities and usual questions. However, if you want to make your writing fun, you have to improve your lexicon. In creative writing, English professors and authors add random words to avoid boring the readers with repetitive terms or phrases. Random words are perfect for upgrading how you speak and write. Random words are uncommon and fun words in the English language. They also come in handy when you participate in Pictionary and scrabble when socializing with others. 
    </p>
  </Box>
  <Box  sx={{m: 3,width:'600px',ml:10,
      "@media (max-width:600px)":{
        width:'300px',

      }}}>
    <TableContainer component={Paper}>
    <Table aria-label='contact table'>
      <TableBody>
      <TableRow>
        <TableCell  sx={{bgcolor:'black',color:'white'}} align='center'>
          Contact Details
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell>
        <SupportAgentIcon sx={{color:'red',pt:1}}/>1234567890(tollfree)
      </TableCell>
      </TableRow>
      <TableCell>
        <EmailIcon sx={{color:'skyblue',pt:1}}/>help@gmail.com
      </TableCell>
      <TableRow>
      <TableCell>
        <CallEndIcon sx={{color:'green',pt:1}}/>7020248355
      </TableCell>
      </TableRow>
      </TableBody>
    </Table>
    </TableContainer>
  </Box>
    </Layout>
  );
};

export default Contact;
