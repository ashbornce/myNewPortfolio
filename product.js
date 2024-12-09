// Data project
const projects = [
    {
        id: 1,
        img: 'img/project/company-profile.png',
        title: 'Company Profile Fiktif',
        description: 'Membuat company profile fiktif, menggunakan HTML, CSS, dan JS.',
        tools: ['HTML', 'CSS', 'JavaScript', './img/iconLogo/html.png', './img/iconLogo/css.png', './img/iconLogo/js.png'],
        details: 'Project ini adalah company profile fiktif untuk melatih kemampuan menggunakan HTML, CSS, dan JavaScript dengan layout responsif.',
        link: 'https://ashbornce.github.io/companyProfile/'
    },
    {
        id: 2,
        img: 'img/project/template1.png',
        title: 'Template Website',
        description: 'Membuat template website yang cukup responsif untuk menambah skill dan pengalaman dalam frontend development.',
        tools: ['HTML', 'CSS', 'JS', 'Bootstrap', './img/iconLogo/html.png', './img/iconLogo/css.png', './img/iconLogo/js.png', './img/iconLogo/bootstrap.png'],
        details: 'Template ini dibuat untuk mempelajari struktur HTML yang lebih kompleks, gaya CSS modern, dan penggunaan media queries untuk membuatnya responsif.',
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
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#projectModal${project.id}">Detail</button>
            </div>
        </div>
    `;

    projectContainer.appendChild(projectCard);
});

const modalContainer = document.getElementById('modal-container');
projects.forEach(project => {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = `projectModal${project.id}`;
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', `projectModalLabel${project.id}`);
    modal.setAttribute('aria-hidden', 'true');

    // Render tools as list
    const toolsList = project.tools.map(tool => {
        if (tool.includes('.png') || tool.includes('.jpg')) {
            return `<img src="${tool}" alt="tool logo" class="me-2" style="height: 24px;">`;
        }
        return `<span class="badge bg-secondary me-2">${tool}</span>`;
    }).join('');

    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-madul modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="projectModalLabel${project.id}">${project.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${project.img}" class="img-fluid mb-3" alt="${project.title}">
                    <p>${project.details}</p>
                    <div class="mt-3">
                        <h6>Tools Used:</h6>
                        <div>${toolsList}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;

    modalContainer.appendChild(modal);
});

projects.forEach(project => {
    console.log(`Modal ID: #projectModal${project.id} created`);
    console.log(document.getElementById(`projectModal${project.id}`)); // Log elemen modal
});
