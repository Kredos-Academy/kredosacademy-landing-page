import React from 'react'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsIcon from '@mui/icons-material/Apps';
import TerminalIcon from '@mui/icons-material/Terminal';
import DnsIcon from '@mui/icons-material/Dns';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <SupervisorAccountIcon sx={{ color: 'grey' }} fontSize="medium"/>,
        link: '/lms/dashboard'
    }, 

    
    {
        title: 'Frontend Engineering',
        icon: <TerminalIcon sx={{ color: 'grey' }} fontSize="small"/>,
        link: '/Student/courses/Frontend'
    },

    {
        title: 'Backend Engineering',
        icon: <DnsIcon sx={{ color: 'grey' }} fontSize="small"/>,
        link: '/Student/courses/Backend'
    },

    {
        title: 'UI Design',
        icon: <DesignServicesIcon sx={{ color: 'grey' }} fontSize="small"/>,
        link: '/Student/courses/UiDesign'
    },

    {
        title: 'Calender',
        icon: <CalendarMonthIcon sx={{ color: 'grey' }} fontSize="medium"/>,
        link: '/Student/Calender'
    },

    {
        title: 'My Courses',
        icon: <AppsIcon sx={{ color: 'grey' }} fontSize="medium"/>,
        link: '/Student/mycourses'
    },

    {
        title: 'Community',
        icon: <AppsIcon sx={{ color: 'grey' }} fontSize="medium"/>,
        link: '/Student/community'
    },

    {
        title: 'Settings',
        icon: <AppsIcon sx={{ color: 'grey' }} fontSize="medium"/>,
        link: '/Student/Settings'
    },





];