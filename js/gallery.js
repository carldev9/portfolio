/* ============================================================
   GALLERY DATA
   ------------------------------------------------------------
   Image paths use the local assets folder:
     assets/images/projects/  - card thumbnails (one per project)
     assets/images/gallery/   - modal images (4 per project)

   Naming convention:
     projects/  -> {slug}.jpg          e.g. healthcare.jpg
     gallery/   -> {slug}-{n}.jpg      e.g. healthcare-1.jpg
   ============================================================ */
const galleryData = [
  {
    category: 'Healthcare AI',
    title: 'Healthcare Platform - CareFlow',
    description: 'End-to-end healthcare platform on AWS with HIPAA compliance, secure data pipelines, and AI-assisted clinical workflows.',
    highlights: [
      { num: '82%',  label: 'RAG Accuracy Boost' },
      { num: '28%',  label: 'Hallucination Reduction' },
      { num: 'HIPAA', label: 'Compliant' }
    ],
    bullets: [
      'Designed scalable data pipelines handling thousands of patient records daily',
      'Enables natural language queries across patient records, encounters, and documents using LLMs and RAG for fast, accurate information retrieval.',
      'Developed a custom RAG system with FAISS and Pinecone, improving support query resolution accuracy by 42%',
      'Automates client onboarding and internal knowledge workflows through LLM-based agents built with Django APIs, LangChain, and OpenAI models.',
    ],
    tags: ['React', 'TypeScript', 'AWS', 'RAG', 'Django', 'LangChain', 'OpenAI', 'Lambda', 'Kinesis'],
    images: [
      'assets/images/projects/CareFlow_1.png',
      'assets/images/projects/CareFlow_2.png',
      'assets/images/projects/CareFlow_3.png',
      'assets/images/projects/CareFlow_4.png',
      'assets/images/projects/CareFlow_5.png',
      'assets/images/projects/CareFlow_6.png'
    ]
  },
  {
    category: 'Bright River',
    title: 'AI-Powered Investment Fund Analysis Platform',
    description: 'Brightriver.ai streamlines investment analysis by ingesting multi-format documents, generating concise reports, and enabling natural language queries. It features change tracking, undo/redo, and AI-driven insights for financial analysts.',
    highlights: [
      { num: '80%', label: 'Accuary Boost' },
      { num: 'GPT-4',  label: 'Model Version' },
      { num: '<150ms', label: 'Query Latency' }
    ],
    bullets: [
      'Designed multi-agent orchestration with LangChain for complex clinical workflows',
      'Integrated OpenAI GPT-4 for natural language patient intake and triage',
      'Built Django REST backend with secure patient data handling',
      'Implemented fallback and escalation logic for edge cases requiring human review'
    ],
    tags: ['LangChain', 'OpenAI', 'Django', 'Python', 'LLM Agents', 'React'],
    images: [
      'assets/images/projects/BrightRiver.png',
    ]
  },
  {
    category: 'Lead Rescue',
    title: 'AI-quickly analyze customer call',
    description: 'Lead Rescue automates customer call analysis for businesses, processing 10–50 calls in minutes. AI-driven insights, real-time alerts, and lead “heat” analysis boost appointment rates and optimize conversions. Automated routing and detailed breakdowns enhance employee training and operational efficiency.',
    highlights: [
      { num: '82%',    label: 'Accuracy Boost' },
      { num: '2',      label: 'Vector DBs' },
      { num: '<200ms', label: 'Query Latency' }
    ],
    bullets: [
      'Implemented hybrid search with BM25 + dense embeddings for improved recall',
      'Built custom chunking and embedding pipeline optimized for medical documents',
      'Added re-ranking layer using cross-encoder models to boost precision'
    ],
    tags: ['RAG', 'FAISS', 'Pinecone', 'GPT-4', 'Vector DB'],
    images: [
      'assets/images/projects/LeadRescue.jpg',
    ]
  },
  {
    category: 'Real Estate',
    title: 'CREXI',
    description: 'A B2B vendor marketplace for property managers.',
    highlights: [
      { num: '10+',      label: 'Metrics Tracked' },
      { num: '95%',    label: 'SEO OPTIMIZATION' },
      { num: 'Real-time', label: 'Monitoring' }
    ],
    bullets: [
      'Built a B2B vendor marketplace for property managers.',
      'Features included vendor onboarding, subscription billing, and Elasticsearch-powered search for instant filtering',
      'Enabled seamless onboarding of 5,000+ vendors in the first quarter.'
    ],
    tags: ['React', 'Redux', 'Python', 'MySQL'],
    images: [
      'assets/images/projects/CREXI.png',
    ]
  },
  {
    category: 'GEO with AI',
    title: 'Crossfill',
    description: "Led the development of Crossfill's flagship Generative Engine Optimization (GEO) platform, an innovative AI-powered system that optimizes content visibility across AI search engines and LLM-powered platforms.",
    highlights: [
      { num: '10+', label: 'Languages' },
      { num: '95%',    label: 'SEO OPTIMIZATION' },
      { num: 'Real-time', label: 'Monitoring' }
    ],
    bullets: [
      'GEO Scoring Engine: Designed scoring engine to measure GEO score for AI-driven search engines (Perplexity, ChatGPT, Gemini).',
      'Analytics Dashboard: Developed real-time tracking and reporting system for content performance across multiple AI platforms.',
      'Content Optimization: Implemented NLP-based content analysis engine to identify optimization opportunities.',
      'AnswerHub: Integrated AnswerHub, an internal Q&A system powered by OpenAI API, automated manual operations.',
      'Smart Recommendations: Created AI-powered recommendation system for content optimization strategies.'
    ],
    tags: ['React', 'Typescript', 'Flask', 'FastAPI', 'Redux', 'Anthropic', 'OpenAI', 'AWS', 'Docker'],
    images: [
      'assets/images/projects/crossfill01.png',
      'assets/images/projects/crossfill02.png',
      'assets/images/projects/crossfill03.png',
      'assets/images/projects/crossfill04.png'
    ]
  },
  {
    category: 'HealthCare Indsutry',
    title: 'Agrippon',
    description: 'Agrippon is a cloud-based, HIPAA-compliant communication platform designed for medical and dental billing professionals.',
    highlights: [
      { num: '6K+', label: 'Weekly Queries' },
      { num: '91%', label: 'Success Rate' },
      { num: '3',   label: 'Cloud Providers' }
    ],
    bullets: [
      'include tracking claim communications, preventing revenue loss, and expediting insurance payments through a secure, compliant portal',
    ],
    tags: ['React', 'Azure', '.NET'],
    images: [
      'assets/images/projects/Agrippon.png',
    ]
  },
  {
    category: 'AEC industry',
    title: 'xFigura.ai',
    description: 'xFigura is an AI-powered ideation platform for architects and designers working across 2D and 3D workflows.',
    highlights: [
      { num: 'Auto',  label: 'Retraining' },
      { num: 'MLflow', label: 'Experiment Tracking' },
      { num: 'CI/CD', label: 'Model Deployment' }
    ],
    bullets: [
      'Engineered AI-powered 2D-to-3D ideation workflows enabling rapid architectural concept generation and visualization',
      'Built real-time collaborative infinite canvas infrastructure for multi-user design exploration and iteration',
      'Developed multi-model AI orchestration pipelines integrating image, video, and 3D generation systems into a unified platform',
      'Implemented scalable cloud-native GPU inference and asynchronous processing infrastructure for high-volume creative workflows'
    ],
    tags: ['NextJS', 'LLM', 'Canvas API', '3D visualization', 'NVIDIA Omniverse WebRTC'],
    images: [
      'assets/images/projects/xfiguraAi01.png',
    ]
  },
  {
    category: 'AEC AI',
    title: 'Kiwi(MVP)',
    description: 'A web-based generative AI platform that enables custom home builders and their clients in the UK to efficiently design, visualize, and accurately estimate costs for custom residential homes.',
    highlights: [
      // { num: '28%',  label: 'Hallucination Drop' },
      // { num: '3',    label: 'Validation Layers' },
      // { num: 'Prod', label: 'Healthcare Context' }
    ],
    bullets: [
      'Built a web-based generative AI platform enabling UK home builders and clients to design, visualize, and estimate custom residential projects in real time',
      'Developed natural language–to–design parameter pipelines that translate user prompts into AI-generated floor plans and parametric BIM models',
      'Engineered scalable React/Next.js and FastAPI architecture integrating generative AI workflows, conversational AI guidance, and UK parcel data APIs',
      'Implemented browser-based high-fidelity 3D visualization workflows using Nvidia Omniverse cloud infrastructure for interactive design review and client collaboration'
    ],
    tags: ['React/Next.js', 'Python/FastAPI', 'Generative AI', '3D Viewer', 'Guardrails'],
    images: [
      'assets/images/projects/kiwi01.png',
    ]
  },
  {
    category: 'Full-Stack',
    title: 'Home Services Marketplace Platform',
    description: 'Full-stack marketplace with real-time booking, Socket.io live updates, and React/Node.js stack â€” boosting satisfaction by 30%.',
    highlights: [
      { num: '30%',      label: 'Satisfaction Boost' },
      { num: 'Real-time', label: 'Live Updates' },
      { num: 'Full',     label: 'Stack' }
    ],
    bullets: [
      'Built real-time booking and availability system with Socket.io live notifications',
      'Integrated payment gateway with secure transaction handling and refund flows',
      'Developed service provider rating and review system with moderation tools',
      'Implemented geolocation-based service matching and dynamic pricing engine'
    ],
    tags: ['React', 'Node.js', 'Socket.io', 'AngularJS', 'MongoDB'],
    images: [
      'assets/images/gallery/marketplace-1.jpg',
      'assets/images/gallery/marketplace-2.jpg',
      'assets/images/gallery/marketplace-3.jpg',
      'assets/images/gallery/marketplace-4.jpg'
    ]
  }
];

