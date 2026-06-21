import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WOOD_FINISHES, SERVICES, TESTIMONIALS } from './data';
import { WoodFinish, ServiceItem, Testimonial } from './types';
import {
  Sparkles,
  Layers,
  Check,
  Wallpaper,
  Baby,
  Home,
  Compass,
  Instagram,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Download,
  Menu,
  X,
  Send,
  Copy,
  CheckCircle2,
  Share2,
  Sliders,
  MousePointerClick,
  ArrowUpRight,
  Briefcase,
  Smile,
  Shield,
  Clock,
  Instagram as InstagramIcon,
  HardHat
} from 'lucide-react';

const KIDS_ROOM_IMAGES = [
  'https://drive.google.com/thumbnail?id=1e2bFclxo5LQqUOaQZWENuCmNIXvbS5aT&sz=w1200',
  'https://drive.google.com/thumbnail?id=1Q7-WJ8ljioAuFDUvOv1qwfWiu9ywEMtA&sz=w1200',
  'https://drive.google.com/thumbnail?id=1MKUJnU-OqjsOlR9wh0IMqj1nV5U8Hnfr&sz=w1200',
  'https://drive.google.com/thumbnail?id=1id76RJ9iuMVy4LqQZpajqi1kjwiqqiCK&sz=w1200',
  'https://drive.google.com/thumbnail?id=1f_f04S3T2piexqCvu9g2RQununIVIB98&sz=w1200',
  'https://drive.google.com/thumbnail?id=1GbDdFuhkAe1npSKh9I2RrncpzjxaoB1W&sz=w1200',
  'https://drive.google.com/thumbnail?id=19xUUSfsN7QqGoh2y4CAf-IF6ngYpX_6N&sz=w1200'
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function KidsRoomCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = ((page % KIDS_ROOM_IMAGES.length) + KIDS_ROOM_IMAGES.length) % KIDS_ROOM_IMAGES.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden border border-white/5 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <img 
            src={KIDS_ROOM_IMAGES[currentIndex]} 
            alt={`Quarto Infantil ${currentIndex + 1}`} 
            className="w-full h-full object-cover select-none pointer-events-none" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={(e) => {
          e.stopPropagation();
          paginate(-1);
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#111111]/70 border border-gold-400/20 text-white hover:text-gold-400 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all focus:outline-none hover:bg-[#111111]/90 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          paginate(1);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#111111]/70 border border-gold-400/20 text-white hover:text-gold-400 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all focus:outline-none hover:bg-[#111111]/90 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/30 px-2.5 py-1 rounded-full">
        {KIDS_ROOM_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              const diff = idx - currentIndex;
              if (diff !== 0) {
                setPage([page + diff, diff > 0 ? 1 : -1]);
              }
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all focus:outline-none cursor-pointer ${
              idx === currentIndex ? 'bg-gold-400 w-3' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const CAROUSEL_IMAGES_BY_SERVICE: Record<string, { url: string; label: string }[]> = {
  'envelopamento-moveis': [
    { url: 'https://drive.google.com/thumbnail?id=1rDcKofIZcPfedBDhkiGvMP0WwGDgGCio&sz=w1200', label: 'ANTES' },
    { url: 'https://drive.google.com/thumbnail?id=1NdB2Pdi2zO03L4gszpTd7jFQvMNi0YAg&sz=w1200', label: 'DEPOIS' },
    { url: 'https://drive.google.com/thumbnail?id=1wg8etGLluZUJDnLhUqPVyp1VjlTrQPB5&sz=w1200', label: 'ANTES' },
    { url: 'https://drive.google.com/thumbnail?id=1w5bzwvIoQqYULf5CY24Eu0nqyQ5KLYxU&sz=w1200', label: 'DEPOIS' }
  ],
  'portas-marcos': [
    { url: 'https://drive.google.com/thumbnail?id=1UAgnIUp5BsdikqEoRXbRZrA5WDZ7h2t3&sz=w1200', label: 'ANTES' },
    { url: 'https://drive.google.com/thumbnail?id=1bgPy7_pw2LMLIckp3QZqtfhFQqZhbkAM&sz=w1200', label: 'DEPOIS' },
    { url: 'https://drive.google.com/thumbnail?id=1F_wOIUjDNUns5b9Qu6S2cUqWZ_Dhnspl&sz=w1200', label: 'ANTES' },
    { url: 'https://drive.google.com/thumbnail?id=174rXnPiDYYxgKWn0n2p2v4T2SlGqG8gj&sz=w1200', label: 'DEPOIS' }
  ],
  'eletrodomesticos': [
    { url: 'https://drive.google.com/thumbnail?id=1H5rm8PyU9mjHzKZHSM0_oBgwygxweTLM&sz=w1200', label: 'ANTES' },
    { url: 'https://drive.google.com/thumbnail?id=17HcQaqEXBfNQ0ZB4yjOrMDVlehFkyLZe&sz=w1200', label: 'DEPOIS' }
  ]
};

interface ServiceCarouselProps {
  images: { url: string; label: string }[];
  serviceTitle: string;
}

function ServiceCarousel({ images, serviceTitle }: ServiceCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, images.length]);

  return (
    <div className="relative aspect-square w-full overflow-hidden border border-white/5 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <img 
            src={images[currentIndex].url} 
            alt={`${serviceTitle} - ${images[currentIndex].label}`} 
            className="w-full h-full object-cover select-none pointer-events-none" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-sm border border-gold-400/30 text-[10px] font-mono font-bold tracking-widest text-[#c1a06f] uppercase">
        {images[currentIndex].label}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          paginate(-1);
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#111111]/70 border border-gold-400/20 text-white hover:text-gold-400 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all focus:outline-none hover:bg-[#111111]/90 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          paginate(1);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#111111]/70 border border-gold-400/20 text-white hover:text-gold-400 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all focus:outline-none hover:bg-[#111111]/90 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/30 px-2.5 py-1 rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              const diff = idx - currentIndex;
              if (diff !== 0) {
                setPage([page + diff, diff > 0 ? 1 : -1]);
              }
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all focus:outline-none cursor-pointer ${
              idx === currentIndex ? 'bg-gold-400 w-3' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const WHATSAPP_NUMBER = '5531982356251';
const LINK_TETO_AMADEIRADO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para Teto Amadeirado.')}`;
const LINK_QUARTO_INFANTIL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para Quarto Infantil Personalizado.')}`;
const LINK_GERAL_ENVELOPAMENTO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento de envelopamento.')}`;
const LINK_GERAL_ORCAMENTO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`;

export default function App() {
  // Navigation states
  const [activeTab, setActiveTab] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Service drawer modal states
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  // Hero Carousel states
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = [
    {
      url: 'https://drive.google.com/thumbnail?id=1YI4iSWkaCdMDjW6tK6nNhMkxWV_4e3c_&sz=w1200',
      tagline: 'Teto Amadeirado',
      label: 'Sofisticação e Aconchego Únicos'
    },
    {
      url: 'https://drive.google.com/thumbnail?id=1ywD3aIerqF6HHEAPWcGsxwR33IB5gNY2&sz=w1200',
      tagline: 'Teto + Parede',
      label: 'Conexão e Continuidade Visual Flutuante'
    },
    {
      url: 'https://drive.google.com/thumbnail?id=19edTZz_8Ei9FXehNyyyuiJchFSj_7upj&sz=w1200',
      tagline: 'Teto Amadeirado',
      label: 'Elegância Minimalista com Carvalho Europeu'
    },
    {
      url: 'https://drive.google.com/thumbnail?id=1nDflnafG5_jU9AZbbhgXgU6GQlSvlAmx&sz=w1200',
      tagline: 'Teto + Parede',
      label: 'Conceito Aberto Integrando Ambientes Nobres'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const generateWhatsAppMessage = () => {
    const text = 'Olá! Gostaria de um orçamento para Teto Amadeirado.';
    const link = LINK_TETO_AMADEIRADO;
    return { text, link };
  };

  const whatsappPromo = generateWhatsAppMessage();

  // Highlight scroll changes
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicos', 'diferenciais', 'parceria', 'orcamento'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Premium HTML file code template to share with user
  const singleFileHtmlCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Casa de Papel Studio | Revestimento Vinílico Premium</title>
  
  <!-- Fontes Premium -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- GSAP + ScrollTrigger CDN para Animações -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #050505;
      color: #f3f4f6;
      overflow-x: hidden;
    }
    .font-serif {
      font-family: 'Playfair Display', serif;
    }
    .glass-header {
      background: rgba(5, 5, 5, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .glass-card {
      background: rgba(10, 10, 10, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card:hover {
      border-color: #c1a06f;
      transform: translateY(-4px);
    }
    .gold-gradient-text {
      background: linear-gradient(135deg, #f4ecdc 0%, #c1a06f 50%, #af8452 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    /* Simple Before/After range styling */
    .slider-container {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="fixed top-0 left-0 w-full z-50 glass-header">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <div class="flex flex-col">
        <span class="text-xl font-bold tracking-wider text-white">CASA DE PAPEL</span>
        <span class="text-[9px] uppercase tracking-[0.25em] text-[#c1a06f] font-light">s t u d i o</span>
      </div>
      
      <nav class="hidden md:flex items-center gap-8">
        <a href="#inicio" class="text-sm text-gray-300 hover:text-[#c1a06f] transition">Início</a>
        <a href="#catalogo" class="text-sm text-gray-300 hover:text-[#c1a06f] transition">Madeiras</a>
        <a href="#servicos" class="text-sm text-gray-300 hover:text-[#c1a06f] transition">Serviços</a>
        <a href="#diferenciais" class="text-sm text-gray-300 hover:text-[#c1a06f] transition">Diferenciais</a>
        <a href="#portfolio" class="text-sm text-gray-300 hover:text-[#c1a06f] transition">Portfólio</a>
        <a href="https://instagram.com/casadepapelstudio" target="_blank" class="text-sm text-gray-300 hover:text-[#c1a06f] transition flex items-center gap-1">Instagram</a>
      </nav>
      
      <div>
        <a href="https://wa.me/5531982356251?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Teto%20Amadeirado" target="_blank" class="px-5 py-2.5 bg-[#c1a06f] text-sm font-semibold text-black hover:bg-[#e8d9bd] transition rounded-none">
          Orçamento VIP
        </a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section id="inicio" class="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden" style="background: radial-gradient(circle at center, #111e11 0%, #050505 100%);">
    <div class="absolute inset-0 z-0 opacity-40">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-[#050505]/95"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#c1a06f]/10 border border-[#c1a06f]/20 text-[#c1a06f] text-xs font-semibold tracking-wider uppercase">
          <span class="w-1.5 h-1.5 bg-[#c1a06f] rounded-full animate-ping"></span>
          Tendência Arquitetônica 2025/2026
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-serif text-white leading-tight">
          Teto Amadeirado: <br>
          <span class="gold-gradient-text">Sofisticação Orgânica</span> Sem Obra.
        </h1>
        
        <p class="text-gray-400 text-base sm:text-lg max-w-xl font-light">
          A transformação limpa e de alta fidelidade táctil que os escritórios de arquitetura mais exigentes recomendam. Esqueça o incômodo, entulho ou peso da marcenaria convencional de madeira.
        </p>
        
        <div class="flex flex-wrap gap-4 pt-4">
          <a href="https://wa.me/5531982356251" target="_blank" class="px-8 py-4 bg-gradient-to-r from-[#c1a06f] to-[#af8452] text-black font-semibold uppercase text-xs tracking-wider hover:opacity-90 transition shadow-lg shadow-[#c1a06f]/10">
            Falar Conosco no WhatsApp
          </a>
          <a href="#servicos" class="px-8 py-4 border border-white/10 hover:border-white/30 text-white font-semibold uppercase text-xs tracking-wider transition">
            Conhecer Serviços
          </a>
        </div>
      </div>
      
      <div class="relative">
        <div class="aspect-video lg:aspect-square relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/5">
            <span class="text-xs text-[#c1a06f] tracking-widest uppercase font-mono">Destaque do Portfólio</span>
            <p class="text-white text-sm font-medium mt-1 font-serif">Teto com acabamento Freijó Catedral e iluminação de sanca oculta.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CATÁLOGO INTERATIVO -->
  <section id="catalogo" class="py-24 px-6 border-t border-white/5 bg-[#080808]">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-xl mb-12">
        <span class="text-xs uppercase tracking-[0.2em] text-[#c1a06f] font-mono">Curadoria de Acabamentos</span>
        <h2 class="text-3xl sm:text-4xl font-normal font-serif text-white mt-1">Nossa Coleção de Amadeirados</h2>
        <p class="text-gray-400 font-light mt-3">Explore os padrões mais procurados por designers de interiores, com texturas tácteis que simulam o cerne mais nobre das madeiras.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="glass-card p-6 flex flex-col justify-between h-80">
          <div>
            <h3 class="text-xl font-serif text-white">Freijó Catedral</h3>
            <span class="text-xs text-[#c1a06f] uppercase font-mono tracking-widest mt-1 block">Mel Aquecido Médio</span>
            <p class="text-sm text-gray-400 mt-4 font-light">Veios orgânicos de altíssima elegância. Harmoniza perfeitamente com metalon preto e paredes off-white.</p>
          </div>
          <a href="https://wa.me/5531982356251?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Teto%20Amadeirado%20Freijó" class="text-xs text-[#c1a06f] hover:underline font-semibold tracking-wider flex items-center gap-1 uppercase">Selecionar Textura &rarr;</a>
        </div>
        
        <div class="glass-card p-6 flex flex-col justify-between h-80">
          <div>
            <h3 class="text-xl font-serif text-white">Carvalho Europeu</h3>
            <span class="text-xs text-[#c1a06f] uppercase font-mono tracking-widest mt-1 block">Areia Minimalista</span>
            <p class="text-sm text-gray-400 mt-4 font-light">Padrão pálido suave escandinavo. Traz leveza, amplitude e excelente difusão luminosa.</p>
          </div>
          <a href="https://wa.me/5531982356251?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Teto%20Amadeirado%20Carvalho" class="text-xs text-[#c1a06f] hover:underline font-semibold tracking-wider flex items-center gap-1 uppercase">Selecionar Textura &rarr;</a>
        </div>
        
        <div class="glass-card p-6 flex flex-col justify-between h-80">
          <div>
            <h3 class="text-xl font-serif text-white">Nogueira Imperial</h3>
            <span class="text-xs text-[#c1a06f] uppercase font-mono tracking-widest mt-1 block">Chocolate Escuro</span>
            <p class="text-sm text-gray-400 mt-4 font-light">Contraste dramático majestoso. Muito recomendável para adegas, lavabos e salas de jantar.</p>
          </div>
          <a href="https://wa.me/5531982356251?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Teto%20Amadeirado%20Nogueira" class="text-xs text-[#c1a06f] hover:underline font-semibold tracking-wider flex items-center gap-1 uppercase">Selecionar Textura &rarr;</a>
        </div>
        
        <div class="glass-card p-6 flex flex-col justify-between h-80">
          <div>
            <h3 class="text-xl font-serif text-white">Cumaru Real</h3>
            <span class="text-xs text-[#c1a06f] uppercase font-mono tracking-widest mt-1 block">Castanho Cobreado</span>
            <p class="text-sm text-gray-400 mt-4 font-light">Aconchego robusto solar. Ideal para varandas gourmets cobertas e halls integrados de luxo.</p>
          </div>
          <a href="https://wa.me/5531982356251?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Teto%20Amadeirado%20Cumaru" class="text-xs text-[#c1a06f] hover:underline font-semibold tracking-wider flex items-center gap-1 uppercase">Selecionar Textura &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section id="servicos" class="py-24 px-6 bg-[#050505]">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-xl mb-16">
        <span class="text-xs uppercase tracking-[0.2em] text-[#c1a06f] font-mono">Especialidades</span>
        <h2 class="text-3xl sm:text-4xl font-normal font-serif text-white mt-1">Portfólio de Soluções Executivas</h2>
        <p class="text-gray-400 font-light mt-3">Trabalhamos com aplicação em superfícies lisas usando películas vinílicas importadas de alto tráfego e livre de odores.</p>
      </div>
      
      <!-- Carro-chefe Premium -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 bg-[#0a0a0a] border border-white/5 p-8 sm:p-12">
        <div class="space-y-6">
          <div class="inline-block px-3 py-1 bg-[#c1a06f]/10 text-[#c1a06f] text-xs font-semibold tracking-widest uppercase">Foco Carro-Chefe</div>
          <h3 class="text-2xl sm:text-3xl font-serif text-white font-normal">Aplicação de Teto Amadeirado Orgânico</h3>
          <p class="text-gray-300 font-light text-base leading-relaxed">
            Nossa especialidade absoluta. O vinil fosco de relevo texturizado simula a madeira maciça. Diferencial raro no mercado, o teto amadeirado pode continuar descendo por uma parede em meia altura, gerando simetria biofílica fantástica. Conforme a iluminação bate, os veios revelam o brilho sutil natural.
          </p>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li class="flex items-center gap-2"><strong class="text-[#c1a06f]">&bull;</strong> Aplicação rápida em poucas horas, sem necessidade de lixar</li>
            <li class="flex items-center gap-2"><strong class="text-[#c1a06f]">&bull;</strong> Ignifugo e imune a pragas, brocas de madeira ou mofo</li>
            <li class="flex items-center gap-2"><strong class="text-[#c1a06f]">&bull;</strong> Resistente a vapores comuns de ambiente doméstico</li>
          </ul>
        </div>
        <div class="aspect-video lg:aspect-auto lg:h-[400px]">
          <img src="https://images.unsplash.com/photo-1628744448831-f9b09a6ebb05" class="w-full h-full object-cover rounded-none ring-1 ring-white/10">
        </div>
      </div>
      
      <!-- 2º Carro Chefe e Gerais -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="aspect-video lg:aspect-auto lg:h-[400px] order-2 lg:order-1">
          <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1141" class="w-full h-full object-cover rounded-none ring-1 ring-white/10">
        </div>
        <div class="space-y-6 order-1 lg:order-2">
          <div class="inline-block px-3 py-1 bg-[#c1a06f]/10 text-[#c1a06f] text-xs font-semibold tracking-widest uppercase">Quartos Temáticos Premium</div>
          <h3 class="text-2xl sm:text-3xl font-serif text-white font-normal">Quarto Infantil Customizado sob Medida</h3>
          <p class="text-gray-300 font-light text-base leading-relaxed">
            Seja um projeto fofo de bosque aquarelado, espaço sideral minimalista ou formas geométricas em tons pastel, executamos em qualquer dimensão e em qualquer tema. O vinil é de altíssima durabilidade e totalmente lavável — excelente para crianças desenhistas.
          </p>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li class="flex items-center gap-2"><strong class="text-[#c1a06f]">&bull;</strong> Atóxico: sem solventes à base de thinner, sem cheiro forte</li>
            <li class="flex items-center gap-2"><strong class="text-[#c1a06f]">&bull;</strong> Pode ser aplicado em parede única, teto lúdico ou armários</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- DIFERENCIAIS (BENTO GRID STYLE) -->
  <section id="diferenciais" class="py-24 px-6 bg-[#080808]">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-xl mb-16">
        <span class="text-xs uppercase tracking-[0.2em] text-[#c1a06f] font-mono">Diferenciais Competitivos</span>
        <h2 class="text-3xl sm:text-4xl font-normal font-serif text-white mt-1">Por que a Casa de Papel Studio?</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Bento 1 -->
        <div class="glass-card p-8 md:col-span-2">
          <h3 class="text-xl font-serif text-white font-semibold">Decoração Real Sem Obra ou Entulho</h3>
          <p class="text-sm text-gray-400 mt-2 font-light">Nossos revestimentos são instalados a seco por consultores treinados com altíssima precisão. Sem brocas, sem poeira de massa corrida, sem quebra-quebra de tijolos. Uma mudança completa que começa pela manhã e é finalizada no meio da tarde.</p>
        </div>
        
        <!-- Bento 2 -->
        <div class="glass-card p-8 bg-[#c1a06f]/5 border-[#c1a06f]/20">
          <h3 class="text-xl font-serif text-[#c1a06f] font-semibold">+3.000 Projetos Reais</h3>
          <p class="text-sm text-gray-400 mt-2 font-light">Temos uma ativa comunidade no Instagram com portfólio físico robusto, comprovado e fotografado.</p>
        </div>
        
        <!-- Bento 3 -->
        <div class="glass-card p-8">
          <h3 class="text-xl font-serif text-white font-semibold">Parceria B2B VIP</h3>
          <p class="text-sm text-gray-400 mt-2 font-light">Arquitetos e designers dispõem de canal prioritário com envio rápido de amostras e suporte a arquivos CAD.</p>
        </div>
        
        <!-- Bento 4 -->
        <div class="glass-card p-8 md:col-span-2">
          <h3 class="text-xl font-serif text-white font-semibold">Qualquer Vetor, Qualquer Medida</h3>
          <p class="text-sm text-gray-400 mt-2 font-light">Para o segmento infantil ou corporativo, produzimos plotagens de grandes escalas com precisão cirúrgica de encaixes para cobrir até as curvas mais sensíveis de closets ou refrigeradores de metal.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFÓLIO -->
  <section id="portfolio" class="py-24 px-6 bg-[#050505] border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
        <div class="max-w-xl">
          <span class="text-xs uppercase tracking-[0.2em] text-[#c1a06f] font-mono">Projetos Executados</span>
          <h2 class="text-3xl sm:text-4xl font-normal font-serif text-white mt-1">Registros de Transformação</h2>
          <p class="text-gray-400 font-light mt-3">Acesse nosso perfil para ver vídeos reais de aplicação no teto e móveis com relatos autorais de arquitetos satisfeitos.</p>
        </div>
        <div class="mt-6 md:mt-0">
          <a href="https://instagram.com/casadepapelstudio" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#c1a06f] text-white hover:text-[#c1a06f] text-sm transition font-medium">
            Ver Instagram @casadepapelstudio
          </a>
        </div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="group relative overflow-hidden">
          <div class="aspect-4/3 overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
          </div>
          <div class="mt-4">
            <span class="text-xs text-[#c1a06f] font-mono uppercase tracking-wider">Cobertura Ipanema &bull; Teto Freijó</span>
            <p class="text-sm text-gray-400 mt-1">Parceria com Studio M+A Arquitetura</p>
          </div>
        </div>
        
        <div class="group relative overflow-hidden">
          <div class="aspect-4/3 overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
          </div>
          <div class="mt-4">
            <span class="text-xs text-[#c1a06f] font-mono uppercase tracking-wider">Quarto Safári &bull; Personalizado</span>
            <p class="text-sm text-gray-400 mt-1">Parceria com Juliana Paes Interiores</p>
          </div>
        </div>
        
        <div class="group relative overflow-hidden">
          <div class="aspect-4/3 overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
          </div>
          <div class="mt-4">
            <span class="text-xs text-[#c1a06f] font-mono uppercase tracking-wider">Suíte Comercial &bull; Carvalho Europeu</span>
            <p class="text-sm text-gray-400 mt-1">Parceria com G&S Arquitetos Associados</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section class="py-24 px-6 bg-[#0a0a0a]">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">Sua Nova Estética Está a Uma Mensagem de Distância</h2>
      <p class="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
        Seja você um arquiteto especificando um projeto residencial luxuoso ou um morador desejando revitalizar seus móveis e teto amarelado sem o caos de poeira e atrasos. Damos total garantia aos serviços executados no teto ou mobiliário.
      </p>
      
      <div class="pt-4">
        <a href="https://wa.me/5531982356251?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto%20com%20a%20Casa%20de%20Papel%20Studio" target="_blank" class="inline-flex items-center gap-3 bg-gradient-to-r from-[#c1a06f] to-[#af8452] text-black font-semibold uppercase text-xs tracking-wider px-10 py-5 hover:opacity-95 transition shadow-xl shadow-[#c1a06f]/15">
          Solicitar Orçamento no WhatsApp
        </a>
      </div>
      <p class="text-[11px] text-gray-500 font-mono tracking-widest uppercase">Atendimento VIP de Segunda a Sábado — São Paulo & Rio de Janeiro</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-12 border-t border-white/5 bg-[#050505] px-6 text-center">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex flex-col text-left items-center sm:items-start">
        <span class="text-base font-bold text-white tracking-wider">CASA DE PAPEL STUDIO</span>
        <span class="text-[10px] uppercase tracking-[0.2em] text-[#c1a06f]">Decoração e Reforma Inteligente</span>
      </div>
      <p class="text-sm text-gray-500 font-light">&copy; 2026 Casa de Papel Studio. Todos os direitos reservados.</p>
    </div>
  </footer>

  <!-- GSAP ANIMATION TRIGGER LOGIC -->
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // Register scroll trigger
      gsap.registerPlugin(ScrollTrigger);
      
      // Hero entrance animations
      gsap.from("#inicio h1", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });
      
      gsap.from("#inicio p", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
      
      gsap.from("#inicio .inline-flex, #inicio .flex", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.7
      });
      
      // Cards scroll animations
      gsap.utils.toArray(".glass-card").forEach(card => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    });
  </script>
</body>
</html>`;

  return (
    <div id="root-viewport" className="min-h-screen bg-[#050505] text-gray-100 font-sans antialiased relative">
      
      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 h-20 transition duration-300">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <span className="text-lg sm:text-xl font-bold tracking-[0.16em] text-white">CASA DE PAPEL</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-light -mt-0.5">s t u d i o</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'servicos', label: 'Especialidades' },
              { id: 'diferenciais', label: 'Diferenciais' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`text-xs uppercase tracking-widest font-medium transition cursor-pointer hover:text-gold-400 relative py-1 ${
                  activeTab === tab.id ? 'text-gold-400 font-bold' : 'text-gray-400'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" 
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Highlighted Solicitar Orçamento CTA button (replacing WhatsApp VIP) */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={LINK_GERAL_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:opacity-90 text-black text-xs font-extrabold uppercase tracking-widest transition rounded-none font-mono shadow-md shadow-gold-400/10 cursor-pointer inline-block text-center"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 px-2.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl overflow-hidden lg:hidden z-30"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'servicos', label: 'Especialidades' },
                  { id: 'diferenciais', label: 'Diferenciais' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToSection(tab.id);
                    }}
                    className={`text-left text-sm uppercase tracking-widest font-mono text-gray-300 border-l-2 pl-4 transition ${
                      activeTab === tab.id ? 'text-gold-400 border-gold-400 font-semibold' : 'border-transparent text-gray-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={LINK_GERAL_ORCAMENTO}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 bg-gradient-to-r from-gold-400 to-gold-500 hover:opacity-90 text-black text-center text-xs font-extrabold uppercase tracking-widest block transition font-mono text-center"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section 
        id="inicio"
        className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden select-none bg-[#050505]"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #151e18 0%, #050505 100%)'
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(rgba(193, 160, 111, 0.1) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
          
          {/* Content Left */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-[0.2em]"
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              Teto Amadeirado &bull; Tendência Absoluta em Alto Padrão
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight font-normal"
              >
                Teto Amadeirado: <br />
                A Nova Assinatura da <br />
                <span className="text-gradient-gold italic font-medium">Arquitetura Sem Obra</span>.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-base sm:text-lg max-w-xl font-light leading-relaxed font-sans"
              >
                Renove tetos, paredes e ambientes com a sofisticação tátil do revestimento vinílico. Rapidez impecável, sem resíduos de obra e com catálogo sob medida. Projetado para atender arquitetos e encantar seus clientes com um acabamento que transforma qualquer ambiente sem reforma.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={whatsappPromo.link}
                target="_blank"
                className="px-8 py-4.5 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-xs font-bold uppercase tracking-widest text-center shadow-lg shadow-gold-500/10 hover:opacity-95 transition hover:scale-[1.02] transform rounded-none cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                Orçamento Imediato no WhatsApp
              </a>
            </motion.div>

            {/* Micro details metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              className="pt-6 border-t border-white/5 flex flex-wrap gap-8 text-xs font-mono tracking-widest uppercase text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>+3K SEGUIDORES</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>INSTALAÇÃO LIMPA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>PROJETO SOB MEDIDA</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Premium Visual mockup with overlapping cards - transformed into an image carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:mt-0 mt-8"
          >
            <div className="w-full relative group flex flex-col">
              
              {/* Aspect Container for Image & Absolute overlays */}
              <div className="aspect-[4/3] sm:aspect-square w-full relative overflow-hidden border border-white/10 sm:shadow-2xl sm:shadow-black/80 bg-[#0c0c0c]">
                
                {/* Image Slide Container */}
                <div className="w-full h-full relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, info) => {
                        const threshold = 50;
                        if (info.offset.x < -threshold) {
                          nextSlide();
                        } else if (info.offset.x > threshold) {
                          prevSlide();
                        }
                      }}
                    >
                      <img 
                        src={carouselImages[carouselIndex].url} 
                        alt={carouselImages[carouselIndex].label}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Gradient overlay - Hidden on mobile so photo is fully visible before text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none hidden sm:block" />
                
                {/* Left/Right Arrows overlay, visible on hover page or touch, transitions in */}
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300 pointer-events-auto cursor-pointer flex items-center justify-center shadow-lg z-20"
                  title="Slide Anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gold-400" />
                </button>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300 pointer-events-auto cursor-pointer flex items-center justify-center shadow-lg z-20"
                  title="Próximo Slide"
                >
                  <ChevronRight className="w-5 h-5 text-gold-400" />
                </button>

                {/* Dots indicator at top-4 left-4 */}
                <div className="absolute top-4 left-4 flex gap-1.5 z-10 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/5">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === carouselIndex ? 'bg-gold-400 w-4' : 'bg-white/40 hover:bg-white/75'}`}
                    />
                  ))}
                </div>

                {/* Overlapping Floating Banner - Desktop ONLY (absolutely positioned over image) */}
                <div className="hidden sm:block absolute bottom-6 left-6 right-6 p-6 glass-panel-heavy border-l-2 border-l-gold-400 z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-gold-400 uppercase font-mono tracking-widest font-semibold block">Projetos Executados / Belo Horizonte</span>
                      <h3 className="text-sm font-serif text-white font-medium">{carouselImages[carouselIndex].tagline} &bull; {carouselImages[carouselIndex].label}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-gold-400 animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Description Block - Mobile ONLY (exhibited directly below the image) */}
              <div className="block sm:hidden p-5 bg-[#0d0d0d]/90 border-x border-b border-white/10 border-t-0 border-l-2 border-l-gold-400">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gold-400 uppercase font-mono tracking-widest font-semibold block">Projetos Executados / Belo Horizonte</span>
                    <h3 className="text-sm font-serif text-white font-normal leading-snug">{carouselImages[carouselIndex].tagline} &bull; {carouselImages[carouselIndex].label}</h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-gold-400 animate-pulse" />
                  </div>
                </div>
              </div>

            </div>

            {/* Backdrops elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-900/10 rounded-full filter blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* DETAILED SERVICES PORTFOLIO & SPECS */}
      <section id="servicos" className="py-28 px-6 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-20 space-y-3">
            <span className="text-xs text-gold-400 font-mono tracking-[0.25em] uppercase font-bold block">Especialidades</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">
              Portfólio Completo de Serviços
            </h2>
            <p className="text-gray-400 font-light text-base leading-relaxed">
              Trabalhamos exclusivamente com revestimento vinílico de alto padrão. A solução completa para renovar superfícies sem obra, com aplicação a seco que garante cantos impermeáveis sem bolhas, finalização expressa e garantia total pós-instalação.
            </p>
          </div>

          {/* CARROS-CHEFES VISUAL BLOCK (Two columns prominent highlight -> now changed to full-width sequential rows matching the Hero Section's layout) */}
          <div className="space-y-12 sm:space-y-16 mb-20">
            {SERVICES.filter(s => s.featured).map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-[#0e0e0e] border border-white/5 p-6 sm:p-10 lg:p-12 relative group overflow-hidden hover:border-gold-400/30 transition duration-500"
                >
                  {/* Glowing light from top corners */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-gold-400/5 rounded-full filter blur-2xl group-hover:bg-gold-400/10 transition pointer-events-none" />

                  {/* Content Column */}
                  <div className={`space-y-6 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Category and tagline */}
                    <div className="flex justify-between items-start">
                      <span className="text-xs text-gray-500 font-mono uppercase tracking-widest font-bold">Casa de Papel Studio &bull; Especialidade</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight">
                        {service.id === 'teto-amadeirado' ? 'Teto Amadeirado' : service.id === 'quarto-infantil' ? 'Quarto Infantil Personalizado' : 'Quarto Infantil Sob Medida'}
                      </h3>
                      <p className="text-gold-400/90 text-xs tracking-wider uppercase font-mono font-bold italic">
                        {service.id === 'teto-amadeirado' ? 'A tendência que está transformando os projetos de alto padrão' : service.id === 'quarto-infantil' ? 'Qualquer tema, qualquer arte, qualquer medida' : service.tagline}
                      </p>
                    </div>

                    <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                      {service.id === 'teto-amadeirado' ? (
                        'A principal tendência da decoração sofisticada em 2026. Trata-se da aplicação de revestimento vinílico estruturado de altíssima fidelidade diretamente no teto do ambiente. Esqueça a poeira da marcenaria tradicional, os dias com furos e cheiro forte de verniz. Nosso teto amadeirado é aplicado sobre o gesso ou parede lisa de forma impecável, limpa e com finalização ágil.'
                      ) : service.id === 'quarto-infantil' ? (
                        'Transformamos sonhos em realidade com revestimento vinílico adesivo de alta qualidade. Com impressão em altíssima resolução e total fidelidade de cores, criamos ambientes lúdicos sob medida — qualquer tema, qualquer arte, qualquer medida. O projeto exclusivo que você ou seu arquiteto imaginar, executado sem obra e com perfeição visual.'
                      ) : (
                        `${service.summary} ${service.description}`
                      )}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest block font-bold">Vantagens de destaque:</span>
                      {(service.id === 'teto-amadeirado' 
                        ? [
                            "Transformação sem obra (sem pó, sem barulho, sem entulho)",
                            "Espessura milimétrica invisível (não perde altura de pé-direito)",
                            "Excelente comportamento ao calor e durabilidade de mais de 10 anos"
                          ]
                        : service.id === 'quarto-infantil'
                        ? [
                            "Impressão em altíssima resolução com cores vibrantes",
                            "Ao contrário de papel de parede comum, é totalmente lavável",
                            "Material vinílico de alta durabilidade e resistente a arranhões leves"
                          ]
                        : service.benefits.slice(0, 3)
                      ).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 pt-4 shrink-0">
                      {service.id === 'teto-amadeirado' ? (
                        <>
                          <a
                            href={LINK_TETO_AMADEIRADO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 max-w-[240px] py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-center text-xs font-mono font-bold uppercase tracking-widest hover:opacity-95 transition block cursor-pointer"
                          >
                            Solicitar Orçamento
                          </a>
                          <button
                            onClick={() => setActiveServiceModal(service)}
                            className="px-4 py-3.5 hover:text-gold-400 text-xs text-white/90 font-bold uppercase tracking-widest transition cursor-pointer border-none bg-transparent whitespace-nowrap outline-none"
                          >
                            Ficha Técnica
                          </button>
                        </>
                      ) : service.id === 'quarto-infantil' ? (
                        <>
                          <a
                            href={LINK_QUARTO_INFANTIL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 max-w-[240px] py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-center text-xs font-mono font-bold uppercase tracking-widest hover:opacity-95 transition block cursor-pointer"
                          >
                            Solicitar Orçamento
                          </a>
                          <button
                            onClick={() => setActiveServiceModal(service)}
                            className="px-4 py-3.5 hover:text-gold-400 text-xs text-white/90 font-bold uppercase tracking-widest transition cursor-pointer border-none bg-transparent whitespace-nowrap outline-none"
                          >
                            Ficha Técnica
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              scrollToSection('orcamento');
                            }}
                            className="flex-1 max-w-[240px] py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-center text-xs font-bold uppercase tracking-widest hover:opacity-95 transition"
                          >
                            Simular Projeto
                          </button>
                          <button
                            onClick={() => setActiveServiceModal(service)}
                            className="px-5 py-3 hover:bg-white/5 text-xs text-white border border-white/10 font-bold uppercase tracking-widest transition"
                          >
                            Ficha Técnica
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Image/Carousel Column */}
                  <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                    {service.id === 'quarto-infantil' ? (
                      <KidsRoomCarousel />
                    ) : (
                      <div className="aspect-[4/3] sm:aspect-square w-full overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c]">
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition duration-700 group-hover:scale-103" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* DEMAIS SERVIÇOS GRID (Order Priority 3 to 6 as Full-Width Blocks matching Quarto Infantil) */}
          <div className="space-y-12 sm:space-y-16">
            {SERVICES.filter(s => !s.featured).map((service, index) => {
              const isEven = index % 2 === 0;
              const images = CAROUSEL_IMAGES_BY_SERVICE[service.id] || [];
              return (
                <div 
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-[#0e0e0e] border border-white/5 p-6 sm:p-10 lg:p-12 relative group overflow-hidden hover:border-gold-400/30 transition duration-500"
                >
                  {/* Glowing light from top corners */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-gold-400/5 rounded-full filter blur-2xl group-hover:bg-gold-400/10 transition pointer-events-none" />

                  {/* Content Column */}
                  <div className={`space-y-4 sm:space-y-5 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-bold">
                        Casa de Papel Studio &bull; Soluções Premium
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight group-hover:text-gold-400 transition duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gold-400/95 text-xs tracking-wider uppercase font-mono font-bold italic">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-gray-300 font-light text-sm leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest block font-bold">
                        Destaques técnicos:
                      </span>
                      {(service.id === 'envelopamento-moveis'
                        ? [
                            'Ampla variedade de cores e texturas seguindo as tendências do mercado.',
                            'Cantos com acabamento térmico hermético e sem emendas aparentes.',
                            'Material altamente resistente ao manuseio diário, água e riscos do cotidiano.'
                          ]
                        : service.benefits.slice(0, 3)
                      ).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-400 font-sans">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons closely integrated */}
                    <div className="flex items-center gap-4 pt-3 shrink-0">
                      <a
                        href={`https://wa.me/5531982356251?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para o serviço de ${service.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 max-w-[240px] py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-center text-xs font-mono font-bold uppercase tracking-widest hover:opacity-95 transition block cursor-pointer flex items-center justify-center"
                      >
                        Solicitar Orçamento
                      </a>
                      <button
                        onClick={() => setActiveServiceModal(service)}
                        className="px-4 py-3.5 hover:text-gold-400 text-xs text-white/90 font-bold uppercase tracking-widest transition cursor-pointer border-none bg-transparent whitespace-nowrap outline-none"
                      >
                        Ficha Técnica
                      </button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                    <div className="aspect-square w-full overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c]">
                      {images.length > 0 ? (
                        <ServiceCarousel images={images} serviceTitle={service.title} />
                      ) : (
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition duration-700 group-hover:scale-103" 
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DETAILS POPUP DRAWER MODAL */}
        <AnimatePresence>
          {activeServiceModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveServiceModal(null)}
            >
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl bg-[#0d0d0d] border border-gold-400/30 rounded-none text-left relative my-auto outline-none forced-modal-scroll"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-[500px]">
                  {/* Left Side: Image of the room */}
                  <div className="relative md:col-span-5 h-72 md:h-auto md:min-h-[500px] overflow-hidden">
                    <img 
                      src={activeServiceModal.id === 'quarto-infantil' ? 'https://drive.google.com/thumbnail?id=1d_OLv_YiKKn0dSnY8Hbt_hsldmuxEbJL&sz=w1200' : activeServiceModal.imageUrl} 
                      alt={activeServiceModal.title} 
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent" />
                  </div>

                  {/* Right Side: Text & Data */}
                  <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-serif text-white font-normal mt-1">Ficha Técnica</h3>
                        </div>
                        <button 
                          onClick={() => setActiveServiceModal(null)}
                          className="p-1 px-2 hover:bg-white/10 text-gray-400 hover:text-white cursor-pointer"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-300 leading-relaxed font-light">
                            {activeServiceModal.id === 'teto-amadeirado' 
                              ? 'Trabalhamos com revestimento vinílico autoadesivo de alta performance. O material é composto por uma película polimérica resistente com espessura de 150 a 160 micras, acabamento fosco e adesivo de alta aderência integrado. Conta com sistema antibolhas que garante uma aplicação isenta de imperfeições e acabamento visual superior.'
                              : activeServiceModal.id === 'quarto-infantil'
                              ? 'Trabalhamos com vinil adesivo polimérico de alta qualidade, próprio para impressão digital em altíssima resolução, com camada blackout que bloqueia totalmente a passagem de luz. Adesivo acrílico permanente atóxico, liner em papel couché siliconado e acabamento fosco.'
                              : activeServiceModal.description
                            }
                          </p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[11px] text-gold-400 font-mono uppercase tracking-widest font-bold block">Vantagens:</span>
                          <div className="grid grid-cols-1 gap-1.5">
                            {(activeServiceModal.id === 'teto-amadeirado'
                              ? [
                                  "Sem entulho ou quebra-quebra (reforma 100% limpa)",
                                  "Excelente comportamento ao calor (material atérmico)",
                                  "Durabilidade de mais de 7 anos em ambiente interno",
                                  "Ideal para compor tetos com rasgos de luz e perfis em LED",
                                  "Espessura milimétrica invisível (não perde altura de pé-direito)",
                                  "Visual indistinguível da madeira natural, com acabamento fosco"
                                ]
                              : activeServiceModal.id === 'quarto-infantil'
                              ? [
                                  "Impressão em altíssima resolução com cores vibrantes",
                                  "Blackout total — bloqueio completo de luz, sem sombras ou transparência",
                                  "Adesivo atóxico, seguro para ambientes infantis",
                                  "Material vinílico lavável com durabilidade de mais de 5 anos em ambiente interno",
                                  "Resistente a mofo e à exposição UV",
                                  "Aplicação limpa, sem resíduos de obra"
                                ]
                              : activeServiceModal.benefits
                            ).map((benefit, idx) => (
                              <div key={idx} className="flex gap-2 text-xs text-gray-400 leading-relaxed font-sans">
                                <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex gap-4">
                      <a
                        href={`https://wa.me/5531982356251?text=${encodeURIComponent(
                          `Olá! Gostaria de um orçamento para o serviço de ${activeServiceModal.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setActiveServiceModal(null)}
                        className="flex-1 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-black text-center text-xs font-mono font-extrabold uppercase tracking-widest hover:opacity-95 transition block cursor-pointer flex items-center justify-center gap-1"
                      >
                        Solicitar Orçamento
                      </a>
                      <button
                        onClick={() => setActiveServiceModal(null)}
                        className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 font-bold uppercase tracking-widest transition cursor-pointer"
                      >
                        Voltar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* BENCHMARK BENTO GRID (Luxury Architectural Focus) */}
      <section id="diferenciais" className="py-28 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-xl mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal animate-fade-in-up">
              Diferenciais Técnicos
            </h2>
            <p className="text-gray-400 font-light text-sm sm:text-base mt-2">
              A transformação que seu projeto merece
            </p>
          </div>

          {/* BENTO GRID (Asymmetrical layout for high-end look) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Card 1 (Destaque Principal: 8 Cols) */}
            <div className="md:col-span-8 bg-[#0a0a0a]/60 border border-white/5 p-8 sm:p-10 flex flex-col justify-between hover:border-gold-400/20 transition duration-500 group relative overflow-hidden min-h-[340px] sm:min-h-[300px]">
              <div className="absolute -right-20 -top-20 w-52 h-52 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none group-hover:bg-gold-400/10 transition" />
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
                  Instalação Ágil e Limpa
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 max-w-2xl font-light leading-relaxed">
                  Sem brocas barulhentas, sem sacos de entulho ocupando elevadores e sem poeira de lixamento. Nosso processo é 100% seco e aplicável sobre gesso, MDF ou parede em massa fina. Você recebe o ambiente transformado com agilidade e acabamento visual impecável, pronto para uso imediato.
                </p>
              </div>

              <span className="text-[10px] text-gold-400 font-mono tracking-widest uppercase font-bold mt-4 block">
                TECNOLOGIA LIMPA &bull; PRONTIDÃO DE USO
              </span>
            </div>

            {/* Bento Card 2 (4 Cols) */}
            <div className="md:col-span-4 bg-[#c1a06f]/5 border border-gold-400/20 p-8 flex flex-col justify-between hover:bg-[#c1a06f]/10 transition duration-500 min-h-[340px] sm:min-h-[300px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif text-white font-normal">
                  Galeria de Projetos Reais
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Explore nossa galeria completa com diversos projetos executados em Belo Horizonte. Acompanhe nossos bastidores, veja depoimentos de clientes e confira a qualidade impecável de cada entrega em tempo real.
                </p>
              </div>

              <a 
                href="https://instagram.com/casadepapelstudio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-400 hover:text-white font-bold uppercase tracking-widest font-mono flex items-center gap-1 mt-4"
              >
                <span>Ver Projetos no Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bento Card 3 (4 Cols) */}
            <div className="md:col-span-4 bg-[#0a0a0a]/60 border border-white/5 p-8 flex flex-col justify-between hover:border-gold-400/20 transition duration-500 min-h-[280px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-base sm:text-lg font-serif text-white font-normal">
                  Atendimento Direto e Consultivo
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Aqui você fala direto com quem entende. Oferecemos um atendimento ágil e personalizado para tirar todas as suas dúvidas, entender as necessidades do seu projeto e garantir que a escolha do revestimento seja perfeita para o seu ambiente.
                </p>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-mono text-gold-400 font-bold block animate-fade-in">QUALIDADE EXCLUSIVA</span>
            </div>

            {/* Bento Card 4 (8 Cols) */}
            <div className="md:col-span-8 bg-[#0a0a0a]/60 border border-white/5 p-8 flex flex-col justify-between hover:border-gold-400/20 transition duration-500 group relative overflow-hidden min-h-[280px]">
              <div className="absolute -left-20 -bottom-20 w-44 h-44 bg-green-500/5 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-base sm:text-lg font-serif text-white font-normal">
                  Tecnologia Blackout e Segurança Ambiental
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed max-w-2xl">
                  Utilizamos materiais de impressão de alta performance com tecnologia blackout, que garante cobertura total de cores ou marcas anteriores na superfície. Nossos revestimentos são atóxicos e seguros para todos os ambientes - desde quartos infantis até espaços comuns - permitindo o uso do local logo após a aplicação, com total preservação da saúde e do bem-estar de toda a família.
                </p>
              </div>

              <span className="text-[9px] uppercase tracking-wider font-mono text-gold-400 font-bold block">
                COMPROMISSO AMBIENTAL &bull; COBERTURA MÁXIMA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIA COM ARQUITETOS */}
      <section id="parceria" className="py-24 px-6 bg-[#080808] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 relative overflow-hidden border border-gold-400/10 shadow-[0_0_40px_rgba(193,160,111,0.02)]">
          <div className="absolute -right-24 -top-24 w-48 h-48 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="space-y-6 text-center sm:text-left">
            <span className="text-[10px] text-gold-400 font-mono tracking-widest uppercase font-bold block">
              Sinergia Profissional
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              Parceria com Arquitetos
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Valorizamos o projeto técnico e a visão criativa dos arquitetos. Oferecemos uma execução fiel ao seu detalhamento, com respeito rigoroso às paginações e ao projeto luminotécnico. Se você busca um parceiro que entrega acabamento de alto padrão e agilidade na obra, vamos conversar.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
              <div className="flex items-center gap-2 text-xs text-gray-300 font-light bg-white/5 px-3 py-1.5 border border-white/5">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Respeito ao Detalhamento Técnico</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 font-light bg-white/5 px-3 py-1.5 border border-white/5">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Compatibilização Luminotécnica</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 font-light bg-white/5 px-3 py-1.5 border border-white/5">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Obra limpa e livre de solventes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLICITAR ORÇAMENTO */}
      <section id="orcamento" className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-mono block">
              Orçamento Rápido e Sem Burocracia
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">
              Vamos transformar seu ambiente?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed">
              O orçamento é feito de forma rápida e sem burocracia. Basta nos enviar as medidas aproximadas ou o projeto do ambiente para iniciarmos.
            </p>
          </div>

          <div className="pt-4">
            <a 
              href={LINK_GERAL_ENVELOPAMENTO} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-500 text-black font-extrabold uppercase text-xs sm:text-sm tracking-widest px-10 py-5 hover:opacity-95 transition shadow-xl shadow-gold-400/10 active:scale-[0.98] transform font-mono rounded-none"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              Solicitar Orçamento Via WhatsApp
            </a>
          </div>

          <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
            Atendimento Exclusivo de Segunda a Sábado — Resposta em poucas horas
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#050505] border-t border-white/5 text-gray-500 text-xs text-center select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-base font-bold text-white tracking-widest block">CASA DE PAPEL STUDIO</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-mono block">Revestimento Vinílico e Decoração Inteligente</span>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider block pt-1">Atendimento em Belo Horizonte e Região Metropolitana.</span>
          </div>

          <p className="font-light text-gray-500">
            &copy; 2026 Casa de Papel Studio. Todos os direitos reservados. 
          </p>
        </div>
      </footer>
    </div>
  );
}
