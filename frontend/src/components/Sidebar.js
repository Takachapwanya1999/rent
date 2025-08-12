import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MessageIcon from '@mui/icons-material/Message';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Properties', icon: <HomeIcon />, path: '/properties' },
  { text: 'Tenants', icon: <PeopleIcon />, path: '/tenants' },
  { text: 'Payments', icon: <PaymentIcon />, path: '/payments' },
  { text: 'Maintenance', icon: <BuildIcon />, path: '/maintenance' },
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
  { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
  { text: 'Upload', icon: <UploadFileIcon />, path: '/upload' },
  { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
  { text: 'Audit Log', icon: <ListAltIcon />, path: '/auditlog' },
];

function Sidebar({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose} variant="temporary" sx={{ display: { xs: 'block', sm: 'block' } }}>
      <Toolbar />
      <List>
        {navItems.map(item => (
          <ListItem button key={item.text} component={Link} to={item.path} onClick={onClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
