
import { useNavigate } from 'react-router-dom'
import './index.css'
import { useState } from 'react'



export default function App() {






return (
   <>
   <header className='flex justify-between items-center fixed 100 w-full p-2 border-b-1 top-0 bg-black text-amber-50 opacity-100 z-10 lg:justify-around' >
    <div className='lg:hidden'><i className='fas fa-bars'></i></div>
    <h3>LearnEvZone</h3>
    <div className="navbar w-1/4 justify-around hidden lg:flex lg:justify-evenly">
        <a href="/">Beranda <hr/></a>
        <a href="Materi">Materi <hr id='place'/></a>
        <a href="Tentang">Tentang<hr /></a>
        <a href="Kontak">Kontak <hr /></a>
        </div>

        <a href=""><h3 className=''>Login</h3></a>
   </header>
   <div id="listmateri" className='p-10'>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 ">

  <div className="bg-red-500 rounded-md p-4 text-white shadow-md cursor-pointer">
    <h3 className="text-lg font-semibold mb-2">Matematika</h3>
   

    <p className="text-sm">Logika, angka, dan strategi pemecahan masalah untuk semua jenjang.</p>
  </div>

  <div className="bg-blue-600 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">IPAS</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Ilmu Pengetahuan Alam dan Sosial terintegrasi untuk eksplorasi dunia.</p>
  </div>

  <div className="bg-yellow-500 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Bahasa Indonesia</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Menulis, membaca, dan memahami budaya dalam bahasa kita sendiri.</p>
  </div>

  <div className="bg-emerald-500 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Bahasa Inggris</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Jendela komunikasi global dan akses literasi dunia.</p>
  </div>

  <div className="bg-amber-700 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Sejarah</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Mengenal masa lalu untuk memahami masa kini dan merancang masa depan.</p>
  </div>

  <div className="bg-pink-500 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Geografi</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Belajar tentang ruang, lokasi, dan interaksi manusia dengan lingkungan.</p>
  </div>

  <div className="bg-amber-300 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">PPKn</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Nilai kebangsaan, demokrasi, dan hak-hak warga negara.</p>
  </div>

  <div className="bg-cyan-600 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Seni Budaya</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Ekspresi kreatif lewat visual, musik, dan pertunjukan khas nusantara.</p>
  </div>

  <div className="bg-lime-500 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Informatika</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Dasar pemrograman, logika komputer, dan literasi digital masa kini.</p>
  </div>

  <div className="bg-gray-700 rounded-md p-4 text-white shadow-md cursor-not-allowed">
    <h3 className="text-lg font-semibold mb-2">Ekonomi</h3>
     <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded border border-dashed border-gray-400 italic pointer-events-none select-none">
     <i className="fas fa-ban text-red-500 text-sm"></i>
       Tidak tersedia
    </span>
    <p className="text-sm">Sistem keuangan, produksi, dan distribusi untuk kehidupan sehari-hari.</p>
  </div>

</div>
   </div>
   <footer className="bg-gray-900 text-white pt-10 pb-6 mt-220 lg:mt-0">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    <div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-2">LearnevZone</h2>
      <p className="text-sm text-gray-300">
        Media pembelajaran interaktif, fleksibel, dan menyenangkan. Bantu semua orang belajar tanpa batas.
      </p>
      <div className="mt-4 flex justify-center md:justify-start space-x-4 text-xl">
        <a href="#" className="hover:text-yellow-300"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-yellow-300"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-yellow-300"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-yellow-300"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

  <div className="flex flex-wrap justify-center md:block space-x-4 md:space-x-0 md:space-y-2 text-sm">
  <a href="/beranda" className="hover:text-yellow-400 flex items-center"><i className="fas fa-home mr-1"></i> Beranda</a>
  <a href="/materi" className="hover:text-yellow-400 flex items-center"><i className="fas fa-book mr-1"></i> Materi</a>
  <a href="/tentang" className="hover:text-yellow-400 flex items-center"><i className="fas fa-info-circle mr-1"></i> Tentang Kami</a>
  <a href="/kontak" className="hover:text-yellow-400 flex items-center"><i className="fas fa-envelope mr-1"></i> Kontak</a>
  <a href="/privasi" className="hover:text-yellow-400 flex items-center"><i className="fas fa-user-shield mr-1"></i> Privasi</a>
</div>

    <div>
      <h3 className="text-lg font-semibold text-yellow-300 mb-3">Hubungi Kami</h3>
      <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center">
        <i className="fas fa-map-marker-alt mr-2"></i> Banjarmasin, Kalimantan Selatan
      </p>
      <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center">
        <i className="fas fa-envelope mr-2"></i> info@learnevzone.com
      </p>
      <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center">
        <i className="fas fa-phone-alt mr-2"></i> +62 812 3456 7890
      </p>
    </div>

  </div>

  <div className="mt-10 border-t border-gray-700 text-center pt-4 text-xs text-gray-500">
    © 2025 LearnevZone. Semua hak dilindungi. | Media Pembelajaran Masa Kini
  </div>
</footer>



   

   </>

)
}