// import React from 'react';
// import styles from './SidebarMenu.module.css';

// const MenuItem = ({ icon, text, isActive }) => {
//   return (
//     <li className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`}>
//       <img src={icon} alt="" className={styles.menuIcon} />
//       <span className={styles.menuText}>{text}</span>
//     </li>
//   );
// };

// export default MenuItem;

import React from 'react';
import { ListItem, Flex, Image, Text } from '@chakra-ui/react';

const MenuItem = ({ icon, text, isActive, isTextVisible }) => {
  return (
    <ListItem>
      <Flex
        alignItems="center"
        // p={isTextVisible ? "2" : "2 0"} // Adjust padding based on text visibility
        // bg={isActive ? "teal.500" : "transparent"}
        borderRadius="md"
        ml={4}
        // _hover={{ bg: "teal.600", cursor: "pointer" }}
        // transition="background-color 0.3s ease, padding 0.3s ease" // Add transition for background and padding
      >
        <Image src={icon} alt={text} boxSize="20px" />
        {isTextVisible && ( // Show text only when isTextVisible is true
          <Text  fontSize="md" color="#94A3B8" p={5}>
            {text}
          </Text>
        )}
      </Flex>
    </ListItem>
  );
};

export default MenuItem;
