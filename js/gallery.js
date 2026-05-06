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
    category: 'EdTech AI',
    title: 'Multilingual AI Storytelling Platform',
    description: 'Generative AI platform for children aged 4-7 creating personalized multilingual stories with Amazon Polly text-to-speech.',
    highlights: [
      { num: '5+', label: 'Languages' },
      { num: '90%', label: 'Age Range' },
      { num: 'AWS', label: 'Polly TTS' }
    ],
    bullets: [
      'Built generative AI story engine producing age-appropriate, personalized narratives',
      'Integrated Amazon Polly for natural-sounding multilingual text-to-speech narration',
      'Implemented LangGraph agentic workflows for dynamic, context-aware story branching',
      'Designed child-safe content guardrails and parental control features'
    ],
    tags: ['Generative AI', 'Amazon Polly', 'Python', 'Flask', 'EdTech'],
    images: [
      'assets/images/gallery/storytelling-1.jpg',
      'assets/images/gallery/storytelling-2.jpg',
      'assets/images/gallery/storytelling-3.jpg',
      'assets/images/gallery/storytelling-4.jpg'
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
    category: 'MLOps',
    title: 'ML Retraining & Feedback Loop System',
    description: 'Automated ML retraining pipeline with Databricks and MLflow for continuous model improvement from production feedback.',
    highlights: [
      { num: 'Auto',  label: 'Retraining' },
      { num: 'MLflow', label: 'Experiment Tracking' },
      { num: 'CI/CD', label: 'Model Deployment' }
    ],
    bullets: [
      'Built automated retraining triggers based on model drift detection in production',
      'Used MLflow for full experiment tracking, model registry, and versioning',
      'Integrated Databricks for distributed training on large-scale feedback datasets',
      'Implemented A/B testing framework for safe model rollouts with rollback support'
    ],
    tags: ['Databricks', 'MLflow', 'Python', 'MLOps', 'CI/CD'],
    images: [
      'assets/images/gallery/mlops-1.jpg',
      'assets/images/gallery/mlops-2.jpg',
      'assets/images/gallery/mlops-3.jpg',
      'assets/images/gallery/mlops-4.jpg'
    ]
  },
  {
    category: 'Prompt Engineering',
    title: 'Hallucination Reduction via Guardrails',
    description: 'Structured prompt guardrail system reducing LLM hallucinations by 28% in production healthcare contexts.',
    highlights: [
      { num: '28%',  label: 'Hallucination Drop' },
      { num: '3',    label: 'Validation Layers' },
      { num: 'Prod', label: 'Healthcare Context' }
    ],
    bullets: [
      'Designed multi-layer prompt guardrails with input sanitization and output validation',
      'Implemented constrained generation using structured output schemas (JSON mode)',
      'Built fact-checking layer cross-referencing LLM outputs against trusted knowledge base',
      'Reduced false positives in clinical recommendations by 28% in production'
    ],
    tags: ['Prompt Engineering', 'LLM', 'OpenAI', 'Python', 'Guardrails'],
    images: [
      'assets/images/gallery/guardrails-1.jpg',
      'assets/images/gallery/guardrails-2.jpg',
      'assets/images/gallery/guardrails-3.jpg',
      'assets/images/gallery/guardrails-4.jpg'
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