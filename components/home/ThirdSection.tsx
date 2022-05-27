import React, { useState } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { GrTask } from 'react-icons/gr';
import NoSsr from '@mui/base/NoSsr';




interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const AntTabs = styled(Tabs)({
    borderBottom: '0px',
    '& .MuiTabs-indicator': {
        backgroundColor: '#2563eb',
    },
});

interface StyledTabProps {
    label: string;
}

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png`
}


const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontWeight: 700,
        fontSize: "1.2rem",
        color: 'rgba(0, 0, 0, 0.85)',
        '&:hover': {
            color: '#2563eb',
            opacity: 1,
        },
        '&.Mui-selected': {
            color: '#2563eb',
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#e11d48',
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ThirdSection = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="hidden lg:block w-full h-auto">
            <section className="lg:pt-20 lg:px-10 h-full flex items-center border-t-2 border-gray-200 py-12">
                <div className="flex lg:flex-wrap items-center">
                    <div className="px-5 w-full md:pr-10 lg:pr-0">
                        <h1 className="font-bold text-4xl lg:text-5xl w-full text-gray-600 leading-8 text-center">Cuentas y usuarios inlimitados</h1>
                        <div className="py-2 w-full">
                            <NoSsr>
                                <div className="py-4">

                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <AntTabs value={value} onChange={handleChange} aria-label="ant example" centered>
                                            <AntTab label="Tereas" />
                                            <AntTab label="Agenda" />
                                            <AntTab label="Contactos" />
                                            <AntTab label="Oportunidades" />
                                            <AntTab label="Listado de propiedades" />
                                            <AntTab label="Seguimiento y control" />
                                        </AntTabs>
                                    </Box>

                                </div>
                                <TabPanel value={value} index={0}>
                                    <div className="font-sans h-full mt-4 w-full flex">
                                        <div className="w-1/2 px-10 flex items-center">
                                            <div className="">
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <Image width={500}
                                                height={500}
                                                alt=""
                                                className="h-full w-full object-cover"
                                                src="https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div className="font-sans h-full mt-4 w-full flex">
                                        <div className="w-1/2 px-10 flex items-center">
                                            <div className="">
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <Image width={500}
                                                height={500} loader={myLoader} alt="" className="h-full w-full object-cover" src="https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <div className="font-sans h-full mt-4 w-full flex">
                                        <div className="w-1/2 px-10 flex items-center">
                                            <div className="">
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <Image width={500}
                                                height={500} loader={myLoader} alt="" className="h-full w-full object-cover" src="https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <div className="font-sans h-full mt-4 w-full flex">
                                        <div className="w-1/2 px-10 flex items-center">
                                            <div className="">
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <Image width={500}
                                                height={500} loader={myLoader} alt="" className="h-full w-full object-cover" src="https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <div className="font-sans h-full mt-4 w-full flex">
                                        <div className="w-1/2 px-10 flex items-center">
                                            <div className="">
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <Image width={500}
                                                height={500} loader={myLoader} alt="" className="h-full w-full object-cover" src="https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    <div className="font-sans h-full mt-4 w-full flex">
                                        <div className="w-1/2 px-10 flex items-center">
                                            <div className="">
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask className="m-auto" size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                                <div className="flex py-3 px-4">
                                                    <div className="pt-2">
                                                        <div className="bg-gray-200 rounded-lg p-4 w-16"><GrTask size="1.5rem" /></div>
                                                    </div>
                                                    <div className="px-6">
                                                        <div className="font-bold text-2xl">Progreso de tareas</div>
                                                        <p className="py-2">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <Image width={500}
                                                height={500} loader={myLoader} alt="" className="h-full w-full object-cover" src="https://www.appvizer.es/media/application/25353/screenshot/62368/mondaycom-monday.com-gant-chart-gant-chart.png" />
                                        </div>
                                    </div>
                                </TabPanel>
                            </NoSsr>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThirdSection;