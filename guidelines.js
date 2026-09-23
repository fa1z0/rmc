document.addEventListener('DOMContentLoaded', () => {
  // 1. Guideline configuration with unique table structures
  const guidelineData = {
    'btn-mohe-guideline': {
      title: 'MINISTRY OF HIGHER EDUCATION (MOHE) GUIDELINES',
      badge: 'MOHE Policy',
      columns: ['Type of Grants', 'Field of Research', 'Guideline'],
      rows: [
        {
          col1: 'FRGS (Fundamental Research Grant Scheme) & PRGS (Prototype Research Grant Scheme)',
          col2: '<ul><li>Pure and Applied Sciences</li><li>Technology and Engineering</li><li>Health and Clinical Sciences</li><li>Social Sciences</li><li>Arts and Applied Arts</li><li>Natural and Cultural Heritage</li><li>Information and Communication Technology</li></ul>',
          col3: { label: 'FRGS', url: 'http://www.mohe.gov.my/en/initiatives-2/187-program-utama/penyelidikan/548-research-grants-information' },
          col4: { label: 'PRGS', url: 'http://www.mohe.gov.my/en/initiatives-2/187-program-utama/penyelidikan/548-research-grants-information' }
        },
        {
          col1: 'Long Term Research Grant Scheme (LRGS) & Transdisciplinary Research Grant Scheme (TRGS)',
          col2: '<ul><li>Artificial Intelligence (AI) and Internet of Everything (IoE) Technology</li><li>Frontier Technologies in Manufacturing</li><li>Quality Education Provision for Vulnerable Communities</li><li>Holistic Education</li><li>Towards Self-Reliance in Defense and Security</li><li>Mental Health Among Malaysian Youths</li><li>Precision Health in Malaysia</li><li>Impacts of 1.5°C/2.0°C Global Warming to Malaysia</li><li>Towards Secure and Sustainable Water Resiliency</li><li>Developing Affordable and Clean Energy (ACE) Systems</li><li>Towards Sustainable and Resilient Construction</li><li>Enhancing Sustainable Food Security</li><li>Ensuring Shared Prosperity and Wellbeing for B40</li><li>Societal Harmony and Superdiversity in Malaysia</li></ul>',
          col3: { label: 'LRGS', url: 'http://www.mohe.gov.my/en/initiatives-2/187-program-utama/penyelidikan/548-research-grants-information' },
          col4: { label: 'TRGS', url: 'http://www.mohe.gov.my/en/initiatives-2/187-program-utama/penyelidikan/548-research-grants-information' }
        }
      ],
      customParagraph: `
        <div class="mohe-important-notes" style="margin-top: 15px; text-align: left;">
        <h4 style="text-align: center; margin-bottom: 15px;">MOHE GRANT IMPORTANT NOTES</h4>
        
        <p><strong>1. PRINCIPLE INVESTIGATOR/RESEARCHER</strong></p>
        <ol type="a" style="padding-left: 20px;">
          <li>Registering at MyGRANTS System: New User/Applicants can register your profile at <a href="https://mygrants.gov.my" target="_blank">https://mygrants.gov.my</a></li>
          <li>Kindly ensure that your research proposal is competitive, novel and will directly impact the society, especially the Malaysian society.</li>
          <li>Applications for research grants are open to all researchers who have met the requirements and criteria.</li>
          <li>The Project Leader must have completed Progress Report for the projects approved in the previous cycle.</li>
          <li>Researchers are only allowed to submit one (1) application as Project Leader for FRGS or PRGS; and one (1) application as Project Leader for TRGS or LRGS; and</li>
          <li>Researchers are required to update their respective MyGrants Profiles (including Personal Information, Projects, Publications, Intellectual Property (IP), Supervision, Teaching, Consultation and Community Service) and must be approved by RMC. The Ministry reserves the right to reject the application if the information is not updated or incomplete.</li>
        </ol>

        <p><strong>2. APPLICATION CEILING AND DURATION OF THE RESEARCH:</strong></p>
        <ol type="a" style="padding-left: 20px;">
          <li>The FRGS application ceiling is RM250,000.00 for two (2) or three (3) years research;</li>
          <li>The PRGS application ceiling is RM500,000.00 for one (1) to two (2) year research period;</li>
          <li>The TRGS application ceiling is RM1,500,000.00 (for the first year, not exceeding 50% of total) for three (3) years of research;</li>
          <li>The LRGS application ceiling is RM3,000,000.00 per year for three (3) to five (5) years of research.</li>
        </ol>

        <p><strong>3. PROPOSAL SUBMISSION:</strong></p>
        <ol type="a" style="padding-left: 20px;">
          <li>RMC is now ISO 9001:2015 Certified Centre. We highly recommend Researchers to follow the deadlines and accordingly.</li>
          <li>All the grant proposals must be vetted at the faculty level prior to submission. The minutes for the proposal vetting have to be recorded at the faculty level and submitted to RMC. Only faculty vetted proposals will be submitted to Ministry. RMC reserves the right to reject any applications if conditions are not met.</li>
        </ol>
    
        <p><strong>4. GRANT FUND UTILIZATION</strong></p>
        <ol type="a" style="padding-left: 20px;">
          <li>Communications equipment, office equipment and hardware such as workstations, laptops, iPads, hand phones, printers, toners, stationery and any purchases that are not directly related to research projects are not allowed to purchase.</li>
          <li>Administrative charges using the research grant is strictly prohibited.</li>
          <li>Overseas Travelling: You are only allowed to go for overseas travelling in the 2nd and 3rd Year with the prior approval by RMC and Management.</li>
          <li>Purchase of Books/EBooks and Journals are not allowed.</li>
        </ol>
    </div>
      `
    },
    'btn-rd-guideline': {
      title: 'RESEARCH AND DEVELOPMENT GRANTS GUIDELINES',
      badge: 'Institutional Policy',
      columns: ['Incentive Title', 'Fundraising Organization'],
      rows: [
        {
          col1: '<a href="" target="_blank">MOH Research Grant (MRG)</a>',
          col2: 'Ministry of Health Malaysia (MOH)'
        },
        {
          col1: '<a href="" target="_blank">Malaysia Laboratories for Academia-Business Collaboration (MyLAB)</a>',
          col2: 'Ministry of Higher Education (MOHE)'
        },
        {
          col1: '<a href="" target="_blank">Science and Technology Research Grant</a>',
          col2: 'Malaysia Toray Science Foundation'
        },
        {
          col1: '<a href="" target="_blank">CREST R&D Grant</a>',
          col2: 'Colloborative Research in Engineering, Science and Technology (CREST)'
        },
        {
          col1: '<a href="" target="_blank">Program Peningkatan Enterpris Bumiputera (BEEP)</a>',
          col2: 'SME Corporation Malaysia'
        },
        {
          col1: '<a href="" target="_blank">Applied Innovation Fund</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        },
        {
          col1: '<a href="" target="_blank">Technology Development Fund 1 (TeD 1)</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        },
        {
          col1: '<a href="" target="_blank">Technology Development Fund 2 (TeD 2)</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        },
        {
          col1: '<a href="" target="_blank">Bridging Fund</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        },
        {
          col1: '<a href="" target="_blank">Strategic Research Fund (SRF)</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        },
        {
          col1: '<a href="" target="_blank">Program Peningkatan Industri Strategik dan Industri PKS Berprestasi Tinggi (PRESTIGE)</a>',
          col2: 'SME Corporation Malaysia'
        },
        {
          col1: '<a href="" target="_blank">Inclusive SME Ecosystem (I-SEE)</a>',
          col2: 'SME Corporation Malaysia'
        },
        {
          col1: '<a href="" target="_blank">Digital Society Research Grant (DSRG)</a>',
          col2: 'Malaysian Communications And Multimedia Commission'
        },
        {
          col1: '<a href="" target="_blank">Malaysia Digital Catalyst Grant (MDCG)</a>',
          col2: 'Malaysia Digital Economy Corporation Sdn. Bhd'
        },
        {
          col1: '<a href="" target="_blank">Mainstreaming Grassroots Innovations (MaGRIs)</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        },
        {
          col1: '<a href="" target="_blank">Malaysia Innovation Fund (MyIS Community)</a>',
          col2: 'Ministry of Science, Technology and Innovation (MOSTI)'
        }
      ],
      customParagraph: `
        Grants and incentives are provided for R&D in science and technology, to encourage Malaysian companies to become more innovative in using and adapting existing technologies and creating new technologies.
      `
    }
  };

  // 2. Inject Modal Shell HTML into document body
  const modalHTML = `
    <div id="guidelineModal" class="guideline-modal-overlay" aria-hidden="true">
      <div class="guideline-modal-container">
        <div class="guideline-modal-header">
          <div>
            <span class="guideline-modal-badge" id="guidelineBadge">Guideline</span>
            <h2 id="guidelineTitle">Guideline Details</h2>
          </div>
          <button class="guideline-modal-close" id="closeGuidelineModalBtn">&times;</button>
        </div>
        <div class="guideline-modal-body">
          <div class="table-responsive">
            <table class="styled-guideline-table">
              <thead id="guidelineTableHead"></thead>
              <tbody id="guidelineTableBody"></tbody>
            </table>
          </div>
          <div class="custom-guideline-paragraph" id="guidelineCustomParagraph"></div>
        </div>
        <div class="guideline-modal-footer">
          <button class="button button-secondary" id="cancelGuidelineModalBtn">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('guidelineModal');
  const closeModalBtn = document.getElementById('closeGuidelineModalBtn');
  const cancelModalBtn = document.getElementById('cancelGuidelineModalBtn');
  const titleEl = document.getElementById('guidelineTitle');
  const badgeEl = document.getElementById('guidelineBadge');
  const tableHeadEl = document.getElementById('guidelineTableHead');
  const tableBodyEl = document.getElementById('guidelineTableBody');
  const paragraphEl = document.getElementById('guidelineCustomParagraph');

  // 3. Register click handler for each unique button ID
  Object.keys(guidelineData).forEach((btnId) => {
    const button = document.getElementById(btnId);
    if (button) {
      button.addEventListener('click', () => {
        const data = guidelineData[btnId];

        titleEl.textContent = data.title;
        badgeEl.textContent = data.badge;
        paragraphEl.innerHTML = data.customParagraph;

        // Render Table Headers (3 columns vs 2 columns)
        tableHeadEl.innerHTML = `
          <tr>
            ${data.columns.map((col) => `<th>${col}</th>`).join('')}
          </tr>
        `;

        // Render Table Rows
        tableBodyEl.innerHTML = data.rows.map((row) => {
          if (data.columns.length === 3) {
            return `
              <tr>
                <td class="font-semibold">${row.col1}</td>
                <td>${row.col2}</td>
                <td>
                    <a href="${row.col3.url}" target="_blank" rel="noopener noreferrer" class="guideline-link">${row.col3.label} →</a>
                    <br>
                    <a href="${row.col4.url}" target="_blank" rel="noopener noreferrer" class="guideline-link">${row.col4.label} →</a>
                </td>
              </tr>
            `;
          } else {
            return `
              <tr>
                <td class="font-semibold">${row.col1}</td>
                <td>${row.col2}</td>
              </tr>
            `;
          }
        }).join('');

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