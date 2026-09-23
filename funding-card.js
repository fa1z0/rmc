document.addEventListener('DOMContentLoaded', () => {
  // 1. Define custom pop-up content mapped to EACH unique button ID
  const popupContents = {
    'btn-frgs2027': {
      title: 'FRGS 2027 - Fundamental Research Grant Scheme',
      status: 'Open',
      badgeClass: 'open',
      amount: 'Up to RM250,000',
      duration: '2–3 years',
      details: 'This grant supports basic research that leads to the discovery of new ideas, concepts, and theories in critical priority areas.',
      actionText: 'Apply on MyGRANTS Portal'
    },
    'btn-prgs2027': {
      title: 'PRGS 2027 - Prototype Research Grant Scheme',
      status: 'Opening Soon',
      badgeClass: 'soon',
      amount: 'Up to RM300,000',
      duration: '2–3 years',
      details: 'Aims to produce working prototypes, system designs, or proof-of-concept models to prepare research for industrial transition.',
      actionText: 'Subscribe to Notifications'
    },
    'btn-lrgs2027': {
      title: 'LRGS 2027 - Long Term Research Grant Scheme',
      status: 'Open',
      badgeClass: 'open',
      amount: 'Up to RM1,000,000+',
      duration: '3–5 years',
      details: 'Large-scale collaborative funding targeted at multi-disciplinary teams addressing strategic national grand challenges.',
      actionText: 'View Consortium Rules'
    },
    'btn-irgs': {
      title: 'AIMST IRGS - Institutional Research Grant Scheme',
      status: 'Internal',
      badgeClass: 'internal',
      amount: 'Internal Seed Fund',
      duration: '1–2 years',
      details: 'Internal seed grant for AIMST academic researchers to conduct initial data collection for external funding submissions.',
      actionText: 'Open Internal Portal'
    },
    'btn-grant2026': {
      title: 'External Funding Call 2026',
      status: 'External',
      badgeClass: 'external',
      amount: 'Industry / Agency Funded',
      duration: 'Varies',
      details: 'Active 2026 external call focusing on AI applications, biotechnology, and sustainability collaborations.',
      actionText: 'Download 2026 Guidelines'
    },
    'btn-grant2025': {
      title: 'External Grant Cycle 2025',
      status: 'External',
      badgeClass: 'external',
      amount: 'Archived Cycle',
      duration: 'Ongoing execution',
      details: 'Portal for active 2025 grantees. Access progress reporting forms, extension requests, and milestone tracking.',
      actionText: 'Access 2025 Hub'
    },
    'btn-grant2024': {
      title: 'External Grant Cycle 2024',
      status: 'External',
      badgeClass: 'external',
      amount: 'Archived Cycle',
      duration: 'Final Phase',
      details: 'Archived repository for 2024 external grants. Final financial auditing and publication submission hub.',
      actionText: 'Submit Final Report'
    },
    'btn-grant2023': {
      title: 'External Grant Cycle 2023',
      status: 'External',
      badgeClass: 'external',
      amount: 'Closed Cycle',
      duration: 'Completed',
      details: 'Historical records, patents, and journal outputs produced under the 2023 external grant period.',
      actionText: 'View 2023 Archive'
    },
    'btn-grant2022': {
      title: 'External Grant Cycle 2022',
      status: 'External',
      badgeClass: 'external',
      amount: 'Closed Cycle',
      duration: 'Completed',
      details: 'Historical metrics and final project outcome repository for the 2022 funding cycle.',
      actionText: 'View 2022 Archive'
    },
    'btn-mohe-guideline': {
      title: 'MOHE Research Guidelines & Policy',
      status: 'Guideline',
      badgeClass: 'guideline',
      amount: 'Regulatory Document',
      duration: 'Active Standard',
      details: 'Ministry of Higher Education standard operating manual for research management, allowances, and overseas travel.',
      actionText: 'Download MOHE PDF'
    },
    'btn-rd-guideline': {
      title: 'R&D Governance & IP Guidelines',
      status: 'Guideline',
      badgeClass: 'guideline',
      amount: 'Policy Manual',
      duration: 'Active Standard',
      details: 'Institutional R&D regulations covering research ethics, biosafety approvals, patent filing, and publication incentives.',
      actionText: 'Download R&D Rules'
    }
  };

  // 2. Inject Modal Shell HTML into document body
  const modalHTML = `
    <div id="grantModal" class="modal-overlay" aria-hidden="true">
      <div class="modal-container">
        <button class="modal-close" id="closeModalBtn">&times;</button>
        <span class="status-badge" id="modalStatus">STATUS</span>
        <h2 id="modalTitle">Grant Title</h2>
        <div id="modalBody" class="modal-body"></div>
        <div class="modal-footer">
          <button class="button button-primary" id="modalActionBtn">Proceed</button>
          <button class="button button-secondary" id="cancelModalBtn">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('grantModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalStatus = document.getElementById('modalStatus');
  const modalBody = document.getElementById('modalBody');
  const modalActionBtn = document.getElementById('modalActionBtn');

  // 3. Attach click event listeners to each button by ID
  Object.keys(popupContents).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        const data = popupContents[buttonId];

        modalTitle.textContent = data.title;
        modalStatus.textContent = data.status;
        modalStatus.className = `status-badge ${data.badgeClass}`;
        modalActionBtn.textContent = data.actionText;

        modalBody.innerHTML = `
          <div class="info-row"><strong>Funding Range:</strong> ${data.amount}</div>
          <div class="info-row"><strong>Project Duration:</strong> ${data.duration}</div>
          <p class="info-description">${data.details}</p>
        `;

        openModal();
      });
    }
  });

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeModalBtn.addEventListener('click', closeModal);
  cancelModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});