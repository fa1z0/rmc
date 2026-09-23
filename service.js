document.addEventListener('DOMContentLoaded', () => {
  // Element selections
  const btnManageGrant = document.getElementById('btn-manage-grant');
  const btnInnovation = document.getElementById('btn-innovation-pathway');

  const modalManageGrant = document.getElementById('modal-manage-grant');
  const modalInnovation = document.getElementById('modal-innovation-pathway');

  const closeButtons = document.querySelectorAll('.close-btn');
  const overlays = document.querySelectorAll('.modal-overlay');

  // Helper function to open modal
  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  // Helper function to close modal
  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore background scrolling
    }
  }

  // Event Listeners for main trigger buttons
  if (btnManageGrant) {
    btnManageGrant.addEventListener('click', () => openModal(modalManageGrant));
  }

  if (btnInnovation) {
    btnInnovation.addEventListener('click', () => openModal(modalInnovation));
  }

  // Event Listeners for close buttons
  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  // Close modal when clicking outside the container (overlay background)
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => closeModal(overlay));
    }
  });
});