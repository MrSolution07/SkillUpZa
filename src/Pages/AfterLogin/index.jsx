import React from 'react';
import Navbar from '../../Components/Navbar/navbar'; 
import Cards from '../../Components/Cards/Afterlogincards';
import Footer from '../../Components/Footer/Footer';
import { Height, Padding } from '@mui/icons-material';



const AfterLogin = () => {
  return (
    <div>
      <Navbar logo="assets/images/logo.png"/> 
      <Cards />
      <Footer />
    </div>
  );
};

export default AfterLogin;
