document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    updateYear();
});

function renderPortfolio() {
    // Hero Section
    document.getElementById('hero-name').textContent = profileData.name;
    document.getElementById('hero-title').textContent = profileData.title;
    document.getElementById('hero-summary').textContent = profileData.summary;
    document.getElementById('nav-logo').textContent = profileData.name;
    document.getElementById('footer-name').textContent = profileData.name;

    // Experience
    const experienceContainer = document.getElementById('experience-list');
    profileData.experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-header">
                <span class="role">${job.role}</span>
                <span class="company">${job.company}</span>
            </div>
            <div class="period">${job.period}</div>
            <p>${job.description}</p>
        `;
        experienceContainer.appendChild(item);
    });

    // Education
    const educationContainer = document.getElementById('education-list');
    profileData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-header">
                <span class="role">${edu.degree}</span>
                <span class="company">${edu.school}</span>
            </div>
            <div class="period">${edu.period}</div>
            <p>${edu.description}</p>
        `;
        educationContainer.appendChild(item);
    });

    // Projects
    const projectsContainer = document.getElementById('projects-list');
    if (profileData.projects) {
        profileData.projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-header">
                    <span class="role">${project.title}</span>
                </div>
                <a href="${project.video}" target="_blank" class="project-thumbnail-link">
                    <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
                </a>
                <p style="white-space: pre-line;">${project.description}</p>
            `;
            projectsContainer.appendChild(item);
        });
    }

    // Awards
    const awardsContainer = document.getElementById('awards-list');
    if (profileData.awards) {
        profileData.awards.forEach(award => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            
            // Build the action buttons if links exist
            let actionButtons = '';
            if (award.link || award.verificationLink) {
                actionButtons = `<div class="award-actions" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">`;
                if (award.link) {
                    actionButtons += `<a href="${award.link}" target="_blank" class="btn-small">View Certificate</a>`;
                }
                if (award.verificationLink) {
                    actionButtons += `<a href="${award.verificationLink}" target="_blank" class="btn-small btn-outline">Verify Certificate</a>`;
                }
                actionButtons += `</div>`;
            }

            item.innerHTML = `
                <div class="timeline-header">
                    <span class="role">${award.name}</span>
                    <span class="company">${award.issuer}</span>
                </div>
                <div class="period">${award.date}</div>
                <p>${award.description}</p>
                ${actionButtons}
            `;
            awardsContainer.appendChild(item);
        });
    }

    // Skills
    const skillsContainer = document.getElementById('skills-list');
    profileData.skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });

    // Contact
    const contactContainer = document.getElementById('contact-list');
    Object.entries(profileData.contact).forEach(([key, value]) => {
        const item = document.createElement('div');
        item.className = 'contact-item';
        
        let label = key.charAt(0).toUpperCase() + key.slice(1);
        let content = `<p>${value}</p>`;
        
        if (key === 'email') {
            content = `<p><a href="mailto:${value}" class="contact-link">${value}</a></p>`;
        } else if (key === 'phone') {
            const cleanPhone = value.replace(/\s+/g, '');
            content = `<p><a href="tel:${cleanPhone}" class="contact-link">${value}</a></p>`;
        } else if (key === 'linkedin') {
            const url = value.startsWith('http') ? value : `https://${value}`;
            content = `<p><a href="${url}" target="_blank" class="contact-link">${value}</a></p>`;
        }
        
        item.innerHTML = `
            <h3>${label}</h3>
            ${content}
        `;
        contactContainer.appendChild(item);
    });
}

function updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}
