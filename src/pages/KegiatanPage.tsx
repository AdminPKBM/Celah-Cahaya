import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Camera, Calendar, Award, Users, BookOpen } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';

interface KegiatanPageProps {
  onNavigate: (path: string) => void;
}

export const KegiatanPage: React.FC<KegiatanPageProps> = ({ onNavigate }) => {
  const ACTIVITIES = [
    {
      title: 'Pelaksanaan Uji Kesetaraan (UK) & Asesmen Nasional Berbasis Komputer (ANBK)',
      date: 'Oktober 2024',
      category: 'Akademik & Ujian',
      image: 'https://blogger.googleusercontent.com/img/a/AVvXsEj3KzyMrdZuYBjAw8e-FrwdZYX1a7daYs3D7gYWaaTBpU4-FK9BVqOf6c1hsvfQ9v18h2C9oQySaNhTFUxINvOkSJzSDC45hGircCQCaWGNL5nKyrDalbnbS87KWAg-Yc_q-B3ocXP2Y80IdiuRxzQlFHycAINfPZEBUHAnr-nMgQNSCuxjYk9X-0IT-leO',
      desc: 'Warga belajar Paket B dan Paket C melaksanakan simulasi dan gladi bersih asesmen nasional di laboratorium komputer PKBM Celah Cahaya dengan lancar.'
    },
    {
      title: 'Workshop Vokasi AI & Literasi Digital untuk Wirausaha Lokal',
      date: 'Desember 2024',
      category: 'Keterampilan Digital',
      image: 'https://blogger.googleusercontent.com/img/a/AVvXsEh2JnJiq3Y_dqrzfd779kKJ10iU0TWU7dP1OLgQf3V_M3dBQjM98B_RNJHJl5XqmksfpT3GYyUvsamlERFs6UCLL1F7BsZ2ACPzJERjW9TDlwVwXwykRGsgDm0-80mOI5PFCau0OFAVWHw2W04WxeFxP3pJwa_ovzZwCYJV-3viArIL4wKEQsRyMCmqFjrO',
      desc: 'Pelatihan pembuatan konten promosi produk UMKM Garut menggunakan artificial intelligence (AI) dan aplikasi desain grafis ramah smartphone.'
    },
    {
      title: 'Wisuda & Pelepasan Kelulusan Warga Belajar Angkatan 2024',
      date: 'Juli 2024',
      category: 'Wisuda & Prestasi',
      image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjO1GDsk9htNZC5gmuAlLN8btBxcF2jRQvAA01v1vdDlXK0YGWie4lf1V7NCH5y_IHPL5VpFOi-6vSJRNmfJA_zA_HFuVUL29ebu47x7G3iWTYMJG1miGAzHU_zMGiu44r6UAcQVuLCDFx-_9hBUyKXKtT7rbyDMruNLdwnuEHtBgR6Ac_TiK3xYBlPleUX',
      desc: 'Pelepasan 180 alumni Paket A, Paket B, dan Paket C yang dihadiri perwakilan Dinas Pendidikan Kabupaten Garut dan orang tua wisudawan.'
    },
    {
      title: 'Bimbingan Konseling & Persiapan UTBK-SNBT Masuk Perguruan Tinggi',
      date: 'Januari 2025',
      category: 'Bimbingan Karier',
      image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhzv92AS5x8T1d_yb03d3eYhx3USNhsOvsALrZ4FYuxa00Fx_KAH57hsFQSQnjdLF7DyNY23kBY-fd6MHc0pM4mcN4xF0I771mx_vMr-AvFAt975RccG7QTHROLqfknUNqaDLlNrtRzyQZyjc4a9JH-SXkIdtqP0htlJ0sk0EhQ-aut1b9fzx7iwllAoGV8',
      desc: 'Sesi pembekalan intensif tips mengerjakan penalaran skolastik dan literasi bahasa bagi calon mahasiswa alumni Paket C.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Kegiatan & Dokumentasi' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <Camera className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Aktivitas Nyata Lembaga</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Dokumentasi Kegiatan & Pembelajaran Celah Cahaya
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Potret suasana belajar interaktif, pelaksanaan ujian kesetaraan berbasis komputer, workshop keahlian digital, hingga momen kelulusan warga belajar kami di Garut.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACTIVITIES.map((act, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="h-60 overflow-hidden relative">
              <OptimizedImage
                src={act.image}
                alt={act.title}
                width={800}
                height={480}
                aspectRatio="16/10"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-md">
                {act.category}
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center text-xs text-slate-400 space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{act.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {act.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {act.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
