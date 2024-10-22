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
        <Text 
            mx={4} 
            cursor="pointer" 
        >
            Contact Us
        </Text>
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
            justifyContent="center" 
            alignItems="center" 
            p={4} 
            borderRadius="md" 
            mt={2}
            gap={8} // This will add space between the items
        >
            <Text 
                cursor="pointer" 
                color="#000"
            >
                Home
            </Text>
            <Text 
                cursor="pointer" 
                color="#000"
            >
                Service
            </Text>
            <Text 
                cursor="pointer" 
                color="#000"
            >
                Our Projects
            </Text>
            <Box 
                bg={"#000"} 
                color="#fff" 
                p={"8px"} 
                borderRadius={"15px"}
            >
                <Text 
                    cursor="pointer"
                >
                    Contact Us
                </Text>
            </Box>
        </Box>
    );
};
