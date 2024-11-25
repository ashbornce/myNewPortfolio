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