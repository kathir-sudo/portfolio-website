const projects = [
    {
        title: 'ColorPicker',
        description: 'Colorpicker that let you choose color and copy it to the clipboard',
        tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
        link: 'https://kathir-sudo.github.io/color-picker/' 
    },
    {
        title: 'E-Commerce Site',
        description: 'A full-stack e-commerce platform with user authentication and payment gateway integration.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB']
        
    },
    {
        title: 'Task Management App',
        description: 'A web application for managing tasks with features like drag-and-drop and deadlines.',
        tech: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'AI Chatbot',
        description: 'A chatbot using Natural Language Processing (NLP) to answer user queries.',
        tech: ['Python', 'AI', 'NLP']
    },
    {
        title: 'Portfolio Website (This One!)',
        description: 'A personal portfolio website to showcase projects and skills.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
    },
    {
        title: 'Data Visualization Dashboard',
        description: 'A dashboard to visualize data using charts and graphs from a REST API.',
        tech: ['React', 'JavaScript', 'Chart.js', 'API']
    }
];

const techColors = {
    'React': 'bg-blue-600/20 text-blue-400',
    'Node.js': 'bg-green-600/20 text-green-400',
    'Express': 'bg-gray-500/20 text-gray-300',
    'MongoDB': 'bg-green-600/20 text-green-400',
    'JavaScript': 'bg-yellow-400/20 text-yellow-400',
    'HTML': 'bg-orange-500/20 text-orange-400',
    'CSS': 'bg-blue-500/20 text-blue-300',
    'Python': 'bg-blue-700/20 text-blue-500',
    'AI': 'bg-purple-600/20 text-purple-400',
    'NLP': 'bg-purple-300/20 text-purple-200',
    'Tailwind CSS': 'bg-sky-400/20 text-sky-300',
    'Chart.js': 'bg-red-400/20 text-red-300',
    'API': 'bg-pink-400/20 text-pink-300'
};


const mobileMenuButton = document.getElementById('mobile-menu');
const mobileLinks = document.getElementById('mobile-links');


mobileMenuButton?.addEventListener('click', () => {
    mobileLinks?.classList.toggle('hidden'); 
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if (mobileLinks?.classList.contains('hidden') === false) {  
            mobileLinks?.classList.add('hidden');   
        }
    });
});

const projectsContainer = document.getElementById('projects-container');

projectsContainer.innerHTML = '';

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card bg-gray-800/40 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all hover:scale-[1.02] cursor-pointer';

    projectCard.addEventListener('click', () => {
        if (project.link) {
            window.open(project.link, '_blank'); 
        }
    });


    projectCard.innerHTML = `
        <div class="mb-4 relative">
            <div class="absolute inset-0 bg-blue-600/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
            <p class="text-gray-400 text-sm">${project.description}</p>
        </div>
        <div class="project-tech opacity-0 transform translate-y-4 transition-all duration-300">
            <div class="flex flex-wrap gap-2">
                ${project.tech.map(tech => {
                    const colorClass = techColors[tech] || 'bg-gray-700/30 text-gray-300'; 
                    return `<span class="px-3 py-1 rounded-full text-sm ${colorClass}">${tech}</span>`;
                }).join('')}
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectCard);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2 
});

document.querySelectorAll('.project-card, .skill-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});