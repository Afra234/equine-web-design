import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

// This component is for backward compatibility
// It simply redirects to the new Article page path
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return <Navigate to="/articles" replace />;
};

export default BlogPage; 