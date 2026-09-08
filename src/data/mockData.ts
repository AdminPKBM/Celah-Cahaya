import { Article, Program, Testimonial, FAQItem, KeywordStrategyItem } from '../types';
import { EDUCATION_ARTICLES } from './educationArticles';

export const INSTITUTION_INFO = {
  name: 'PKBM Celah Cahaya',
  legalName: 'Pusat Kegiatan Belajar Masyarakat (PKBM) Celah Cahaya',
  domain: 'https://www.celahcahaya.sch.id',
  type: 'Satuan Pendidikan Swasta (Pusat Kegiatan Belajar Masyarakat / PKBM)',
  level: 'Pendidikan Masyarakat (DIKMAS)',
  npsn: 'P9984574',
  accreditation: 'Terdaftar Resmi Dapodik Kemendikbudristek RI',
  legalPermit: 'SK Izin Operasional No. 421.9/1145-DISDIK (TMT 22 Juli 2019)',
  skNumber: '421.9/1145-DISDIK',
  tmtDate: '22 Juli 2019',
  address: 'Kp. Sukawangi, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut, Provinsi Jawa Barat',
  shortAddress: 'Singajaya, Kabupaten Garut, Jawa Barat',
  village: 'Desa Sukawangi',
  subdistrict: 'Kp. Sukawangi',
  district: 'Kecamatan Singajaya',
  city: 'Kabupaten Garut',
  province: 'Jawa Barat',
  postalCode: '44173',
  phone: '+62 821-1936-2454',
  whatsapp: '6282119362454',
  email: 'info@celahcahaya.sch.id',
  operationalHours: 'Senin - Sabtu: 08.00 - 17.00 WIB (Layanan Online 24 Jam)',
  tagline: 'Membuka Celah Harapan, Menerangi Masa Depan Pendidikan Indonesia',
  logoUrl: 'https://i.ibb.co.com/FL9BY0jW/LOGO-PKBM-CELAH-CAHAYA-1-1-1.webp',
  officialProfile: 'PKBM Celah Cahaya merupakan satuan pendidikan swasta berbentuk Pusat Kegiatan Belajar Masyarakat (PKBM) yang menyelenggarakan layanan pendidikan masyarakat pada jenjang Pendidikan Masyarakat (DIKMAS). PKBM Celah Cahaya memiliki NPSN P9984574 dan beralamat di Kp. Sukawangi, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut, Provinsi Jawa Barat. Dalam penyelenggaraan pendidikan, PKBM Celah Cahaya menyediakan layanan Program Pendidikan Kesetaraan Paket B dan Paket C sebagai alternatif layanan pendidikan bagi masyarakat yang membutuhkan akses pendidikan nonformal yang setara dengan jenjang pendidikan formal. PKBM Celah Cahaya memiliki Izin Operasional dengan Nomor SK 421.9/1145-DISDIK, dengan TMT SK Operasional 22 Juli 2019. Keberadaan PKBM ini diharapkan dapat memberikan kesempatan yang lebih luas kepada masyarakat untuk memperoleh layanan pendidikan yang berkualitas, fleksibel, inklusif, dan berkelanjutan. Untuk informasi dan layanan lebih lanjut, masyarakat dapat menghubungi PKBM Celah Cahaya melalui WhatsApp di +62 821-1936-2454.',
  headerBanner: 'https://blogger.googleusercontent.com/img/a/AVvXsEiM0r1eSc78SJ4Q-nxNdLOj5nxM0s8uRn6WyfbwYcQ8xKvm65WShLoWeGoeU5EcTPssWIGZI36nGSHwl8QKP9MVxQIO6JME6LzpJF1cFLZrAmjjQm4TDkPbPjYOkFC_Jsxy8_ko72EbL0yMLc_2yi984-tJ7QOquSYqNFMDByp7IgHQ1BAhtN-GcVydeNK2',
  headerBannerWebp: '/assets/images/header-komunitas-ngejah.webp',
  heroImage: 'https://blogger.googleusercontent.com/img/a/AVvXsEhWfI4H4uVtyAqg-a-tYYkMV-E-invtSbOIT9z7BtpkiFc7Yq_VRlKD4sAVmg-l7EchzdfhVJechv7PlNmt3f3VTVQFq2fB-HmdZctQngiZmGnPB31nXDgT4Xc4i46-cgTtg0pNcJFmwCLTwjla7aS0pBz-erB6xrfIHTg9YWAfnccARN9nMZPrXEiCZewu',
  heroImageWebp: '/assets/images/hero-kesetaraan.webp',
  establishedYear: '2019',
  graduatesCount: '1.450+',
  activeLearnersCount: '380+',
  tutorsCount: '24',
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'paket-a',
    slug: 'paket-a',
    name: 'Pendidikan Kesetaraan Paket A',
    level: 'Setara Sekolah Dasar (SD / MI)',
    badge: 'Ijazah Resmi Negara',
    targetAudience: 'Anak usia sekolah 7-12 tahun putus sekolah atau usia dewasa yang belum memiliki ijazah SD.',
    description: 'Program pendidikan nonformal tingkat dasar untuk membekali warga belajar kemampuan literasi baca tulis, numerasi, pembentukan karakter mulia, dan keterampilan hidup mandiri yang diakui setara ijazah Sekolah Dasar resmi.',
    curriculum: [
      'Pendidikan Agama dan Budi Pekerti',
      'Pendidikan Pancasila & Kewarganegaraan',
      'Bahasa Indonesia (Literasi Fungsional)',
      'Matematika Dasar & Logika Sehari-hari',
      'Ilmu Pengetahuan Alam dan Sosial (IPAS)',
      'Keterampilan Terapan & Seni Budaya Sunda Lokal'
    ],
    learningMethod: 'Tatap muka berkala, bimbingan tutor personal, dan modul belajar mandiri ramah pemula.',
    duration: '1 - 6 Tahun (Disesuaikan asesmen riwayat belajar sebelumnya / rapor pindahan)',
    requirements: [
      'Fotokopi Kartu Keluarga (KK) & Akta Kelahiran',
      'KTP Orang Tua/Wali (atau KTP sendiri bagi usia dewasa)',
      'Pas foto ukuran 3x4 (4 lembar, latar belakang merah)',
      'Rapor pindahan sekolah sebelumnya (bila pernah bersekolah)'
    ],
    benefits: [
      'Ijazah resmi terdaftar di database Kementerian Pendidikan (Dapodik)',
      'Dapat melanjutkan langsung ke SMP formal atau Paket B',
      'Waktu belajar fleksibel, tidak mengganggu waktu kerja/bantu keluarga',
      'Gratis bagi anak dari keluarga pemegang KIP / PKH'
    ],
    tuitionFee: 'Subsidi Pemerintah (Tersedia Kuota Gratis Afirmasi KIP)',
    scholarshipAvailable: true,
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEj3KzyMrdZuYBjAw8e-FrwdZYX1a7daYs3D7gYWaaTBpU4-FK9BVqOf6c1hsvfQ9v18h2C9oQySaNhTFUxINvOkSJzSDC45hGircCQCaWGNL5nKyrDalbnbS87KWAg-Yc_q-B3ocXP2Y80IdiuRxzQlFHycAINfPZEBUHAnr-nMgQNSCuxjYk9X-0IT-leO',
    iconName: 'BookOpen'
  },
  {
    id: 'paket-b',
    slug: 'paket-b',
    name: 'Pendidikan Kesetaraan Paket B',
    level: 'Setara Sekolah Menengah Pertama (SMP / MTs)',
    badge: 'Favorit Pekerja Muda',
    targetAudience: 'Lulusan SD/Paket A yang tertunda melanjutkan, anak putus sekolah SMP, atlet, santri, atau pekerja usia muda.',
    description: 'Program kesetaraan jenjang menengah pertama yang dirancang efisien dengan metode blended learning. Membantu warga belajar meraih ijazah setara SMP untuk syarat kerja maupun melangkah ke SMA / Paket C.',
    curriculum: [
      'Pendidikan Agama & Budi Pekerti',
      'Pendidikan Kewarganegaraan',
      'Bahasa Indonesia & Bahasa Inggris Komunikatif',
      'Matematika Terapan',
      'Ilmu Pengetahuan Alam (IPA Terpadu)',
      'Ilmu Pengetahuan Sosial (IPS)',
      'Teknologi Informasi & Komunikasi Dasar (Pengenalan Komputer & Internet Sehat)'
    ],
    learningMethod: 'Blended learning: Pertemuan tatap muka akhir pekan + modul daring LMS Celah Cahaya.',
    duration: '1 - 3 Tahun (Tergantung jenjang terakhir yang pernah ditempuh)',
    requirements: [
      'Fotokopi Ijazah SD / MI / Paket A dilegalisir (3 lembar)',
      'Fotokopi Kartu Keluarga (KK) & KTP / KIA',
      'Surat keterangan pindah & buku rapor (bila putus sekolah dari SMP)',
      'Pas foto 3x4 berwarna (5 lembar)'
    ],
    benefits: [
      'Ijazah berkekuatan hukum sama persis dengan ijazah SMP formal',
      'Bisa melanjutkan ke SMA Negeri, SMK Negeri, atau Paket C',
      'Bisa digunakan untuk syarat kenaikan golongan kerja dan administrasi resmi',
      'Didampingi tutor yang sabar dan modul ramah pekerja'
    ],
    tuitionFee: 'Biaya Terjangkau & Dapat Diangsur (Program Afirmasi KIP Tersedia)',
    scholarshipAvailable: true,
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEh2JnJiq3Y_dqrzfd779kKJ10iU0TWU7dP1OLgQf3V_M3dBQjM98B_RNJHJl5XqmksfpT3GYyUvsamlERFs6UCLL1F7BsZ2ACPzJERjW9TDlwVwXwykRGsgDm0-80mOI5PFCau0OFAVWHw2W04WxeFxP3pJwa_ovzZwCYJV-3viArIL4wKEQsRyMCmqFjrO',
    iconName: 'Award'
  },
  {
    id: 'paket-c',
    slug: 'paket-c',
    name: 'Pendidikan Kesetaraan Paket C',
    level: 'Setara Sekolah Menengah Atas (SMA / MA) - Jurusan IPS & IPA',
    badge: 'Bisa Kuliah & Kerja Formal',
    targetAudience: 'Masyarakat dari segala usia yang membutuhkan ijazah setara SMA untuk kuliah PTN/PTS, promosi jabatan, daftar TNI/Polri/BUMN/CPNS, atau sertifikasi keahlian.',
    description: 'Program unggulan Celah Cahaya berakreditasi resmi. Mempersiapkan warga belajar tidak hanya memperoleh ijazah negara setara SMA yang sah untuk kuliah dan seleksi kedinasan, namun juga dibekali sertifikasi keterampilan digital dan kewirausahaan modern.',
    curriculum: [
      'Pendidikan Agama & Budi Pekerti',
      'Pendidikan Pancasila & Kewarganegaraan',
      'Bahasa Indonesia & Bahasa Inggris untuk Karier',
      'Matematika Terapan & Statistika Praktis',
      'Jurusan IPS: Ekonomi, Sosiologi, Geografi Terapan',
      'Jurusan IPA: Biologi Terapan, Fisika & Kimia Dasar',
      'Mata Pelajaran Pilihan: Keterampilan Digital AI, Desain Grafis, & E-Commerce'
    ],
    learningMethod: 'Fleksibel: Kelas Weekend, Kelas Malam Hybrid, atau Akses Daring Penuh melalui Portal Belajar Celah Cahaya.',
    duration: '1 - 3 Tahun (Bisa jalur percepatan konversi nilai rapor bagi pindahan SMA/SMK)',
    requirements: [
      'Fotokopi Ijazah SMP / MTs / Paket B dilegalisir (3 lembar)',
      'Fotokopi Kartu Keluarga (KK) & KTP warga belajar',
      'Buku rapor SMA/SMK sebelumnya & surat mutasi (khusus siswa pindahan)',
      'Pas foto 3x4 formal latar belakang merah (5 lembar)'
    ],
    benefits: [
      'Ijazah diterbitkan resmi oleh Kemendikbudristek RI dengan Nomor Ijazah Nasional',
      'Sah 100% untuk mendaftar kuliah PTN (SNBP, SNBT, Mandiri) dan PTS seluruh Indonesia',
      'Dapat digunakan untuk seleksi CPNS, PPPK, TNI/Polri, BUMN, dan izin usaha',
      'Bimbingan portofolio dan konsultasi persiapan masuk perguruan tinggi',
      'Bonus pelatihan AI untuk Produktivitas & Keterampilan Digital Kerja'
    ],
    tuitionFee: 'Transparan, Biaya Terjangkau, Bisa Dicicil Bulanan (Tersedia Beasiswa Prestasi)',
    scholarshipAvailable: true,
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjO1GDsk9htNZC5gmuAlLN8btBxcF2jRQvAA01v1vdDlXK0YGWie4lf1V7NCH5y_IHPL5VpFOi-6vSJRNmfJA_zA_HFuVUL29ebu47x7G3iWTYMJG1miGAzHU_zMGiu44r6UAcQVuLCDFx-_9hBUyKXKtT7rbyDMruNLdwnuEHtBgR6Ac_TiK3xYBlPleUX',
    iconName: 'GraduationCap'
  },
  {
    id: 'vokasi-ai',
    slug: 'vokasi-ai',
    name: 'Keterampilan Vokasi & AI untuk Pendidikan',
    level: 'Sertifikasi Keterampilan Siap Kerja',
    badge: 'Kurikulum Masa Depan',
    targetAudience: 'Warga belajar kesetaraan dan masyarakat umum yang ingin memiliki keahlian digital bernilai ekonomi tinggi.',
    description: 'Program pelatihan vokasi praktis yang memadukan penguasaan Artificial Intelligence (AI), pembuatan konten digital, pemasaran online UMKM, dan administrasi digital untuk membuka peluang kerja mandiri dan penghasilan.',
    curriculum: [
      'Dasar Pemanfaatan AI (Prompt Engineering) untuk Pembelajaran & Pekerjaan',
      'Desain Grafis Canva & Branding Usaha',
      'Manajemen Konten Media Sosial & Pemasaran Digital Lokal',
      'Aplikasi Perkantoran Cloud (Google Workspace / Spreadsheets)',
      'Etika Teknologi Informasi & Keamanan Digital'
    ],
    learningMethod: 'Praktik di Lab Komputer Celah Cahaya & proyek karya nyata berstandar industri.',
    duration: '3 Bulan (Intensif 2x pertemuan per minggu)',
    requirements: [
      'Warga belajar aktif Celah Cahaya atau umum minimal usia 15 tahun',
      'Memiliki komitmen hadir dan mengerjakan proyek praktik',
      'Fotokopi KTP / identitas diri'
    ],
    benefits: [
      'Sertifikat Keterampilan Resmi dari PKBM Celah Cahaya',
      'Portofolio digital siap pakai untuk melamar kerja atau freelance',
      'Jejaring komunitas dan pendampingan wirausaha di Garut'
    ],
    tuitionFee: 'Gratis bagi Warga Belajar Aktif Celah Cahaya / Subsidi Khusus Pemuda Garut',
    scholarshipAvailable: true,
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhzv92AS5x8T1d_yb03d3eYhx3USNhsOvsALrZ4FYuxa00Fx_KAH57hsFQSQnjdLF7DyNY23kBY-fd6MHc0pM4mcN4xF0I771mx_vMr-AvFAt975RccG7QTHROLqfknUNqaDLlNrtRzyQZyjc4a9JH-SXkIdtqP0htlJ0sk0EhQ-aut1b9fzx7iwllAoGV8',
    iconName: 'Cpu'
  }
];

