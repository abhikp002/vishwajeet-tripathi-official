'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Images,
  ZoomIn,
  X,
  Calendar,
  Tag,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Users,
  Building2,
  Phone,
  ArrowLeft,
  Share2,
  Check,
  Download,
  Flame,
  ShieldCheck,
  Sparkles,
  Menu,
  FileText
} from 'lucide-react';

interface GalleryItem {
  id: string;
  image: string;
  titleHi: string;
  titleEn: string;
  source: string;
  category: string;
  categoryKey: 'all' | 'clipping' | 'drainage' | 'action' | 'health' | 'leadership';
  dateHi: string;
  dateEn: string;
  descHi: string;
  descEn: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: '/assets/743081800_27085368861146189_4660532069274368196_n.jpg',
    titleHi: 'बेतियाहाता नाला जलभराव - नाले में उतरकर ऐतिहासिक आरती व सत्याग्रह',
    titleEn: 'Betiyahata Drainage Crisis - Namami Nala Aarti & Historic Satyagraha',
    source: 'अमर उजाला / राष्ट्रीय मीडिया साक्ष्य',
    category: 'जलभराव व नाला सत्याग्रह',
    categoryKey: 'drainage',
    dateHi: 'मानसून 2026',
    dateEn: 'Monsoon 2026',
    descHi: 'जब मानसून में बेतियाहाता की सड़कें और गलियां जलमग्न हो गईं और नगर निगम प्रशासन मूकदर्शक बना रहा, तब पार्षद सोनू तिवारी ने स्वयं नाले में खड़े होकर नमामि नाला आरती की। यह आंदोलन पूरे प्रदेश में चर्चा का केंद्र बना।',
    descEn: 'When municipal authorities ignored massive flooding in Betiyahata, Corporator Sonu Tiwari stepped directly into the filthy flooded drain to perform a peaceful symbolic aarti, compelling immediate civic desilting.',
  },
  {
    id: 'gal-2',
    image: '/assets/795332593_27852400004443067_3113860931798894358_n.jpg',
    titleHi: 'उपनगर आयुक्त के खिलाफ खुला मोर्चा व कोतवाली में प्राथमिकी की मांग',
    titleEn: 'Protest Against Deputy Municipal Commissioner for Neglecting Civic Duties',
    source: 'दैनिक जागरण मुख्य रिपोर्ट',
    category: 'प्रशासनिक जवाबदेही व धरना',
    categoryKey: 'action',
    dateHi: 'सितंबर 2026',
    dateEn: 'September 2026',
    descHi: 'वार्ड 26 की जनसमस्याओं और सफाई व्यवस्था की घोर अनदेखी पर उपनगर आयुक्त के खिलाफ कोतवाली में मुकदमा दर्ज कराने की मांग को लेकर ऐतिहासिक धरना दिया, जिसे शहर के सभी पार्षदों का समर्थन मिला।',
    descEn: 'Demonstration and formal complaint at the city police station demanding strict administrative accountability for public welfare and sanitation in Ward 26.',
  },
  {
    id: 'gal-3',
    image: '/assets/814629880_27832202283129506_40090162660360342_n.jpg',
    titleHi: 'वार्ड में एक मशीन के ही भरोसे फॉगिंग - अमर उजाला की विशेष पड़ताल',
    titleEn: 'Exposing Fogging Machine Shortage During Peak Dengue Outbreak',
    source: 'अमर उजाला फ्रंट पेज हेडलाइन',
    category: 'जनस्वास्थ्य व फॉगिंग',
    categoryKey: 'health',
    dateHi: 'अगस्त 2026',
    dateEn: 'August 2026',
    descHi: 'अमर उजाला की मुख्य खबर बनी जब पार्षद विश्वजीत त्रिपाठी ने खुलासा किया कि पूरे वार्ड में डेंगू-मलेरिया से बचाव के लिए मात्र एक खराब मशीन से खानापूर्ति की जा रही थी। विरोध के बाद नई मशीनें स्वीकृत हुईं।',
    descEn: 'Front-page investigative report in Amar Ujala exposing that the civic body was pretending to fog the entire ward with just a single malfunctioning machine.',
  },
  {
    id: 'gal-4',
    image: '/assets/814629880_27832202283129506_40090162660360342_n.jpg',
    titleHi: 'दैनिक जागरण: वार्ड 26 में नाला निर्माण व जल-निकासी की स्थायी कार्ययोजना',
    titleEn: 'Dainik Jagran: Permanent Drainage Solution Plan for Ward 26',
    source: 'दैनिक जागरण समाचार साक्ष्य',
    category: 'जलभराव व नाला सत्याग्रह',
    categoryKey: 'drainage',
    dateHi: 'अखबार आर्काइव साक्ष्य',
    dateEn: 'Press Archive Evidence',
    descHi: 'सत्याग्रह के बाद नगर निगम प्रशासन द्वारा बेतियाहाता और माधोपुर क्षेत्र में जल-निकासी के लिए व्यापक ड्रेनेज व नाला निर्माण कार्ययोजना को मंजूरी दी गई।',
    descEn: 'Following persistent civic protests, the municipal corporation formally approved comprehensive drainage construction and desilting plans for the ward.',
  },
  {
    id: 'gal-5',
    image: '/assets/795332593_27852400004443067_3113860931798894358_n.jpg',
    titleHi: 'नगर निगम बोर्ड बैठक में 28 सड़कों के नामकरण व वार्ड हक की पुरजोर वकालत',
    titleEn: 'Fierce Stance in Nagar Nigam Board Meeting on Road Naming & Fund Allocation',
    source: 'नगर निगम सदन व प्रेस आर्काइव',
    category: 'प्रशासनिक जवाबदेही व धरना',
    categoryKey: 'action',
    dateHi: 'सदन कार्यवृत्त अभिलेख',
    dateEn: 'Municipal Council Proceedings',
    descHi: 'नगर निगम गोरखपुर की बोर्ड बैठक में 28 सड़कों के नामकरण में भेदभाव और अनियमितताओं पर मजबूती से आवाज उठाई और सभी वार्डों में समान विकास बजट की मांग की।',
    descEn: 'Historic and vocal stand taken during the Nagar Nigam municipal council session to demand impartial fund distribution and proper public road allocation across all wards.',
  },
  {
    id: 'gal-6',
    image: '/assets/743081800_27085368861146189_4660532069274368196_n.jpg',
    titleHi: 'हरीर प्रसाद दुबे मार्ग व अमृत सरोवर निर्माण योजना साक्ष्य',
    titleEn: 'Documentation & Sanction for Harir Prasad Dubey Marg & Amrit Sarovar',
    source: 'नगर निगम कार्ययोजना एवं साक्ष्य',
    category: 'अखबार कटिंग साक्ष्य',
    categoryKey: 'clipping',
    dateHi: 'लागत: ₹2.24 करोड़',
    dateEn: 'Sanction: ₹2.24 Cr',
    descHi: 'लंबे संघर्ष के बाद माधोपुर और बेतियाहाता को जोड़ने वाले ₹2.24 करोड़ के हरीर प्रसाद दुबे मार्ग का नवनिर्माण तथा अमृत सरोवर का समग्र सौंदर्यीकरण स्वीकृत कराया गया।',
    descEn: 'Securing project approval and budget sanction of ₹2.24 Crores for the widening, drainage construction, and beautification of Harir Prasad Dubey Marg and Amrit Sarovar.',
  },
];

