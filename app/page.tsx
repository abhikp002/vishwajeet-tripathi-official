'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Megaphone,
  Flame,
  Newspaper,
  Award,
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  Copy,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Share2,
  ZoomIn,
  X,
  AlertCircle,
  Menu,
  FileText,
  Languages,
  Check,
  TrendingUp,
  Activity,
  Compass,
  ArrowRight,
  CheckCircle,
  MessageSquareQuote,
  Shield,
  Briefcase,
  Images
} from 'lucide-react';

interface RecentNewsItem {
  id: string;
  category: string;
  badgeBg: string;
  titleHi: string;
  titleEn: string;
  snippetHi: string;
  snippetEn: string;
  image: string;
}

const RECENT_NEWS: RecentNewsItem[] = [
  {
    id: 'news-recent-1',
    category: 'जनहित व राजनीतिक संवाद',
    badgeBg: 'bg-red-600 text-white',
    titleHi: 'यूपी: पार्षद ने सांसद रवि किशन को घेरा, वीडियो वायरल; तावड़े ने दिल्ली बुलाया, अखिलेश बोले-बनेगी सपा सरकार',
    titleEn: 'Video Viral: Corporator Confronts MP Ravi Kishan Over Waterlogging; Tawde Calls to Delhi',
    snippetHi: 'शहर में बारिश से जलभराव पर भाजपा पार्षद विश्वजीत त्रिपाठी और सदर सांसद के बीच बातचीत का वीडियो वायरल। प्रदेश प्रभारी विनोद तावड़े ने पार्षद से फोन कर बातचीत की और दिल्ली बुलाया। सपा मुखिया अखिलेश यादव का भी बयान सामने आया।',
    snippetEn: 'Following the viral video of Corporator Vishwajeet Tripathi confronting MP Ravi Kishan over severe city waterlogging, BJP State Incharge Vinod Tawde engaged the corporator for dialogue in Delhi.',
    image: '/assets/news/news-viral-video-ravi-kishan-tawde-akhilesh.png',
  },
  {
    id: 'news-recent-2',
    category: 'जनहित व जलभराव',
    badgeBg: 'bg-rose-600 text-white',
    titleHi: "गोरखपुर: सांसद रविकिशन ने पार्षद को फोन कर पूछा- 'सपा ज्वाइन कई लेहला का?'",
    titleEn: 'Gorakhpur: Fiery Phone Debate Between MP Ravi Kishan and Corporator Vishwajeet Tripathi',
    snippetHi: 'गोरखपुर में भारी बारिश के बाद जलभराव पर बेतियाहाता वार्ड के पार्षद विश्वजीत त्रिपाठी ने सांसद रवि किशन को फोन कर शहर के विकट हालातों की जानकारी दी और जल निकासी पर तीखी नोकझोंक हुई।',
    snippetEn: 'Corporator Vishwajeet Tripathi called MP Ravi Kishan regarding severe urban waterlogging and drainage issues, leading to an intense exchange on public accountability.',
    image: '/assets/news/news-abp-ravi-kishan-phone-debate-waterlogging.png',
  },
  {
    id: 'news-1',
    category: 'जल निकासी व ड्रेनेज',
    badgeBg: 'bg-blue-600 text-white',
    titleHi: 'एक जाली ने बढ़ाई दस वार्डों की मुश्किलें, समय पर फैसले से मिली राहत',
    titleEn: 'Prompt Action at Padleyganj Drain Mesh Brings Relief to Ten Wards',
    snippetHi: 'पैडलेगंज गौतम बुद्ध द्वार के पास नाले पर लगी जाली से जल निकासी अवरुद्ध होने पर पार्षद विश्वजीत त्रिपाठी और रितेश सिंह ने मौके पर पहुंचकर अधिकारियों को स्थिति से अवगत कराया और जाली हटवाकर दस वार्डों को जलभराव से मुक्ति दिलाई।',
    snippetEn: 'Corporator Vishwajeet Tripathi inspected the choked drain mesh near Padleyganj with officials, getting the obstruction cleared to resolve waterlogging across ten wards.',
    image: '/assets/news/743081800_27085368861146189_4660532069274368196_n.jpg',
  },
  {
    id: 'news-2',
    category: 'सांस्कृतिक व धरोहर',
    badgeBg: 'bg-amber-600 text-white',
    titleHi: 'तेरह साल बाद पुस्तकालय को मिला राहुल सांकृत्यायन का नाम',
    titleEn: 'Historic Municipal E-Library Named After Rahul Sankrityayan After 13 Years',
    snippetHi: 'नगर निगम सदन की बैठक में पार्षद विश्वजीत त्रिपाठी ने ऐतिहासिक ई-लाइब्रेरी पर महापंडित राहुल सांकृत्यायन का नाम अंकित कराने का मुद्दा मजबूती से उठाया, जिसके बाद साइनबोर्ड लगाकर नाम स्थापित किया गया।',
    snippetEn: 'In the Municipal Corporation House, Corporator Vishwajeet Tripathi forcefully championed naming the historic e-library after Mahapandit Rahul Sankrityayan.',
    image: '/assets/news/795332593_27852400004443067_3113860931798894358_n.jpg',
  },
  {
    id: 'news-3',
    category: 'सड़क व अवसंरचना',
    badgeBg: 'bg-emerald-600 text-white',
    titleHi: 'चर्चा में रही बेतियाहाता की सड़क भी बनेगी',
    titleEn: '₹1.02 Crore Approved for Betiyahata Road After Ground Demonstration',
    snippetHi: 'पार्षद विश्वजीत त्रिपाठी द्वारा बारिश के बाद जलमग्न सड़क के बीच बैठकर किए गए जोरदार प्रदर्शन के बाद फलमंडी पुलिस चौकी से राजीव नगर तक 500 मीटर सड़क निर्माण हेतु 1.02 करोड़ रुपये की स्वीकृति मिली।',
    snippetEn: 'Following Corporator Vishwajeet Tripathi\'s direct on-ground protest in waterlogged streets, ₹1.02 crore was sanctioned for constructing the 500m road from Fruit Market to Rajiv Nagar.',
    image: '/assets/news/WhatsApp Image 2026-09-24 at 16.14.13.jpeg',
  },
  {
    id: 'news-4',
    category: 'सड़क व अवसंरचना',
    badgeBg: 'bg-emerald-600 text-white',
    titleHi: '2.24 करोड़ से बहुरेंगे हरिहर प्रसाद दुबे मार्ग के दिन',
    titleEn: '₹2.24 Crore Sanctioned for Harihar Prasad Dubey Marg Reconstruction',
    snippetHi: 'रुस्तमपुर ढाले से आंबेडकर चौराहे तक अत्यंत जर्जर हरिहर प्रसाद दुबे मार्ग के निर्माण हेतु क्षेत्रीय पार्षद विश्वजीत त्रिपाठी के सदन और सड़क पर निरंतर संघर्ष के बाद 2.24 करोड़ रुपये की वित्तीय स्वीकृति मिली।',
    snippetEn: 'Persistent advocacy and protests by Corporator Vishwajeet Tripathi led to the approval of ₹2.24 crore for the reconstruction of Harihar Prasad Dubey Marg from Rustampur to Ambedkar Chowk.',
    image: '/assets/news/WhatsApp Image 2026-09-24 at 16.18.42 (1).jpeg',
  },
];

