import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  CheckCircle2, ShieldCheck, Phone, Send, FileText, 
  HelpCircle, AlertCircle, Sparkles, MessageCircle 
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface PendaftaranPageProps {
  onNavigate: (path: string) => void;
}

export const PendaftaranPage: React.FC<PendaftaranPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    nik: '',
    phone: '',
    email: '',
    district: '',
    program: 'Paket C (Setara SMA)',
    lastEducation: 'SMP / MTs / Sederajat',
    learningMode: 'Hybrid (Tatap Muka Akhir Pekan & Daring)',
    notes: '',
    hasKIP: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (errorMessage) setErrorMessage(null);
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Mohon lengkapi nama lengkap dan nomor WhatsApp aktif Anda.');
      return;
    }

    // Simpan ke penyimpanan lokal peramban
    try {
      const existing = JSON.parse(localStorage.getItem('celah_cahaya_registrations') || '[]');
      existing.unshift({
        ...formData,
        id: `reg-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: 'Baru'
      });
      localStorage.setItem('celah_cahaya_registrations', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Halo PKBM Celah Cahaya Garut,\n\nSaya ingin mendaftar sebagai warga belajar baru:\n- Nama: ${formData.fullName}\n- Program: ${formData.program}\n- Pendidikan Terakhir: ${formData.lastEducation}\n- Domisili: ${formData.district}\n- Pilihan Belajar: ${formData.learningMode}\n- Jalur KIP: ${formData.hasKIP ? 'Ya' : 'Reguler'}\n\nMohon informasi langkah verifikasi berkas selanjutnya. Terima kasih.`
    );
    return `https://wa.me/${INSTITUTION_INFO.whatsapp}?text=${text}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[{ name: 'Pendaftaran Warga Belajar Baru' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Pendaftaran Tahun Ajaran Baru Dibuka</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Formulir Pendaftaran Warga Belajar
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Silakan isi formulir di bawah ini dengan data yang benar. Tim akademik kami akan segera menghubungi Anda melalui WhatsApp untuk verifikasi berkas.
        </p>
      </div>

      {submitted ? (
        /* Success State */
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Formulir Anda Berhasil Terkirim!</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Terima kasih <strong>{formData.fullName}</strong>. Data Anda untuk program <strong>{formData.program}</strong> telah tersimpan di sistem PKBM Celah Cahaya.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-emerald-200/80 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
            <div className="font-bold text-slate-900">Langkah Konfirmasi Cepat:</div>
            <p>Untuk mempercepat proses seleksi dan penerbitan nomor registrasi, Anda dapat langsung mengonfirmasi melalui WhatsApp resmi kami:</p>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center rounded-xl transition-colors shadow-xs"
            >
              Konfirmasi WhatsApp Langsung (Satu Klik)
            </a>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
          >
            Daftarkan orang lain / isi formulir baru
          </button>
        </div>
      ) : (
        /* Registration Form */
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold flex items-center space-x-2">
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Section 1: Pilihan Program */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Pilihan Program dan Cara Belajar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pilih Program Kesetaraan *
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                >
                  <option value="Paket C (Setara SMA)">Paket C (Setara SMA - Jurusan IPS / IPA)</option>
                  <option value="Paket B (Setara SMP)">Paket B (Setara SMP / MTs)</option>
                  <option value="Paket A (Setara SD)">Paket A (Setara SD / MI)</option>
                  <option value="Vokasi & AI Digital">Keterampilan Vokasi & AI Siap Kerja</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pilihan Waktu / Mode Belajar *
                </label>
                <select
                  name="learningMode"
                  value={formData.learningMode}
                  onChange={handleChange}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                >
                  <option value="Hybrid (Tatap Muka Akhir Pekan & Daring)">Hybrid (Tatap Muka Weekend & Modul Daring)</option>
                  <option value="Kelas Malam Pekerja">Kelas Malam untuk Pekerja Shift</option>
                  <option value="Daring Penuh (Khusus Luar Kota / Luar Negeri)">Daring Penuh (Warga Belajar Luar Kota/PMI)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Biodata Calon Warga Belajar */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Data Calon Warga Belajar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Lengkap Sesuai Akta / KTP *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Contoh: Muhammad Ramdan Pratama"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 081234567890"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  NIK (Nomor Induk Kependudukan di KK)
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  placeholder="16 Digit NIK (bisa disusulkan)"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Domisili / Kecamatan Asal *
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="Contoh: Singajaya, Peundeuy, Cikajang, Banjarwangi, Garut Kota, dsb."
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pendidikan Terakhir yang Pernah Ditempuh *
                </label>
                <select
                  name="lastEducation"
                  value={formData.lastEducation}
                  onChange={handleChange}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                >
                  <option value="SMP / MTs (Tamat / Lulus)">Lulus SMP / MTs / Paket B</option>
                  <option value="Putus Sekolah SMA / SMK Kelas 10">Pernah SMA/SMK Kelas 10</option>
                  <option value="Putus Sekolah SMA / SMK Kelas 11">Pernah SMA/SMK Kelas 11</option>
                  <option value="Putus Sekolah SMA / SMK Kelas 12">Pernah SMA/SMK Kelas 12</option>
                  <option value="SD / MI / Paket A">Lulus SD / MI / Paket A</option>
                  <option value="Belum Pernah Sekolah / Putus SD">Belum Pernah Sekolah / Putus SD</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email (Opsional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alamat@email.com"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
                />
              </div>
            </div>

            {/* Checkbox Beasiswa KIP */}
            <div className="pt-2">
              <label className="flex items-center space-x-2.5 cursor-pointer bg-slate-50 p-3 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  name="hasKIP"
                  checked={formData.hasKIP}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#0284C7] rounded-sm focus:ring-[#0284C7]"
                />
                <span className="text-xs text-slate-700 font-medium">
                  Saya memiliki Kartu Indonesia Pintar (KIP) / SKTM dan ingin mengajukan jalur bantuan bebas biaya.
                </span>
              </label>
            </div>
          </div>

          {/* Section 3: Catatan Khusus */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Catatan atau Pertanyaan Tambahan (Opsional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Ceritakan kendala belajar Anda atau tanyakan hal yang ingin Anda ketahui..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7] focus:bg-white"
            />
          </div>

          {/* Security & Guarantees */}
          <div className="text-[11px] text-slate-500 space-y-1 bg-sky-50/50 p-4 rounded-xl border border-sky-200/60">
            <div className="flex items-center space-x-1.5 font-semibold text-sky-900">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              <span>Jaminan Privasi & Perlindungan Data</span>
            </div>
            <p>
              Data pribadi Anda hanya digunakan untuk keperluan pendaftaran resmi Dapodik Kemendikbudristek dan tidak akan disebarluaskan kepada pihak ketiga manapun.
            </p>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-4 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-2xl text-sm sm:text-base transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center space-x-2"
          >
            <span>Kirim Pendaftaran Warga Belajar</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
};
