export type SearchIntent = 
  | 'Informational' 
  | 'Definition' 
  | 'Transactional' 
  | 'Commercial' 
  | 'Navigational' 
  | 'Educational Resource' 
  | 'Document' 
  | 'Regulation' 
  | 'Exam' 
  | 'Local';

export type ArticleCategory = 
  | 'Pendidikan Kesetaraan'
  | 'Kurikulum & Modul'
  | 'Ujian & Rapor'
  | 'Regulasi & Administrasi'
  | 'Panduan & Tutorial'
  | 'Info Beasiswa'
  | 'Teknologi & AI'
  | 'Karier & Vokasi'
  | 'Kegiatan Celah Cahaya'
  | 'Isu Pendidikan & Inklusi';

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich HTML-like formatted text
  category: ArticleCategory;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: SearchIntent;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  publishedDate: string;
  updatedDate: string;
  readingTimeMinutes: number;
  featuredImage: string;
  featuredImageAlt: string;
  tableOfContents: { id: string; title: string; level: number }[];
  faqs: ArticleFAQ[];
  isPillar: boolean;
  relatedArticleSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  views: number;
  status: 'published' | 'draft';
}

export interface Program {
  id: string;
  slug: string;
  name: string;
  level: string; // e.g., 'Setara SD', 'Setara SMP', 'Setara SMA'
  badge: string;
  targetAudience: string;
  description: string;
  curriculum: string[];
  learningMethod: string;
  duration: string;
  requirements: string[];
  benefits: string[];
  tuitionFee: string;
  scholarshipAvailable: boolean;
  image: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  year: string;
  quote: string;
  avatar: string;
  currentActivity: string; // e.g. "Mahasiswa Universitas Padjadjaran", "Wirausahawan Kuliner di Garut"
}

export interface FAQItem {
  id: string;
  category: 'Umum' | 'Legalitas & Ijazah' | 'Paket C & Kuliah' | 'Biaya & Pendaftaran' | 'Metode Belajar';
  question: string;
  answer: string;
}

export interface KeywordStrategyItem {
  keyword: string;
  searchIntent: SearchIntent;
  estimatedVolume: string;
  competition: 'Rendah' | 'Sedang' | 'Tinggi';
  targetPage: string;
  clusterType: 'Pillar' | 'Supporting' | 'Local SEO';
  topicalRelevance: string;
  conversionPotential: 'Tinggi' | 'Sedang' | 'Sangat Tinggi';
  tier?: 'Tier 1' | 'Tier 2' | 'Tier 3';
  status?: 'Belum dibuat' | 'Draft' | 'Published' | 'Indexed' | 'Ranking' | 'Top 10' | 'Top 3';
  position?: number;
  clicks?: number;
  impressions?: number;
  ctr?: string;
}

export interface RegistrationSubmission {
  id: string;
  fullName: string;
  nik: string;
  phone: string;
  email: string;
  district: string; // Kecamatan di Garut atau luar kota
  program: string;
  lastEducation: string;
  learningMode: 'Hybrid (Tatap Muka & Daring)' | 'Daring Penuh (Khusus Luar Kota/Pekerja Shift)' | 'Tatap Muka Reguler';
  notes?: string;
  createdAt: string;
  status: 'Baru' | 'Dihubungi' | 'Terdaftar';
}
