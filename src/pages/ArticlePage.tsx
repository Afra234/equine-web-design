import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { articles, findArticleBySlug, Article } from '../data/articleData'; // Updated import
import ArticleList from '../components/article/ArticleList';
import ArticleDetail from '../components/article/ArticleDetail';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { ArrowRight } from 'lucide-react';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState<Article | null>(null);
  const [isGridView, setIsGridView] = useState(() => {
    // Default to grid view, but check localStorage if preference exists
    const savedPreference = localStorage.getItem('articleViewPreference');
    return savedPreference ? savedPreference === 'grid' : true;
  });

  // Scroll to top whenever component mounts or location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Find the post based on slug when the component mounts or slug changes
  useEffect(() => {
    if (slug) {
      const post = findArticleBySlug(slug);
      setSelectedPost(post || null);
      // Optional: If slug is invalid, maybe redirect to /articles
      // if (!post) navigate('/articles'); 
    } else {
      setSelectedPost(null); // Ensure we show the list on /articles
    }
  }, [slug]);

  // Handler to navigate back to the list view
  const handleBackClick = () => {
    if (location.pathname.includes('/articles/')) {
      navigate('/articles');
    } else {
      navigate('/');
    }
  };

  // Handler to toggle between grid and list views
  const handleViewToggle = () => {
    const newView = !isGridView;
    setIsGridView(newView);
    localStorage.setItem('articleViewPreference', newView ? 'grid' : 'list');
  };

  // Determine which view to show
  const showSinglePost = slug && selectedPost;

  return (
    <div className="pt-20 md:pt-24 pb-20 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* --- Single Post View --- */}
        {showSinglePost && selectedPost && (
          <ArticleDetail post={selectedPost} onBackClick={handleBackClick}>
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown 
                components={{
                  p: ({ children }) => <p className="text-[#ABABAB] leading-relaxed mb-6">{children}</p>,
                  h2: ({ children }) => <h2 className="text-3xl font-semibold text-white mb-6 mt-12">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-semibold text-white mb-4 mt-8">{children}</h3>,
                  ul: ({ children }) => <ul className="list-disc list-inside text-[#ABABAB] mb-6 space-y-2">{children}</ul>,
                  li: ({ children }) => <li className="text-[#ABABAB]">{children}</li>,
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-blue-400 hover:text-blue-300 underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-8">
                      <img 
                        src={src} 
                        alt={alt} 
                        className="rounded-xl shadow-2xl w-full h-auto"
                      />
                    </div>
                  )
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>

              {/* Consistent Call-to-Action Section */}
              <div className="mt-16 pt-8 border-t border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Interested in learning more about how we can help your business?
                  </h3>
                  <p className="text-gray-400 mb-6 max-w-2xl">
                    Contact us to discuss your digital needs and discover how we can create a tailored solution for your equestrian business.
                  </p>
                  <button 
                    onClick={() => {
                      navigate('/contact');
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                    className="inline-flex items-center px-8 py-3 rounded-full bg-blue-400 text-[#0A0A0A] font-medium text-lg hover:bg-blue-400/90 transition-colors duration-200 group"
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </ArticleDetail>
        )}

        {/* --- Articles List View Title --- */}
        {!showSinglePost && (
          <motion.div
            key="articles-list-title"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Set Helmet for the main articles page */}
            <Helmet>
              <title>Equinology Insights | Articles</title>
              <meta name="description" content="Exploring the intersection of equestrian passion and digital innovation. Read our latest articles on web design, branding, and software for the horse industry." />
            </Helmet>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] mb-4 px-2 pb-1 overflow-visible">
              Equinology Insights
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Expert articles on equestrian digital innovation and design.
            </p>
          </motion.div>
        )}

        {/* --- Articles List Grid --- */}
        {!showSinglePost && (
          <div className="w-full px-2 sm:px-0">
            <ArticleList 
              posts={articles} 
              isGridView={isGridView}
              onViewToggle={handleViewToggle}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage; 