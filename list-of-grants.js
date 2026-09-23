// Data mapping for each grant button by ID
const grantDetailsData = {
  'btn-get': {
    title: 'Exploratory and Transformative Research Grant (GET)',
    description: 'MoHE has opened applications for the GET 2026 under Dana Kelestarian Penyelidikan. This grant aims to support innovative, high-risk exploratory projects.',
    accordion: [
      {
        title: 'Eligibility Criteria',
        content: 'Open to all academic staff holding a PhD or equivalent qualification. The Principal Investigator must be a full-time academic staff member with at least 2 years remaining on their contract.'
      },
      {
        title: 'Funding Structure & Scope',
        content: 'Maximum funding of RM250,000 over 2–3 years. Covered expenses include equipment, travel, professional services, specialized materials, and graduate research assistant salaries.'
      },
      {
        title: 'Key Milestones & Dates',
        content: 'Application Opens: 1 March 2026<br>Submission Deadline: 15 April 2026<br>Evaluation Period: May–June 2026<br>Project Commencement: August 2026'
      },
      {
        title: 'Application Process',
        content: 'Applications must be submitted electronically via the MyGrants system. Ensure all required supporting documentations and endorsement forms are attached.'
      }
    ]
  },
  'btn-gpk': {
    title: 'Geran Penyelidikan Kolaboratif (GPK)',
    description: 'MoHE has opened applications for the GPK 2026 under the 13th Malaysia Plan (RMK13). Designed for large-scale cross-institutional collaborative research.',
    accordion: [
      {
        title: 'Tracks & TRL Expectations',
        content: '<b>Sinergi:</b> Up to RM1,000,000 targeting TRL 3 to 5.<br><b>Sinergi+:</b> Up to RM5,000,000 targeting TRL 3 to 6 with strong industry alignment.'
      },
      {
        title: 'Consortium Requirements',
        content: 'Proposals must involve a minimum of 3 participating universities or 2 universities paired with an accredited industry partner.'
      },
      {
        title: 'Expected Deliverables',
        content: 'Projects are expected to yield intellectual property (IP), commercial prototypes, highly trained personnel, and high-impact publications.'
      },
      {
        title: 'Submission Guidelines',
        content: 'Submit complete proposals through the official MoHE RMK13 submission portal. University research office approval is required prior to submission.'
      }
    ]
  }
};

// DOM Elements
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalAccordion = document.getElementById('modalAccordion');

// Populate and open the modal overlay
function openModal(grantId) {
  const data = grantDetailsData[grantId];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDescription.innerHTML = data.description;

  // Build vertical accordion elements
  modalAccordion.innerHTML = data.accordion.map((item, index) => `
    <div class="accordion-item ${index === 0 ? 'active' : ''}">
      <button class="accordion-header">${item.title}</button>
      <div class="accordion-content" style="${index === 0 ? 'max-height: 200px;' : ''}">
        <p>${item.content}</p>
      </div>
    </div>
  `).join('');

  attachAccordionEvents();
  modalOverlay.classList.add('active');
}

// Handle accordion expansion/collapse logic
function attachAccordionEvents() {
  const accordionHeaders = modalAccordion.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      // Collapse all accordion sections
      modalAccordion.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.accordion-content').style.maxHeight = null;
      });

      // Expand clicked section if it was closed
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Close modal helper
function closeModal() {
  modalOverlay.classList.remove('active');
}

// Event Listeners
document.getElementById('btn-get').addEventListener('click', () => openModal('btn-get'));
document.getElementById('btn-gpk').addEventListener('click', () => openModal('btn-gpk'));

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});