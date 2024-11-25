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