const CORE_INITIAL_ARTICLES: Article[] = [
  {
    id: 'panduan-lengkap-paket-c',
    slug: 'panduan-lengkap-pendidikan-kesetaraan-paket-c',
    title: 'Panduan Lengkap Pendidikan Kesetaraan Paket C: Syarat, Biaya, Legitimasi Ijazah, dan Cara Kuliah',
    excerpt: 'Simak panduan menyeluruh tentang sekolah Paket C di Indonesia. Mulai dari keabsahan hukum ijazah setara SMA, syarat pendaftaran, biaya, sistem belajar fleksibel, hingga peluang kuliah di PTN dan seleksi kerja.',
    category: 'Pendidikan Kesetaraan',
    primaryKeyword: 'Paket C',
    secondaryKeywords: ['sekolah Paket C', 'ijazah Paket C', 'syarat Paket C', 'biaya Paket C', 'pendidikan kesetaraan SMA'],
    searchIntent: 'Informational',
    author: {
      name: 'Drs. H. Ahmad Rahmatullah, M.Pd.',
      role: 'Kepala PKBM Celah Cahaya & Praktisi Pendidikan Nonformal',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Telah berkecimpung lebih dari 15 tahun memajukan pendidikan masyarakat dan mendampingi ribuan warga belajar meraih kesetaraan pendidikan formal di Jawa Barat.'
    },
    publishedDate: '2025-01-15',
    updatedDate: '2025-08-20',
    readingTimeMinutes: 9,
    featuredImage: 'https://blogger.googleusercontent.com/img/a/AVvXsEjO1GDsk9htNZC5gmuAlLN8btBxcF2jRQvAA01v1vdDlXK0YGWie4lf1V7NCH5y_IHPL5VpFOi-6vSJRNmfJA_zA_HFuVUL29ebu47x7G3iWTYMJG1miGAzHU_zMGiu44r6UAcQVuLCDFx-_9hBUyKXKtT7rbyDMruNLdwnuEHtBgR6Ac_TiK3xYBlPleUX',
    featuredImageAlt: 'Warga belajar dan pelepasan kelulusan alumni pendidikan kesetaraan PKBM Celah Cahaya Garut',
    isPillar: true,
    views: 4820,
    status: 'published',
    metaTitle: 'Panduan Lengkap Pendidikan Kesetaraan Paket C: Syarat, Biaya & Peluang Kuliah',
    metaDescription: 'Ingin tahu cara ikut Paket C dan keabsahan ijazahnya? Pelajari syarat, estimasi biaya, legitimasi hukum setara SMA, hingga cara masuk PTN dalam panduan komprehensif ini.',
    tableOfContents: [
      { id: 'apa-itu-paket-c', title: '1. Apa Itu Pendidikan Kesetaraan Paket C?', level: 2 },
      { id: 'dasar-hukum', title: '2. Dasar Hukum & Legitimasi Ijazah Paket C', level: 2 },
      { id: 'siapa-yang-bisa-ikut', title: '3. Siapa Saja yang Bisa Mengikuti Paket C?', level: 2 },
      { id: 'syarat-pendaftaran', title: '4. Syarat Pendaftaran Warga Belajar', level: 2 },
      { id: 'biaya-pendidikan', title: '5. Estimasi Biaya & Transparansi Pengeluaran', level: 2 },
      { id: 'apakah-bisa-kuliah', title: '6. Apakah Lulusan Paket C Bisa Kuliah & Masuk PTN?', level: 2 },
      { id: 'perbedaan-paket-c-dan-sma', title: '7. Perbandingan Paket C vs SMA Formal', level: 2 },
      { id: 'faq-paket-c', title: '8. Tanya Jawab Populer (FAQ)', level: 2 },
      { id: 'kesimpulan-cta', title: '9. Kesimpulan & Langkah Pendaftaran', level: 2 }
    ],
    content: `
Pendidikan adalah hak fundamental setiap warga negara tanpa memandang batas usia, latar belakang sosial, ataupun kendala masa lalu. Bagi masyarakat yang sempat terhenti pendidikannya di jenjang sekolah menengah atas karena alasan ekonomi, pekerjaan, keluarga, ataupun kondisi kesehatan, **Pendidikan Kesetaraan Paket C** hadir sebagai jembatan resmi negara untuk membuka kembali gerbang masa depan.

Banyak orang masih menyimpan keraguan: *Apakah ijazah Paket C diakui resmi? Apakah lulusan Paket C bisa mendaftar kuliah di perguruan tinggi negeri (PTN)? Apakah bisa ikut tes CPNS, TNI, Polri, atau melamar kerja di perusahaan swasta?*

Artikel ini dirancang sebagai panduan induk (pillar content) paling komprehensif dan faktual untuk menjawab seluruh pertanyaan Anda seputar program Paket C.

---

## 1. Apa Itu Pendidikan Kesetaraan Paket C? {#apa-itu-paket-c}

**Paket C** adalah program pendidikan nonformal yang diselenggarakan oleh Pusat Kegiatan Belajar Masyarakat (PKBM) atau Sanggar Kegiatan Belajar (SKB) di bawah binaan Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek).

Secara substansi akademik, Paket C setara dengan jenjang **Sekolah Menengah Atas (SMA)** atau **Madrasah Aliyah (MA)**. Program ini menawarkan dua kelompok peminatan utama, yaitu **Ilmu Pengetahuan Sosial (IPS)** dan **Ilmu Pengetahuan Alam (IPA)**.

Tujuan utama Paket C adalah memberikan kesempatan kedua bagi warga masyarakat untuk menuntaskan program wajib belajar 12 tahun sekaligus membekali mereka dengan kompetensi vokasi dan keterampilan praktis yang sesuai dengan kebutuhan dunia kerja masa kini.

---

## 2. Dasar Hukum & Legitimasi Ijazah Paket C {#dasar-hukum}

Kekuatan hukum ijazah Paket C diatur secara tegas dalam perundang-undangan Republik Indonesia. Anda tidak perlu khawatir akan legitimasi ijazah ini karena dilindungi payung hukum berikut:

1. **Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional**:
   * *Pasal 26 Ayat (6)*: *"Hasil pendidikan nonformal dapat dihargai setara dengan hasil program pendidikan formal setelah melalui proses penilaian penyetaraan oleh lembaga yang ditunjuk oleh Pemerintah atau pemerintah daerah dengan mengacu pada standar nasional pendidikan."*
2. **Permendikbudristek No. 31 Tahun 2014**:
   * Mengatur secara terperinci tentang Uji Kesetaraan dan pengakuan lulusan pendidikan nonformal.
3. **Surat Edaran Kemendikbudristek**:
   * Menegaskan bahwa lulusan pendidikan kesetaraan berhak memperoleh hak yang sama dalam melanjutkan studi ke jenjang perguruan tinggi dan seleksi kepegawaian publik.

Setiap warga belajar yang lulus dari PKBM resmi seperti **Celah Cahaya** akan menerima **Ijazah Negara Berhologram Resmi** yang tercatat dalam sistem pangkalan data nasional **Dapodik (Data Pokok Pendidikan)** Kemendikbudristek dan dilengkapi dengan Nomor Induk Siswa Nasional (NISN).

---

## 3. Siapa Saja yang Bisa Mengikuti Paket C? {#siapa-yang-bisa-ikut}

Pendidikan kesetaraan Paket C dirancang sangat inklusif dan tidak mendiskriminasi usia. Peserta program ini umumnya terdiri dari:

* **Pekerja & Karyawan**: Yang membutuhkan ijazah formal setara SMA untuk syarat kenaikan jabatan, sertifikasi profesi, atau penyesuaian upah minimum.
* **Remaja Putus Sekolah**: Yang terhenti di kelas 1, 2, atau 3 SMA/SMK akibat masalah ekonomi, perundungan (bullying), atau faktor keluarga.
* **Siswa Homeschooling**: Yang memilih jalur belajar mandiri di rumah dan memerlukan ijazah formal negara.
* **Santri Pondok Pesantren Salafiyah**: Yang ingin melengkapi pendidikan keagamaan mereka dengan ijazah umum setara SMA.
* **Atlet & Pekerja Kreatif**: Yang memiliki jadwal latihan padat sehingga membutuhkan jadwal belajar fleksibel.
* **Masyarakat Dewasa (Tidak Ada Batas Usia Maksimal)**: Siapa pun, baik usia 20, 30, 40, bahkan 50 tahun ke atas yang bertekad meraih cita-cita menuntaskan pendidikan.

---

## 4. Syarat Pendaftaran Warga Belajar {#syarat-pendaftaran}

Persyaratan administrasi untuk mendaftar program Paket C di PKBM Celah Cahaya sangat sederhana dan mudah disiapkan:

| Dokumen Persyaratan | Jumlah / Format | Keterangan |
| :--- | :--- | :--- |
| **Ijazah SMP / MTs / Paket B** | 3 Lembar Fotokopi Legalisir | Dokumen utama bukti kelulusan jenjang sebelumnya |
| **Kartu Keluarga (KK)** | 2 Lembar Fotokopi | Untuk sinkronisasi NIK di Dapodik |
| **KTP Warga Belajar / Orang Tua** | 2 Lembar Fotokopi | Dokumen identitas kependudukan |
| **Akta Kelahiran** | 2 Lembar Fotokopi | Verifikasi data kelahiran |
| **Pas Foto 3x4 Latar Merah** | 5 Lembar Cetak Formal | Pakaian kemeja putih berkerah |
| **Surat Pindah & Buku Rapor** | Asli & Fotokopi | *Khusus bagi yang pernah sekolah di SMA/SMK sebelumnya* |

*Catatan penting:* Bagi siswa pindahan yang memiliki rapor kelas X atau XI dari SMA/SMK sebelumnya, nilai mata pelajaran yang telah ditempuh dapat dikonversikan sehingga waktu studi dapat disesuaikan tanpa harus mengulang dari awal.

---

## 5. Estimasi Biaya & Transparansi Pengeluaran {#biaya-pendidikan}

Salah satu kekhawatiran terbesar masyarakat adalah masalah biaya. Di PKBM Celah Cahaya Garut, kami berkomitmen menerapkan **kebijakan biaya transparan tanpa pungutan liar tersembunyi**.

* **Biaya Pendaftaran Administrasi**: Sangat terjangkau untuk verifikasi berkas dan registrasi Dapodik.
* **Biaya Pendidikan per Semester**: Dapat diangsur setiap bulan agar tidak membebani warga belajar yang berpenghasilan harian atau bulanan.
* **Bantuan Biaya / Beasiswa**: Bagi warga belajar usia sekolah dari keluarga prasejahtera yang terdaftar dalam DTKS / pemegang Kartu Indonesia Pintar (KIP), tersedia alokasi bantuan operasional pendidikan pemerintah (BOP Kesetaraan).

Sebelum mendaftar, calon warga belajar akan menerima rincian biaya resmi tertulis sehingga tidak ada biaya kejutan di kemudian hari.

---

## 6. Apakah Lulusan Paket C Bisa Kuliah & Masuk PTN? {#apakah-bisa-kuliah}

**Jawaban tegasnya: BISA 100%!**

Lulusan Paket C memiliki hak konstitusional yang sama persis dengan lulusan SMA/SMK/MA negeri maupun swasta untuk melanjutkan ke perguruan tinggi. Berikut jalur masuk universitas yang dapat diikuti:

1. **SNBP (Seleksi Nasional Berdasarkan Prestasi)**:
   * Melalui seleksi nilai rapor dan prestasi akademik/non-akademik di PKBM.
2. **SNBT (Seleksi Nasional Berdasarkan Tes - UTBK)**:
   * Mengikuti tes potensi skolastik dan literasi UTBK yang diselenggarakan oleh BPPP Kemendikbudristek. Ribuan lulusan Paket C setiap tahunnya berhasil lolos di kampus terkemuka seperti UI, ITB, UNPAD, UPI, UGM, dan universitas negeri lainnya.
3. **Seleksi Mandiri PTN & PTKIN (UIN/IAIN/STAIN)**:
   * Mengikuti ujian tulis mandiri kampus negeri.
4. **Perguruan Tinggi Swasta (PTS)**:
   * Seluruh PTS di Indonesia dan luar negeri menerima pendaftaran dengan ijazah Paket C.
5. **Universitas Terbuka (UT)**:
   * Menjadi pilihan favorit banyak alumni Paket C karena menyediakan kuliah online fleksibel dengan biaya terjangkau.

---

## 7. Perbandingan Paket C vs SMA Formal {#perbedaan-paket-c-dan-sma}

| Aspek Penilaian | Sekolah Menengah Atas (SMA) Formal | Pendidikan Kesetaraan Paket C (PKBM) |
| :--- | :--- | :--- |
| **Jadwal Belajar** | Senin s.d. Jumat, 07.00 - 15.30 WIB | Sangat fleksibel (Weekend, Hybrid, Malam) |
| **Batasan Usia** | Maksimal 21 tahun saat mendaftar kelas X | Tidak ada batasan usia maksimal |
| **Metode Pembelajaran** | Tatap muka kelas konvensional harian | Blended learning (Modul mandiri, LMS daring, tutor tatap muka) |
| **Kurikulum Inti** | Kurikulum Nasional Kemendikbud | Kurikulum Merdeka Kesetaraan (Plus Vokasi Terapan) |
| **Fokus Tambahan** | Teori akademis umum | Keterampilan kerja, wirausaha & literasi digital AI |
| **Legitimasi Ijazah** | Sah untuk kuliah & seleksi kerja | **Sah 100% dan berkekuatan hukum setara** |

---

## 8. Pertanyaan yang Sering Diajukan (FAQ) {#faq-paket-c}

### Apakah ijazah Paket C bisa dipakai untuk melamar CPNS atau PPPK?
Ya, bisa. Berdasarkan Keputusan Menteri PAN-RB dan BKN, kualifikasi pendidikan "SLTA / Sederajat" mencakup ijazah Paket C resmi yang terdaftar di database Kemendikbudristek.

### Berapa lama durasi belajar Paket C?
Jika Anda baru lulus SMP, durasi normal adalah 3 tahun (6 semester). Namun jika Anda adalah siswa pindahan yang pernah duduk di kelas XI atau XII SMA/SMK, masa studi dapat ditempuh lebih cepat sesuai hasil penyetaraan dan konversi rapor.

### Apakah ujian Paket C masih ada Ujian Nasional?
Saat ini Ujian Nasional telah ditiadakan dan diganti dengan **Asesmen Nasional Berbasis Komputer (ANBK)** untuk pemetaan mutu serta **Uji Kesetaraan (UK)** resmi dari kementerian untuk mengukur capaian kompetensi kelulusan warga belajar.

---

## 9. Kesimpulan & Langkah Pendaftaran {#kesimpulan-cta}

Menunda melanjutkan pendidikan berarti menunda terbukanya berbagai peluang karier, peningkatan taraf ekonomi keluarga, dan pencapaian mimpi Anda. Ijazah Paket C bukan sekadar selembar kertas, melainkan bukti perjuangan dan kunci pembuka gerbang masa depan yang bermartabat.

**PKBM Celah Cahaya Garut** siap mendampingi perjalanan belajar Anda dengan lingkungan yang hangat, tutor yang sabar, fasilitas belajar modern, serta kurikulum vokasi digital yang siap mengantarkan Anda kuliah ataupun sukses di dunia kerja.

**Segera konsultasikan kebutuhan pendidikan Anda hari ini. Pendaftaran Warga Belajar Baru Semester ini telah dibuka.**
`,
    faqs: [
      {
        question: 'Apakah ijazah Paket C sah untuk daftar kuliah di universitas negeri?',
        answer: 'Ya, 100% sah secara hukum berdasarkan UU No. 20 Tahun 2003. Lulusan Paket C berhak mendaftar di PTN melalui jalur SNBP, SNBT (UTBK), maupun jalur Ujian Mandiri.'
      },
      {
        question: 'Apakah orang yang sudah berusia 30 atau 40 tahun ke atas masih boleh ikut Paket C?',
        answer: 'Tentu saja boleh! Pendidikan kesetaraan di PKBM Celah Cahaya tidak membatasi usia maksimal. Kami mendampingi warga belajar usia remaja hingga dewasa.'
      },
      {
        question: 'Bagaimana sistem belajar bagi pekerja yang sibuk di hari kerja?',
        answer: 'Kami menyediakan kelas khusus akhir pekan (Sabtu-Minggu) serta portal belajar online (LMS) mandiri yang dapat diakses kapan saja tanpa mengganggu waktu kerja Anda.'
      }
    ],
    relatedArticleSlugs: [
      'apakah-ijazah-paket-c-bisa-kuliah-negeri',
      'syarat-dan-cara-daftar-paket-c-garut',
      'biaya-sekolah-paket-c-terbaru'
    ]
  },
  {
    id: 'ijazah-paket-c-kuliah',
    slug: 'apakah-ijazah-paket-c-bisa-kuliah-negeri',
    title: 'Apakah Ijazah Paket C Bisa Dipakai Kuliah di Perguruan Tinggi Negeri? Ini Faktanya',
    excerpt: 'Kupas tuntas aturan resmi Kemendikbudristek mengenai lulusan Paket C yang ingin kuliah di PTN melalui SNBP, SNBT/UTBK, dan Seleksi Mandiri beserta tips suksesnya.',
    category: 'Panduan & Tutorial',
    primaryKeyword: 'ijazah Paket C bisa kuliah',
    secondaryKeywords: ['kuliah dengan ijazah Paket C', 'lulusan Paket C masuk PTN', 'daftar UTBK Paket C'],
    searchIntent: 'Informational',
    author: {
      name: 'Siti Nurhalizah, S.Pd., M.Si.',
      role: 'Koordinator Akademik & Bimbingan Konseling PKBM Celah Cahaya',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Konsultan pendidikan kesetaraan yang telah membimbing puluhan lulusan Paket C menembus seleksi SNBT dan kuliah di berbagai kampus negeri Jawa Barat.'
    },
    publishedDate: '2025-02-10',
    updatedDate: '2025-08-14',
    readingTimeMinutes: 7,
    featuredImage: 'https://blogger.googleusercontent.com/img/a/AVvXsEhzv92AS5x8T1d_yb03d3eYhx3USNhsOvsALrZ4FYuxa00Fx_KAH57hsFQSQnjdLF7DyNY23kBY-fd6MHc0pM4mcN4xF0I771mx_vMr-AvFAt975RccG7QTHROLqfknUNqaDLlNrtRzyQZyjc4a9JH-SXkIdtqP0htlJ0sk0EhQ-aut1b9fzx7iwllAoGV8',
    featuredImageAlt: 'Bimbingan konseling dan simulasi persiapan masuk PTN bagi warga belajar di PKBM Celah Cahaya',
    isPillar: false,
    views: 3410,
    status: 'published',
    metaTitle: 'Apakah Ijazah Paket C Bisa Kuliah di PTN? Simak Aturan & Buktinya',
    metaDescription: 'Fakta hukum dan aturan resmi BPPP Kemendikbud: Ijazah Paket C sah 100% untuk mendaftar SNBT UTBK dan kuliah di Perguruan Tinggi Negeri. Baca selengkapnya.',
    tableOfContents: [
      { id: 'fakta-hukum', title: 'Fakta Hukum Hak Kuliah Lulusan Paket C', level: 2 },
      { id: 'jalur-snbt-utbk', title: 'Cara Ikut SNBT UTBK dengan Ijazah Paket C', level: 2 },
      { id: 'tips-sukses', title: 'Tips Warga Belajar Lolos Seleksi PTN', level: 2 },
      { id: 'faq-kuliah', title: 'FAQ Perkuliahan Paket C', level: 2 }
    ],
    content: `
Banyak calon warga belajar yang bertanya dengan nada ragu: *"Apakah benar ijazah Paket C bisa dipakai untuk kuliah di Universitas Indonesia, ITB, UNPAD, UPI, atau UGM?"*

Jawabannya adalah **SANGAT BISA**. Secara hukum, akademik, dan administratif, negara menjamin kesetaraan hak tersebut melalui regulasi BPPP (Balai Pengelolaan Pengujian Pendidikan) Kemendikbudristek.

## 1. Fakta Hukum Hak Kuliah Lulusan Paket C {#fakta-hukum}
Sistem penerimaan mahasiswa baru nasional (SNPMB) secara eksplisit menuliskan dalam persyaratan umum peserta:
> *"Peserta adalah lulusan SMA/SMK/MA/Paket C tahun berjalan atau maksimal 2-3 tahun sebelumnya."*

Klausul ini menegaskan bahwa tidak ada perlakuan diskriminatif terhadap lulusan Paket C. Anda bersaing murni berdasarkan skor tes UTBK dan portofolio prestasi, sama seperti lulusan sekolah menengah atas manapun.

## 2. Cara Ikut SNBT UTBK dengan Ijazah Paket C {#jalur-snbt-utbk}
Berikut alur pendaftaran UTBK bagi warga belajar Celah Cahaya:
1. **Memastikan NISN Aktif**: PKBM Celah Cahaya menginput data warga belajar ke Dapodik sehingga NISN (Nomor Induk Siswa Nasional) valid.
2. **Registrasi Akun SNPMB**: Membuat akun di portal resmi snpmb.bppp.kemdikbud.go.id saat jadwal dibuka.
3. **Memilih Pusat UTBK Terdekat**: Anda bisa memilih lokasi tes di Garut atau universitas terdekat di Bandung/Tasikmalaya.
4. **Mengunggah Surat Keterangan Lulus (SKL) atau Ijazah**: Sesuai dengan status kelulusan tahun berjalan.

## 3. Tips Sukses Menembus Kampus Impian {#tips-sukses}
* Ikuti program pembekalan literasi dan penalaran skolastik yang diadakan di PKBM Celah Cahaya.
* Manfaatkan fleksibilitas waktu belajar Paket C untuk mengalokasikan 2-3 jam per hari berlatih soal latihan SNBT.
* Pertimbangkan juga Universitas Terbuka (UT) jika Anda ingin kuliah sambil tetap aktif bekerja penuh waktu.

Buktikan bahwa jalur pendidikan kesetaraan bukanlah penghalang meraih gelar sarjana!
`,
    faqs: [
      {
        question: 'Apakah ada jurusan di PTN yang menolak ijazah Paket C?',
        answer: 'Tidak ada batasan selama peserta memenuhi syarat program studi (misal jurusan saintek mempersyaratkan mata pelajaran saintek yang linier).'
      }
    ],
    relatedArticleSlugs: [
      'panduan-lengkap-pendidikan-kesetaraan-paket-c',
      'syarat-dan-cara-daftar-paket-c-garut'
    ]
  },
  {
    id: 'syarat-dan-cara-daftar',
    slug: 'syarat-dan-cara-daftar-paket-c-garut',
    title: 'Syarat dan Cara Mendaftar Sekolah Paket C di Garut Tahun Ajaran Baru',
    excerpt: 'Panduan teknis langkah demi langkah mendaftar Paket C di PKBM Celah Cahaya Garut. Berkas yang perlu disiapkan, alur verifikasi, hingga panduan pendaftaran online.',
    category: 'Panduan & Tutorial',
    primaryKeyword: 'pendaftaran Paket C Garut',
    secondaryKeywords: ['syarat Paket C Garut', 'cara daftar Paket C', 'PKBM di Garut'],
    searchIntent: 'Transactional',
    author: {
      name: 'Drs. H. Ahmad Rahmatullah, M.Pd.',
      role: 'Kepala PKBM Celah Cahaya',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Kepala Lembaga PKBM Celah Cahaya Garut.'
    },
    publishedDate: '2025-02-18',
    updatedDate: '2025-08-10',
    readingTimeMinutes: 5,
    featuredImage: 'https://blogger.googleusercontent.com/img/a/AVvXsEh2JnJiq3Y_dqrzfd779kKJ10iU0TWU7dP1OLgQf3V_M3dBQjM98B_RNJHJl5XqmksfpT3GYyUvsamlERFs6UCLL1F7BsZ2ACPzJERjW9TDlwVwXwykRGsgDm0-80mOI5PFCau0OFAVWHw2W04WxeFxP3pJwa_ovzZwCYJV-3viArIL4wKEQsRyMCmqFjrO',
    featuredImageAlt: 'Pelatihan vokasi terapan dan alur pendaftaran warga belajar di PKBM Celah Cahaya Garut',
    isPillar: false,
    views: 2890,
    status: 'published',
    metaTitle: 'Syarat & Cara Daftar Paket C di Garut Terbaru | PKBM Celah Cahaya',
    metaDescription: 'Ingin daftar Paket C di Garut? Simak syarat dokumen, alur pendaftaran mudah secara offline dan online di PKBM Celah Cahaya Singajaya Garut.',
    tableOfContents: [
      { id: 'alur-pendaftaran', title: 'Alur Pendaftaran di PKBM Celah Cahaya', level: 2 },
      { id: 'berkas-wajib', title: 'Checklist Berkas yang Wajib Dibawa', level: 2 },
      { id: 'pendaftaran-online', title: 'Pendaftaran Mudah Lewat Website & WhatsApp', level: 2 }
    ],
    content: `
Bagi warga Kabupaten Garut dan sekitarnya (Singajaya, Peundeuy, Banjarwangi, Cikajang, Cisurupan, Bayongbong, Cilawu, hingga seluruh wilayah Jawa Barat) yang berkeinginan melanjutkan pendidikan ke jenjang Paket C, **PKBM Celah Cahaya** membuka pendaftaran warga belajar baru setiap semester.

## Alur Pendaftaran di PKBM Celah Cahaya {#alur-pendaftaran}
1. **Konsultasi & Asesmen Awal**: Calon warga belajar datang ke sekretariat kami di Kp. Sukawangi, Desa Sukawangi, Kec. Singajaya atau berkonsultasi melalui layanan WhatsApp resmi di +62 821-1936-2454.
2. **Pengisian Formulir Pendaftaran**: Mengisi data diri lengkap dan riwayat pendidikan terakhir.
3. **Verifikasi Berkas Administrasi**: Petugas memeriksa keabsahan fotokopi ijazah SMP/sederajat dan identitas KK/KTP.
4. **Penetapan Mode Belajar**: Memilih kelas tatap muka berkala atau kelas daring fleksibel.
5. **Entri Data Dapodik Kemendikbudristek**: Data Anda resmi tercatat sebagai siswa aktif dengan NISN resmi.

## Checklist Berkas yang Wajib Disiapkan {#berkas-wajib}
* Fotokopi Ijazah SMP/MTs/Paket B legalisir basah (3 lembar)
* Fotokopi Kartu Keluarga dan KTP (masing-masing 2 lembar)
* Pas foto formal ukuran 3x4 (5 lembar, latar merah)
* Buku rapor sekolah sebelumnya bagi yang pindahan dari SMA/SMK kelas 10/11.

## Pendaftaran Praktis Lewat Online {#pendaftaran-online}
Tidak sempat datang langsung ke sekretariat karena jam kerja padat? Anda dapat mengisi formulir pendaftaran online langsung di website resmi **celahcahaya.sch.id/pendaftaran**. Tim kami akan menghubungi Anda untuk verifikasi dokumen lanjutan.
`,
    faqs: [
      {
        question: 'Apakah warga dari luar Garut bisa mendaftar di Celah Cahaya?',
        answer: 'Bisa! Kami menerima warga belajar dari luar kota dengan metode pembelajaran daring dan pendampingan modul digital.'
      }
    ],
    relatedArticleSlugs: [
      'panduan-lengkap-pendidikan-kesetaraan-paket-c',
      'biaya-sekolah-paket-c-terbaru'
    ]
  },
  {
    id: 'biaya-paket-c',
    slug: 'biaya-sekolah-paket-c-terbaru',
    title: 'Berapa Biaya Sekolah Paket C? Rincian Biaya Transparan dan Cara Mendapat Beasiswa',
    excerpt: 'Ulasan transparan mengenai komponen biaya sekolah Paket C di Indonesia, skema cicilan bulanan, serta syarat mendapatkan beasiswa bantuan pendidikan.',
    category: 'Pendidikan Kesetaraan',
    primaryKeyword: 'biaya Paket C',
    secondaryKeywords: ['biaya sekolah Paket C', 'biaya ujian Paket C', 'Paket C gratis Garut'],
    searchIntent: 'Commercial',
    author: {
      name: 'Drs. H. Ahmad Rahmatullah, M.Pd.',
      role: 'Kepala PKBM Celah Cahaya',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Pendidik dan Pembina PKBM Celah Cahaya.'
    },
    publishedDate: '2025-03-01',
    updatedDate: '2025-08-05',
    readingTimeMinutes: 6,
    featuredImage: 'https://blogger.googleusercontent.com/img/a/AVvXsEj3KzyMrdZuYBjAw8e-FrwdZYX1a7daYs3D7gYWaaTBpU4-FK9BVqOf6c1hsvfQ9v18h2C9oQySaNhTFUxINvOkSJzSDC45hGircCQCaWGNL5nKyrDalbnbS87KWAg-Yc_q-B3ocXP2Y80IdiuRxzQlFHycAINfPZEBUHAnr-nMgQNSCuxjYk9X-0IT-leO',
    featuredImageAlt: 'Pelaksanaan ujian dan fasilitas laboratorium komputer di PKBM Celah Cahaya Garut',
    isPillar: false,
    views: 4120,
    status: 'published',
    metaTitle: 'Berapa Biaya Sekolah Paket C? Ini Rincian Transparan & Info Beasiswa',
    metaDescription: 'Ketahui rincian biaya pendaftaran, SPP per bulan, biaya ujian kesetaraan Paket C serta cara mendapatkan beasiswa gratis di PKBM Celah Cahaya Garut.',
    tableOfContents: [
      { id: 'komponen-biaya', title: 'Komponen Biaya Pendidikan Paket C', level: 2 },
      { id: 'skema-pembayaran', title: 'Skema Cicilan Ramah Pekerja', level: 2 },
      { id: 'program-beasiswa', title: 'Peluang Beasiswa Gratis & KIP', level: 2 }
    ],
    content: `
Salah satu prinsip utama di **PKBM Celah Cahaya** adalah keadilan akses pendidikan: biaya tidak boleh menjadi batu sandungan bagi siapa pun yang ingin memperbaiki masa depannya.

## Komponen Biaya Pendidikan Paket C {#komponen-biaya}
Secara umum, biaya dalam program kesetaraan mencakup:
1. **Biaya Administrasi & Registrasi Dapodik**: Pendaftaran satu kali di awal tahun ajaran.
2. **Biaya Bahan Pembelajaran**: Akses modul digital PDF, platform LMS, dan buku panduan kurikulum.
3. **Biaya Bimbingan Belajar / Operasional Tutor**: Honorarium para tutor profesional pengampu mata pelajaran.
4. **Biaya Simulasi & Pelaksanaan Asesmen/Uji Kesetaraan**: Sewa perangkat laboratorium komputer dan administrasi token ujian kementerian.

## Skema Cicilan Ramah Pekerja {#skema-pembayaran}
Kami memahami sebagian besar warga belajar kami adalah pekerja mandiri, buruh pabrik, petani, pedagang, dan ibu rumah tangga. Oleh sebab itu, seluruh biaya di Celah Cahaya dapat dicicil secara fleksibel setiap bulan tanpa bunga.

## Peluang Beasiswa Gratis (Afirmasi) {#program-beasiswa}
Bagi anak usia sekolah (di bawah 21 tahun) yang berasal dari keluarga kurang mampu pemegang Kartu Indonesia Pintar (KIP) atau terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS), PKBM Celah Cahaya menyediakan kuota **Bebas Biaya 100%** yang didukung Bantuan Operasional Pendidikan (BOP) Kesetaraan dari pemerintah pusat.
`,
    faqs: [
      {
        question: 'Apakah ada biaya tambahan tak terduga saat wisuda atau pembagian ijazah?',
        answer: 'Tidak ada. Di PKBM Celah Cahaya, seluruh rincian telah dituangkan di awal secara transparan dalam surat perjanjian belajar.'
      }
    ],
    relatedArticleSlugs: [
      'panduan-lengkap-pendidikan-kesetaraan-paket-c',
      'syarat-dan-cara-daftar-paket-c-garut'
    ]
  },
  {
    id: 'ai-untuk-pendidikan-nonformal',
    slug: 'pemanfaatan-ai-untuk-belajar-mandiri-pendidikan-kesetaraan',
    title: 'Revolusi Belajar: Bagaimana Artificial Intelligence (AI) Membantu Siswa Paket C Belajar Mandiri Lebih Cepat',
    excerpt: 'Pelajari bagaimana kecerdasan buatan (AI) dapat dijadikan tutor pribadi 24 jam untuk memahami matematika, bahasa Inggris, dan materi ujian kesetaraan secara efektif.',
    category: 'Teknologi & AI',
    primaryKeyword: 'AI untuk pendidikan',
    secondaryKeywords: ['belajar mandiri dengan AI', 'teknologi pendidikan PKBM', 'pemanfaatan AI untuk siswa'],
    searchIntent: 'Informational',
    author: {
      name: 'Rudi Hermawan, S.Kom.',
      role: 'Instruktur Vokasi Digital & IT PKBM Celah Cahaya',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bio: 'Pemerhati edutech yang aktif mengembangkan kurikulum pemanfaatan generative AI untuk pemberdayaan masyarakat di Garut.'
    },
    publishedDate: '2025-03-25',
    updatedDate: '2025-08-18',
    readingTimeMinutes: 6,
    featuredImage: 'https://blogger.googleusercontent.com/img/a/AVvXsEh2JnJiq3Y_dqrzfd779kKJ10iU0TWU7dP1OLgQf3V_M3dBQjM98B_RNJHJl5XqmksfpT3GYyUvsamlERFs6UCLL1F7BsZ2ACPzJERjW9TDlwVwXwykRGsgDm0-80mOI5PFCau0OFAVWHw2W04WxeFxP3pJwa_ovzZwCYJV-3viArIL4wKEQsRyMCmqFjrO',
    featuredImageAlt: 'Workshop vokasi AI dan literasi digital untuk warga belajar PKBM Celah Cahaya',
    isPillar: false,
    views: 1980,
    status: 'published',
    metaTitle: 'Pemanfaatan AI untuk Belajar Mandiri Siswa Paket C | Celah Cahaya',
    metaDescription: 'Bagaimana teknologi AI dapat membantu warga belajar kesetaraan memahami konsep sulit dan menyiapkan ujian? Simak panduan praktis dari instruktur Celah Cahaya.',
    tableOfContents: [
      { id: 'ai-sebagai-tutor', title: 'AI Sebagai Tutor Privat 24 Jam', level: 2 },
      { id: 'prompt-belajar', title: 'Contoh Prompt Praktis untuk Belajar', level: 2 },
      { id: 'etika-ai', title: 'Etika & Batasan Penggunaan AI dalam Pendidikan', level: 2 }
    ],
    content: `
Di era transformasi digital saat ini, pendidikan nonformal tidak boleh tertinggal. Di **PKBM Celah Cahaya**, kami secara proaktif mengintegrasikan materi literasi kecerdasan buatan (AI) ke dalam kurikulum pembelajaran warga belajar Paket C dan vokasi.

## AI Sebagai Tutor Privat 24 Jam {#ai-sebagai-tutor}
Tantangan terbesar siswa kesetaraan adalah keterbatasan waktu tatap muka karena kesibukan bekerja. Ketika belajar di malam hari dan menemukan rumus matematika atau tata bahasa Inggris yang rumit, kehadiran AI (seperti Gemini) menjadi solusi instan untuk:
* Menjelaskan rumus rumit dengan perumpamaan kehidupan sehari-hari.
* Memberikan latihan soal bertahap dari level mudah ke sulit.
* Menerjemahkan istilah asing dan melatih percakapan bahasa Inggris bisnis.

## Contoh Prompt Efektif untuk Belajar {#prompt-belajar}
Warga belajar Celah Cahaya diajarkan menggunakan instruksi terstruktur:
> *"Jelaskan konsep hukum permintaan dan penawaran dalam ekonomi menggunakan contoh transaksi sayuran di Pasar Induk Garut secara sederhana."*

Hasilnya, konsep abstrak menjadi sangat konkret dan mudah diingat saat ujian kesetaraan berlangsung.

## Program Vokasi AI di Celah Cahaya {#etika-ai}
Kami juga membuka kelas khusus keterampilan vokasi di mana warga belajar dilatih memanfaatkan AI untuk produktivitas kerja: pembuatan materi promosi UMKM, desain grafis otomatis, serta penulisan laporan kantor.
`,
    faqs: [
      {
        question: 'Apakah belajar AI di Celah Cahaya memerlukan laptop canggih?',
        answer: 'Tidak. Cukup menggunakan smartphone standar Android, warga belajar sudah bisa mempraktikkan seluruh materi dasar AI.'
      }
    ],
    relatedArticleSlugs: [
      'panduan-lengkap-pendidikan-kesetaraan-paket-c'
    ]
  }
];

