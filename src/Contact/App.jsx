
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
        <a href="/">Beranda <hr /></a>
        <a href="Materi">Materi <hr /></a>
        <a href="Tentang">Tentang<hr /></a>
        <a href="Kontak">Kontak <hr id='place'/></a>
        </div>

        <a href=""><h3 className=''>Login</h3></a>
   </header>

  <section className="bg-gray-100 px-15 py-16 max-w-xl mx-auto text-gray-800 rounded-lg shadow-md mt-16 mb-21">
     

      <form className="space-y-6 border p-10 rounded-4xl"> 
        <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Kontak Kami</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Masukkan nama kamu"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="contoh@domain.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Apa yang ingin kamu sampaikan?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
        >
          Kirim Pesan
        </button>
      </form>
    </section>

   
   <footer className="bg-gray-900 text-white pt-10 pb-6 bottom-0">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    <div>
      <h2 className="text-2xl font-bold text-yellow mb-2">LearnEvZone</h2>
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
  <a href="/beranda" className="hover:text-yellow flex items-center"><i className="fas fa-home mr-1"></i> Beranda</a>
  <a href="/materi" className="hover:text-yellow flex items-center"><i className="fas fa-book mr-1"></i> Materi</a>
  <a href="/tentang" className="hover:text-yellow flex items-center"><i className="fas fa-info-circle mr-1"></i> Tentang Kami</a>
  <a href="/kontak" className="hover:text-yellow flex items-center"><i className="fas fa-envelope mr-1"></i> Kontak</a>
  <a href="/privasi" className="hover:text-yellow flex items-center"><i className="fas fa-user-shield mr-1"></i> Privasi</a>
</div>

    <div>
      <h3 className="text-lg font-semibold text-yellow-300 mb-3">Hubungi Kami</h3>
      <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center">
        <i className="fas fa-map-marker-alt mr-2"></i> Banjarmasin, Kalimantan Selatan
      </p>
      <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center">
        <i className="fas fa-envelope mr-2"></i> info@LearnEvZone.com
      </p>
      <p className="text-sm text-gray-300 flex justify-center md:justify-start items-center">
        <i className="fas fa-phone-alt mr-2"></i> +62 812 3456 7890
      </p>
    </div>

  </div>

  <div className="mt-10 border-t border-gray-700 text-center pt-4 text-xs text-gray-500">
    © 2025 LearnEvZone. Semua hak dilindungi. | Media Pembelajaran Masa Kini
  </div>
</footer>



   

   </>

)
}