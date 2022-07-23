import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme
} from '@chakra-ui/react';

//import { Logo } from './Logo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes/AllRoutes';


const style = extendTheme({
  textStyles:{
    h1:{
      fontWeight : "bold",
      fontSize:"12px",
      mb:"12px",
      textAlign:"left"
    },
    h2:{
      fontSize:"12px",
      textAlign:"left"
    },
    h3:{
      fontSize:"12px",
      color : "white",
      bg : "#2f3337"
    },
    h4:{
      fontSize:"12px"
    },
    h5:{
      fontSize:"14px",
      color:"#626669"
    },
    colors:{brand:{100:"#2F3337"}}
  }
})

function App() {
  return (
    <ChakraProvider theme={style}>
      <Box textAlign="center" fontSize="xl">
        
        <Navbar/>
        
        <AllRoutes/>
        <br/>
        <br/>
        
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
