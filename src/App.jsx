
import { useNavigate } from 'react-router-dom'
import './index.css'
import { useState } from 'react'



export default function App() {






return (
   <>
  
    <header className=' flex justify-between items-center fixed 100 w-full p-2 border-b-1 top-0 bg-black text-amber-50 opacity-100 z-10 lg:justify-around' >
    <div className='lg:hidden'><i className='fas fa-bars'></i></div>
    <h3>LearnEvZone</h3>
    <div className="navbar w-1/4 justify-around hidden lg:flex lg:justify-evenly">
        <a href="/">Beranda <hr id='place'/></a>
        <a href="/src/Materi">Materi <hr /></a>
        <a href="/src/Tentang">Tentang<hr /></a>
        <a href="/src/Kontak">Kontak <hr /></a>
        </div>

        <a href=""><h3 className=''>Login</h3></a>
   </header>
<div className="beranda font-bold hidden lg:flex"> 
    <h1 className=' text-yellow w-200 text-center hidden-on-load'>“Temukan Cara Baru untuk Belajar dan Berkembang di <strong className='text-yellow-500'>LearnEvZone.</strong>”
         <br />
         <br />
         <a href="#list"><button className='p-4 bg-amber-400 '> <i className='fa-solid fa-arrow-down'></i></button></a>
    </h1>
    </div>
    
    <div id="list">
        <h1 className='text-5xl'>Temukan Materi Yang Kamu Cari</h1>
     <div id="lists" className='row lg:flex'>
    <a href="Materi" id='box1'>
       <div className="box bg-red-900   reveal cursor-pointer w-90" >
        <img src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg" alt="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg" />
        <h2>Matematika</h2> <br />
        <p>“Matematika bukan hanya soal dan angka, tapi tentang membentuk cara berpikir yang tajam dan efisien.”</p>
        
        <br />
        <div className='tolink'><a href="">Lihat Seluruh Materi...</a></div>
        </div></a>
     <div className="box bg-blue-600 cursor-not-allowed  w-90" id='box2'> <img src="https://images.pexels.com/photos/33016769/pexels-photo-33016769.jpeg" alt="https://images.pexels.com/photos/33016769/pexels-photo-33016769.jpeg" />
        <h2>IPAS</h2>
          <div className="flex z-10  items-center justify-center bg-gray-100 text-gray-500 text-sm italic py-1 px-2 rounded border border-dashed border-gray-400">
              <i className="fas fa-ban mr-2 text-red-500"></i>
               Materi belum tersedia
             </div>
        <p>“IPAS membuka wawasan tentang lingkungan, teknologi, dan manusia sebagai satu kesatuan.”</p>
       
        <br />
        <div className='tolink'><a href="">Lihat Seluruh Materi...</a></div>
        </div>
      
     

     <div className="box bg-emerald-500 cursor-not-allowed  w-90"> <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg" alt="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg" />
        <h2>Bahasa Inggris</h2>
            <div className="flex z-10  items-center justify-center bg-gray-100 text-gray-500 text-sm italic py-1 px-2 rounded border border-dashed border-gray-400">
              <i className="fas fa-ban mr-2 text-red-500"></i>
               Materi belum tersedia
                </div>
                <a href=""></a>
        
        <p>"Bahasa Inggris bukan sekadar pelajaran, tetapi kunci ilmu pengetahuan global dan teknologi"</p>
      
        <br />
        <div className='tolink'><a href="">Lihat Seluruh Materi...</a></div>
    
        </div>
     <div className="box bg-amber-700 cursor-not-allowed  w-90" id='box4'> <img src="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg" alt="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg" />
        <h2>Sejarah</h2>
        <div className="flex z-10  items-center justify-center bg-gray-100 text-gray-500 text-sm italic py-1 px-2 rounded border border-dashed border-gray-400">
              <i className="fas fa-ban mr-2 text-red-500"></i>
               Materi belum tersedia
              </div>
        <p>“Bangsa yang memahami sejarahnya akan lebih siap menghadapi tantangan perubahan zaman.”</p>
     
        <br />
        <div className='tolink'><a href="">Lihat Seluruh Materi...</a></div>
          

        </div>
    <a href=""  className='mt-210 bg-gray-500 absolute p-2 rounded text-amber-50 border border-amber-50 bo lihat cursor-pointer'>
      <h2>Lihat selengkapnya...</h2></a>
      
      </div>
  
   
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 h">

  <div className="bg-white shadow-md rounded-lg p-6 text-gray-800 border">
    <p className="text-sm italic">
      “Platform ini bikin belajar jadi lebih menyenangkan! Materinya disajikan dengan cara yang sederhana tapi powerful. Saya dulu sering merasa bosan saat belajar dari buku, tapi di LearnEvZone saya jadi lebih semangat karena tampilannya menarik dan materi dijelaskan step-by-step. Bahkan saat saya belajar malam hari pun, tampilannya tetap enak dilihat dan nggak bikin capek mata.”
    </p>
    <div className="mt-4 flex items-center">
      <img src="https://i.pravatar.cc/40?u=user1" alt="Naila" className="w-10 h-10 rounded-full mr-3"/>
      <div>
        <h4 className="font-semibold">R. Abdillah .S</h4>
        <span className="text-xs text-gray-500">Pelajar SMA</span>
      </div>
    </div>
  </div>

  <div className="bg-white shadow-md rounded-lg p-6 text-gray-800 border">
    <p className="text-sm italic">
      “LearnEvZone punya pendekatan yang fresh dalam dunia edukasi digital. Sebagai mahasiswa teknik, saya sangat menghargai konten yang runtut dan padat informasi tanpa harus ribet. Saya suka fitur interaktifnya, terutama soal latihan yang bisa langsung dicek dan dikoreksi. Selain itu, saya juga senang dengan keberadaan forum diskusi antar pengguna—jadi ada rasa belajar bareng meskipun secara online.”
    </p>
    <div className="mt-4 flex items-center">
      <img src="https://i.pravatar.cc/40?u=user2" alt="Rizky" className="w-10 h-10 rounded-full mr-3"/>
      <div>
        <h4 className="font-semibold">Raihan R.R</h4>
        <span className="text-xs text-gray-500">Mahasiswa Teknik</span>
      </div>
    </div>
  </div>

  <div className="bg-white shadow-md rounded-lg p-6 text-gray-800 border">
    <p className="text-sm italic">
      “Suka banget sama fitur-fitur di LearnEvZone yang bikin belajar jadi nggak monoton! Saya bukan pelajar, tapi saya tetap tertarik buat terus belajar hal baru. Dengan adanya fitur bookmark, progress tracking, dan tampilan ramah pengguna, saya jadi sering buka platform ini bahkan saat santai. Rasanya seperti punya guru pribadi yang selalu siap kapan pun saya butuh. Pokoknya recommended banget buat siapa saja yang ingin belajar dengan cara modern.”
    </p>
    <div className="mt-4 flex items-center">
      <img src="https://i.pravatar.cc/40?u=user3" alt="Vina" className="w-10 h-10 rounded-full mr-3"/>
      <div>
        <h4 className="font-semibold">R. Ansori</h4>
        <span className="text-xs text-gray-500">Pengguna Umum</span>
      </div>
    </div>
  </div>

</div>

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