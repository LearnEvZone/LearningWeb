
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
        <a href="Materi">Materi <hr /></a>
        <a href="Tentang">Tentang<hr  id='place' /></a>
        <a href="Kontak">Kontak <hr /></a>

        </div>

        <a href=""><h3 className=''>Login</h3></a>
   </header>
 <section className="bg-white px-6 py-16 max-w-5xl mx-auto text-gray-800">
  <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Tentang LearnevZone</h1>

  <h2 className="text-xl font-semibold mb-2">Sejarah Singkat</h2>
  <p className="text-base leading-relaxed mb-6 text-justify">
    LearnevZone lahir dari keprihatinan terhadap kesenjangan akses dan kualitas pendidikan digital di Indonesia. Bermula dari komunitas kecil penggiat literasi dan teknologi, kami merancang platform yang bukan hanya informatif, tetapi juga menyenangkan untuk digunakan. Sejak awal, kami berkomitmen untuk menyatukan konten berkualitas dengan antarmuka yang ramah pengguna.
  </p>

  <h2 className="text-xl font-semibold mb-2">Visi Kami</h2>
  <p className="text-base leading-relaxed mb-6 text-justify">
    Menjadi ruang belajar digital paling inspiratif dan inklusif di Indonesia yang membantu generasi masa depan belajar dengan cara baru yang lebih mandiri, interaktif, dan relevan.
  </p>

  <h2 className="text-xl font-semibold mb-2">Misi Kami</h2>
  <ul className="list-disc pl-5 mb-6 text-base">
    <li>Menyediakan konten pembelajaran berkualitas dan mudah diakses bagi semua kalangan.</li>
    <li>Memfasilitasi pengalaman belajar yang menyenangkan dan tidak membosankan.</li>
    <li>Memperkuat literasi digital, komunikasi efektif, dan kemampuan berpikir kritis.</li>
    <li>Membangun komunitas edukatif yang saling mendukung dan kolaboratif.</li>
  </ul>

  <h2 className="text-xl font-semibold mb-2">Nilai Inti</h2>
  <ul className="list-disc pl-5 mb-6 text-base">
    <li><strong>Inovasi:</strong> Kami terus berinovasi untuk menciptakan metode pembelajaran yang relevan.</li>
    <li><strong>Keterbukaan:</strong> Kami percaya bahwa semua orang berhak belajar dan berkembang.</li>
    <li><strong>Kualitas:</strong> Setiap materi yang kami hadirkan telah melalui kurasi dan validasi.</li>
    <li><strong>Empati:</strong> Kami mendesain berdasarkan pengalaman nyata pengguna, bukan hanya data.</li>
  </ul>

  <h2 className="text-xl font-semibold mb-2">Tim Kami</h2>
  <p className="text-base leading-relaxed text-justify">
    LearnevZone didirikan oleh kombinasi pendidik, pengembang, desainer UI/UX, dan penulis konten. Kami memiliki latar belakang di berbagai bidang—dari pendidikan formal hingga teknologi digital—dan disatukan oleh satu semangat: mendemokratisasi ilmu pengetahuan dan pembelajaran di era digital.
  </p>
</section>

<footer className="bg-gray-900 text-white pt-10 pb-6">
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