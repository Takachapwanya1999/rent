import CobwebOverlay from './CobwebOverlay';
import './i18n';
import { useTranslation } from 'react-i18next';


import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PropertyList from './components/PropertyList';
import TenantList from './components/TenantList';
import PaymentTracker from './components/PaymentTracker';
import MaintenanceRequests from './components/MaintenanceRequests';
import Login from './components/Login';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Messages from './components/Messages';
import DocumentUpload from './components/DocumentUpload';
import Analytics from './components/Analytics';
import AuditLog from './components/AuditLog';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';

export const AuthContext = createContext();

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });
  const { i18n } = useTranslation();

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const showNotification = (message, severity = 'info') => setNotification({ open: true, message, severity });
  const closeNotification = () => setNotification({ ...notification, open: false });

  return (
    <AuthContext.Provider value={{ user, login, logout, showNotification }}>
  <CssBaseline />
  <CobwebOverlay />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={() => setSidebarOpen(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Rental Management</Typography>
            <Button color="inherit" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'af' : 'en')}>
              {i18n.language === 'en' ? 'AF' : 'EN'}
            </Button>
            {user ? <Button color="inherit" onClick={logout}>Logout</Button> : null}
          </Toolbar>
        </AppBar>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Notification open={notification.open} message={notification.message} severity={notification.severity} onClose={closeNotification} />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/properties" element={<ProtectedRoute><PropertyList /></ProtectedRoute>} />
            <Route path="/tenants" element={<ProtectedRoute><TenantList /></ProtectedRoute>} />
            <Route path="/payments" element={<ProtectedRoute><PaymentTracker /></ProtectedRoute>} />
            <Route path="/maintenance" element={<ProtectedRoute><MaintenanceRequests /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
            <Route path="/upload" element={<ProtectedRoute><DocumentUpload /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/auditlog" element={<ProtectedRoute><AuditLog /></ProtectedRoute>} />
          </Routes>
        </Container>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