const HOMEPAGE_GALLERY = [
  {
    id: 'hgal-1',
    image: '/assets/news/743081800_27085368861146189_4660532069274368196_n.jpg',
    source: 'अमर उजाला / राष्ट्रीय मीडिया साक्ष्य',
    tag: 'जलभराव सत्याग्रह',
    titleHi: 'बेतियाहाता नाले की आरती व ऐतिहासिक जलभराव आंदोलन',
    titleEn: 'Betiyahata Nala Aarti & Historic Drainage Agitation',
    descHi: 'मानसून में जब पूरा बेतियाहाता जलमग्न हुआ, तब सोनू तिवारी ने नाले में खड़े होकर नमामि नाला आरती की।',
    descEn: 'Sonu Tiwari performed Nala Aarti in flooded drain, prompting immediate municipal desilting.',
  },
  {
    id: 'hgal-2',
    image: '/assets/news/795332593_27852400004443067_3113860931798894358_n.jpg',
    source: 'दैनिक जागरण मुख्य रिपोर्ट',
    tag: 'प्रशासनिक जवाबदेही',
    titleHi: 'उपनगर आयुक्त के खिलाफ खुला मोर्चा व कोतवाली में मांग',
    titleEn: 'Protest Against Deputy Municipal Commissioner for Neglect',
    descHi: 'वार्ड 26 की समस्याओं की अनदेखी पर कोतवाली में मुकदमा दर्ज कराने की मांग को लेकर ऐतिहासिक धरना।',
    descEn: 'Historical protest and formal complaint at city police station against administrative apathy.',
  },
  {
    id: 'hgal-3',
    image: '/assets/news/814629880_27832202283129506_40090162660360342_n.jpg',
    source: 'अमर उजाला फ्रंट पेज हेडलाइन',
    tag: 'जनस्वास्थ्य सुरक्षा',
    titleHi: 'वार्ड में एक मशीन के ही भरोसे हो रही फॉगिंग की पड़ताल',
    titleEn: 'Investigative Report on Fogging Machinery Shortage',
    descHi: 'डेंगू-मलेरिया सीजन में मात्र एक खराब मशीन के भरोसे खानापूर्ति की अमर उजाला द्वारा पड़ताल।',
    descEn: 'Front-page investigation exposing single fogging machine for entire municipal ward.',
  },
  {
    id: 'hgal-4',
    image: '/assets/news/WhatsApp Image 2026-09-24 at 16.14.13.jpeg',
    source: 'दैनिक जागरण समाचार साक्ष्य',
    tag: 'ड्रेनेज व जल-निकासी',
    titleHi: 'वार्ड 26 में ड्रेनेज निर्माण व जलभराव की स्थायी कार्ययोजना',
    titleEn: 'Permanent Drainage Infrastructure Plan for Ward 26',
    descHi: 'सत्याग्रह के बाद नगर निगम द्वारा बेतियाहाता-माधोपुर में नाला निर्माण की स्वीकृति।',
    descEn: 'Municipal sanction for comprehensive drainage infrastructure following citizen agitation.',
  },
  {
    id: 'hgal-5',
    image: '/assets/news/WhatsApp Image 2026-09-24 at 16.18.42 (1).jpeg',
    source: 'नगर निगम सदन आर्काइव',
    tag: 'सदन में दहाड़',
    titleHi: '28 सड़कों के नामकरण व वार्ड विकास निधि पर सदन में बहस',
    titleEn: 'Vocal Council Stance on Road Naming & Equitable Ward Budget',
    descHi: 'नगर निगम की बोर्ड बैठक में 28 सड़कों के नामकरण में भेदभाव पर कड़ा विरोध दर्ज कराया।',
    descEn: 'Advocating for fair distribution of infrastructure projects and equal ward rights.',
  },
  {
    id: 'hgal-6',
    image: '/assets/news/WhatsApp Image 2026-09-24 at 19.18.47.jpeg',
    source: 'कार्ययोजना व बजट साक्ष्य',
    tag: 'धरातल पर विकास',
    titleHi: '₹2.24 Cr हरिहर प्रसाद दुबे मार्ग व अमृत सरोवर निर्माण योजना',
    titleEn: 'Documentation of ₹2.24 Cr Harihar Prasad Dubey Marg',
    descHi: 'माधोपुर और बेतियाहाता को जोड़ने वाले प्रमुख मार्ग व जल निकासी के कायाकल्प की स्वीकृति।',
    descEn: 'Sanction and budget documentation for key road reconstruction and drainage improvement.',
  },
];

