import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    slug: string;
    summary: string;
    image: string;
    timestamp: number;
    readTime?: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to={`/blog/${article.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{article.summary}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span><TimeAgo date={article.timestamp} /></span>
            {article.readTime && <span>{article.readTime} min read</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard; 