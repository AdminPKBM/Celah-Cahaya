import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/mockData';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, 
  CheckCircle2, Compass, Bus, AlertCircle 
} from 'lucide-react';

interface KontakPageProps {
  onNavigate: (path: string) => void;
}

export const KontakPage: React.FC<KontakPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Pertanyaan Pendaftaran Paket C',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      alert('Mohon lengkapi nama, nomor telepon/WhatsApp, dan pesan Anda.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb
        items={[{ name: 'Kontak & Lokasi Lembaga' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
          <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Sekretariat Resmi Garut, Jawa Barat</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Kontak & Lokasi PKBM Celah Cahaya
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Kami siap melayani konsultasi pendaftaran, verifikasi berkas, serta pertanyaan seputar program pendidikan kesetaraan baik secara tatap muka maupun daring.
        </p>
      </div>

      {/* Contact Cards & Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              Informasi Kontak Resmi
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Alamat Sekretariat:</div>
                  <div className="text-slate-600 leading-relaxed mt-0.5">{INSTITUTION_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">WhatsApp / Telepon:</div>
                  <div className="text-slate-600 mt-0.5">{INSTITUTION_INFO.phone}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Email Resmi:</div>
                  <div className="text-slate-600 mt-0.5">{INSTITUTION_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Jam Pelayanan Kantor:</div>
                  <div className="text-slate-600 mt-0.5">{INSTITUTION_INFO.operationalHours}</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${INSTITUTION_INFO.whatsapp}?text=Halo%20Admin%20Celah%20Cahaya,%20saya%20ingin%20konsultasi%20langsung.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp Sekarang</span>
              </a>
            </div>
          </div>

          {/* Panduan Rute Angkutan & Akses Singajaya Garut */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center">
              <Bus className="w-4 h-4 text-[#0284C7] mr-2" />
              <span>Petunjuk Akses Menuju Lokasi</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dari arah <strong>Terminal Guntur Garut</strong> atau Bundaran Tarogong, ambil jalur selatan menuju Cikajang - Singajaya. Sekretariat PKBM Celah Cahaya berlokasi di <strong>Kp. Sukawangi, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut</strong>. Layanan konsultasi offline dibuka setiap hari kerja, serta layanan online melalui WhatsApp resmi 24 jam.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Map & Inquiry Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive Map Visual */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-[#0B192C] p-4 text-white flex justify-between items-center text-xs">
              <span className="font-bold">Wilayah: Singajaya, Kabupaten Garut</span>
              <span className="text-amber-400">Kp. Sukawangi, Desa Sukawangi</span>
            </div>
            {/* Visual Simulated Map with OpenStreetMap or styled interactive canvas */}
            <div className="h-64 bg-slate-100 relative flex items-center justify-center p-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{INSTITUTION_INFO.legalName}</h4>
                  <p className="text-xs text-slate-500 max-w-sm mt-0.5">
                    {INSTITUTION_INFO.address}
                  </p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Kp. Sukawangi, Desa Sukawangi, Singajaya, Garut PKBM Celah Cahaya')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-[#0284C7] hover:text-[#0369A1] bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                >
                  <Compass className="w-3.5 h-3.5 mr-1" />
                  <span>Buka di Google Maps Langsung</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Kirim Pesan atau Pertanyaan
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Staf kami akan membalas melalui email atau WhatsApp dalam 1x24 jam kerja.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-sm">Pesan Anda Berhasil Diterima</h4>
                <p className="text-xs text-slate-600">
                  Terima kasih <strong>{form.name}</strong>, kami akan segera merespons ke nomor {form.phone}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-emerald-700 font-semibold underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nama Anda"
                      required
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      required
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Topik Pesan</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm"
                  >
                    <option value="Pertanyaan Pendaftaran Paket C">Pertanyaan Pendaftaran Paket C</option>
                    <option value="Pertanyaan Pendaftaran Paket B / A">Pertanyaan Pendaftaran Paket B / A</option>
                    <option value="Konfirmasi Pembayaran / Biaya">Konfirmasi Pembayaran / Biaya</option>
                    <option value="Pengajuan Beasiswa KIP / Afirmasi">Pengajuan Beasiswa KIP / Afirmasi</option>
                    <option value="Kerjasama Lembaga / CSR">Kerjasama Lembaga / CSR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pesan Anda *</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau kebutuhan Anda secara rinci..."
                    required
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
                >
                  <span>Kirim Pesan Sekarang</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
