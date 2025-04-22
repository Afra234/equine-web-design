import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { HelmetProvider } from 'react-helmet-async';
import { AnimationProvider } from './contexts/AnimationContext';
import AppRoutes from './routes';

// Lazy load pages (except HomePage)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-[#3CAAFF] border-t-transparent rounded-full"
    />
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnimationProvider>
          <AppRoutes />
        </AnimationProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;