// scripts.js

// Function to navigate between sections by making the clicked section visible
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the target section
    document.getElementById(sectionId).classList.add('active');
}

// Initial setup - Show the hero section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('hero');

    // Optional: Set up navigation links if re-added
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
});
