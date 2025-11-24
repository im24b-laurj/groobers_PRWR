// Get modal element
const modal = document.getElementById('cardModal');
const modalTitle = modal.querySelector('.modal-title');
const modalText = modal.querySelector('.modal-text');

// Open modal when clicking "Mehr erfahren"
document.querySelectorAll('.card a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const card = link.closest('.card');
        modalTitle.textContent = card.querySelector('.card-title').textContent;
        modalText.textContent = card.querySelector('p').textContent;
        modal.classList.add('active');
    });
});

// Close modal
modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.remove('active');
});

// Optional: close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