export const INITIAL_ARTICLES: Article[] = [
  ...CORE_INITIAL_ARTICLES,
  ...EDUCATION_ARTICLES
];

export const KEYWORD_STRATEGY_LIST: KeywordStrategyItem[] = [
  {
    keyword: 'Paket C',
    searchIntent: 'Informational',
    estimatedVolume: '33.100 / bln',
    competition: 'Tinggi',
    targetPage: '/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c',
    clusterType: 'Pillar',
    topicalRelevance: 'Inti utama kurikulum kesetaraan SMA Celah Cahaya',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'PKBM Garut',
    searchIntent: 'Local',
    estimatedVolume: '1.900 / bln',
    competition: 'Rendah',
    targetPage: '/tentang',
    clusterType: 'Local SEO',
    topicalRelevance: 'Pilar otoritas institusi lokal di Garut Jawa Barat',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'Paket C Garut',
    searchIntent: 'Local',
    estimatedVolume: '880 / bln',
    competition: 'Rendah',
    targetPage: '/program/paket-c',
    clusterType: 'Local SEO',
    topicalRelevance: 'Pencarian transaksional pendaftaran langsung warga Garut',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'sekolah Paket C',
    searchIntent: 'Informational',
    estimatedVolume: '14.800 / bln',
    competition: 'Sedang',
    targetPage: '/program/paket-c',
    clusterType: 'Supporting',
    topicalRelevance: 'Pencarian masyarakat mencari tempat dan konsep sekolah kesetaraan',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'ijazah Paket C',
    searchIntent: 'Informational',
    estimatedVolume: '9.900 / bln',
    competition: 'Sedang',
    targetPage: '/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c',
    clusterType: 'Pillar',
    topicalRelevance: 'Menjawab keraguan masyarakat tentang keabsahan hukum ijazah',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'syarat Paket C',
    searchIntent: 'Commercial',
    estimatedVolume: '5.400 / bln',
    competition: 'Sedang',
    targetPage: '/artikel/syarat-dan-cara-daftar-paket-c-garut',
    clusterType: 'Supporting',
    topicalRelevance: 'Calon siswa yang siap mengumpulkan dokumen persyaratan',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'biaya Paket C',
    searchIntent: 'Commercial',
    estimatedVolume: '6.600 / bln',
    competition: 'Sedang',
    targetPage: '/artikel/biaya-sekolah-paket-c-terbaru',
    clusterType: 'Supporting',
    topicalRelevance: 'Masyarakat yang membandingkan tarif dan kemampuan bayar',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'pendaftaran Paket C',
    searchIntent: 'Transactional',
    estimatedVolume: '4.400 / bln',
    competition: 'Sedang',
    targetPage: '/pendaftaran',
    clusterType: 'Supporting',
    topicalRelevance: 'Halaman form konversi langsung menjadi calon peserta',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'apakah ijazah Paket C bisa kuliah',
    searchIntent: 'Informational',
    estimatedVolume: '3.600 / bln',
    competition: 'Rendah',
    targetPage: '/artikel/apakah-ijazah-paket-c-bisa-kuliah-negeri',
    clusterType: 'Supporting',
    topicalRelevance: 'Kebutuhan informasi valid mengenai pendaftaran PTN dan UTBK',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'pendidikan kesetaraan',
    searchIntent: 'Informational',
    estimatedVolume: '8.100 / bln',
    competition: 'Sedang',
    targetPage: '/program',
    clusterType: 'Pillar',
    topicalRelevance: 'Definisi payung sistem pendidikan nonformal nasional',
    conversionPotential: 'Sedang'
  },
  {
    keyword: 'Paket A',
    searchIntent: 'Informational',
    estimatedVolume: '12.100 / bln',
    competition: 'Sedang',
    targetPage: '/program/paket-a',
    clusterType: 'Pillar',
    topicalRelevance: 'Program kesetaraan jenjang Sekolah Dasar (SD)',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'Paket B',
    searchIntent: 'Informational',
    estimatedVolume: '18.100 / bln',
    competition: 'Sedang',
    targetPage: '/program/paket-b',
    clusterType: 'Pillar',
    topicalRelevance: 'Program kesetaraan jenjang Sekolah Menengah Pertama (SMP)',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'PKBM terdekat',
    searchIntent: 'Local',
    estimatedVolume: '2.400 / bln',
    competition: 'Rendah',
    targetPage: '/kontak',
    clusterType: 'Local SEO',
    topicalRelevance: 'Pencarian geolokasi pengguna mencari alamat lembaga di sekitarnya',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'PKBM terbaik di Garut',
    searchIntent: 'Commercial',
    estimatedVolume: '720 / bln',
    competition: 'Rendah',
    targetPage: '/tentang',
    clusterType: 'Local SEO',
    topicalRelevance: 'Pencarian rekomendasi PKBM berakreditasi di Garut',
    conversionPotential: 'Sangat Tinggi'
  },
  {
    keyword: 'cara mendapatkan ijazah setara SMA',
    searchIntent: 'Informational',
    estimatedVolume: '2.900 / bln',
    competition: 'Rendah',
    targetPage: '/panduan',
    clusterType: 'Supporting',
    topicalRelevance: 'Search intent problem solver bagi orang yang putus sekolah',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'pendidikan nonformal',
    searchIntent: 'Informational',
    estimatedVolume: '6.600 / bln',
    competition: 'Sedang',
    targetPage: '/tentang',
    clusterType: 'Pillar',
    topicalRelevance: 'Membangun otoritas kelembagaan di bidang PNF',
    conversionPotential: 'Sedang'
  },
  {
    keyword: 'beasiswa Paket C',
    searchIntent: 'Commercial',
    estimatedVolume: '1.300 / bln',
    competition: 'Rendah',
    targetPage: '/beasiswa',
    clusterType: 'Supporting',
    topicalRelevance: 'Menarik warga belajar berprestasi dan keluarga pemegang KIP',
    conversionPotential: 'Tinggi'
  },
  {
    keyword: 'perbedaan Paket C dengan SMA',
    searchIntent: 'Informational',
    estimatedVolume: '1.600 / bln',
    competition: 'Rendah',
    targetPage: '/artikel/panduan-lengkap-pendidikan-kesetaraan-paket-c',
    clusterType: 'Supporting',
    topicalRelevance: 'Membandingkan kelebihan waktu dan fleksibilitas',
    conversionPotential: 'Sedang'
  },
  {
    keyword: 'AI untuk pendidikan',
    searchIntent: 'Informational',
    estimatedVolume: '4.800 / bln',
    competition: 'Sedang',
    targetPage: '/artikel/pemanfaatan-ai-untuk-belajar-mandiri-pendidikan-kesetaraan',
    clusterType: 'Supporting',
    topicalRelevance: 'Menunjukkan modernitas Celah Cahaya dalam mengadopsi teknologi',
    conversionPotential: 'Sedang'
  },
  {
    keyword: 'sekolah kesetaraan terdekat',
    searchIntent: 'Local',
    estimatedVolume: '1.100 / bln',
    competition: 'Rendah',
    targetPage: '/kontak',
    clusterType: 'Local SEO',
    topicalRelevance: 'Pencarian cepat masyarakat sekitar Jawa Barat',
    conversionPotential: 'Sangat Tinggi'
  }
];

