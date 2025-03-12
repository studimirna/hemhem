import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      background: 'linear-gradient(135deg, #00b894, #00cec9)', // Latar belakang gradasi hijau
      color: '#fff',
      height: '100vh', // Latar belakang memenuhi seluruh layar
      boxSizing: 'border-box',
      display: 'flex', // Gunakan flexbox untuk penyusunan vertikal
      flexDirection: 'column', // Menyusun elemen secara vertikal
      alignItems: 'center', // Menjaga elemen terpusat di tengah
      justifyContent: 'center', // Menjaga elemen berada di tengah secara vertikal
    }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '36px' }}>CV Mirna Anjani</h1>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Image 
          src="/mirna.jpeg" // Pastikan path ini benar
          alt="Foto Mirna Anjani"
          width={150}
          height={150}
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />

        <p style={{ fontSize: '18px' }}>
          Hallo, saya <strong>Mirna Anjani</strong>, mahasiswi semester 4 di Universitas Masoem Bandung. 
          Saya mengambil jurusan Komputerisasi Akuntansi di Fakultas Komputer.
        </p>
      </section>

      {/* Garis Pembatas */}
      <hr style={{
        width: '80%',
        border: '1px solid #fff',
        margin: '20px auto',
      }} />

      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ fontSize: '18px' }}>
          <strong>Pengalaman Organisasi:</strong> Paskibra, OSIS, PMI, dan Himpunan Mahasiswa.
        </p>
      </section>

      {/* Garis Pembatas */}
      <hr style={{
        width: '80%',
        border: '1px solid #fff',
        margin: '20px auto',
      }} />

      <section style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>
          <strong>Keahlian:</strong> Microsoft Excel dan Word.
        </p>

        <p style={{ fontSize: '18px' }}>
          <strong>Kontak:</strong>
          <br />
          Telpon: <a href="tel:+6285720662865" style={{ color: '#fff' }}>085720662865</a>
          <br />
          Gmail: <a href="mailto:manjni2005@gmail.com" style={{ color: '#fff' }}>manjni2005@gmail.com</a>
        </p>
      </section>

      <footer style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#ddd' }}>© 2025 Mirna Anjani</p>
      </footer>
    </div>
  )
}