export default function HomePage() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mohalla: 'बेतियाहाता (Betiyahata)',
    category: 'जलभराव व नाली सफाई (Drainage & Waterlogging)',
    problem: '',
  });

  const t = {
    hi: {
      topBar: "माधोपुर - बेतियाहाता - शहर विधानसभा 322, गोरखपुर",
      janSunwai: "जन-सुनवाई: प्रतिदिन प्रातः 8:00 से 10:00 बजे",
      fbFollowers: "15K+ फेसबुक समर्थक",
      reportIssue: "सुझाव / शिकायत पेटी",
      name: "विश्वजीत त्रिपाठी 'सोनू'",
      titleBadge: "पार्षद, वार्ड 26",
      role: "पार्षद - नगर निगम गोरखपुर | वार्ड 26 (माधोपुर - बेतियाहाता)",
      nav: {
        home: "मुख्य पृष्ठ",
        bio: "जीवन परिचय",
        works: "विकास कार्य",
        media: "अखबारों में",
        gallery: "फोटो गैलरी",
        contact: "सुझाव व संपर्क",
      },
      hero: {
        badge: "जन-सेवा • निष्पक्षता • विकास",
        tag: "जन-सेवा एवं सामाजिक सरोकार • वार्ड 26 (माधोपुर - बेतियाहाता)",
        h1Line1: "अन्याय के खिलाफ,",
        h1Line2: "जनता के साथ।",
        h2: "पार्षद विश्वजीत त्रिपाठी 'सोनू'",
        p: "नगर निगम में भ्रष्टाचार के खिलाफ बुलंद आवाज, वार्ड 26 (माधोपुर - बेतियाहाता) की हर गली-मोहल्ले की समस्याओं के त्वरित समाधान और आम नागरिक के हक व सम्मान के लिए निरंतर सेवारत।",
        cta1: "प्रमुख विकास कार्य देखें",
        cta2: "समस्या / सुझाव दर्ज करें",
        fbVerified: "15,000+ से अधिक सक्रिय समर्थक एवं नागरिक जुड़ाव",
        quote: "मेरे लिए राजनीति पद पाने का साधन नहीं, बल्कि अंतिम पंक्ति के नागरिक के सम्मान व अधिकारों की रक्षा का माध्यम है।",
        cardBadge1: "निष्पक्ष जन-प्रतिनिधि",
        cardBadge2: "वार्ड 26 गोरखपुर",
        sealWard: "वार्ड 26",
        sealCity: "गोरखपुर",
        sealRole: "पार्षद कार्यालय",
      },
      stats: {
        s1Value: "15,000+",
        s1Label: "जनता का सीधा समर्थन",
        s1Sub: "फेसबुक व वार्ड स्तर पर जुड़ाव",
        s2Value: "70+",
        s2Label: "अखबारों में प्रमुख सुर्खियां",
        s2Sub: "अमर उजाला, जागरण, हिंदुस्तान",
        s3Value: "28",
        s3Label: "सड़कों के नामकरण पर बहस",
        s3Sub: "सदन में जनता के हक की आवाज",
        s4Value: "5+ वर्ष",
        s4Label: "निरंतर जन-सेवा",
        s4Sub: "हर मोड़ पर नागरिकों के साथ",
      },
      bio: {
        tag: "व्यक्तिगत परिचय व दृष्टिकोण",
        title: "गोरखपुर की माटी से उपजा, जनता का सच्चा सेवक",
        nameFull: "विश्वजीत त्रिपाठी (सोनू तिवारी)",
        roleTag: "पार्षद, वार्ड 26 (माधोपुर - बेतियाहाता)",
        p1: "गोरखपुर शहर के बेतियाहाता और माधोपुर की गलियों में पले-बढ़े विश्वजीत त्रिपाठी 'सोनू' छात्र जीवन से ही जन-सरोकारों, सामाजिक न्याय और अन्याय के खिलाफ मुखर रहे हैं।",
        p2: "उन्होंने अपनी प्रारंभिक व माध्यमिक शिक्षा गोरखपुर के प्रतिष्ठित एम.जी. इंटर कॉलेज (M.G. Inter College Gorakhpur) से पूर्ण की और तत्पश्चात दीनदयाल उपाध्याय गोरखपुर विश्वविद्यालय (D.D.U. Gorakhpur) से उच्च शिक्षा प्राप्त की। युवावस्था से ही वे सामाजिक कार्यों व नागरिक समस्याओं के निवारण हेतु सक्रिय रहे हैं।",
        p3: "नगर निगम गोरखपुर के वार्ड 26 (माधोपुर - बेतियाहाता) से पार्षद निर्वाचित होने के बाद वे बिना किसी पूर्वाग्रह के निष्पक्ष भाव से केवल जनता के हक, जलभराव से मुक्ति, सफाई, प्रकाश और विकास के लिए समर्पित हैं।",
        eduLabel: "शिक्षा संस्थान:",
        eduValue: "M.G. Inter College & D.D.U. गोरखपुर विश्वविद्यालय",
        ideologyLabel: "कार्यशैली:",
        ideologyValue: "निष्पक्ष जनसेवा • जन-सरोकार • पारदर्शी विकास",
        pledgeTitle: "संकल्प: जन-सेवा ही सर्वोपरि धर्म",
        pledgeText: "जब तक वार्ड के अंतिम व्यक्ति तक शुद्ध पानी, पक्की सड़क, बेहतर जल निकासी और सम्मानजनक जीवन का अधिकार नहीं पहुँच जाता, मेरा संघर्ष हर स्तर पर जारी रहेगा।",
        pillarsTitle: "प्रमुख कार्य सिद्धांत",
        pillar1: "निर्भीक आवाज: अफसरशाही व भ्रष्टाचार के खिलाफ सदन से सड़क तक बेबाक वार।",
        pillar2: "जमीनी मौजूदगी: हर जलभराव, संक्रामक रोग या संकट के समय खुद मौके पर उपस्थिति।",
        pillar3: "पारदर्शिता: नगर निगम के विकास कार्यों पर 'जनता ऑडिट' और गुणवत्ता की सतत निगरानी।",
      },
      works: {
        tag: "विकास के मील के पत्थर",
        title: "वार्ड 26 में प्रमुख विकास कार्य",
        sub: "सड़क, नाली, प्रकाश और जन-स्वास्थ्य - हर योजना पर जनता की सीधी निगरानी",
        w1Status: "स्वीकृत व प्रगति पर",
        w1Budget: "लागत: ₹2.24 Cr",
        w1Title: "हरीर प्रसाद दुबे मार्ग व अमृत सरोवर निर्माण",
        w1Desc: "माधोपुर और बेतियाहाता को जोड़ने वाले प्रमुख संपर्क मार्ग का चौड़ीकरण, इंटरलॉकिंग, आरसीसी नाला और अमृत सरोवर का समग्र कायाकल्प।",
        w1Note: "गुणवत्ता व समयसीमा की प्रत्यक्ष निगरानी",
        w2Status: "धरातल पर क्रियान्वयन",
        w2Tag: "वार्ड 26",
        w2Title: "नाली-जाल, ड्रेनेज व जल निकासी तंत्र",
        w2Desc: "बेतियाहाता व माधोपुर के मुख्य नाले की सिल्ट सफाई, नए ढक्कन लगाना तथा मानसून से पहले जलभराव से मुक्ति हेतु युद्धस्तर पर कार्य।",
        w2Note: "नागरिक शिकायत पर त्वरित कार्रवाई",
        w3Status: "सतत जन-अभियान",
        w3Tag: "जन-स्वास्थ्य",
        w3Title: "स्वच्छता, फॉगिंग व स्वास्थ्य सुरक्षा",
        w3Desc: "वार्ड की हर गली में नियमित रोस्टर से फॉगिंग व एंटी-लार्वा छिड़काव, डोर-टू-डोर कूड़ा निस्तारण और ब्लीचिंग छिड़काव सुनिश्चित किया गया।",
        w3Note: "सफाई मित्रों का सहयोग व निरीक्षण",
        auditTag: "जनता ऑडिट प्रणाली",
        auditTitle: "जनता भी रखेगी नगर निगम के निर्माण कार्यों पर नजर",
        auditDesc: "वार्ड में होने वाले किसी भी निर्माण कार्य की गुणवत्ता खराब दिखे, तो सीधे पार्षद कार्यालय को सूचित करें।",
        auditBtn: "घटिया निर्माण की शिकायत दर्ज करें",
      },
      media: {
        tag: "राष्ट्रीय व प्रांतीय मीडिया में गूंज",
        title: "प्रमुख समाचार पत्रों में प्रकाशित सुर्खियां",
        sub: "अमर उजाला, दैनिक जागरण, हिंदुस्तान, दैनिक भास्कर व राष्ट्रीय सहारा में प्रकाशित वास्तविक समाचार कतरनें एवं साक्ष्य",
        viewClipping: "देखें",
        readStory: "विस्तृत विवरण देखें",
      },
      gallery: {
        tag: "छायाचित्र एवं दस्तावेजी साक्ष्य",
        title: "फोटो गैलरी: जन-आंदोलन एवं साक्ष्य",
        sub: "अमर उजाला व दैनिक जागरण में प्रकाशित ओरिजिनल अखबार की कटिंग व तस्वीरें बड़े आकार में देखने के लिए क्लिक करें",
        zoomBtn: "बड़ा देखें",
        viewAllBtn: "पूरी फोटो गैलरी व सभी साक्ष्य देखें (View All Photos)",
      },
      contact: {
        tag: "सुझाव व समस्या निवारण",
        title: "जन-सुनवाई एवं संपर्क कार्यालय",
        sub: "माधोपुर और बेतियाहाता के हर नागरिक की समस्या का त्वरित समाधान हमारा संकल्प है",
        officeHeading: "पार्षद कार्यालय विवरण",
        addressLabel: "कार्यालय पता:",
        addressValue: "वार्ड 26 (माधोपुर - बेतियाहाता), नगर निगम गोरखपुर, उत्तर प्रदेश - 273001",
        timingsLabel: "जन-सुनवाई समय:",
        timingsValue: "प्रतिदिन प्रातः 08:00 बजे से 10:00 बजे तक (कार्यालय में प्रत्यक्ष मुलाकात)",
        fbLabel: "आधिकारिक फेसबुक:",
        emergencyTitle: "जलभराव या आपातकालीन समस्या?",
        emergencyDesc: "वार्ड में सीवर चोक, नाला ओवरफ्लो या बिजली/सड़क समस्या पर तत्काल फॉर्म भरकर व्हाट्सएप पर साझा करें।",
        formHeading: "अपनी समस्या / सुझाव दर्ज करें",
        formSub: "यह फॉर्म तुरंत आपके लिए एक सुव्यवस्थित प्रारूप तैयार करेगा जिसे आप कॉपी या व्हाट्सएप कर सकते हैं।",
        nameLabel: "आपका पूरा नाम *",
        namePlaceholder: "उदा. अमित त्रिपाठी",
        phoneLabel: "मोबाइल नंबर *",
        phonePlaceholder: "उदा. 94XXXXXXXX",
        mohallaLabel: "मोहल्ला / क्षेत्र *",
        categoryLabel: "समस्या की श्रेणी *",
        problemLabel: "समस्या का विस्तृत विवरण *",
        problemPlaceholder: "कृपया अपनी समस्या, सटीक स्थान/लैंडमार्क और आवश्यक कार्रवाई का विवरण लिखें...",
        btnCopy: "संदेश कॉपी करें (Copy Draft)",
        btnCopied: "संदेश कॉपी हो गया!",
        btnWhatsapp: "व्हाट्सएप पर भेजें",
        copySuccess: "✓ आपका आवेदन पत्र तैयार कर क्लिपबोर्ड पर कॉपी कर लिया गया है। इसे किसी भी माध्यम से साझा कर सकते हैं।",
      },
      footer: {
        title: "विश्वजीत त्रिपाठी 'सोनू'",
        role: "पार्षद - वार्ड 26 (माधोपुर - बेतियाहाता), नगर निगम गोरखपुर (उ.प्र.)",
        tagline: "अन्याय के खिलाफ, जनता के साथ • गोरखपुर का समग्र विकास",
        copyright: "© 2025-2026 कार्यालय विश्वजीत त्रिपाठी (सोनू तिवारी). सर्वाधिकार सुरक्षित।",
        city: "नगर निगम गोरखपुर • शाहर विधानसभा 322",
      }
    },
    en: {
      topBar: "Madhopur - Betiyahata - Assembly 322, Gorakhpur",
      janSunwai: "Public Hearing: Daily 8:00 AM to 10:00 AM",
      fbFollowers: "15K+ Facebook Community",
      reportIssue: "Suggestion / Grievance Box",
      name: "Vishwajeet Tripathi 'Sonu'",
      titleBadge: "Corporator, Ward 26",
      role: "Corporator - Nagar Nigam Gorakhpur | Ward 26 (Madhopur - Betiyahata)",
      nav: {
        home: "Home",
        bio: "Biography",
        works: "Development",
        media: "In Media",
        gallery: "Photo Gallery",
        contact: "Contact & Grievance",
      },
      hero: {
        badge: "PUBLIC SERVICE • INTEGRITY • PROGRESS",
        tag: "Dedicated to Public Service • Ward 26 (Madhopur - Betiyahata)",
        h1Line1: "Against Injustice,",
        h1Line2: "With the People.",
        h2: "Corporator Vishwajeet Tripathi 'Sonu'",
        p: "A fearless voice against civic irregularities, dedicated to the prompt resolution of grassroots challenges in Ward 26 (Madhopur - Betiyahata) and safeguarding citizens' rights and dignity.",
        cta1: "View Development Works",
        cta2: "Submit Grievance / Suggestion",
        fbVerified: "15,000+ Active Followers & Citizens Connected",
        quote: "For me, public service is not about holding office; it is about standing with the last person in the queue and protecting their dignity and rights.",
        cardBadge1: "Independent Representative",
        cardBadge2: "Ward 26 Gorakhpur",
        sealWard: "Ward 26",
        sealCity: "Gorakhpur",
        sealRole: "Office of Corporator",
      },
      stats: {
        s1Value: "15,000+",
        s1Label: "Direct Public Connect",
        s1Sub: "On Facebook & Grassroots",
        s2Value: "70+",
        s2Label: "Headlines in Daily Press",
        s2Sub: "Amar Ujala, Jagran, Hindustan",
        s3Value: "28",
        s3Label: "Roads Allocation Debate",
        s3Sub: "Historic stance in Council",
        s4Value: "5+ Years",
        s4Label: "Dedicated Public Service",
        s4Sub: "Always present with citizens",
      },
      bio: {
        tag: "Personal Biography & Vision",
        title: "Rooted in Gorakhpur, Dedicated to Public Service",
        nameFull: "Vishwajeet Tripathi (Sonu Tiwari)",
        roleTag: "Corporator, Ward 26 (Madhopur - Betiyahata)",
        p1: "Born and raised in the historic neighbourhoods of Betiyahata and Madhopur in Gorakhpur, Vishwajeet Tripathi aka 'Sonu' has been at the forefront of social justice, public grievance redressal, and standing up against unfair practices since his student years.",
        p2: "He completed his education from the renowned M.G. Inter College Gorakhpur and pursued higher studies at Deen Dayal Upadhyaya Gorakhpur University (D.D.U.). Since his youth, he has remained actively engaged in community welfare and civic development.",
        p3: "As the elected Corporator for Ward 26 (Madhopur - Betiyahata), he works with complete dedication—focusing purely on citizen welfare, flood relief, sanitation, street lighting, and transparent governance.",
        eduLabel: "Alma Mater:",
        eduValue: "M.G. Inter College & D.D.U. Gorakhpur University",
        ideologyLabel: "Working Ethos:",
        ideologyValue: "Impartial Service • Grassroots Action • Transparency",
        pledgeTitle: "Pledge: Public Service Above All",
        pledgeText: "Until the last citizen in the ward receives clean water, paved roads, efficient drainage, and respectful civic treatment, my dedication to the people will continue undeterred.",
        pillarsTitle: "Core Operating Principles",
        pillar1: "Fearless Voice: Standing firmly against bureaucratic apathy and corruption.",
        pillar2: "Ground Presence: Personally present on site during floods, health emergencies, and civic crises.",
        pillar3: "Total Transparency: Citizen audit on civic development works and budget execution.",
      },
      works: {
        tag: "Development Milestones",
        title: "Key Infrastructure Works in Ward 26",
        sub: "Roads, drainage, LED lighting, and public health—under direct citizen supervision",
        w1Status: "Sanctioned & In Progress",
        w1Budget: "Budget: ₹2.24 Cr",
        w1Title: "Harir Prasad Dubey Marg & Amrit Sarovar Project",
        w1Desc: "Widening of key connector road linking Madhopur and Betiyahata, interlocking tiles, RCC storm-water drain, and ecological restoration of Amrit Sarovar.",
        w1Note: "Direct monitoring of build quality & timeline",
        w2Status: "Ground Execution",
        w2Tag: "Ward 26",
        w2Title: "Drainage Network & Waterlogging Prevention",
        w2Desc: "Desilting of major drains in Betiyahata & Madhopur, heavy-duty covers installation, and pre-monsoon storm-water channels.",
        w2Note: "Action within 24 hours of citizen report",
        w3Status: "Ongoing Campaign",
        w3Tag: "Public Health",
        w3Title: "Sanitation, Fogging & Anti-Larva Drive",
        w3Desc: "Scheduled weekly fogging across every lane, anti-larva spraying, door-to-door garbage collection, and bleaching powder distribution.",
        w3Note: "Collaborative inspection with sanitation team",
        auditTag: "Citizen Audit System",
        auditTitle: "Citizens Will Keep Direct Vigil on Municipal Construction",
        auditDesc: "If you notice sub-standard material or poor construction anywhere in the ward, report it directly to the Corporator's office.",
        auditBtn: "Report Sub-Standard Construction",
      },
      media: {
        tag: "In National & Regional Press",
        title: "Headlines in Leading Daily Newspapers",
        sub: "Original newspaper clippings and verified reports published across Amar Ujala, Dainik Jagran, Hindustan, Dainik Bhaskar & Rashtriya Sahara",
        viewClipping: "View",
        readStory: "View Details",
      },
      gallery: {
        tag: "Photographic & Documentary Archive",
        title: "Photo Gallery: Movements & Press Clippings",
        sub: "Click any image to view full-resolution scans of original newspaper clippings and photographic proof",
        zoomBtn: "Zoom In",
        viewAllBtn: "View Complete Photo Gallery & Proof Archive",
      },
      contact: {
        tag: "Public Redressal & Office",
        title: "Public Hearing & Contact Portal",
        sub: "Prompt resolution for every citizen of Madhopur and Betiyahata is our prime commitment",
        officeHeading: "Corporator Office Details",
        addressLabel: "Office Address:",
        addressValue: "Ward 26 (Madhopur - Betiyahata), Nagar Nigam Gorakhpur, UP - 273001",
        timingsLabel: "Public Hearing Hours:",
        timingsValue: "Daily 08:00 AM to 10:00 AM (Direct meeting at office)",
        fbLabel: "Official Facebook:",
        emergencyTitle: "Drainage or Emergency Grievance?",
        emergencyDesc: "For sewer blockages, drain overflows, or streetlight hazards, submit this form and instantly message on WhatsApp.",
        formHeading: "Register Your Grievance / Suggestion",
        formSub: "This form automatically formats a professional draft that you can copy or send directly via WhatsApp.",
        nameLabel: "Your Full Name *",
        namePlaceholder: "e.g., Amit Tripathi",
        phoneLabel: "Mobile Number *",
        phonePlaceholder: "e.g., 94XXXXXXXX",
        mohallaLabel: "Neighborhood / Area *",
        categoryLabel: "Category of Issue *",
        problemLabel: "Detailed Description *",
        problemPlaceholder: "Please describe the issue, exact landmark, and requested action...",
        btnCopy: "Copy Message Draft",
        btnCopied: "Draft Copied!",
        btnWhatsapp: "Send via WhatsApp",
        copySuccess: "✓ Your grievance draft has been copied to clipboard. You can paste and share it anywhere.",
      },
      footer: {
        title: "Vishwajeet Tripathi 'Sonu'",
        role: "Corporator - Ward 26 (Madhopur - Betiyahata), Nagar Nigam Gorakhpur (UP)",
        tagline: "Against Injustice, With the People • Comprehensive Development of Gorakhpur",
        copyright: "© 2025-2026 Office of Vishwajeet Tripathi (Sonu Tiwari). All Rights Reserved.",
        city: "Nagar Nigam Gorakhpur • Assembly 322",
      }
    }
  };

  const curr = t[lang];

  const handleCopyMessage = () => {
    const textToCopy = `🚩 *GRIEVANCE REGISTRATION - WARD 26 OFFICE* 🚩
━━━━━━━━━━━━━━━━━━━━━━
👤 *Citizen Name:* ${formData.name || (lang === 'hi' ? 'नागरिक' : 'Citizen')}
📞 *Contact Phone:* ${formData.phone || 'N/A'}
📍 *Area / Mohalla:* ${formData.mohalla}
📌 *Issue Category:* ${formData.category}

📝 *Description:*
${formData.problem || (lang === 'hi' ? 'वार्ड 26 माधोपुर-बेतियाहाता क्षेत्र में त्वरित सुधार हेतु अनुरोध।' : 'Urgent civic assistance requested in Ward 26.')}
━━━━━━━━━━━━━━━━━━━━━━
To: Vishwajeet Tripathi 'Sonu' (Corporator, Nagar Nigam Gorakhpur)`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppSend = () => {
    const message = `🚩 *GRIEVANCE - WARD 26 (MADHOPUR - BETIYAHATA)* 🚩
Name: ${formData.name || 'Citizen'}
Phone: ${formData.phone || ''}
Area: ${formData.mohalla}
Category: ${formData.category}
Details: ${formData.problem || 'Civic assistance needed in Ward 26.'}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. TOP EXECUTIVE BAR */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 border-b-2 border-brandRed-600 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-medium tracking-wide gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brandRed-500 animate-pulse"></span>
            <span>
              {curr.topBar} | <span className="text-amber-400 font-semibold">{curr.janSunwai}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 rounded border border-slate-700 text-xs font-bold transition-all"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            <a
              href="https://facebook.com/sonu.tiwari.125323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded text-xs font-bold transition-transform hover:scale-105"
            >
              <Users className="w-3.5 h-3.5" />
              {curr.fbFollowers}
            </a>

            <a
              href="#jan-sampark"
              className="text-amber-400 hover:text-white flex items-center gap-1 text-xs font-bold transition-colors"
            >
              {curr.reportIssue} <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. EXECUTIVE STICKY HEADER */}
      <header className="bg-white/95 border-b border-slate-200 sticky top-[41px] sm:top-[37px] z-40 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brandRed-600 to-brandRed-800 flex items-center justify-center text-white font-bold text-lg font-display shadow-md group-hover:scale-105 transition-all">
              <span>VT</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 font-display group-hover:text-brandRed-600 transition-colors">
                  {curr.name}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-brandRed-50 text-brandRed-700 text-[11px] font-bold rounded-full border border-brandRed-200">
                  {curr.titleBadge}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {curr.role}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#mukh-prishth" className="hover:text-brandRed-600 transition-colors">{curr.nav.home}</a>
            <a href="#jeevan-parichay" className="hover:text-brandRed-600 transition-colors">{curr.nav.bio}</a>
            <a href="#vikas-karya" className="hover:text-brandRed-600 transition-colors">{curr.nav.works}</a>
            <Link href="/media" className="hover:text-brandRed-600 transition-colors">
              {curr.nav.media}
            </Link>
            <a href="#gallery" className="hover:text-brandRed-600 transition-colors">{curr.nav.gallery}</a>
            <a
              href="#jan-sampark"
              className="bg-brandRed-600 hover:bg-brandRed-700 text-white px-4 py-2 rounded-lg font-bold shadow-sm hover:shadow transition-all text-xs flex items-center gap-1.5"
            >
              <Megaphone className="w-4 h-4" />
              {curr.nav.contact}
            </a>
          </nav>

          {/* Mobile Menu & Language switch */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-2.5 py-1.5 border border-slate-300 bg-slate-100 rounded-lg text-xs font-bold text-slate-800"
            >
              {lang === 'hi' ? 'EN' : 'HI'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-slate-300 bg-slate-100 rounded-lg text-slate-700"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 font-semibold text-slate-800 shadow-lg">
            <a href="#mukh-prishth" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.home}</a>
            <a href="#jeevan-parichay" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.bio}</a>
            <a href="#vikas-karya" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.works}</a>
            <Link href="/media" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">
              {curr.nav.media}
            </Link>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.gallery}</a>
            <a href="#jan-sampark" onClick={() => setMobileMenuOpen(false)} className="block bg-brandRed-600 text-white text-center py-2.5 rounded-lg shadow font-bold">{curr.reportIssue}</a>
          </div>
        )}
      </header>

      {/* 3. HERO EXECUTIVE SECTION */}
      <section id="mukh-prishth" className="pt-10 pb-16 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-brandRed-600" />
                <span>{curr.hero.tag}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 leading-[1.15] tracking-tight">
                  <span className="block">{curr.hero.h1Line1}</span>
                  <span className="text-brandRed-600 block">
                    {curr.hero.h1Line2}
                  </span>
                </h1>
                <h2 className="text-lg sm:text-xl font-bold text-slate-700 pt-1 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-brandGreen-600"></span>
                  <span>{curr.hero.h2}</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                {curr.hero.p}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#vikas-karya"
                  className="bg-brandRed-600 hover:bg-brandRed-700 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Building2 className="w-5 h-5 text-amber-300" />
                  {curr.hero.cta1}
                </a>
                <a
                  href="#jan-sampark"
                  className="bg-white hover:bg-slate-50 text-slate-800 px-6 py-3.5 rounded-xl font-bold text-base border border-slate-300 hover:border-slate-400 shadow-sm transition-all flex items-center gap-2"
                >
                  <Megaphone className="w-5 h-5 text-brandRed-600" />
                  {curr.hero.cta2}
                </a>
              </div>

              {/* Social Verification Badge */}
              <div className="pt-2">
                <a
                  href="https://facebook.com/sonu.tiwari.125323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 hover:border-blue-300 shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg font-display">
                    f
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                      <span>facebook.com/sonu.tiwari.125323</span>
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500">{curr.hero.fbVerified}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Decorative border frame */}
                <div className="relative z-10 bg-white border border-slate-200 rounded-3xl p-3 shadow-elevated">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                    <Image
                      src="/assets/leader-hero-section-image.png"
                      alt="पार्षद विश्वजीत त्रिपाठी सोनू - नगर निगम गोरखपुर"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 bg-brandRed-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {curr.hero.cardBadge1}
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {curr.hero.cardBadge2}
                    </div>
                  </div>

                  {/* Leader Quote Box */}
                  <div className="mt-3 bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <p className="font-display italic text-sm text-slate-800 leading-snug font-medium">
                      "{curr.hero.quote}"
                    </p>
                    <div className="mt-1.5 flex items-center justify-center gap-2 text-xs font-bold text-brandRed-600">
                      <span>— {curr.name}</span>
                    </div>
                  </div>
                </div>

                {/* Seal Badge */}
                <div className="absolute -bottom-4 -right-3 z-20 bg-slate-900 text-white border-2 border-white rounded-2xl w-24 h-24 flex flex-col items-center justify-center font-bold text-center shadow-lg p-1">
                  <span className="text-[10px] text-amber-400 uppercase">{curr.hero.sealWard}</span>
                  <span className="text-xs font-bold text-white">{curr.hero.sealCity}</span>
                  <span className="text-[9px] text-brandGreen-400 font-semibold">{curr.hero.sealRole}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS ROW */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="executive-card p-5 sm:p-6 rounded-2xl border-t-4 border-t-brandRed-600 text-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-brandRed-600">
                {curr.stats.s1Value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{curr.stats.s1Label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{curr.stats.s1Sub}</div>
            </div>

            <div className="executive-card p-5 sm:p-6 rounded-2xl border-t-4 border-t-amber-500 text-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900">
                {curr.stats.s2Value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{curr.stats.s2Label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{curr.stats.s2Sub}</div>
            </div>

            <div className="executive-card p-5 sm:p-6 rounded-2xl border-t-4 border-t-brandGreen-600 text-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-brandGreen-600">
                {curr.stats.s3Value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{curr.stats.s3Label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{curr.stats.s3Sub}</div>
            </div>

            <div className="executive-card p-5 sm:p-6 rounded-2xl border-t-4 border-t-slate-800 text-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900">
                {curr.stats.s4Value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{curr.stats.s4Label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{curr.stats.s4Sub}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JEEVAN PARICHAY (BIOGRAPHY) */}
      <section id="jeevan-parichay" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brandRed-50 text-brandRed-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brandRed-200 mb-2">
              {curr.bio.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
              {curr.bio.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brandRed-600 to-brandGreen-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Bio Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-2xl font-black font-display border-b border-slate-100 pb-3 text-brandRed-700 flex items-center justify-between">
                <span>{curr.bio.nameFull}</span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 font-semibold">
                  {curr.bio.roleTag}
                </span>
              </h3>

              <div className="text-slate-700 text-base leading-relaxed space-y-4 font-normal">
                <p>{curr.bio.p1}</p>
                <p>{curr.bio.p2}</p>
                <p>{curr.bio.p3}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold block">{curr.bio.eduLabel}</span>
                  <span className="font-bold text-sm text-slate-800">{curr.bio.eduValue}</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold block">{curr.bio.ideologyLabel}</span>
                  <span className="font-bold text-sm text-brandGreen-700">{curr.bio.ideologyValue}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Principles & Pledge */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md">
                <h4 className="text-xl font-bold font-display text-amber-400 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  {curr.bio.pledgeTitle}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                  "{curr.bio.pledgeText}"
                </p>
                <div className="mt-3 text-right font-bold text-xs tracking-wider uppercase text-amber-400">
                  — {curr.name}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <h4 className="font-bold text-lg border-b border-slate-100 pb-2 text-slate-900">
                  {curr.bio.pillarsTitle}
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brandRed-600 shrink-0 mt-0.5" />
                    <span>{curr.bio.pillar1}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brandGreen-600 shrink-0 mt-0.5" />
                    <span>{curr.bio.pillar2}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{curr.bio.pillar3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VIKAS KARYA (DEVELOPMENT WORKS) */}
      <section id="vikas-karya" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brandGreen-50 text-brandGreen-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brandGreen-200 mb-2">
              {curr.works.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900">
              {curr.works.title}
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              {curr.works.sub}
            </p>
            <div className="w-20 h-1 bg-brandGreen-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="executive-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-brandRed-50 text-brandRed-700 text-xs font-bold px-2.5 py-1 rounded-full border border-brandRed-200">
                  {curr.works.w1Status}
                </span>
                <span className="text-slate-900 font-mono font-bold text-sm">{curr.works.w1Budget}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                {curr.works.w1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {curr.works.w1Desc}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brandRed-600" />
                <span>{curr.works.w1Note}</span>
              </div>
            </div>

            <div className="executive-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-brandGreen-50 text-brandGreen-700 text-xs font-bold px-2.5 py-1 rounded-full border border-brandGreen-200">
                  {curr.works.w2Status}
                </span>
                <span className="text-slate-600 font-mono font-bold text-sm">{curr.works.w2Tag}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                {curr.works.w2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {curr.works.w2Desc}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brandGreen-600" />
                <span>{curr.works.w2Note}</span>
              </div>
            </div>

            <div className="executive-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200">
                  {curr.works.w3Status}
                </span>
                <span className="text-slate-600 font-mono font-bold text-sm">{curr.works.w3Tag}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                {curr.works.w3Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {curr.works.w3Desc}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>{curr.works.w3Note}</span>
              </div>
            </div>
          </div>

          {/* Citizen Audit Banner */}
          <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-block bg-brandRed-50 text-brandRed-700 px-2.5 py-0.5 rounded text-xs font-bold">
                {curr.works.auditTag}
              </div>
              <h4 className="text-2xl font-black font-display text-slate-900">
                "{curr.works.auditTitle}"
              </h4>
              <p className="text-sm text-slate-600">
                {curr.works.auditDesc}
              </p>
            </div>
            <a
              href="#jan-sampark"
              className="shrink-0 bg-brandRed-600 hover:bg-brandRed-700 text-white px-5 py-3 rounded-xl font-bold text-sm shadow transition-all"
            >
              {curr.works.auditBtn}
            </a>
          </div>
        </div>
      </section>

      {/* 8. MEDIA COVERAGE */}
      <section id="media" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brandRed-50 text-brandRed-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brandRed-200 mb-2">
              {curr.media.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900">
              {curr.media.title}
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              {curr.media.sub}
            </p>
            <div className="w-20 h-1 bg-brandRed-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECENT_NEWS.map((item) => (
              <article
                key={item.id}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-brandRed-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 flex-1 flex flex-col">
                  {/* Category Badge Header */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/80">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs ${item.badgeBg}`}>
                      {item.category}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedImage(item.image);
                        setSelectedImageTitle(lang === 'hi' ? item.titleHi : item.titleEn);
                      }}
                      className="text-[11px] text-slate-500 hover:text-brandRed-600 font-medium flex items-center gap-1 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{curr.media.viewClipping}</span>
                    </button>
                  </div>

                  {/* Title Linked to Lightbox */}
                  <h3 className="text-base font-bold font-display text-slate-900 leading-snug mb-2 group-hover:text-brandRed-600 transition-colors">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(item.image);
                        setSelectedImageTitle(lang === 'hi' ? item.titleHi : item.titleEn);
                      }}
                      className="text-left hover:underline flex items-start justify-between gap-2 w-full"
                    >
                      <span>{lang === 'hi' ? item.titleHi : item.titleEn}</span>
                      <ZoomIn className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-brandRed-600 transition-colors mt-0.5" />
                    </button>
                  </h3>

                  {/* Snippet */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {lang === 'hi' ? item.snippetHi : item.snippetEn}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3.5 bg-slate-100/70 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(item.image);
                      setSelectedImageTitle(lang === 'hi' ? item.titleHi : item.titleEn);
                    }}
                    className="text-brandRed-600 hover:text-brandRed-700 flex items-center gap-1 transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{curr.media.viewClipping}</span>
                  </button>

                  <Link
                    href="/media"
                    className="text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
                  >
                    <span>{lang === 'hi' ? 'मीडिया पेज देखें' : 'View Media'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA to Full Media Page */}
          <div className="mt-12 text-center">
            <Link
              href="/media"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brandRed-600 to-amber-600 hover:from-brandRed-700 hover:to-amber-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all group"
            >
              <Newspaper className="w-4 h-4" />
              <span>
                {lang === 'hi'
                  ? 'सभी 50+ अखबार कतरनें एवं संपूर्ण मीडिया कवरेज देखें'
                  : 'View All 50+ Press Clippings & Full Media Archive'}
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. PHOTO & DOCUMENT GALLERY */}
      <section id="gallery" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brandRed-50 text-brandRed-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brandRed-200 mb-2">
              {curr.gallery.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
              {curr.gallery.title}
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              {curr.gallery.sub}
            </p>
            <div className="w-20 h-1 bg-brandRed-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOMEPAGE_GALLERY.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedImage(item.image);
                  setSelectedImageTitle(lang === 'hi' ? item.titleHi : item.titleEn);
                }}
                className="cursor-pointer bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-brandRed-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={lang === 'hi' ? item.titleHi : item.titleEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-slate-900/90 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded shadow backdrop-blur-xs">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                      <span className="bg-brandRed-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <ZoomIn className="w-4 h-4" /> {curr.gallery.zoomBtn}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3.5 space-y-1">
                    <span className="text-[10px] font-bold text-brandRed-700 uppercase tracking-wide block">
                      {item.source}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 line-clamp-2 group-hover:text-brandRed-600 transition-colors">
                      {lang === 'hi' ? item.titleHi : item.titleEn}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 pt-0.5">
                      {lang === 'hi' ? item.descHi : item.descEn}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brandRed-600">
                  <span className="flex items-center gap-1 group-hover:underline">
                    <ZoomIn className="w-3.5 h-3.5" /> {curr.gallery.zoomBtn}
                  </span>
                  <span className="text-slate-400 font-normal text-[11px]">
                    {lang === 'hi' ? 'दस्तावेजी साक्ष्य' : 'Verified Evidence'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Full Photo Gallery Page */}
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all group"
            >
              <Images className="w-4 h-4 text-amber-400" />
              <span>{curr.gallery.viewAllBtn}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. SUGGESTION BOX & GRIEVANCE REDRESSAL */}
      <section id="jan-sampark" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brandRed-50 text-brandRed-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brandRed-200 mb-2">
              {curr.contact.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900">
              {curr.contact.title}
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              {curr.contact.sub}
            </p>
            <div className="w-20 h-1 bg-brandRed-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold font-display text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-brandRed-600" />
                <span>{curr.contact.officeHeading}</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <MapPin className="w-5 h-5 text-brandRed-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 font-bold block">{curr.contact.addressLabel}</span>
                    <span className="text-slate-900 font-medium">{curr.contact.addressValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 font-bold block">{curr.contact.timingsLabel}</span>
                    <span className="text-slate-900 font-medium">{curr.contact.timingsValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 font-bold block">{curr.contact.fbLabel}</span>
                    <a
                      href="https://facebook.com/sonu.tiwari.125323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1 font-bold"
                    >
                      facebook.com/sonu.tiwari.125323
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-brandRed-50 p-4 rounded-xl border border-brandRed-200">
                <div className="flex items-center gap-2 font-bold text-sm text-brandRed-800">
                  <AlertCircle className="w-5 h-5 text-brandRed-600" />
                  <span>{curr.contact.emergencyTitle}</span>
                </div>
                <p className="text-xs text-slate-700 mt-1">
                  {curr.contact.emergencyDesc}
                </p>
              </div>
            </div>

            {/* Right Grievance Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brandRed-600" />
                  <span>{curr.contact.formHeading}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {curr.contact.formSub}
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      {curr.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={curr.contact.namePlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:bg-white focus:border-brandRed-600 focus:outline-none focus:ring-1 focus:ring-brandRed-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      {curr.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={curr.contact.phonePlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:bg-white focus:border-brandRed-600 focus:outline-none focus:ring-1 focus:ring-brandRed-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      {curr.contact.mohallaLabel}
                    </label>
                    <select
                      value={formData.mohalla}
                      onChange={(e) => setFormData({ ...formData, mohalla: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:bg-white focus:border-brandRed-600 focus:outline-none focus:ring-1 focus:ring-brandRed-600"
                    >
                      <option value="बेतियाहाता (Betiyahata)">बेतियाहाता (Betiyahata)</option>
                      <option value="माधोपुर (Madhopur)">माधोपुर (Madhopur)</option>
                      <option value="हरीर प्रसाद दुबे मार्ग (Harir Dubey Marg)">हरीर प्रसाद दुबे मार्ग (Harir Dubey Marg)</option>
                      <option value="प्रेमचंद पार्क / बोधघाट (Premchand Park)">प्रेमचंद पार्क / बोधघाट (Premchand Park)</option>
                      <option value="मोहद्दीपुर क्षेत्र (Mohaddipur Area)">मोहद्दीपुर क्षेत्र (Mohaddipur Area)</option>
                      <option value="वार्ड 26 अन्य क्षेत्र (Other Ward 26)">वार्ड 26 अन्य क्षेत्र (Other Ward 26)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      {curr.contact.categoryLabel}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:bg-white focus:border-brandRed-600 focus:outline-none focus:ring-1 focus:ring-brandRed-600"
                    >
                      <option value="जलभराव व नाली सफाई (Drainage & Waterlogging)">जलभराव व नाली सफाई (Drainage & Waterlogging)</option>
                      <option value="फॉगिंग व स्वास्थ्य सुरक्षा (Fogging & Health)">फॉगिंग व स्वास्थ्य सुरक्षा (Fogging & Health)</option>
                      <option value="सड़क व खड़ंजा नवनिर्माण (Road & Pavements)">सड़क व खड़ंजा नवनिर्माण (Road & Pavements)</option>
                      <option value="स्ट्रीट लाइट व पोल (Street Light)">स्ट्रीट लाइट व पोल (Street Light)</option>
                      <option value="कूड़ा निस्तारण व सफाई (Garbage & Sanitation)">कूड़ा निस्तारण व सफाई (Garbage & Sanitation)</option>
                      <option value="अन्य जन समस्या (Other Grievance)">अन्य जन समस्या (Other Grievance)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {curr.contact.problemLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder={curr.contact.problemPlaceholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:bg-white focus:border-brandRed-600 focus:outline-none focus:ring-1 focus:ring-brandRed-600"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span>{curr.contact.btnCopied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>{curr.contact.btnCopy}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 bg-brandGreen-600 hover:bg-brandGreen-700 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{curr.contact.btnWhatsapp}</span>
                  </button>
                </div>

                {copied && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-xl text-xs font-medium text-center">
                    {curr.contact.copySuccess}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. EXECUTIVE FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-800 pb-8">
            <div className="md:col-span-6 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brandRed-600 text-white font-bold flex items-center justify-center text-lg font-display">
                  VT
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  {curr.footer.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300">
                {curr.footer.role}
              </p>
              <div className="text-xs text-amber-400 font-semibold">
                "{curr.footer.tagline}"
              </div>
            </div>

            <div className="md:col-span-6 md:text-right space-y-3 text-center md:text-right">
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs font-bold text-slate-300">
                <a href="#mukh-prishth" className="hover:text-white transition-colors">{curr.nav.home}</a>
                <span>•</span>
                <a href="#jeevan-parichay" className="hover:text-white transition-colors">{curr.nav.bio}</a>
                <span>•</span>
                <a href="#vikas-karya" className="hover:text-white transition-colors">{curr.nav.works}</a>
                <span>•</span>
                <Link href="/media" className="hover:text-white transition-colors">{curr.nav.media}</Link>
                <span>•</span>
                <a href="#gallery" className="hover:text-white transition-colors">{curr.nav.gallery}</a>
                <span>•</span>
                <a href="#jan-sampark" className="hover:text-white transition-colors">{curr.nav.contact}</a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <a
                  href="https://facebook.com/sonu.tiwari.125323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  {curr.fbFollowers}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center">
            <div>
              {curr.footer.copyright}
            </div>
            <div>
              {curr.footer.city}
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL FOR NEWSPAPER CLIPPING ZOOM */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-3xl w-full p-4 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">
                {selectedImageTitle || (lang === 'hi' ? 'दस्तावेजी साक्ष्य' : 'Documentary Evidence')}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 hover:bg-brandRed-600 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
              <Image
                src={selectedImage}
                alt={selectedImageTitle || 'Newspaper Clipping'}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-medium text-slate-500">
              <span>{lang === 'hi' ? 'गोरखपुर समाचार पत्र आर्काइव साक्ष्य' : 'Gorakhpur Press Archive Evidence'}</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1 rounded-lg transition-colors"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
