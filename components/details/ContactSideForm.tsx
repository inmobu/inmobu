import React, { useState } from 'react'
import { Tab, Box, Tabs, } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NoSsr from '@mui/base/NoSsr';
import FormComponent from './FormComponent';
import TakeTourComponent from './TakeTourComponent'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}




const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#1890ff',
    },
});

interface StyledTabProps {
    label: string;
}
const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontWeight: 600,
        color: 'rgba(0, 0, 0, 0.85)',

        '&.Mui-selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
        },
    }),
);

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const ContactSideForm = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };



    return (
        <div className="border border-gray-500 rounded-md mt-8">
            <div className="px-5 py-2 ">
                <NoSsr>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ bgcolor: '#fff' }}>
                            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                                <AntTab label="Contactar un agente" />
                                <AntTab label="Resevar una cita" />
                            </AntTabs>
                        </Box>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <FormComponent/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TakeTourComponent />
                    </TabPanel>
                </NoSsr>
            </div>
        </div>
    )
}

export default ContactSideForm