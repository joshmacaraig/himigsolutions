import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Context
import { AuthProvider } from './context/AuthContext';

// Main Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import SampleInvitation from './pages/SampleInvitation';
import InvitationRouter from './pages/InvitationRouter';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminInvitations from './pages/admin/Invitations';
import InvitationForm from './pages/admin/InvitationForm';
import TestUpload from './pages/admin/TestUpload';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/invitations" element={
              <ProtectedRoute>
                <AdminInvitations />
              </ProtectedRoute>
            } />
            <Route path="/admin/invitations/new" element={
              <ProtectedRoute>
                <InvitationForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/invitations/:id/edit" element={
              <ProtectedRoute>
                <InvitationForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/test-upload" element={<TestUpload />} />
            
            {/* Public Routes - Include header and footer */}
            <Route path="*" element={
              <>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/invitation-sample" element={<SampleInvitation />} />
                    <Route path="/invitation/:invitationId" element={<InvitationRouter />} />
                    
                    {/* 404 Route */}
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
