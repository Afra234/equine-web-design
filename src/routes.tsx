import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages (except HomePage)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPage />
            </Suspense>
          } />
          <Route path="/articles" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ArticlePage />
            </Suspense>
          } />
          <Route path="/articles/:slug" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ArticlePage />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes; 