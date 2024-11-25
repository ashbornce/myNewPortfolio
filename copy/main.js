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


// Data project
const projects = [
    {
        img: 'img/project/company-profile.png',
        title: 'Company Profile Fiktif',
        description: 'Membuat company profile fiktif, mengguakan html, css dan js.',
        link: 'https://ashbornce.github.io/companyProfile/'
    },
    {
        img: 'img/project/template1.png',
        title: 'Template Website',
        description: 'Membuat Template website yang cukup responsif untuk menambah skill dan pengalaman dalam frontend developer.',
        link: 'https://ashbornce.github.io/template1/'
    },
];

// Container untuk menampung card
const projectContainer = document.getElementById('project-container');

// Loop untuk membuat card
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'col-12 col-md-6 col-lg-4 pt-3';

    projectCard.innerHTML = `
        <div class="card shadow-sm">
            <img src="${project.img}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" target="_blank" class="btn">View Project</a>
            </div>
        </div>
    `;

    projectContainer.appendChild(projectCard);
});
