import { WoodFinish, ServiceItem, PortfolioProject, Testimonial } from './types';

export const WOOD_FINISHES: WoodFinish[] = [
  {
    id: 'freijo',
    name: 'Freijó Catedral',
    type: 'freijo',
    tone: 'Mel Aquecido Médio',
    description: 'A assinatura do design contemporâneo brasileiro. Veios catedrais orgânicos e tom mel suave que se conectam à marcenaria clássica ou moderna, ideal para grandes tetos em salas e consultórios.',
    textureUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=400', // Close-up wood grain
    featuredRoomUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200' // High-end warm wooden ceiling room
  },
  {
    id: 'carvalho',
    name: 'Carvalho Europeu',
    type: 'carvalho',
    tone: 'Bege Areia Minimalista',
    description: 'Estética escandinava pura. Tons claros, pálidos e neutros que dão leveza ao espaço. Queridinho de arquitetos minimalistas para ampliar a percepção do teto, combinando perfeitamente com iluminação em fitas de LED.',
    textureUrl: 'https://images.unsplash.com/photo-1507312520719-b5820354600a?auto=format&fit=crop&q=80&w=400',
    featuredRoomUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200' // Minimal style concrete/light-wood ceiling
  },
  {
    id: 'nogueira',
    name: 'Nogueira Imperial',
    type: 'nogueira',
    tone: 'Chocolate Escuro e Encorpado',
    description: 'Sobriedade, luxo e presença dramática. Um padrão amadeirado escuro, com veios densos e contrastantes. Cria um contraste teatral magnífico em lavabos, salas de jantar de alto padrão ou escritórios executivos.',
    textureUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400',
    featuredRoomUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200' // Sophisticated dark wood interior detail
  },
  {
    id: 'cumaru',
    name: 'Cumaru Real',
    type: 'cumaru',
    tone: 'Castanho Cobreado Intenso',
    description: 'Calor e aconchego robusto. Seus nuances trazem uma sensação solar e natural profunda. Muito aplicado em varandas gourmet cobertas, áreas de convívio comuns e transição entre paredes e teto.',
    textureUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=400',
    featuredRoomUrl: 'https://images.unsplash.com/photo-1628744448831-f9b09a6ebb05?auto=format&fit=crop&q=80&w=1200' // Wood architectural detailing
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'teto-amadeirado',
    title: 'Teto Amadeirado',
    category: 'revestimento-premium',
    priority: 1,
    featured: true,
    tagline: 'O Segredo dos Grandes Projetos de Interiores',
    summary: 'A principal tendência da decoração sofisticada em 2025/2026. Trata-se da aplicação de revestimento vinílico importado estruturado de altíssima fidelidade diretamente no teto do ambiente.',
    description: 'Esqueça a poeira da marcenaria tradicional, os dias com furos e cheiro forte de verniz. Nosso teto amadeirado é aplicado sobre o gesso ou reboco liso de forma impecável, limpa e com finalização em apenas 1 dia.',
    benefits: [
      'Sem entulho ou quebra-quebra (reforma 100% limpa)',
      'Espessura milimétrica invisível — não perde altura de pé-direito',
      'Excelente comportamento ao calor e durabilidade de mais de 10 anos',
      'Visual indistinguível da madeira natural, com textura fosca táctil',
      'Ideal para compor tetos com rasgos de luz e perfis em LED'
    ],
    imageUrl: 'https://drive.google.com/thumbnail?id=17kePHTB0Tcxe50n_HJdVMMLCbTrPhhIW&sz=w1200'
  },
  {
    id: 'quarto-infantil',
    title: 'Quarto Infantil Personalizado',
    category: 'decoracao-exclusiva',
    priority: 2,
    featured: true,
    tagline: 'Espaços Lúdicos sem Obra com Sabor de Arquitetura',
    summary: 'Criamos refúgios mágicos e elegantes para os pequenos com adesivo vinílico de alta performance e arte sob medida.',
    description: 'Projetamos, refinamos e aplicamos quartos temáticos customizados para os pais ou em estreita colaboração com escritórios de arquitetura. Atendemos qualquer tema, qualquer metragem, qualquer paleta de cores de forma saudável e rápida.',
    benefits: [
      'Películas ecológicas base d\'água (totalmente atóxicas e sem odor residual)',
      'Aplicação ultrarrápida: seu filho dormindo no quarto novo no mesmo dia',
      'Material vinílico lavável, resistente a arranhões leves e riscos de giz de cera',
      'Customização milimétrica — adaptamos para paredes interteiras, meia parede ou armários',
      'Desenhos exclusivos modernos de acordo com as tendências lúdicas mais elegantes'
    ],
    imageUrl: 'https://drive.google.com/thumbnail?id=1-fRb7i6wSMHk3GPlkDq4qe_soVHQhWIC&sz=w1200'
  },
  {
    id: 'envelopamento-moveis',
    title: 'Envelopamento de Móveis',
    category: 'renovacao',
    priority: 3,
    featured: false,
    tagline: 'RESTAURAÇÃO SUSTENTÁVEL DE ALTO PADRÃO',
    summary: 'Guarda-roupas, armários planejados, cômodas e painéis transformados com tons foscos premium ou texturas sofisticadas. Uma nova vida para seus móveis sem reforma, com acabamento profissional e durabilidade.',
    description: 'Trabalhamos com revestimento vinílico autoadesivo de alta performance, composto por película polimérica resistente com espessura de 150 a 160 micras, acabamento fosco e adesivo de alta aderência integrado. O material tem excelente maleabilidade térmica para moldar cantos perfeitamente, eliminando o risco de descolar ou formar bolhas no dia a dia.',
    benefits: [
      'Cores e texturas que acompanham as tendências (tons pastéis, amadeirados e foscos premium).',
      'Cantos com acabamento térmico hermético, contínuo e sem emendas aparentes.',
      'Material altamente resistente ao manuseio diário, água e riscos do cotidiano.',
      'Fácil limpeza com pano úmido e sabão neutro sem danificar a película.',
      'Economia de até 70% comparado à compra de móveis planejados novos.'
    ],
    imageUrl: 'https://drive.google.com/thumbnail?id=1CvWzQ1tiznMO5R8ZcvhJ5AQ6wfdrKlum&sz=w1200'
  },
  {
    id: 'portas-marcos',
    title: 'Portas e Marcos',
    category: 'renovacao',
    priority: 4,
    featured: false,
    tagline: 'A PRIMEIRA IMPRESSÃO DE UM IMÓVEL RENOVADA',
    summary: 'Renovação completa de portas e marcos (batentes) com revestimento vinílico de alta fidelidade. Transformamos o visual de portas de entrada ou internas sem a necessidade de troca ou pintura, garantindo um acabamento impecável e resistente.',
    description: 'Envelopamento termo-moldado de alta aderência para portas e marcos residenciais. Oferece resistência superior a impactos cotidianos, não amarela com o passar dos anos e protege totalmente a madeira antiga de umidade infiltrada.',
    benefits: [
      'Estabilidade térmica impecável nas bordas e rebaixos do batente/marco',
      'Visual e sensação idênticos aos da madeira natural de alta arquitetura',
      'Revestimento impermeável que protege contra a ação da umidade e facilita a limpeza diária',
      'Acabamento suave ao toque e extremamente duradouro, sem descascar',
      'Fim da poeira e do cheiro de solvente ou tintas no seu ambiente'
    ],
    imageUrl: 'https://drive.google.com/thumbnail?id=1_zqKnByXRpnpthFhEOpC4k_WaDMFypP-&sz=w1200'
  },
  {
    id: 'eletrodomesticos',
    title: 'Geladeiras e Freezers',
    category: 'renovacao',
    priority: 5,
    featured: false,
    tagline: 'Seus Equipamentos em Sintonia com a Cozinha',
    summary: 'Envelopamento de geladeiras e freezers com acabamentos como Aço Escovado, Preto, Carbono ou cores retrô. Oferecemos também personalização total com temas de marcas de cervejas, whiskys e artes exclusivas para sua área gourmet, renovando o visual com estilo e proteção.',
    description: 'Trabalhamos com diferentes tipos de película vinílica de alta performance (automotiva, impressa e escovada), selecionadas conforme a necessidade de cada projeto. Microcanais de vazão antibolha garantem aplicação precisa e acabamento profissional.',
    benefits: [
      'Materiais com alta maleabilidade térmica para envolver curvas e cantos sem descolar',
      'Películas com alta resistência a raios UV, gordura, calor local e umidade',
      'Opções de acabamentos nobres como Aço Escovado, Black Piano ou Retrô',
      'Fácil higienização com pano macio e detergente comum',
      'Combinação harmônica perfeita de cores modernas combinando com sua cozinha'
    ],
    imageUrl: 'https://drive.google.com/thumbnail?id=104mgifuHSAnjHa7X9WAzs1zNeAjUUUNO&sz=w1200'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Cobertura Ipanema',
    serviceCategory: 'Teto Amadeirado',
    location: 'Rio de Janeiro, RJ',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    architectPartner: 'Studio M+A Arquitetura',
    instagramUrl: 'https://instagram.com/casadepapelstudio'
  },
  {
    id: 'proj-2',
    title: 'Quarto Safári Aquarelado',
    serviceCategory: 'Quarto Infantil',
    location: 'Niterói, RJ',
    imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=800',
    architectPartner: 'Juliana Paes Interiores',
    instagramUrl: 'https://instagram.com/casadepapelstudio'
  },
  {
    id: 'proj-3',
    title: 'Escritório Executivo Faria Lima',
    serviceCategory: 'Teto Amadeirado',
    location: 'São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    architectPartner: 'G&S Arquitetos Associados',
    instagramUrl: 'https://instagram.com/casadepapelstudio'
  },
  {
    id: 'proj-4',
    title: 'Cozinha Integradora Cinza Matte',
    serviceCategory: 'Envelopamento Móveis e Pia',
    location: 'Barra da Tijuca, RJ',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
    architectPartner: 'Projetar Interiores',
    instagramUrl: 'https://instagram.com/casadepapelstudio'
  },
  {
    id: 'proj-5',
    title: 'Suíte Infantil Balão e Nuvem',
    serviceCategory: 'Quarto Infantil',
    location: 'São Paulo, SP',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    architectPartner: 'Arq. Carla Albuquerque',
    instagramUrl: 'https://instagram.com/casadepapelstudio'
  },
  {
    id: 'proj-6',
    title: 'Varanda Gourmet Carvalho',
    serviceCategory: 'Teto Amadeirado',
    location: 'Tijuca, RJ',
    imageUrl: 'https://images.unsplash.com/photo-1628744448831-f9b09a6ebb05?auto=format&fit=crop&q=80&w=800',
    architectPartner: 'Ateliê de Arquitetura RJ',
    instagramUrl: 'https://instagram.com/casadepapelstudio'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Carolina Gurgel',
    role: 'Sócia Diretora no Gurgel & Albuquerque Arquitetura',
    isArchitect: true,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    text: 'A Casa de Papel Studio virou nosso parceiro estratégico obrigatório. Para tetos amadeirados, a precisão e a rapidez nos liberam do pesadelo de prazos estourados da marcenaria em gesso. Os frisos e acabamentos térmicos nas laterais são de um requinte impressionante. Nossos clientes elogiam a inexistência de cheiros ou entulho.',
    projectsCompleted: 8,
    rating: 5
  },
  {
    id: 't-2',
    name: 'Roberto Vasconcellos',
    role: 'Arquiteto de Interiores Luxo',
    isArchitect: true,
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150',
    text: 'Trabalho focado no público classe A e a fidelidade tátil do Freijó Catedral que a Casa de Papel Studio aplica é de cair o queixo. Eles entendem de paginação de madeira, encaixes e o respeito com o projeto luminotécnico. O atendimento técnico B2B é ágil, ideal para nós profissionais que precisamos dar respostas rápidas.',
    projectsCompleted: 5,
    rating: 5
  },
  {
    id: 't-3',
    name: 'Mariana Penteado',
    role: 'Mãe do Matheus (B2C Cliente Final)',
    isArchitect: false,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    text: 'O quarto do Matheus ficou sensacional! Queríamos um tema florestal sutil e elegante, e a equipe adaptou as cores perfeitamente ao projeto que nossa arquiteta desenhou. Eles aplicaram tudo em apenas 4 horas, sem uma grama de pó ou barulho de britadeira no apartamento. Material super fácil de limpar, totalmente atóxico.',
    projectsCompleted: 1,
    rating: 5
  }
];
