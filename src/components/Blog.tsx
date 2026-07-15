import { useState, useMemo, useEffect, MouseEvent } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, X, ChevronRight, FileText, Plus, Trash2 } from 'lucide-react';
import { Language, BlogPost } from '../types';
import { uiTranslations } from '../translations';
import { getBlogPosts } from '../data';
import AddArticleModal from './AddArticleModal';

interface BlogProps {
  language: Language;
}

export default function Blog({ language }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('basri_logged_in') === 'true');

  const t = uiTranslations[language];

  // Listener to open add article modal from footer
  useEffect(() => {
    const handleOpen = () => {
      setIsAddModalOpen(true);
    };
    window.addEventListener('open-add-article', handleOpen);
    return () => window.removeEventListener('open-add-article', handleOpen);
  }, []);

  // Listener to sync login state dynamically
  useEffect(() => {
    const handleLoginState = (e: any) => {
      const loggedIn = e.detail?.isLoggedIn ?? (localStorage.getItem('basri_logged_in') === 'true');
      setIsLoggedIn(loggedIn);
    };
    window.addEventListener('basri-login-state-changed', handleLoginState);
    return () => window.removeEventListener('basri-login-state-changed', handleLoginState);
  }, []);

  // Dynamic state that persists newly created articles in client's storage
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem(`basri_cakiroglu_blog_posts_${language}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to load blog posts", e);
      }
    }
    return getBlogPosts(language);
  });

  // Re-sync posts when language is switched
  useEffect(() => {
    const saved = localStorage.getItem(`basri_cakiroglu_blog_posts_${language}`);
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
        return;
      } catch (e) {
        console.error(e);
      }
    }
    setPosts(getBlogPosts(language));
  }, [language]);

  const handleAddPost = (newPost: BlogPost) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem(`basri_cakiroglu_blog_posts_${language}`, JSON.stringify(updated));
  };

  const handleDeletePost = (postId: string, e: MouseEvent) => {
    e.stopPropagation();
    const updated = posts.filter((p) => p.id !== postId);
    setPosts(updated);
    localStorage.setItem(`basri_cakiroglu_blog_posts_${language}`, JSON.stringify(updated));
  };

  // Dynamic list of unique categories in active language
  const categories = useMemo(() => {
    const list = new Set(posts.map((post) => post.category));
    return ['ALL', ...Array.from(list)];
  }, [posts]);

  // Filter & search implementation
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'ALL' || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Clean custom line-by-line renderer to display full clinical markdown safely
  const renderArticleContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('###')) {
        return (
          <h4 key={idx} className="text-lg font-bold font-display text-white mt-8 mb-4 border-l-2 border-gold pl-3">
            {trimmed.replace('###', '').trim()}
          </h4>
        );
      }
      if (trimmed.startsWith('*')) {
        return (
          <li key={idx} className="text-slate-300 ml-4 mb-2 list-disc pl-1 leading-relaxed text-xs sm:text-sm font-light">
            {trimmed.replace('*', '').trim()}
          </li>
        );
      }
      if (trimmed === '') {
        return <div key={idx} className="h-4" />;
      }
      return (
        <p key={idx} className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <section id="blog" className="py-24 bg-navy relative overflow-hidden border-t border-white/10">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sky-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3">
            {t.navBlog}
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-none">
            {t.sectionBlogTitle}
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Toolbar (Search + Categories) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 card-glass p-6 rounded-xl">
          {/* Categories list */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-navy shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {cat === 'ALL' ? t.blogCategoryAll : cat}
              </button>
            ))}
          </div>

          {/* Search Action Container (Add button removed to footer) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto font-sans">
            {/* Search Input bar */}
            <div className="relative w-full sm:w-80 shrink-0">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-500" />
              </span>
              <input
                type="text"
                id="blog-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'TR' ? 'Makale ara...' : 'Search articles...'}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 text-white rounded border border-white/10 focus:outline-none focus:border-gold transition-all text-xs"
              />
            </div>
          </div>
        </div>

        {/* Articles Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group card-glass p-6 sm:p-8 rounded-xl transition-all duration-300 flex flex-col justify-between font-sans relative"
              >
                <div>
                  {/* Article Metadata line */}
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-5 font-semibold">
                    <div className="flex items-center space-x-4">
                      <span className="bg-gold/10 text-gold border border-gold/30 px-2.5 py-1 rounded uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{post.readTime} {t.blogReadTime}</span>
                      </span>
                    </div>

                    {/* Delete button for user's own articles (only visible when logged in as drbasri) */}
                    {isLoggedIn && post.id.startsWith('custom-article-') && (
                      <button
                        onClick={(e) => handleDeletePost(post.id, e)}
                        className="p-1.5 text-slate-500 hover:text-red-400 bg-white/5 hover:bg-white/10 rounded border border-white/5 hover:border-red-500/20 transition-all cursor-pointer focus:outline-none"
                        title={language === 'TR' ? 'Makaleyi Sil' : 'Delete Article'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-4 line-clamp-2 font-display leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom line with date and reading CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {post.date}
                  </span>
                  
                  <button
                    id={`btn-read-${post.id}`}
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center text-xs font-bold text-gold hover:text-gold/80 cursor-pointer focus:outline-none"
                  >
                    <span>{t.blogReadMore}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/5 rounded-xl border border-dashed border-white/10">
            <p className="text-slate-400 text-xs sm:text-sm">
              {language === 'TR' ? 'Aranan kriterlere uygun makale bulunamadı.' : 'No clinical articles matched your query.'}
            </p>
          </div>
        )}

      </div>

      {/* Reader Modal Overlay */}
      {selectedPost && (
        <div className="fixed inset-0 bg-navy/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="bg-navy border border-white/10 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            id="article-reading-modal"
          >
            {/* Modal sticky bar */}
            <div className="sticky top-0 bg-navy/95 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center z-10">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-gold" />
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {selectedPost.category}
                </span>
              </div>
              <button
                id="close-blog-modal"
                onClick={() => setSelectedPost(null)}
                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 focus:outline-none"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Canvas */}
            <div className="p-6 sm:p-10">
              {/* Author and Date bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] uppercase tracking-wider text-slate-400 mb-6 pb-6 border-b border-white/10">
                <span className="flex items-center font-bold">
                  <User className="w-4 h-4 text-gold mr-2" />
                  <span>{selectedPost.author}</span>
                </span>
                <span className="flex items-center font-light">
                  <Calendar className="w-4 h-4 text-slate-500 mr-2" />
                  <span>{selectedPost.date}</span>
                </span>
                <span className="flex items-center font-light">
                  <Clock className="w-4 h-4 text-slate-500 mr-2" />
                  <span>{selectedPost.readTime} {t.blogReadTime}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight mb-8 leading-tight">
                {selectedPost.title}
              </h1>

              {/* Excerpt panel */}
              <p className="bg-black/30 border border-white/5 p-5 rounded text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-8">
                {selectedPost.excerpt}
              </p>

              {/* Dynamic Line parsing output */}
              <div className="prose prose-invert max-w-none">
                {renderArticleContent(selectedPost.content)}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-white/10 p-6 flex justify-between items-center bg-black/20">
              <button
                id="back-articles-footer"
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-white text-xs font-semibold transition-colors focus:outline-none uppercase tracking-wider"
              >
                ← {t.blogBackToAll}
              </button>

              <button
                id="close-blog-modal-footer"
                onClick={() => setSelectedPost(null)}
                className="bg-gold hover:bg-gold/90 text-navy font-bold px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest transition-colors focus:outline-none"
              >
                {t.expertiseModalClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Article Creation Modal Overlay */}
      {isAddModalOpen && (
        <AddArticleModal
          language={language}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddPost}
          existingCategories={categories}
        />
      )}
    </section>
  );
}