export const TWENTY_INITIAL_ARTICLE_IDEAS = [
  {
    no: 1,
    title: 'Panduan Lengkap Pendidikan Kesetaraan Paket C: Syarat, Biaya, dan Peluang Kuliah',
    role: 'Pillar Content Induk',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'Paket C',
    searchIntent: 'Informational / Commercial'
  },
  {
    no: 2,
    title: 'Apakah Ijazah Paket C Bisa Dipakai Kuliah di Perguruan Tinggi Negeri? Ini Faktanya',
    role: 'Supporting Content',
    category: 'Panduan & Tutorial',
    targetKeyword: 'ijazah Paket C bisa kuliah',
    searchIntent: 'Informational'
  },
  {
    no: 3,
    title: 'Syarat dan Cara Mendaftar Sekolah Paket C di Garut Tahun Ajaran Baru',
    role: 'Supporting Content',
    category: 'Panduan & Tutorial',
    targetKeyword: 'pendaftaran Paket C Garut',
    searchIntent: 'Transactional / Local'
  },
  {
    no: 4,
    title: 'Berapa Biaya Sekolah Paket C? Rincian Biaya Transparan dan Cara Mendapat Beasiswa',
    role: 'Supporting Content',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'biaya Paket C',
    searchIntent: 'Commercial'
  },
  {
    no: 5,
    title: 'Perbedaan Paket C dengan SMA Formal: Mana yang Lebih Cocok untuk Anda?',
    role: 'Supporting Content',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'perbedaan Paket C dengan SMA',
    searchIntent: 'Informational'
  },
  {
    no: 6,
    title: 'Panduan Lengkap Paket A (Setara SD): Solusi Tuntas Baca Tulis & Ijazah Resmi Dasar',
    role: 'Pillar Content Paket A',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'Paket A',
    searchIntent: 'Informational'
  },
  {
    no: 7,
    title: 'Semua yang Perlu Anda Ketahui tentang Paket B (Setara SMP): Syarat, Durasi & Kurikulum',
    role: 'Pillar Content Paket B',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'Paket B',
    searchIntent: 'Informational'
  },
  {
    no: 8,
    title: 'Apakah Lulusan Paket C Bisa Mendaftar Seleksi CPNS dan PPPK? Ini Aturan BKN',
    role: 'Supporting Content',
    category: 'Karier & Vokasi',
    targetKeyword: 'Paket C untuk CPNS',
    searchIntent: 'Informational'
  },
  {
    no: 9,
    title: 'Cara Lulusan Paket C Mendaftar TNI dan Polri: Persyaratan Administrasi Lengkap',
    role: 'Supporting Content',
    category: 'Karier & Vokasi',
    targetKeyword: 'daftar TNI Polri dengan Paket C',
    searchIntent: 'Informational'
  },
  {
    no: 10,
    title: 'Mengenal PKBM: Fungsi, Legalitas, dan Peran Pentingnya dalam Pendidikan Nasional',
    role: 'Pillar Content Lembaga',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'apa itu PKBM',
    searchIntent: 'Informational'
  },
  {
    no: 11,
    title: 'Rekomendasi PKBM Terbaik di Garut untuk Belajar Paket A, B, dan C',
    role: 'Local SEO Booster',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'PKBM terbaik di Garut',
    searchIntent: 'Commercial / Local'
  },
  {
    no: 12,
    title: 'Revolusi Belajar: Bagaimana Artificial Intelligence (AI) Membantu Siswa Belajar Mandiri',
    role: 'Supporting Content Modern',
    category: 'Teknologi & AI',
    targetKeyword: 'AI untuk pendidikan',
    searchIntent: 'Informational'
  },
  {
    no: 13,
    title: 'Panduan Beasiswa Program Indonesia Pintar (PIP / KIP) untuk Warga Belajar PKBM',
    role: 'Supporting Content',
    category: 'Info Beasiswa',
    targetKeyword: 'beasiswa KIP PKBM',
    searchIntent: 'Commercial'
  },
  {
    no: 14,
    title: 'Berapa Lama Waktu Belajar Paket C? Penjelasan Jenjang & Jalur Konversi Nilai Rapor',
    role: 'Supporting Content',
    category: 'Pendidikan Kesetaraan',
    targetKeyword: 'berapa lama sekolah Paket C',
    searchIntent: 'Informational'
  },
  {
    no: 15,
    title: 'Cara Mendapatkan Ijazah Setara SMA Meskipun Sudah Berusia Dewasa / Lebih dari 25 Tahun',
    role: 'Supporting Content',
    category: 'Panduan & Tutorial',
    targetKeyword: 'cara mendapatkan ijazah setara SMA',
    searchIntent: 'Informational'
  },
  {
    no: 16,
    title: 'Panduan Uji Kesetaraan (UK) dan ANBK: Apa Saja yang Diujikan dan Bagaimana Persiapannya?',
    role: 'Supporting Content',
    category: 'Panduan & Tutorial',
    targetKeyword: 'Uji Kesetaraan Paket C',
    searchIntent: 'Informational'
  },
  {
    no: 17,
    title: '5 Peluang Karier dan Profesi yang Bisa Dimasuki dengan Ijazah Paket C',
    role: 'Supporting Content',
    category: 'Karier & Vokasi',
    targetKeyword: 'peluang kerja Paket C',
    searchIntent: 'Informational'
  },
  {
    no: 18,
    title: 'Belajar Paket C Sambil Bekerja: 7 Tips Manajemen Waktu untuk Karyawan & Buruh',
    role: 'Supporting Content',
    category: 'Keterampilan & Vokasi',
    targetKeyword: 'sekolah Paket C sambil kerja',
    searchIntent: 'Informational'
  },
  {
    no: 19,
    title: 'Tips Lolos Ujian Tulis Berbasis Komputer (UTBK) SNBT untuk Siswa Kesetaraan',
    role: 'Supporting Content',
    category: 'Panduan & Tutorial',
    targetKeyword: 'tips UTBK Paket C',
    searchIntent: 'Informational'
  },
  {
    no: 20,
    title: 'Peluang Wirausaha Digital Berbasis AI untuk Pemuda dan Warga Belajar di Daerah',
    role: 'Supporting Content',
    category: 'Teknologi & AI',
    targetKeyword: 'keterampilan digital vokasi',
    searchIntent: 'Informational'
  }
];

