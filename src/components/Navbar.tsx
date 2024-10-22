import { Flex, Img, Text, Spacer, Box } from '@chakra-ui/react';
import Logo from "../assets/epg-logo.png";
import Menu from "../assets/menu.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Flex 
      as="nav" 
      align="center" 
      p={4} 
      bgGradient="linear(to-r, #fff6f2, #f1ded9, #f1ded9, #f1ded9, #f1ded9, #f1ded9, #fff6f2)"
      color="white"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Img src={Logo} alt="Logo" width="auto" maxWidth="150px" ml={"40px"}/>
      <Spacer />
      <Text 
        mx={4} 
        cursor="pointer" 
        color="#000"
      >
        <Link to={"/"}>Home</Link>
      </Text>
      <Text 
        mx={4} 
        cursor="pointer" 
        color="#000"
      >
        <Link to={"/service"}>Service</Link>
      </Text>
      <Text 
        mx={4} 
        cursor="pointer" 
        color="#000"
      >
        <Link to={"/projects"}>Our Projects</Link>
      </Text>
      <Box 
      bg={"#000"}
      color="#fff"
      p={"8px"}
      borderRadius={"15px"}
      >
        <a href="mailto:rob@epg.build" style={{ textDecoration: 'none', color: 'white' }}>
            <Text  cursor="pointer">
                Contact Us
            </Text>
        </a>
      </Box>
    </Flex>
  );
};


export const Sidebar = () => {
    const [showSidebarChildren, setShowSidebarChildren] = useState(false);

    const handleMenuClick = () => {
        setShowSidebarChildren((prev) => !prev); // Toggle visibility
    };

    return (
        <Flex 
            as="nav" 
            direction="column" 
            p={4} 
            bgGradient="linear(to-r, #fff6f2, #f1ded9, #f1ded9, #f1ded9, #f1ded9, #fff6f2)"
            color="white"
            boxShadow="md"
            position="sticky"
            top="0"
            zIndex="1000"
            width="100%" // Full width of the parent container
        >
            <Flex align="center" width="100%">
                <Img src={Logo} alt="Logo" width="auto" maxWidth="100px" />
                <Spacer />
                <Img 
                    src={Menu} 
                    w={"20px"} 
                    style={{ cursor: 'pointer', color: '#000' }} 
                    onClick={handleMenuClick} 
                />
            </Flex>
            {showSidebarChildren && <SidebarChildren />}
        </Flex>
    );
};


export const SidebarChildren = () => {
    return (
        <Box 
            display="flex" 
            flexDirection="column" // Stack items vertically
            justifyContent="center" 
            alignItems="center" 
            p={4} 
            borderRadius="md" 
            mt={2}
            gap={4} // Adjust gap between the items
        >
            <Text 
                cursor="pointer" 
                color="#000"
            >
                <Link to={"/"}>
                    Home
                </Link>
            </Text>
            <Text 
                cursor="pointer" 
                color="#000"
            >
                <Link to={"/service"}>
                    Service
                </Link>
            </Text>
            <Text 
                cursor="pointer" 
                color="#000"
            >
                <Link to={"/projects"}>
                    Service
                </Link>
            </Text>
            <Box 
                bg={"#000"} 
                color="#fff" 
                p={"10px"} 
                borderRadius={"15px"}
            >
                <a href="mailto:rob@epg.build" style={{ textDecoration: 'none', color: 'white' }}>
                    <Text 
                        cursor="pointer"
                    >
                        Contact Us
                    </Text>
                </a>
            </Box>
        </Box>
    );
};

