import { Box, List, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64eb59423b81e707460c67f91fc441b46c2d6592887dfb4af82d716c187ea0d5?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Dashboard", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c075aad20d69bc53fe1f26e305686dabff38e8f7bae17a83c00452ded8ff5c9?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Camera", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/868a78a87df4b181a38d087369dff1557eae14ea8b73f8ba58f208d28f75c468?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Events", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc46ae059471d0aaf42648948f23d7365767cf03adb8abcd401fe8eb45026834?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Multiscreen", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a484bcf888b87928aeae8d666929603d77371524838b6fae7101eb605b0f00?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Settings", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83b842154ba2ce7d6f0e536e8736f0b45cd2f8c853b7d1f98c82707d9894c5a0?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Organization setup", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c00765f477695e188360925decec26bda6ec3f4f6a310f6251d0480dc8a323?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Help and feedback", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0511ece32a97f598870056a1d83b4c4e273f1a2f6ce2643ddae2c47e71b4fbd?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "About ArcisAI", isActive: false },
];

const SidebarMenu = ({ isTextVisible, isDarkMode, sidebarWidth, setSideBarWidth }) => {
  // const bg = useColorModeValue("#7f56d9"); 
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const boxShadow = useColorModeValue('1px 2px 20px 1px rgba(0, 0, 0, 0.25)', '1px 2px 20px 1px rgba(255, 255, 255, 0.15)');
  // const sidebarWidth = isTextVisible ? "210px" : "60px"; // Adjust the width based on isTextVisible

  useEffect(() => {
    if (isTextVisible) {
      setSideBarWidth("210px")
    }
    else {
      setSideBarWidth("60px")
    }
  }, [isTextVisible])

  return (
    <Box
      as='nav'

      overflowY={'auto'}
      zIndex="0"
      flexDirection={"column"}
      color="rgba(101, 117, 139, 1)"
      letterSpacing="-0.28px"
      fontFamily="Inter, sans-serif"
      fontSize="14px"
      height="777px"
      width={`${sidebarWidth}`}

      borderRadius={10}
      // top={"86px"}
      transition={`all 0.2s ease`}
      pt={4}
      // backgroundColor={"black"}
      boxShadow={`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}

      right={"30px"}
    >

      <Box
        // mt="40px"
        borderRadius="8px"
        display="flex"
        width="100%"
        flexDirection="column"
      >
        <List
          height="40vh"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          // m="-25px 0 -65px"
          gap={isTextVisible ? "10px" : "30px"} // Adjust gap between items based on text visibility
        >
          {menuItems.map((item, index) => (
            <div // Change motion.div to a regular div
              key={index}
            // Removed animation props
            >
              <MenuItem
                icon={item.icon}
                text={isTextVisible ? item.text : ''}
                isActive={item.isActive}
                isTextVisible={isTextVisible} // Pass isTextVisible prop
              />
            </div>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SidebarMenu;
