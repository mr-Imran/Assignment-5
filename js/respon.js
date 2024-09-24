const blogButton = document.getElementById('btn-blog');
const historyButton = document.getElementById('btn-history');
const donationButton = document.getElementById('btn-donation');


const historySection = document.getElementById('history-section');
const sections = document.getElementById('sections');
const blogs = document.getElementById('blogs');


function toggleSections(showSection) {

    blogs.style.display = 'none';
    historySection.style.display = 'none';
    sections.style.display = 'none';


    if (showSection) {
        showSection.style.display = 'block';
    }
}


blogButton.addEventListener('click', () => {
    toggleSections(blogs);
});

historyButton.addEventListener('click', () => {
    toggleSections(historySection);
});

donationButton.addEventListener('click', () => {
    toggleSections(sections);
});
