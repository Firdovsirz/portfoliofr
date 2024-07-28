import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <DownloadIcon />, name: 'Downlaod Resume' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
    const handleDownload = () => {
        const fileUrl = '/src/assets/resume_en.pdf';
        const fileName = 'resume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Box sx={{ height: "fit-content", transform: 'translateZ(0px)', position: "fixed", top: "100px", right: 20, bgcolor: "red" }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', right: 16 }}
                icon={<SpeedDialIcon />}
                direction='down'
            >
                <SpeedDialAction
                    key={'Download Resume'}
                    icon={<SaveIcon />}
                    tooltipTitle={'Donwload Resume'}
                    onClick={handleDownload}
                />
            </SpeedDial>
        </Box>
    );
}
