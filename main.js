// Loading screen
window.addEventListener('load', function () {
    const loadingContainer = document.querySelector('.loadingContainer');
    const content = document.querySelector('.content');

    // Fungsi membuat bintang animasi
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Menentukan posisi bintang secara acak
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';

        // Ukuran acak bintang
        const size = Math.random() * 3 + 1; // Ukuran antara 1px - 4px
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // Menambahkan bintang ke container
        loadingContainer.appendChild(star);

        // Menghapus elemen bintang setelah animasi selesai
        setTimeout(() => {
            star.remove();
        }, 1000); // Waktu yang sama dengan durasi animasi
    }

    // Membuat bintang secara periodik
    const starInterval = setInterval(createStar, 100);

    // Setelah animasi selesai (misal 3 detik), hapus loading dan tampilkan konten
    setTimeout(() => {
        clearInterval(starInterval); // Hentikan pembuatan bintang
        loadingContainer.style.display = 'none'; // Hilangkan loading
        content.style.display = 'block'; // Tampilkan konten

        // Memulai animasi hero setelah loading selesai
        startHeroAnimation(); // Panggil fungsi untuk memulai animasi
    }, 700); // Durasi loading screen (sesuaikan)
});

// Fungsi untuk memulai animasi hero
function startHeroAnimation() {
    // Pilih semua elemen dengan class .img
    const images = document.querySelectorAll('.img');

    // Fungsi untuk menangani elemen yang masuk ke viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Tambahkan kelas 'fade-in'
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi selesai
            }
        });
    }, {
        threshold: 1 // Elemen dianggap terlihat sepenuhnya
    });

    // Terapkan observer ke elemen .img
    images.forEach(img => observer.observe(img));
}

function startHeroAnimation() {
    // Pilih elemen hero
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in'); // Tambahkan kelas ke hero untuk memulai animasi teks

    // Pilih semua elemen gambar untuk animasi dengan Intersection Observer
    const images = document.querySelectorAll('.img');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Tambahkan kelas 'fade-in'
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi selesai
            }
        });
    }, {
        threshold: 1 // Elemen dianggap terlihat sepenuhnya
    });

    // Terapkan observer ke elemen .img
    images.forEach(img => observer.observe(img));
}

// hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const navLinks = document.getElementById('nav-links');
    const icon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', function () {
        // Toggle the "show" class
        navLinks.classList.toggle('show');

        // Update button icon
        if (navLinks.classList.contains('show')) {
            icon.classList.remove('fa-bars-staggered');
            icon.classList.add('fa-xmark');
            // Ubah ukuran font hanya pada fa-xmark
            if (icon.classList.contains('fa-xmark')) {
                icon.style.fontSize = '2.3rem'; // Ganti dengan ukuran font yang diinginkan
            }
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');

            // Mengubah kembali ukuran font jika bukan fa-xmark
            icon.style.fontSize = ''; // Menghapus perubahan ukuran font
        }
    });
});