/* ============================================================
   GALLERY STATE & FUNCTIONS
   ============================================================ */
let currentGalleryIndex = 0;
let currentImageIndex   = 0;

function openGallery(projectIndex) {
  currentGalleryIndex = projectIndex;
  currentImageIndex   = 0;
  const project = galleryData[projectIndex];

  document.getElementById('galleryCat').textContent   = project.category;
  document.getElementById('galleryTitle').textContent = project.title;
  document.getElementById('galleryDesc').textContent  = project.description;

  document.getElementById('galleryHighlights').innerHTML = project.highlights
    .map(h => `<div class="gallery-highlight">
      <div class="gallery-highlight-num">${h.num}</div>
      <div class="gallery-highlight-label">${h.label}</div>
    </div>`).join('');

  document.getElementById('galleryBullets').innerHTML = project.bullets
    .map(b => `<li>${b}</li>`).join('');

  document.getElementById('galleryTags').innerHTML = project.tags
    .map(t => `<span class="gallery-tag">${t}</span>`).join('');

  document.getElementById('galleryThumbs').innerHTML = project.images
    .map((img, idx) => `<div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="selectImage(${idx})">
      <img src="${img}" alt="Thumbnail ${idx + 1}">
    </div>`).join('');

  updateMainImage();
  document.getElementById('galleryOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  document.getElementById('galleryOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function updateMainImage() {
  const project = galleryData[currentGalleryIndex];
  const mainImg = document.getElementById('galleryMainImg');
  mainImg.classList.add('fade');
  setTimeout(() => {
    mainImg.src = project.images[currentImageIndex];
    mainImg.alt = `${project.title} - Image ${currentImageIndex + 1}`;
    mainImg.classList.remove('fade');
  }, 150);
  document.getElementById('galleryCounter').textContent =
    `${currentImageIndex + 1} / ${project.images.length}`;
  document.querySelectorAll('.gallery-thumb').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentImageIndex);
  });
}

function selectImage(index) {
  currentImageIndex = index;
  updateMainImage();
}

function nextImage() {
  const len = galleryData[currentGalleryIndex].images.length;
  currentImageIndex = (currentImageIndex + 1) % len;
  updateMainImage();
}

function prevImage() {
  const len = galleryData[currentGalleryIndex].images.length;
  currentImageIndex = (currentImageIndex - 1 + len) % len;
  updateMainImage();
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
document.getElementById('galleryClose').addEventListener('click', closeGallery);
document.getElementById('galleryNext').addEventListener('click', nextImage);
document.getElementById('galleryPrev').addEventListener('click', prevImage);
document.getElementById('galleryOverlay').addEventListener('click', e => {
  if (e.target.id === 'galleryOverlay') closeGallery();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('galleryOverlay').classList.contains('open')) return;
  if (e.key === 'Escape')      closeGallery();
  if (e.key === 'ArrowRight')  nextImage();
  if (e.key === 'ArrowLeft')   prevImage();
});