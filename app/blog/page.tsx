"use client";

import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "How to Buy Your First Home",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "A comprehensive guide for first-time home buyers covering everything from pre-approval to closing day.",
    category: "Buying Guide",
    author: "Sarah Johnson",
    date: "September 15, 2025",
    readTime: "8 min read",
    tags: ["First Time Buyers", "Home Purchase", "Mortgage"],
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Cities for Real Estate Investment",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover the most promising real estate markets with high growth potential and strong rental yields.",
    category: "Investment",
    author: "Michael Chen",
    date: "September 12, 2025",
    readTime: "12 min read",
    tags: ["Investment", "Market Analysis", "ROI"],
    featured: true
  },
  {
    id: 3,
    title: "Understanding Market Trends in 2025",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    excerpt: "Analyze current real estate market conditions and what they mean for buyers and sellers.",
    category: "Market Analysis",
    author: "David Rodriguez",
    date: "September 10, 2025",
    readTime: "6 min read",
    tags: ["Market Trends", "2025 Outlook", "Analysis"],
    featured: false
  },
  {
    id: 4,
    title: "Home Staging Tips That Sell",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    excerpt: "Professional staging techniques to make your property irresistible to potential buyers.",
    category: "Selling Tips",
    author: "Lisa Thompson",
    date: "September 8, 2025",
    readTime: "5 min read",
    tags: ["Home Staging", "Selling", "Interior Design"],
    featured: false
  },
  {
    id: 5,
    title: "Mortgage Rates: What to Expect",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    excerpt: "Breaking down current mortgage rates and expert predictions for the coming months.",
    category: "Finance",
    author: "Robert Kim",
    date: "September 5, 2025",
    readTime: "7 min read",
    tags: ["Mortgage Rates", "Finance", "Banking"],
    featured: false
  },
  {
    id: 6,
    title: "Luxury Real Estate Spotlight",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    excerpt: "Exploring the most exclusive properties and luxury market trends across major cities.",
    category: "Luxury Market",
    author: "Amanda Foster",
    date: "September 3, 2025",
    readTime: "10 min read",
    tags: ["Luxury Homes", "High-End Market", "Exclusive Properties"],
    featured: false
  }
];

const categories = ["All", "Buying Guide", "Investment", "Market Analysis", "Selling Tips", "Finance", "Luxury Market"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Real Estate Insights</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert advice, market analysis, and insider tips to help you navigate the real estate world with confidence.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === "All" && searchTerm === "" && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-emerald-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={`/blog/${post.id}`} 
                        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
                      >
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-emerald-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800">
                {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
              </h2>
            </div>
            <div className="text-slate-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" && searchTerm === "" ? regularPosts : filteredPosts).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-slate-600">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={`/blog/${post.id}`} 
                        className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center gap-1"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">No articles found</h3>
                <p className="text-slate-600 mb-6">Try adjusting your search terms or browse different categories.</p>
                <button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
                >
                  View All Articles
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="mb-6 opacity-90">Get the latest real estate insights and market updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 outline-none"
              />
              <button className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}