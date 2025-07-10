import React from 'react';
import blogData from './blogData';

const BlogSection = ({ projectSlug }) => {
  const entries = blogData[projectSlug] || [];

  if (entries.length === 0) {
    return (
      <div className="mt-12 p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Development Blog</h2>
        <p className="text-gray-600">No blog entries yet. Check back soon for updates!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Development Blog</h2>
      <div className="space-y-6">
        {entries.map((entry) => (
          <article key={entry.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{entry.title}</h3>
              <time className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {formatDate(entry.date)}
              </time>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{entry.content}</p>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection; 