export default function GalleryPage() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'all', labelHi: 'सभी छायाचित्र (All)', labelEn: 'All Photos' },
    { id: 'clipping', labelHi: 'अखबार कटिंग साक्ष्य', labelEn: 'Press Clippings' },
    { id: 'drainage', labelHi: 'जलभराव व नाला सत्याग्रह', labelEn: 'Drainage Agitations' },
    { id: 'action', labelHi: 'प्रशासनिक जवाबदेही', labelEn: 'Administrative Accountability' },
    { id: 'health', labelHi: 'जनस्वास्थ्य व फॉगिंग', labelEn: 'Sanitation & Health' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.categoryKey === selectedCategory);

  const handleShare = (item: GalleryItem) => {
    if (navigator.share) {
      navigator.share({
        title: lang === 'hi' ? item.titleHi : item.titleEn,
        text: lang === 'hi' ? item.descHi : item.descEn,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. TOP EXECUTIVE BAR */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 border-b-2 border-brandRed-600 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-medium tracking-wide gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brandRed-500 animate-pulse"></span>
            <span>
              {lang === 'hi'
                ? 'माधोपुर - बेतियाहाता - शहर विधानसभा 322, गोरखपुर | '
                : 'Madhopur - Betiyahata - Assembly 322, Gorakhpur | '}
              <span className="text-amber-400 font-semibold">
                {lang === 'hi' ? 'जन-सुनवाई: प्रतिदिन प्रातः 8:00 से 10:00 बजे' : 'Public Hearing: Daily 8:00 AM to 10:00 AM'}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 rounded border border-slate-700 text-xs font-bold transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            <a
              href="https://facebook.com/sonu.tiwari.125323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded text-xs font-bold transition-transform hover:scale-105"
            >
              <Users className="w-3.5 h-3.5" />
              <span>15K+ {lang === 'hi' ? 'समर्थक' : 'Followers'}</span>
            </a>

            <Link
              href="/#jan-sampark"
              className="text-amber-400 hover:text-white flex items-center gap-1 text-xs font-bold transition-colors"
            >
              <span>{lang === 'hi' ? 'सुझाव / शिकायत पेटी' : 'Grievance Box'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STICKY NAVBAR */}
      <header className="bg-white/95 border-b border-slate-200 sticky top-[41px] sm:top-[37px] z-40 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brandRed-600 to-brandRed-800 flex items-center justify-center text-white font-bold text-base font-display shadow-md group-hover:scale-105 transition-all">
              <span>VT</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 font-display group-hover:text-brandRed-600 transition-colors">
                  {lang === 'hi' ? "विश्वजीत त्रिपाठी 'सोनू'" : "Vishwajeet Tripathi 'Sonu'"}
                </span>
                <span className="px-2 py-0.5 bg-brandRed-50 text-brandRed-700 text-[10px] font-bold rounded-full border border-brandRed-200">
                  {lang === 'hi' ? 'पार्षद, वार्ड 26' : 'Corporator, Ward 26'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {lang === 'hi'
                  ? 'नगर निगम गोरखपुर • माधोपुर - बेतियाहाता'
                  : 'Nagar Nigam Gorakhpur • Madhopur - Betiyahata'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-brandRed-600 transition-colors">
              {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <Link href="/#jeevan-parichay" className="hover:text-brandRed-600 transition-colors">
              {lang === 'hi' ? 'जीवन परिचय' : 'Biography'}
            </Link>
            <Link href="/#sangharsh" className="hover:text-brandRed-600 transition-colors">
              {lang === 'hi' ? 'संघर्ष व जन-मुद्दे' : 'Struggles'}
            </Link>
            <Link href="/#vikas-karya" className="hover:text-brandRed-600 transition-colors">
              {lang === 'hi' ? 'विकास कार्य' : 'Works'}
            </Link>
            <Link href="/media" className="hover:text-brandRed-600 transition-colors">
              {lang === 'hi' ? 'अखबारों में' : 'In Media'}
            </Link>
            <span className="text-brandRed-600 font-bold border-b-2 border-brandRed-600 pb-0.5">
              {lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}
            </span>
            <Link
              href="/#jan-sampark"
              className="bg-brandRed-600 hover:bg-brandRed-700 text-white px-3.5 py-1.5 rounded-lg font-bold shadow-sm transition-all text-xs"
            >
              {lang === 'hi' ? 'सुझाव व संपर्क' : 'Contact'}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-slate-300 bg-slate-100 rounded-lg text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2 font-semibold text-slate-800 shadow-lg text-sm">
            <Link href="/" className="block py-1 hover:text-brandRed-600 border-b border-slate-100">
              {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <Link href="/#jeevan-parichay" className="block py-1 hover:text-brandRed-600 border-b border-slate-100">
              {lang === 'hi' ? 'जीवन परिचय' : 'Biography'}
            </Link>
            <Link href="/#sangharsh" className="block py-1 hover:text-brandRed-600 border-b border-slate-100">
              {lang === 'hi' ? 'संघर्ष व जन-मुद्दे' : 'Struggles'}
            </Link>
            <Link href="/#vikas-karya" className="block py-1 hover:text-brandRed-600 border-b border-slate-100">
              {lang === 'hi' ? 'विकास कार्य' : 'Works'}
            </Link>
            <Link href="/media" className="block py-1 hover:text-brandRed-600 border-b border-slate-100">
              {lang === 'hi' ? 'अखबारों में' : 'In Media'}
            </Link>
            <span className="block py-1 text-brandRed-600 font-bold border-b border-slate-100">
              {lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}
            </span>
            <Link href="/#jan-sampark" className="block bg-brandRed-600 text-white text-center py-2 rounded-lg font-bold">
              {lang === 'hi' ? 'सुझाव / शिकायत दर्ज करें' : 'Submit Grievance'}
            </Link>
          </div>
        )}
      </header>

      {/* 3. HERO EXECUTIVE BANNER */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-12 px-4 border-b-4 border-brandRed-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-brandRed-600/30 border border-brandRed-500 text-amber-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <Images className="w-3.5 h-3.5" />
                <span>
                  {lang === 'hi'
                    ? 'दस्तावेजी साक्ष्य एवं छायाचित्र आर्काइव'
                    : 'Documentary Evidence & Photo Archive'}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
                {lang === 'hi'
                  ? 'फोटो गैलरी: जन-आंदोलन एवं मीडिया साक्ष्य'
                  : 'Photo Gallery: Grassroots Movements & Press Archives'}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-2 leading-relaxed">
                {lang === 'hi'
                  ? 'अमर उजाला, दैनिक जागरण एवं राष्ट्रीय प्रेस में प्रकाशित वास्तविक रिपोर्ट, नाला सत्याग्रह, जनस्वास्थ्य फॉगिंग पड़ताल और वार्ड 26 के विकास साक्ष्य।'
                  : 'High-resolution newspaper clippings, peaceful agitations, drainage satyagraha, fogging scam exposés, and development evidence in Gorakhpur Ward 26.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/media"
                className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Newspaper className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? 'समाचार व मीडिया' : 'News & Media'}</span>
              </Link>
              <Link
                href="/"
                className="bg-brandRed-600 hover:bg-brandRed-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{lang === 'hi' ? 'मुख्य पृष्ठ पर वापस' : 'Back to Home'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATEGORY FILTERS */}
      <section className="bg-white border-b border-slate-200 sticky top-[95px] sm:top-[85px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-brandRed-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{lang === 'hi' ? cat.labelHi : cat.labelEn}</span>
                {cat.id === 'all' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat.id ? 'bg-brandRed-800 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    {GALLERY_ITEMS.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-brandRed-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Thumbnail Image with Hover Lightbox Trigger */}
                <div
                  onClick={() => setActiveImage(item)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={lang === 'hi' ? item.titleHi : item.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="bg-slate-900/90 text-amber-400 backdrop-blur-sm text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700/80 shadow">
                      {item.category}
                    </span>
                    <span className="bg-brandRed-600/90 text-white backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {lang === 'hi' ? item.dateHi : item.dateEn}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/40">
                    <span className="bg-brandRed-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg transform group-hover:scale-105 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'बड़ा देखें (Zoom In)' : 'View Full Image'}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] font-bold text-brandRed-700 uppercase tracking-wide">
                    {item.source}
                  </div>

                  <h3
                    onClick={() => setActiveImage(item)}
                    className="text-base font-bold font-display text-slate-900 leading-snug group-hover:text-brandRed-600 transition-colors cursor-pointer"
                  >
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <button
                  onClick={() => setActiveImage(item)}
                  className="text-brandRed-600 hover:text-brandRed-700 flex items-center gap-1 transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'साक्ष्य देखें' : 'Examine Proof'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={item.image}
                    download={`Vishwajeet-Evidence-${item.id}.jpg`}
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                    title={lang === 'hi' ? 'डाउनलोड करें' : 'Download Photo'}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleShare(item)}
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                    title={lang === 'hi' ? 'शेयर करें' : 'Share'}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'पारदर्शिता एवं प्रमाण' : 'Transparency & Public Verification'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {lang === 'hi'
                ? 'वार्ड 26 की किसी भी समस्या पर तुरंत शिकायत दर्ज करें'
                : 'Need immediate civic assistance in Ward 26?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {lang === 'hi'
                ? 'जलभराव, सीवर, सफाई या सड़क की समस्या होने पर जन-सुनवाई फॉर्म भरें या सीधे व्हाट्सएप पर संपर्क करें।'
                : 'Submit your grievance directly to the corporator office for prompt municipal action.'}
            </p>
          </div>

          <Link
            href="/#jan-sampark"
            className="shrink-0 bg-brandRed-600 hover:bg-brandRed-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
          >
            {lang === 'hi' ? 'शिकायत / सुझाव दर्ज करें' : 'Submit Grievance Form'}
          </Link>
        </div>
      </main>

      {/* 6. FULLSCREEN LIGHTBOX MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-xs font-bold text-brandRed-700 bg-brandRed-50 px-2.5 py-0.5 rounded-full border border-brandRed-200">
                  {activeImage.source}
                </span>
                <h3 className="font-display font-bold text-base sm:text-xl text-slate-900 mt-1">
                  {lang === 'hi' ? activeImage.titleHi : activeImage.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-brandRed-600 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image View */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] w-full bg-slate-950 flex items-center justify-center p-2">
              <Image
                src={activeImage.image}
                alt={lang === 'hi' ? activeImage.titleHi : activeImage.titleEn}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <p className="text-slate-700 leading-relaxed max-w-2xl font-normal">
                {lang === 'hi' ? activeImage.descHi : activeImage.descEn}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeImage.image}
                  download={`Vishwajeet-Proof-${activeImage.id}.jpg`}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'डाउनलोड' : 'Download'}</span>
                </a>
                <button
                  onClick={() => handleShare(activeImage)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-300"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'शेयर' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copied Link Alert */}
      {copiedLink && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700">
          <Check className="w-4 h-4 text-green-400" />
          <span>{lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!'}</span>
        </div>
      )}

      {/* 7. EXECUTIVE FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-800 pb-8">
            <div className="md:col-span-6 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brandRed-600 text-white font-bold flex items-center justify-center text-lg font-display">
                  VT
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  {lang === 'hi' ? "विश्वजीत त्रिपाठी 'सोनू'" : "Vishwajeet Tripathi 'Sonu'"}
                </h3>
              </div>
              <p className="text-sm text-slate-300">
                {lang === 'hi'
                  ? 'पार्षद - वार्ड 26 (माधोपुर - बेतियाहाता), नगर निगम गोरखपुर (उ.प्र.)'
                  : 'Corporator - Ward 26 (Madhopur - Betiyahata), Nagar Nigam Gorakhpur (UP)'}
              </p>
              <div className="text-xs text-amber-400 font-semibold">
                {lang === 'hi'
                  ? '"अन्याय के खिलाफ, जनता के साथ • गोरखपुर का समग्र विकास"'
                  : '"Against Injustice, With the People • Comprehensive Development of Gorakhpur"'}
              </div>
            </div>

            <div className="md:col-span-6 md:text-right space-y-3 text-center md:text-right">
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs font-bold text-slate-300">
                <Link href="/" className="hover:text-white transition-colors">{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</Link>
                <span>•</span>
                <Link href="/#jeevan-parichay" className="hover:text-white transition-colors">{lang === 'hi' ? 'जीवन परिचय' : 'Biography'}</Link>
                <span>•</span>
                <Link href="/#sangharsh" className="hover:text-white transition-colors">{lang === 'hi' ? 'संघर्ष' : 'Struggles'}</Link>
                <span>•</span>
                <Link href="/#vikas-karya" className="hover:text-white transition-colors">{lang === 'hi' ? 'विकास कार्य' : 'Works'}</Link>
                <span>•</span>
                <Link href="/media" className="hover:text-white transition-colors">{lang === 'hi' ? 'मीडिया' : 'Media'}</Link>
                <span>•</span>
                <Link href="/#jan-sampark" className="hover:text-white transition-colors">{lang === 'hi' ? 'संपर्क' : 'Contact'}</Link>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <a
                  href="https://facebook.com/sonu.tiwari.125323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>15K+ {lang === 'hi' ? 'फेसबुक समर्थक' : 'Facebook Followers'}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center">
            <div>© 2025-2026 {lang === 'hi' ? 'कार्यालय विश्वजीत त्रिपाठी (सोनू तिवारी). सर्वाधिकार सुरक्षित।' : 'Office of Vishwajeet Tripathi. All Rights Reserved.'}</div>
            <div>{lang === 'hi' ? 'नगर निगम गोरखपुर • शहर विधानसभा 322' : 'Nagar Nigam Gorakhpur • Assembly 322'}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
