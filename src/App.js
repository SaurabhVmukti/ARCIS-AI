import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Flex, Box } from "@chakra-ui/react";
// Component Folder
import Header from "./Components/Header/Header";
import SidebarMenu from "./Components/SidebarMenu/SidebarMenu";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import OtpVerification from "./Components/OtpVerification/OtpVerification";
// Pages Folder
import CameraView from "./Pages/CameraGroup/CameraView/CameraView";
import CameraGroup from "./Pages/CameraGroup/CameraGroup";
import AIEvent from "./Pages/AI-Event/AIEvent"
import VideoPlayer from "./Pages/VideoPlayer/VideoPlayer";

function App() {
    const location = useLocation();
    const noHeaderSidebarPaths = ['/signup', '/', '/otp'];
    const shouldShowHeaderAndSidebar = !noHeaderSidebarPaths.includes(location.pathname);
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [isTextVisible, setTextVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [sidebarWidth, setSideBarWidth] = useState("210px");

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#231F1F' : '#FCFCFC';
        document.body.style.color = isDarkMode ? '#fff' : '#000';
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const handleToggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        console.log(isDarkMode);
    };

    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    const toggleTextVisibility = () => {
        setTextVisible((prev) => !prev);
        if (sidebarWidth === "60px") {
            setSideBarWidth("210px");
        } else {
            setSideBarWidth("60px");
        }
    };

    return (
        <Box className="App" minH="100vh" display="flex" flexDirection="column">

            {/* Header */}
            {shouldShowHeaderAndSidebar && (
                <Header
                    isDarkMode={setIsDarkMode}
                    onIconClick={toggleSidebar}
                    toggleTextVisibility={toggleTextVisibility}
                    handleToggleTheme={handleToggleTheme}
                    position="fixed"
                    top="0"
                    left="0"
                    width="100%"
                    zIndex="1000"
                />
            )}

            {/* Sidebar and Main Content */}
            <Flex w="100%" h="100%" position={"fixed"} top={"86px"} flexDirection="row">

                {/* Sidebar Menu */}
                {shouldShowHeaderAndSidebar && isSidebarVisible && (
                    <Box p={4} pr={0} pl={10} position="fixed">
                        <SidebarMenu isTextVisible={isTextVisible} isDarkMode={isDarkMode} sidebarWidth={sidebarWidth}
                            setSideBarWidth={setSideBarWidth} />
                    </Box>
                )}

                {/* Main content area */}
                <Box position={"fixed"} width={`calc(100vw - (${sidebarWidth} + 80px))`}
                    left={`calc(${sidebarWidth} + 64px)`} as='main' zIndex='1' flex="1" p="4">
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/otp" element={<OtpVerification />} />
                        <Route path="/camera-group" element={<CameraGroup />} />
                        <Route path="/camera-view" element={<CameraView />} />
                        <Route path="/ai-events" element={<AIEvent />} />
                        <Route path="/video-player" element={<VideoPlayer />} />
                    </Routes>
                </Box>
            </Flex>
        </Box>
    );
}

export default App;