import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import RenameModal from "../CameraSettings/Rename";
import CameraSetting from "../CameraSettings/CameraSetting"

// Function component
const CameraMenu = () => {
    // Modal management state
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [isCameraSettingModalOpen, setIsCameraSettingModalOpen] = useState(false);

    // Function to open the RenameModal
    const openCameraSettingModal = () => {
        setIsCameraSettingModalOpen(true);
    };

    // Function to close the RenameModal
    const closeCameraSettingModal = () => {
        setIsCameraSettingModalOpen(false);
    };

    // Function to open the RenameModal
    const openRenameModal = () => {
        setIsRenameModalOpen(true);
    };

    // Function to close the RenameModal
    const closeRenameModal = () => {
        setIsRenameModalOpen(false);
    };

    return (
        <>
            {/* menu items */}
            <Menu>
                <MenuButton>
                    <IconButton
                        aria-label="More options"
                        icon={<FiMoreVertical />}
                        variant="ghost"
                        size="md"
                    />
                </MenuButton>
                <MenuList marginLeft="-310px" marginTop="-40px" padding={"20px 30px"}>
                    {/* MenuItem to trigger the RenameModal */}
                    <MenuItem onClick={openRenameModal}>Rename device</MenuItem>

                    <MenuItem>Pricing plan</MenuItem>
                    <MenuItem onClick={openCameraSettingModal}>Camera settings</MenuItem>
                    <MenuItem>Manage cloud recording</MenuItem>
                    <MenuItem>Camera details</MenuItem>
                    <hr />
                    <MenuItem>Grant access to another</MenuItem>
                    <MenuItem>Edit access to another</MenuItem>
                    <hr />
                    <MenuItem color="red.500">Remove camera</MenuItem>
                </MenuList>

                {/* RenameModal component */}
                <RenameModal isOpen={isRenameModalOpen} onClose={closeRenameModal} />
                <CameraSetting isOpen={isCameraSettingModalOpen} onClose={closeCameraSettingModal} />

            </Menu>
        </>
    );
};

export default CameraMenu;