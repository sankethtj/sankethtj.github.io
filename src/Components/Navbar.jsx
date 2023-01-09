import React from 'react';
import { Flex, Image,Box, ButtonGroup, Button } from '@chakra-ui/react';
import Sanketh from "../Images/Sanketh-navbar-logo.png";
import styles from "../Styles/Navbar.module.css";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Flex justifyContent="space-around" minWidth="max-content" alignItems="center" gap="2">
        <Box>
          <Image src={Sanketh} alt='Sanketh-Logo' />
        </Box>
        <ButtonGroup gap = "4">
          <Button colorScheme="white" bgColor="#f0474a" >Home</Button>
          <Button colorScheme="white" bgColor="#f0474a">About Me</Button>
          <Button colorScheme="white" bgColor="#f0474a">Skills</Button>
          <Button colorScheme="white" bgColor="#f0474a">Projects</Button>
          <Button colorScheme="white" bgColor="#f0474a">Contact</Button>
          <Button colorScheme="white" bgColor="#f0474a">Resume</Button>
        </ButtonGroup>
      </Flex>
      
    </div>
  )
}

export default Navbar;