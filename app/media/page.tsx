'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Newspaper,
  Search,
  Share2,
  ZoomIn,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowLeft,
  Radio,
  Menu,
  FileText,
  ChevronLeft,
  Check,
  Download,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { ASSETS_NEWS_DATA, NewsClippingItem } from '@/app/data/newsData';

const ITEMS_PER_PAGE = 12;

export default function MediaPage() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [news] = useState<NewsClippingItem[]>(ASSETS_NEWS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeItem, setActiveItem] = useState<NewsClippingItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const newsFeedRef = useRef<HTMLDivElement>(null);

  // Reset pagination on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const categories = [
    { id: 'All', labelHi: 'सभी कतरनें', labelEn: 'All Clippings' },
    { id: 'जन-आंदोलन व अनशन', labelHi: 'जन-आंदोलन व अनशन', labelEn: 'Movements & Fasting' },
    { id: 'जल निकासी व ड्रेनेज', labelHi: 'जल निकासी व ड्रेनेज', labelEn: 'Drainage & Waterlogging' },
    { id: 'सड़क व अवसंरचना', labelHi: 'सड़क व अवसंरचना', labelEn: 'Roads & Infrastructure' },
    { id: 'नागरिक अधिकार व जमीन विवाद', labelHi: 'नागरिक अधिकार व जमीन विवाद', labelEn: 'Citizen Rights & Land' },
    { id: 'नगर निगम सदन व विकास', labelHi: 'नगर निगम सदन व विकास', labelEn: 'Municipal Board' },
    { id: 'सांस्कृतिक व धरोहर', labelHi: 'सांस्कृतिक व धरोहर', labelEn: 'Culture & Heritage' },
    { id: 'सामाजिक व नागरिक सम्मान', labelHi: 'सामाजिक व नागरिक सम्मान', labelEn: 'Social Welfare' },
  ];

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      searchQuery === '' ||
      item.cleanTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippetEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      item.category === selectedCategory ||
      item.categoryKey === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredNews.length);
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (newsFeedRef.current) {
        newsFeedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleShare = (item: NewsClippingItem) => {
    if (navigator.share) {
      navigator
        .share({
          title: lang === 'hi' ? item.cleanTitle : item.titleEn,
          text: `${lang === 'hi' ? item.cleanTitle : item.titleEn} - पार्षद विश्वजीत त्रिपाठी (सोनू तिवारी)`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brandRed-600 selection:text-white flex flex-col">
      {/* 1. TOP EXECUTIVE BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Newspaper className="w-3.5 h-3.5" />
              {lang === 'hi' ? 'समाचार पत्र कतरनें एवं प्रामाणिक साक्ष्य अभिलेखागार' : 'Verified Newspaper Clippings & Press Archive'}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-brandRed-400" />
              {lang === 'hi' ? 'वार्ड 26 माधोपुर-बेतियाहाता, नगर निगम गोरखपुर' : 'Ward 26 Madhopur-Betiyahata, Gorakhpur'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9415204481" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" /> 9415204481
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-slate-700">
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'hi' ? 'bg-brandRed-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-brandRed-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brandRed-700 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                VT
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-black font-display tracking-tight text-slate-900 group-hover:text-brandRed-600 transition-colors leading-tight">
                  {lang === 'hi' ? 'विश्वजीत त्रिपाठी' : 'Vishwajeet Tripathi'}
                  <span className="text-brandRed-600 ml-1.5 text-base font-normal">
                    {lang === 'hi' ? "'सोनू तिवारी'" : "'Sonu Tiwari'"}
                  </span>
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  {lang === 'hi' ? 'पार्षद - वार्ड 26, नगर निगम गोरखपुर' : 'Corporator - Ward 26, Nagar Nigam Gorakhpur'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <Link href="/" className="hover:text-brandRed-600 transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
              </Link>
              <Link href="/#jeevan-parichay" className="hover:text-brandRed-600 transition-colors">
                {lang === 'hi' ? 'परिचय' : 'About'}
              </Link>
              <Link href="/#vikas-karya" className="hover:text-brandRed-600 transition-colors">
                {lang === 'hi' ? 'विकास कार्य' : 'Development'}
              </Link>
              <span className="text-brandRed-600 font-bold border-b-2 border-brandRed-600 pb-1">
                {lang === 'hi' ? 'अखबारों व मीडिया में' : 'In Media'}
              </span>
              <Link href="/gallery" className="hover:text-brandRed-600 transition-colors">
                {lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}
              </Link>
              <Link
                href="/#jan-sampark"
                className="bg-brandRed-600 text-white hover:bg-brandRed-700 px-4 py-2 rounded-xl font-bold transition-all shadow-sm"
              >
                {lang === 'hi' ? 'संपर्क करें' : 'Contact'}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-3 space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100"
              >
                {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
              </Link>
              <Link
                href="/#jeevan-parichay"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100"
              >
                {lang === 'hi' ? 'परिचय' : 'About'}
              </Link>
              <Link
                href="/#vikas-karya"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100"
              >
                {lang === 'hi' ? 'विकास कार्य' : 'Development'}
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100"
              >
                {lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}
              </Link>
              <Link
                href="/#jan-sampark"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-bold text-brandRed-600 bg-brandRed-50"
              >
                {lang === 'hi' ? 'संपर्क करें' : 'Contact'}
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* 3. HERO BANNER */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brandRed-600/20 text-brandRed-400 border border-brandRed-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-brandRed-500" />
              {lang === 'hi' ? 'समाचार पत्रों में प्रकाशित वास्तविक साक्ष्य' : 'Authentic Newspaper Clippings & Press Records'}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-tight">
              {lang === 'hi' ? 'अखबारों एवं मीडिया में' : 'In Media & Press'}
            </h1>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              {lang === 'hi'
                ? 'पार्षद विश्वजीत त्रिपाठी (सोनू तिवारी) के जनहित आंदोलनों, नाला निर्माण सत्याग्रह, सड़क विकास, नागरिक अधिकारों व नगर निगम में उठाए गए जनमुद्दों की प्रामाणिक समाचार पत्र कतरनें।'
                : 'Comprehensive authentic press clippings documenting hunger strikes, drainage movements, road developments, and municipal advocacy by Corporator Vishwajeet Tripathi.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. SEARCH & CATEGORY FILTER CONTROLS */}
      <section className="bg-white border-b border-slate-200 py-4 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'hi'
                    ? 'शीर्षक, मुद्दा या विषय खोजें...'
                    : 'Search headlines, issues, or topics...'
                }
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brandRed-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="bg-brandRed-50 text-brandRed-700 font-bold px-3 py-1 rounded-lg border border-brandRed-200">
                {lang === 'hi' ? `कुल ${filteredNews.length} समाचार कतरनें` : `${filteredNews.length} Total Clippings`}
              </span>
              <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200">
                {lang === 'hi' ? '12 प्रति पृष्ठ' : '12 per page'}
              </span>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-3 pt-3 border-t border-slate-100 max-w-full">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
              <Tag className="w-3 h-3 text-brandRed-500" />
              {lang === 'hi' ? 'श्रेणी:' : 'Category:'}
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-brandRed-600 text-white border-brandRed-600 shadow-sm'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {lang === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div ref={newsFeedRef} className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brandRed-700 bg-brandRed-50 px-2.5 py-1 rounded border border-brandRed-200 mb-1">
                <FileText className="w-3.5 h-3.5" />
                {lang === 'hi' ? 'समाचार पत्र कतरन अभिलेखागार' : 'Newspaper Clipping Archive'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                {lang === 'hi' ? 'प्रमुख समाचार पत्रों में प्रकाशित सुर्खियां' : 'Headlines in Daily Newspapers'}
              </h2>
            </div>
            <div className="sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <span className="text-xs font-bold text-slate-800">
                  {filteredNews.length > 0
                    ? `${startIndex + 1}-${endIndex} / कुल ${filteredNews.length} कतरनें`
                    : '0 कतरनें'}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                {lang === 'hi' ? `पृष्ठ ${currentPage} का ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
              </span>
            </div>
          </div>

          {filteredNews.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">
                {lang === 'hi' ? 'कोई समाचार नहीं मिला' : 'No news clippings found'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'hi'
                  ? 'कृपया अन्य खोज शब्द चुनें या फ़िल्टर रीसेट करें।'
                  : 'Try searching with different keywords or reset the filters.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                {lang === 'hi' ? 'फ़िल्टर रीसेट करें' : 'Reset Filter'}
              </button>
            </div>
          ) : (
            <>
              {/* 12 NEWS CLIPPING CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedNews.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-brandRed-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Top Newspaper Clipping Image with Zoom overlay */}
                    <div
                      onClick={() => setActiveItem(item)}
                      className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-200 cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt={lang === 'hi' ? item.cleanTitle : item.titleEn}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                        <span className="bg-brandRed-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-4 h-4" /> {lang === 'hi' ? 'कटिंग बड़ा करके देखें' : 'View Full Clipping'}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md border border-slate-700">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* NEWS TITLE AS CLICKABLE LINK */}
                        <h3
                          onClick={() => setActiveItem(item)}
                          className="text-base sm:text-lg font-bold font-display text-slate-900 group-hover:text-brandRed-600 transition-colors leading-snug line-clamp-2 cursor-pointer"
                        >
                          {lang === 'hi' ? item.cleanTitle : item.titleEn}
                        </h3>

                        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                          {lang === 'hi' ? item.snippet : item.snippetEn}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setActiveItem(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brandRed-600 hover:text-brandRed-700 cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          {lang === 'hi' ? 'देखें' : 'View'}
                        </button>

                        <div className="flex items-center gap-1">
                          <a
                            href={item.image}
                            download
                            title={lang === 'hi' ? 'कटिंग डाउनलोड करें' : 'Download Clipping'}
                            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleShare(item)}
                            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors text-xs flex items-center gap-1 cursor-pointer"
                            title="Share link"
                          >
                            {copiedId === item.id ? (
                              <span className="text-emerald-600 font-bold flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Copied
                              </span>
                            ) : (
                              <Share2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* PAGINATION CONTROLS (Every 12 news items) */}
              {totalPages > 1 && (
                <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-semibold text-slate-600">
                    {lang === 'hi'
                      ? `कुल ${filteredNews.length} में से ${startIndex + 1} से ${endIndex} कतरनें प्रदर्शित (12 प्रति पृष्ठ)`
                      : `Showing ${startIndex + 1}-${endIndex} of ${filteredNews.length} clippings (12 per page)`}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      {lang === 'hi' ? 'पिछला' : 'Prev'}
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      if (
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        Math.abs(pageNum - currentPage) <= 1
                      ) {
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              currentPage === pageNum
                                ? 'bg-brandRed-600 text-white shadow-sm scale-105'
                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      } else if (
                        pageNum === currentPage - 2 ||
                        pageNum === currentPage + 2
                      ) {
                        return (
                          <span key={pageNum} className="text-slate-400 text-xs px-1">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {lang === 'hi' ? 'अगला' : 'Next'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* MEDIA DESK / PRESS INQUIRY CONTACT */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Radio className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'hi' ? 'मीडिया एवं प्रेस डेस्क' : 'Media & Press Relations Desk'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display">
              {lang === 'hi'
                ? 'पत्रकारों एवं मीडिया प्रतिनिधियों हेतु संपर्क'
                : 'For Journalists, Reporters & Media Correspondents'}
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {lang === 'hi'
                ? 'वार्ड 26 के जनमुद्दों, आधिकारिक बयानों, प्रेस विज्ञप्तियों अथवा पार्षद विश्वजीत त्रिपाठी (सोनू तिवारी) के साक्षात्कार के लिए सीधे कार्यालय से संपर्क करें।'
                : 'For official press statements, media interviews, press releases, or coverage inquiries regarding Ward 26 Gorakhpur, contact our media cell directly.'}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href="tel:9415204481"
                className="bg-brandRed-600 hover:bg-brandRed-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" /> {lang === 'hi' ? 'फोन करें: 9415204481' : 'Call: +91 9415204481'}
              </a>
              <a
                href="mailto:contact@vishwajeettripathi.in"
                className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" /> contact@vishwajeettripathi.in
              </a>
              <Link
                href="/#jan-sampark"
                className="text-amber-400 hover:text-amber-300 font-semibold text-xs sm:text-sm flex items-center gap-1 underline underline-offset-4"
              >
                {lang === 'hi' ? 'कार्यालय का पता देखें' : 'View Office Address'} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* FULL LIGHTBOX ZOOM MODAL FOR NEWSPAPER CLIPPINGS */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[95vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center text-white gap-3">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="bg-brandRed-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                  {activeItem.category}
                </span>
                <span className="font-bold text-xs sm:text-sm truncate">
                  {lang === 'hi' ? activeItem.cleanTitle : activeItem.titleEn}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeItem.image}
                  download
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative w-full h-[60vh] sm:h-[68vh] bg-slate-950 flex items-center justify-center p-2">
              <Image
                src={activeItem.image}
                alt={lang === 'hi' ? activeItem.cleanTitle : activeItem.titleEn}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Modal Caption / Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <p className="line-clamp-2 text-slate-300 max-w-2xl">
                {lang === 'hi' ? activeItem.snippet : activeItem.snippetEn}
              </p>
              <div className="flex items-center gap-3 shrink-0 text-slate-400 text-[11px]">
                <span className="text-amber-400 font-semibold">{activeItem.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-10 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="font-bold text-slate-200 text-sm">
                {lang === 'hi'
                  ? 'कार्यालय: विश्वजीत त्रिपाठी (सोनू तिवारी)'
                  : 'Office of Vishwajeet Tripathi (Sonu Tiwari)'}
              </p>
              <p className="text-slate-500 mt-1">
                {lang === 'hi'
                  ? 'पार्षद - वार्ड 26 (माधोपुर-बेतियाहाता), नगर निगम गोरखपुर, उत्तर प्रदेश'
                  : 'Corporator - Ward 26 (Madhopur-Betiyahata), Nagar Nigam Gorakhpur, UP'}
              </p>
            </div>
            <div className="flex items-center gap-6 font-semibold">
              <Link href="/" className="hover:text-white transition-colors">
                {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
              </Link>
              <Link href="/#jeevan-parichay" className="hover:text-white transition-colors">
                {lang === 'hi' ? 'परिचय' : 'About'}
              </Link>
              <Link href="/#vikas-karya" className="hover:text-white transition-colors">
                {lang === 'hi' ? 'विकास कार्य' : 'Development'}
              </Link>
              <Link href="/gallery" className="hover:text-white transition-colors">
                {lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}
              </Link>
              <Link href="/#jan-sampark" className="hover:text-white transition-colors">
                {lang === 'hi' ? 'संपर्क' : 'Contact'}
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]">
            © {new Date().getFullYear()} विश्वजीत त्रिपाठी (सोनू तिवारी). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
