import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing option
    });
  }, []);

  return (
    <Layout>
      <Box sx={{ my:5,
        "& h4": {fontWeight: "bold", mb: 2,"@media (max-width: 600px)": {
              m:2,
              fontSize: "1.5rem",
              textAlign: "center",
            }, }}}>
        <Typography variant='h4'sx={{textAlign: "center"}} data-aos="fade-down">Get in Touch with Us</Typography>
          <p style={{ textAlign: "center"}} data-aos="fade-right">We’d love to hear from you! Whether you have a question, need more information, or simply want to share your dining experience, feel free to reach out. Our team is here to assist you with anything you need—reservations, menu inquiries, or special requests. At SHIV FOOD, we believe in providing personalized service, and your feedback is important to us.</p>
          <br />
          <p style={{ textAlign: "center","@media (max-width: 600px)": {
              fontSize: "0.875rem",
            },}} data-aos="fade-left">
          You can contact us via phone, email, or by visiting us in person. Let us know how we can make your visit even more special!
          </p>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", my:10, "@media (max-width:600px)": {
        width: "300px",ml:7,
      },}} data-aos="zoom-in">
        <TableContainer component= {Paper} sx={{ width: "600px"}}>
          <Table aria-label='contact label'>
              <TableHead>
                 <TableRow>
                   <TableCell sx={{bgcolor: "black", color: "white"}} align='center'>Contact Details</TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1}}/> 1800-00-0000 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <MailIcon sx={{ color: "skyBlue", pt: 1}}/> shivfood@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1}}/> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
