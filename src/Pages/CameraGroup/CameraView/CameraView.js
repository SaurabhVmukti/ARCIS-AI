import React from 'react';
import CameraNavigation from './Components/CameraNavigation';
import SearchArchives from './Components/SearchArchieves';
import VideoPlayer from './Components/VideoPlayer';
import PlaybackControls from './Components/PlaybackControl';

const CameraView = () => {
    return (
        <div>
            <CameraNavigation />
            <div style={{ display: 'flex', gap: '20px' }}>
                <SearchArchives />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <VideoPlayer />
                    <PlaybackControls />
                </div>
            </div>
        </div>
    );
};

export default CameraView;