export const KEYWORD_STRATEGY = KEYWORD_STRATEGY_LIST;
export const ARTICLE_IDEAS_ROADMAP = TWENTY_INITIAL_ARTICLE_IDEAS;

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Asep Saepuloh',
    role: 'Alumni Paket C Jurusan IPS (Lulus 2023)',
    program: 'Paket C IPS',
    year: '2023',
    quote: 'Dulu saya sempat putus sekolah waktu kelas 11 SMA karena harus bantu orang tua di kebun. Di Celah Cahaya, saya bisa belajar malam hari dan akhir pekan. Alhamdulillah sekarang sudah diterima kuliah di Universitas Pendidikan Indonesia (UPI) jurusan Pendidikan Geografi!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    currentActivity: 'Mahasiswa S-1 Universitas Pendidikan Indonesia'
  },
  {
    id: 'testi-2',
    name: 'Dewi Lestari',
    role: 'Alumni Paket C & Vokasi Digital (Lulus 2024)',
    program: 'Paket C & Kelas AI Digital',
    year: '2024',
    quote: 'Selain dapat ijazah negara resmi yang saya pakai untuk promosi jabatan di kantor distributor Garut, saya diajarkan keterampilan desain dan AI. Tutornya sangat mengayomi dan tidak ada stigma negatif sama sekali.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    currentActivity: 'Supervisor Administrasi Perusahaan Logistik di Garut'
  },
  {
    id: 'testi-3',
    name: 'Rian Kurniawan',
    role: 'Alumni Paket B & Paket C (Lulus 2022)',
    program: 'Paket B & C Berkelanjutan',
    year: '2022',
    quote: 'Saya merintis usaha bengkel motor di Samarang Garut. Butuh ijazah SMA untuk pengajuan izin usaha dan kemitraan resmi. Celah Cahaya memberikan solusi nyata. Biayanya transparan dan bisa dicicil sangat terjangkau.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    currentActivity: 'Pemilik Usaha Bengkel & Wirausahawan Muda Garut'
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Legalitas & Ijazah',
    question: 'Apakah ijazah yang diterbitkan oleh PKBM Celah Cahaya resmi dan diakui negara?',
    answer: 'Ya, 100% resmi dan berpayung hukum nasional. PKBM Celah Cahaya merupakan satuan pendidikan swasta berbentuk Pusat Kegiatan Belajar Masyarakat (PKBM) pada jenjang Pendidikan Masyarakat (DIKMAS) dengan NPSN P9984574, berizin operasional resmi Dinas Pendidikan Kabupaten Garut (Nomor SK 421.9/1145-DISDIK, TMT 22 Juli 2019), dan terintegrasi di sistem Dapodik Kemendikbudristek RI. Ijazah yang Anda terima adalah Ijazah Negara dengan Nomor Ijazah Nasional yang sah.'
  },
  {
    id: 'faq-2',
    category: 'Paket C & Kuliah',
    question: 'Apakah lulusan Paket C bisa mendaftar kuliah di universitas negeri (PTN)?',
    answer: 'Bisa sekali! Berdasarkan regulasi BPPP Kemendikbudristek, lulusan Paket C berhak mendaftar di Seleksi Nasional Berdasarkan Prestasi (SNBP), Seleksi Nasional Berdasarkan Tes (SNBT/UTBK), maupun Jalur Mandiri seluruh kampus negeri seperti UI, ITB, UNPAD, UPI, dsb., serta seluruh perguruan tinggi swasta.'
  },
  {
    id: 'faq-3',
    category: 'Paket C & Kuliah',
    question: 'Apakah ijazah Paket C bisa dipakai untuk mendaftar seleksi CPNS, PPPK, TNI, dan Polri?',
    answer: 'Ya, bisa. Dalam ketentuan seleksi kepegawaian publik dan aparat negara, kualifikasi ijazah SLTA/Sederajat mengakui ijazah Paket C yang terdata resmi di Kemendikbudristek.'
  },
  {
    id: 'faq-4',
    category: 'Biaya & Pendaftaran',
    question: 'Berapa biaya pendidikan dan apakah ada program beasiswa gratis?',
    answer: 'Biaya di Celah Cahaya sangat terjangkau dan dapat diangsur setiap bulan agar tidak memberatkan warga belajar. Kami juga menyediakan program beasiswa afirmasi bebas biaya 100% bagi anak usia sekolah dari keluarga pemegang Kartu Indonesia Pintar (KIP) atau terdaftar dalam DTKS.'
  },
  {
    id: 'faq-5',
    category: 'Metode Belajar',
    question: 'Bagaimana jadwal belajar bagi warga yang bekerja penuh di hari kerja?',
    answer: 'Kami menyediakan skema kelas tatap muka akhir pekan (Sabtu-Minggu) serta portal belajar online (LMS) mandiri. Anda tetap bisa bekerja di hari biasa dan menyelesaikan materi belajar secara fleksibel dari smartphone Anda.'
  },
  {
    id: 'faq-6',
    category: 'Umum',
    question: 'Apakah ada batasan usia maksimal untuk mendaftar Paket A, B, atau C?',
    answer: 'Tidak ada batasan usia maksimal. Pendidikan kesetaraan terbuka bagi semua warga negara: usia 15, 25, 35, 45 tahun bahkan lebih tetap kami layani dengan penuh dedikasi.'
  },
  {
    id: 'faq-7',
    category: 'Legalitas & Ijazah',
    question: 'Saya pernah sekolah sampai kelas 2 SMA lalu putus sekolah. Apakah harus mengulang dari kelas 1?',
    answer: 'Tidak perlu mengulang dari awal jika Anda memiliki buku rapor dan surat pindah/keterangan dari sekolah lama. Nilai Anda akan dikonversikan sehingga Anda cukup melanjutkan semester yang belum terselesaikan.'
  }
];
