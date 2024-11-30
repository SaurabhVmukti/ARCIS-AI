import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        light: {
            primary:"#9234EA",
            primary_text: "#141E35",
            secondary_text: "#65758B",
            background:"#FCFCFC", 
            navigation_menu_color: '#D8B4FE',
            green: '#7BC111',
            red: "#EF4343",
            orange: "#F67416",
            background_light: "#FCFCFC",
            edge_event: "#07B4D3",
            cloud_event:"#FACC14",
        },
        dark: {
            primary:"#C3B4FD",
            primary_text: "#F8FAFC",
            secondary_text: "#94A3B8",
            background:"#231F1F",
            navigation_menu_color: '#8F2CE5',
            green: '#95DA25',
            red: "#FF6262",
            orange: "#FB923C",
            background_light: "#231F1F",
            edge_event: "#088EAF",
            cloud_event:"#E7B008",
        }
    },
    // fonts: {
    //     heading: `'Poppins', sans-serif`,
    //     body: `'Poppins', sans-serif`,
    // },
});

export default customTheme;