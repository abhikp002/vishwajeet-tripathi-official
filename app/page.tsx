'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  Briefcase
} from 'lucide-react';

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
      titleBadge: "पार्षद, वार्ड 322",
      role: "पार्षद - नगर निगम गोरखपुर | वार्ड 322 (माधोपुर - बेतियाहाता)",
      nav: {
        home: "मुख्य पृष्ठ",
        bio: "जीवन परिचय",
        struggles: "संघर्ष व जन-मुद्दे",
        works: "विकास कार्य",
        media: "अखबारों में",
        gallery: "फोटो गैलरी",
        contact: "सुझाव व संपर्क",
      },
      hero: {
        badge: "जन-सेवा • निष्पक्षता • विकास",
        tag: "जन-सेवा एवं सामाजिक सरोकार • वार्ड 322 (माधोपुर - बेतियाहाता)",
        h1Line1: "अन्याय के खिलाफ,",
        h1Line2: "जनता के साथ।",
        h2: "पार्षद विश्वजीत त्रिपाठी 'सोनू'",
        p: "नगर निगम में भ्रष्टाचार के खिलाफ बुलंद आवाज, वार्ड 322 (माधोपुर - बेतियाहाता) की हर गली-मोहल्ले की समस्याओं के त्वरित समाधान और आम नागरिक के हक व सम्मान के लिए निरंतर सेवारत।",
        cta1: "प्रमुख संघर्ष देखें",
        cta2: "समस्या / सुझाव दर्ज करें",
        fbVerified: "15,000+ से अधिक सक्रिय समर्थक एवं नागरिक जुड़ाव",
        quote: "मेरे लिए राजनीति पद पाने का साधन नहीं, बल्कि अंतिम पंक्ति के नागरिक के सम्मान व अधिकारों की रक्षा का माध्यम है।",
        cardBadge1: "निष्पक्ष जन-प्रतिनिधि",
        cardBadge2: "वार्ड 322 गोरखपुर",
        sealWard: "वार्ड 322",
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
        roleTag: "पार्षद, वार्ड 322 (माधोपुर - बेतियाहाता)",
        p1: "गोरखपुर शहर के बेतियाहाता और माधोपुर की गलियों में पले-बढ़े विश्वजीत त्रिपाठी 'सोनू' छात्र जीवन से ही जन-सरोकारों, सामाजिक न्याय और अन्याय के खिलाफ मुखर रहे हैं।",
        p2: "उन्होंने अपनी प्रारंभिक व माध्यमिक शिक्षा गोरखपुर के प्रतिष्ठित एम.जी. इंटर कॉलेज (M.G. Inter College Gorakhpur) से पूर्ण की और तत्पश्चात दीनदयाल उपाध्याय गोरखपुर विश्वविद्यालय (D.D.U. Gorakhpur) से उच्च शिक्षा प्राप्त की। युवावस्था से ही वे सामाजिक कार्यों व नागरिक समस्याओं के निवारण हेतु सक्रिय रहे हैं।",
        p3: "नगर निगम गोरखपुर के वार्ड 322 (माधोपुर - बेतियाहाता) से पार्षद निर्वाचित होने के बाद वे बिना किसी पूर्वाग्रह के निष्पक्ष भाव से केवल जनता के हक, जलभराव से मुक्ति, सफाई, प्रकाश और विकास के लिए समर्पित हैं।",
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
      struggles: {
        tag: "वास्तविक दस्तावेजी साक्ष्य एवं जन-आंदोलन",
        title: "संघर्ष और जन-मुद्दे: अखबारों की सुर्खियां गवाह हैं",
        sub: "सिर्फ वादे नहीं, जमीन पर लड़े गए 6 ऐतिहासिक संघर्ष जिनके साक्ष्य समाचार पत्रों में दर्ज हैं",
        c1Tag: "1. ऐतिहासिक जन-आंदोलन • प्रदेश भर में गूंज",
        c1Title: "बेतियाहाता नाला जलभराव - नाले की आरती",
        c1Desc: "मानसून में जब पूरा बेतियाहाता जलमग्न हो गया और प्रशासन उदासीन रहा, तब सोनू तिवारी ने नाले में खड़े होकर 'नमामि नाला आरती' की। इस अनोखे और साहसिक विरोध की गूंज पूरे प्रदेश व राष्ट्रीय मीडिया में छाई और प्रशासन को तत्काल काम शुरू करना पड़ा।",
        c1Proof: "साक्ष्य: अमर उजाला, राष्ट्रीय मीडिया व वीडियो आर्काइव",
        c2Tag: "2. अफसरों की जवाबदेही",
        c2Title: "उपनगर आयुक्त के खिलाफ खुला मोर्चा",
        c2Desc: "जनता की समस्याओं की अनदेखी पर उपनगर आयुक्त के खिलाफ कोतवाली में मुकदमा दर्ज कराने की मांग को लेकर ऐतिहासिक धरना दिया। सभी जन-प्रतिनिधियों ने एकजुट होकर सोनू तिवारी को समर्थन दिया।",
        c2Proof: "साक्ष्य: दैनिक जागरण, अमर उजाला व कोतवाली अभिलेख",
        c3Tag: "3. जन-स्वास्थ्य सुरक्षा",
        c3Title: "फॉगिंग घोटाला - 'एक मशीन के ही भरोसे फॉगिंग'",
        c3Desc: "अमर उजाला की मुख्य हेडलाइन बनी जब सोनू तिवारी ने खुलासा किया कि पूरे वार्ड में डेंगू-मलेरिया से बचाव के लिए मात्र एक खराब मशीन के भरोसे खानापूर्ति की जा रही थी। विरोध के बाद नई मशीनें आवंटित हुईं।",
        c3Proof: "हेडलाइन: अमर उजाला ग्राउंड पड़ताल",
        c4Tag: "4. सदन में दहाड़",
        c4Title: "नगर निगम बोर्ड बैठक में हंगामा: 28 सड़कों का मुद्दा",
        c4Desc: "नगर निगम की महत्वपूर्ण बोर्ड बैठक में 28 सड़कों के नामकरण में भेदभाव और अनियमितता पर सोनू तिवारी ने पुरजोर विरोध दर्ज कराया और वार्डों के हक की जोरदार वकालत की।",
        c4Proof: "साक्ष्य: नगर निगम सदन कार्यवृत्त व दैनिक समाचार पत्र",
        c5Tag: "5. सामाजिक सरोकार",
        c5Title: "वरिष्ठ नागरिक सम्मान समारोह - मोहद्दीपुर व बोधघाट",
        c5Desc: "मोहद्दीपुर स्थित वृद्धाश्रम एवं प्रेमचंद पार्क बोधघाट में भव्य वरिष्ठ नागरिक सम्मान समारोह का आयोजन कर बुजुर्गों का आशीर्वाद लिया गया। अखबारों ने लिखा- 'सम्मान पाकर खिल उठे वरिष्ठजनों के चेहरे'!",
        c5Proof: "साक्ष्य: दैनिक जागरण व स्थानीय संस्करण",
        c6Tag: "6. धरातल पर विकास",
        c6Title: "₹2.24 करोड़ से संवरेगा हरीर प्रसाद दुबे मार्ग व अमृत सरोवर",
        c6Desc: "लंबे संघर्ष के बाद ₹2.24 करोड़ की लागत से हरीर प्रसाद दुबे मार्ग का नवनिर्माण तथा क्षेत्र में अमृत सरोवर का सौंदर्यीकरण स्वीकृत कराया गया, जिससे हजारों स्थानीय निवासियों को सीधा लाभ मिल रहा है।",
        c6Proof: "साक्ष्य: नगर निगम कार्ययोजना व बजट स्वीकृति",
      },
      works: {
        tag: "विकास के मील के पत्थर",
        title: "वार्ड 322 में प्रमुख विकास कार्य",
        sub: "सड़क, नाली, प्रकाश और जन-स्वास्थ्य - हर योजना पर जनता की सीधी निगरानी",
        w1Status: "स्वीकृत व प्रगति पर",
        w1Budget: "लागत: ₹2.24 Cr",
        w1Title: "हरीर प्रसाद दुबे मार्ग व अमृत सरोवर निर्माण",
        w1Desc: "माधोपुर और बेतियाहाता को जोड़ने वाले प्रमुख संपर्क मार्ग का चौड़ीकरण, इंटरलॉकिंग, आरसीसी नाला और अमृत सरोवर का समग्र कायाकल्प।",
        w1Note: "गुणवत्ता व समयसीमा की प्रत्यक्ष निगरानी",
        w2Status: "धरातल पर क्रियान्वयन",
        w2Tag: "वार्ड 322",
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
        tag: "अखबारों में गूंज",
        title: "प्रमुख समाचार पत्रों में प्रकाशित सुर्खियां",
        sub: "अमर उजाला, दैनिक जागरण, हिंदुस्तान में प्रकाशित वास्तविक रिपोर्ट व साक्ष्य",
        viewClipping: "अखबार कटिंग देखें",
      },
      gallery: {
        tag: "छायाचित्र एवं दस्तावेज",
        title: "फोटो गैलरी: जन-आंदोलन एवं साक्ष्य",
        sub: "ओरिजिनल अखबार की कटिंग व तस्वीरें बड़े आकार में देखने के लिए क्लिक करें",
        zoomBtn: "बड़ा देखें",
      },
      contact: {
        tag: "सुझाव व समस्या निवारण",
        title: "जन-सुनवाई एवं संपर्क कार्यालय",
        sub: "माधोपुर और बेतियाहाता के हर नागरिक की समस्या का त्वरित समाधान हमारा संकल्प है",
        officeHeading: "पार्षद कार्यालय विवरण",
        addressLabel: "कार्यालय पता:",
        addressValue: "वार्ड 322 (माधोपुर - बेतियाहाता), नगर निगम गोरखपुर, उत्तर प्रदेश - 273001",
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
        role: "पार्षद - वार्ड 322 (माधोपुर - बेतियाहाता), नगर निगम गोरखपुर (उ.प्र.)",
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
      titleBadge: "Corporator, Ward 322",
      role: "Corporator - Nagar Nigam Gorakhpur | Ward 322 (Madhopur - Betiyahata)",
      nav: {
        home: "Home",
        bio: "Biography",
        struggles: "Struggles & Issues",
        works: "Development",
        media: "In Media",
        gallery: "Photo Gallery",
        contact: "Contact & Grievance",
      },
      hero: {
        badge: "PUBLIC SERVICE • INTEGRITY • PROGRESS",
        tag: "Dedicated to Public Service • Ward 322 (Madhopur - Betiyahata)",
        h1Line1: "Against Injustice,",
        h1Line2: "With the People.",
        h2: "Corporator Vishwajeet Tripathi 'Sonu'",
        p: "A fearless voice against civic irregularities, dedicated to the prompt resolution of grassroots challenges in Ward 322 (Madhopur - Betiyahata) and safeguarding citizens' rights and dignity.",
        cta1: "View Major Struggles",
        cta2: "Submit Grievance / Suggestion",
        fbVerified: "15,000+ Active Followers & Citizens Connected",
        quote: "For me, public service is not about holding office; it is about standing with the last person in the queue and protecting their dignity and rights.",
        cardBadge1: "Independent Representative",
        cardBadge2: "Ward 322 Gorakhpur",
        sealWard: "Ward 322",
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
        roleTag: "Corporator, Ward 322 (Madhopur - Betiyahata)",
        p1: "Born and raised in the historic neighbourhoods of Betiyahata and Madhopur in Gorakhpur, Vishwajeet Tripathi aka 'Sonu' has been at the forefront of social justice, public grievance redressal, and standing up against unfair practices since his student years.",
        p2: "He completed his education from the renowned M.G. Inter College Gorakhpur and pursued higher studies at Deen Dayal Upadhyaya Gorakhpur University (D.D.U.). Since his youth, he has remained actively engaged in community welfare and civic development.",
        p3: "As the elected Corporator for Ward 322 (Madhopur - Betiyahata), he works with complete dedication—focusing purely on citizen welfare, flood relief, sanitation, street lighting, and transparent governance.",
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
      struggles: {
        tag: "Documented Proof & Movements",
        title: "Struggles & Movements: Documented in Press",
        sub: "Not mere promises—6 documented real battles with verifiable newspaper headlines and public records",
        c1Tag: "1. Historic Movement • State-Wide Attention",
        c1Title: "Betiyahata Drainage Crisis - Aarti of the Drain",
        c1Desc: "When heavy monsoon water inundated Betiyahata and civic authorities turned a blind eye, Sonu Tiwari stepped directly into the filthy flooded drain and performed 'Namami Nala Aarti'. The unique protest captured state-wide attention, compelling the administration to commence immediate desilting.",
        c1Proof: "Proof: Amar Ujala, National Media & Video Archives",
        c2Tag: "2. Bureaucratic Accountability",
        c2Title: "Protest Against Deputy Municipal Commissioner",
        c2Desc: "Demanded an FIR at the police station against administrative apathy towards public issues by municipal officials. Received unified support from diverse councilors across wards.",
        c2Proof: "Proof: Dainik Jagran, Amar Ujala & Police Station Records",
        c3Tag: "3. Public Health Protection",
        c3Title: "Fogging Scam - 'Ward Reliant on Just One Machine'",
        c3Desc: "Became the front-page headline of Amar Ujala when Sonu Tiwari exposed that during peak dengue season, the civic body was pretending to fog the entire ward with just a single malfunctioning machine. New machines were sanctioned after his protest.",
        c3Proof: "Headline: Amar Ujala Ground Investigation",
        c4Tag: "4. Council Debate",
        c4Title: "Board Meeting Uproar: The 28 Roads Naming Issue",
        c4Desc: "Stood up firmly in the municipal council board meeting against bias and irregularities in naming 28 roads, fiercely advocating for fair allocation across all civic wards.",
        c4Proof: "Proof: Municipal Council Minutes & Daily Press",
        c5Tag: "5. Social Responsibility",
        c5Title: "Senior Citizens Felicitation - Mohaddipur & Bodhghat",
        c5Desc: "Organized a grand felicitation event for senior citizens at Mohaddipur Old Age Home and Premchand Park Bodhghat. Press celebrated the initiative: 'Smiles bloom on senior citizens' faces upon receiving honor'.",
        c5Proof: "Proof: Dainik Jagran & Regional Editions",
        c6Tag: "6. Ground Development",
        c6Title: "₹2.24 Crore Harir Prasad Dubey Marg & Amrit Sarovar",
        c6Desc: "Successfully secured and approved a budget of ₹2.24 Crores for the construction and modernization of Harir Prasad Dubey Marg and beautification of the Amrit Sarovar pond.",
        c6Proof: "Proof: Municipal Work Plan & Sanction Order",
      },
      works: {
        tag: "Development Milestones",
        title: "Key Infrastructure Works in Ward 322",
        sub: "Roads, drainage, LED lighting, and public health—under direct citizen supervision",
        w1Status: "Sanctioned & In Progress",
        w1Budget: "Budget: ₹2.24 Cr",
        w1Title: "Harir Prasad Dubey Marg & Amrit Sarovar Project",
        w1Desc: "Widening of key connector road linking Madhopur and Betiyahata, interlocking tiles, RCC storm-water drain, and ecological restoration of Amrit Sarovar.",
        w1Note: "Direct monitoring of build quality & timeline",
        w2Status: "Ground Execution",
        w2Tag: "Ward 322",
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
        tag: "In the Headlines",
        title: "Press Coverage in Leading Newspapers",
        sub: "Verifiable reports from Amar Ujala, Dainik Jagran, and Hindustan",
        viewClipping: "View Clipping",
      },
      gallery: {
        tag: "Photographic & Documentary Archive",
        title: "Photo Gallery: Movements & Press Clippings",
        sub: "Click any image to view full-resolution scans of original newspaper clippings",
        zoomBtn: "Zoom In",
      },
      contact: {
        tag: "Public Redressal & Office",
        title: "Public Hearing & Contact Portal",
        sub: "Prompt resolution for every citizen of Madhopur and Betiyahata is our prime commitment",
        officeHeading: "Corporator Office Details",
        addressLabel: "Office Address:",
        addressValue: "Ward 322 (Madhopur - Betiyahata), Nagar Nigam Gorakhpur, UP - 273001",
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
        role: "Corporator - Ward 322 (Madhopur - Betiyahata), Nagar Nigam Gorakhpur (UP)",
        tagline: "Against Injustice, With the People • Comprehensive Development of Gorakhpur",
        copyright: "© 2025-2026 Office of Vishwajeet Tripathi (Sonu Tiwari). All Rights Reserved.",
        city: "Nagar Nigam Gorakhpur • Assembly 322",
      }
    }
  };

  const curr = t[lang];

  const handleCopyMessage = () => {
    const textToCopy = `🚩 *GRIEVANCE REGISTRATION - WARD 322 OFFICE* 🚩
━━━━━━━━━━━━━━━━━━━━━━
👤 *Citizen Name:* ${formData.name || (lang === 'hi' ? 'नागरिक' : 'Citizen')}
📞 *Contact Phone:* ${formData.phone || 'N/A'}
📍 *Area / Mohalla:* ${formData.mohalla}
📌 *Issue Category:* ${formData.category}

📝 *Description:*
${formData.problem || (lang === 'hi' ? 'वार्ड 322 माधोपुर-बेतियाहाता क्षेत्र में त्वरित सुधार हेतु अनुरोध।' : 'Urgent civic assistance requested in Ward 322.')}
━━━━━━━━━━━━━━━━━━━━━━
To: Vishwajeet Tripathi 'Sonu' (Corporator, Nagar Nigam Gorakhpur)`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppSend = () => {
    const message = `🚩 *GRIEVANCE - WARD 322 (MADHOPUR - BETIYAHATA)* 🚩
Name: ${formData.name || 'Citizen'}
Phone: ${formData.phone || ''}
Area: ${formData.mohalla}
Category: ${formData.category}
Details: ${formData.problem || 'Civic assistance needed in Ward 322.'}`;
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
            <a href="#sangharsh" className="hover:text-brandRed-600 transition-colors">{curr.nav.struggles}</a>
            <a href="#vikas-karya" className="hover:text-brandRed-600 transition-colors">{curr.nav.works}</a>
            <a href="#media" className="hover:text-brandRed-600 transition-colors">{curr.nav.media}</a>
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
            <a href="#sangharsh" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.struggles}</a>
            <a href="#vikas-karya" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.works}</a>
            <a href="#media" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.media}</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-brandRed-600 border-b border-slate-100">{curr.nav.gallery}</a>
            <a href="#jan-sampark" onClick={() => setMobileMenuOpen(false)} className="block bg-brandRed-600 text-white text-center py-2.5 rounded-lg shadow font-bold">{curr.reportIssue}</a>
          </div>
        )}
      </header>

      {/* 3. HERO EXECUTIVE SECTION */}
      <section id="mukh-prishth" className="pt-10 pb-16 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 relative overflow-hidden bg-grid-pattern">
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
                  href="#sangharsh"
                  className="bg-brandRed-600 hover:bg-brandRed-700 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Flame className="w-5 h-5 text-amber-300" />
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

      {/* 6. SANGHARSH AUR MUDDE (TIMELINE) */}
      <section id="sangharsh" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-brandRed-50 text-brandRed-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brandRed-200 mb-2">
              {curr.struggles.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900">
              {curr.struggles.title}
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              {curr.struggles.sub}
            </p>
            <div className="w-20 h-1 bg-brandRed-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="space-y-8 relative">
            {/* 1. Betiyahata Naale Ki Aarti */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="inline-block bg-brandRed-100 text-brandRed-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-brandRed-200 mb-2">
                  {curr.struggles.c1Tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {curr.struggles.c1Title}
                </h3>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  {curr.struggles.c1Desc}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-bold text-brandRed-700">
                  {curr.struggles.c1Proof}
                </div>
              </div>
              <div className="md:col-span-5 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm">
                <div
                  onClick={() => {
                    setSelectedImage('/assets/743081800_27085368861146189_4660532069274368196_n.jpg');
                    setSelectedImageTitle(curr.struggles.c1Title);
                  }}
                  className="cursor-pointer group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200"
                >
                  <Image
                    src="/assets/743081800_27085368861146189_4660532069274368196_n.jpg"
                    alt={curr.struggles.c1Title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                    <span className="bg-brandRed-600 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                      <ZoomIn className="w-3.5 h-3.5" /> {curr.gallery.zoomBtn}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. UPNagar Ayukt Sanjay Shukla Morcha */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm order-2 md:order-1">
                <div
                  onClick={() => {
                    setSelectedImage('/assets/795332593_27852400004443067_3113860931798894358_n.jpg');
                    setSelectedImageTitle(curr.struggles.c2Title);
                  }}
                  className="cursor-pointer group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200"
                >
                  <Image
                    src="/assets/795332593_27852400004443067_3113860931798894358_n.jpg"
                    alt={curr.struggles.c2Title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                    <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                      <ZoomIn className="w-3.5 h-3.5" /> {curr.gallery.zoomBtn}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm order-1 md:order-2">
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-amber-200 mb-2">
                  {curr.struggles.c2Tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {curr.struggles.c2Title}
                </h3>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  {curr.struggles.c2Desc}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-bold text-slate-600">
                  {curr.struggles.c2Proof}
                </div>
              </div>
            </div>

            {/* 3. Fogging Scam */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="inline-block bg-brandRed-100 text-brandRed-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-brandRed-200 mb-2">
                  {curr.struggles.c3Tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {curr.struggles.c3Title}
                </h3>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  {curr.struggles.c3Desc}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-bold text-brandRed-700">
                  {curr.struggles.c3Proof}
                </div>
              </div>
              <div className="md:col-span-5 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm">
                <div
                  onClick={() => {
                    setSelectedImage('/assets/814629880_27832202283129506_40090162660360342_n.jpg');
                    setSelectedImageTitle(curr.struggles.c3Title);
                  }}
                  className="cursor-pointer group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200"
                >
                  <Image
                    src="/assets/814629880_27832202283129506_40090162660360342_n.jpg"
                    alt={curr.struggles.c3Title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                    <span className="bg-brandRed-600 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                      <ZoomIn className="w-3.5 h-3.5" /> {curr.gallery.zoomBtn}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Board Baithak, 5. Senior Honor, 6. Vikas Karya */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <span className="inline-block bg-brandGreen-100 text-brandGreen-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {curr.struggles.c4Tag}
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  {curr.struggles.c4Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {curr.struggles.c4Desc}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <span className="inline-block bg-brandGreen-100 text-brandGreen-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {curr.struggles.c5Tag}
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  {curr.struggles.c5Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {curr.struggles.c5Desc}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {curr.struggles.c6Tag}
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  {curr.struggles.c6Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {curr.struggles.c6Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VIKAS KARYA (DEVELOPMENT WORKS) */}
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
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-bold text-brandRed-700 bg-brandRed-50 px-2 py-0.5 rounded">
                    {lang === 'hi' ? 'अमर उजाला' : 'Amar Ujala'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Gorakhpur</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {lang === 'hi'
                    ? '"पार्षद के जलभराव विरोध वीडियो की प्रदेश भर में चर्चा"'
                    : '"Corporator\'s drainage protest video sparks state-wide attention"'}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-600">{lang === 'hi' ? 'मुद्दा: जलभराव' : 'Issue: Drainage'}</span>
                <button
                  onClick={() => {
                    setSelectedImage('/assets/743081800_27085368861146189_4660532069274368196_n.jpg');
                    setSelectedImageTitle('Newspaper Report');
                  }}
                  className="text-brandRed-600 hover:underline flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" /> {curr.media.viewClipping}
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-bold text-brandRed-700 bg-brandRed-50 px-2 py-0.5 rounded">
                    {lang === 'hi' ? 'अमर उजाला' : 'Amar Ujala'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Headlines</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {lang === 'hi'
                    ? '"वार्ड में एक मशीन के ही भरोसे हो रही फॉगिंग"'
                    : '"Ward reliant on just one machine for fogging"'}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-600">{lang === 'hi' ? 'मुद्दा: स्वास्थ्य' : 'Issue: Public Health'}</span>
                <button
                  onClick={() => {
                    setSelectedImage('/assets/814629880_27832202283129506_40090162660360342_n.jpg');
                    setSelectedImageTitle('Fogging Scam Report');
                  }}
                  className="text-brandRed-600 hover:underline flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" /> {curr.media.viewClipping}
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {lang === 'hi' ? 'दैनिक जागरण' : 'Dainik Jagran'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Gorakhpur</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {lang === 'hi'
                    ? '"उपनगर आयुक्त के खिलाफ खोला मोर्चा"'
                    : '"Protest launched against Deputy Municipal Commissioner"'}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-600">{lang === 'hi' ? 'मुद्दा: जवाबदेही' : 'Issue: Accountability'}</span>
                <button
                  onClick={() => {
                    setSelectedImage('/assets/795332593_27852400004443067_3113860931798894358_n.jpg');
                    setSelectedImageTitle('Dainik Jagran Report');
                  }}
                  className="text-brandRed-600 hover:underline flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" /> {curr.media.viewClipping}
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    {lang === 'hi' ? 'हिंदुस्तान' : 'Hindustan'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Gorakhpur Live</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {lang === 'hi'
                    ? '"बेतियाहाता में जलभराव, नमामि नाला परिषद ने की आरती"'
                    : '"Betiyahata waterlogged, Namami Nala parishad performs aarti"'}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>{lang === 'hi' ? 'ड्रेनेज समस्या' : 'Drainage'}</span>
                <span>Gorakhpur</span>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {lang === 'hi' ? 'दैनिक जागरण' : 'Dainik Jagran'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Samaroh</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {lang === 'hi'
                    ? '"सम्मान पाकर खिल उठे वरिष्ठजनों के चेहरे"'
                    : '"Smiles bloom on senior citizens\' faces upon felicitation"'}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>{lang === 'hi' ? 'वरिष्ठ सम्मान' : 'Senior Honor'}</span>
                <span>Gorakhpur</span>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="text-xs font-bold text-brandRed-700 bg-brandRed-50 px-2 py-0.5 rounded">
                    {lang === 'hi' ? 'अमर उजाला' : 'Amar Ujala'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Civic Watch</span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {lang === 'hi'
                    ? '"जनता भी रखेगी नगर निगम के निर्माण कार्यों पर नजर"'
                    : '"Citizens to keep direct watch on civic construction works"'}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>{lang === 'hi' ? 'पारदर्शिता' : 'Transparency'}</span>
                <span>Gorakhpur</span>
              </div>
            </div>
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
            <div
              onClick={() => {
                setSelectedImage('/assets/743081800_27085368861146189_4660532069274368196_n.jpg');
                setSelectedImageTitle(lang === 'hi' ? 'नाले की आरती आंदोलन कवरेज' : 'Drainage Protest Press Coverage');
              }}
              className="cursor-pointer bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src="/assets/743081800_27085368861146189_4660532069274368196_n.jpg"
                  alt="Gallery 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <span className="bg-brandRed-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                    <ZoomIn className="w-4 h-4" /> {curr.gallery.zoomBtn}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-bold text-sm text-slate-800 line-clamp-2">
                  {lang === 'hi' ? 'बेतियाहाता नाले की आरती व जलभराव कवरेज' : 'Betiyahata drainage protest and media coverage'}
                </h4>
              </div>
            </div>

            <div
              onClick={() => {
                setSelectedImage('/assets/795332593_27852400004443067_3113860931798894358_n.jpg');
                setSelectedImageTitle(lang === 'hi' ? 'उपनगर आयुक्त के खिलाफ धरना' : 'Protest Against Deputy Commissioner');
              }}
              className="cursor-pointer bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src="/assets/795332593_27852400004443067_3113860931798894358_n.jpg"
                  alt="Gallery 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <span className="bg-brandRed-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                    <ZoomIn className="w-4 h-4" /> {curr.gallery.zoomBtn}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-bold text-sm text-slate-800 line-clamp-2">
                  {lang === 'hi' ? 'उपनगर आयुक्त के खिलाफ धरना व कोतवाली में मांग' : 'Dharna and police demand against administrative apathy'}
                </h4>
              </div>
            </div>

            <div
              onClick={() => {
                setSelectedImage('/assets/814629880_27832202283129506_40090162660360342_n.jpg');
                setSelectedImageTitle(lang === 'hi' ? 'फॉगिंग घोटाला अमर उजाला रिपोर्ट' : 'Fogging Issue Investigation');
              }}
              className="cursor-pointer bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src="/assets/814629880_27832202283129506_40090162660360342_n.jpg"
                  alt="Gallery 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <span className="bg-brandRed-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                    <ZoomIn className="w-4 h-4" /> {curr.gallery.zoomBtn}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-bold text-sm text-slate-800 line-clamp-2">
                  {lang === 'hi' ? 'वार्ड में एक मशीन के ही भरोसे हो रही फॉगिंग' : 'Amar Ujala investigation on ward sanitation & fogging'}
                </h4>
              </div>
            </div>
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
                      <option value="वार्ड 322 अन्य क्षेत्र (Other Ward 322)">वार्ड 322 अन्य क्षेत्र (Other Ward 322)</option>
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
                <a href="#sangharsh" className="hover:text-white transition-colors">{curr.nav.struggles}</a>
                <span>•</span>
                <a href="#vikas-karya" className="hover:text-white transition-colors">{curr.nav.works}</a>
                <span>•</span>
                <a href="#media" className="hover:text-white transition-colors">{curr.nav.media}</a>
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
