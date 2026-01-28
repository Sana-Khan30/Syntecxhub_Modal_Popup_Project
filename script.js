const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');
const modalForm = document.getElementById('modal-form');
const submitBtn = document.getElementById('submit-btn');
const toast = document.getElementById('toast');

// 1. Better Modal Handling
const toggleModal = (isOpen) => {
    if (isOpen) {
        modal.showModal();
        document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
        modal.close();
        document.body.style.overflow = ''; // Unlock scroll
    }
};

// 2. Click-Outside Logic (Modern implementation)
modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        toggleModal(false);
    }
});

// 3. Form Submission Innovation (The "Async" Simulation)
modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // UI Feedback: Start Loading
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate API Call (2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Success State
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    
    showToast('Message sent! We\'ll be in touch soon.');
    modalForm.reset();
    toggleModal(false);
});

// 4. Toast Notification Logic
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Listeners
openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));