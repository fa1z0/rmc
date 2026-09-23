document.addEventListener('DOMContentLoaded', () => {
  // 1. Data store for each button ID containing unique table project records
  const grantTableData = {
    'btn-2025': {
      year: '2025 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Assoc. Prof. Dr. Saraswathi Simansalam',
          faculty: 'Faculty of Pharmacy',
          title: 'Cultivation using organic methods and greenhouse smart farming in semeling area',
          grantName: 'Industry Driven Research',
          sponsor: 'Persatuan Promosi Matlamat Pembangunan Lestari',
          category: 'Industry',
          amount: '40,000.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2024': {
      year: '2024 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Dr. Yukgehnaish Kumarasan',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Phage therapy in aquaculture : Combating Aeromonas Infections in Red Hybrid Tilapia (Oreochromis spp.) with Targeted Phage Cocktails',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '171,950.00',
          status: 'Active'
        },
        {
          no: 2,
          leader: 'Dr. Pandian Paneerselvam',
          faculty: 'Faculty of Medicine',
          title: 'Unveil the therapeutic potential effect of hesperidin bioflavonoid on varicocele-associated male infertility in male Sprague Dawley rats',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '130,700.00',
          status: 'Active'
        },
        {
          no: 3,
          leader: 'Assoc. Prof. Dr. Saraswathi Simansalam',
          faculty: 'Faculty of Pharmacy',
          title: 'Cultivation of vegetable and fruit plants using organic methods in Semeling area involving adult/elderly participants',
          grantName: 'Industry Driven Research',
          sponsor: 'Persatuan Promosi Matlamat Pembangunan Lestari',
          category: 'Industry',
          amount: '40,000.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2023': {
      year: '2023 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Prof. Veerasamy Ravichandran',
          faculty: 'Faculty of Pharmacy',
          title: 'Unravelling the Phytochemical Profile and Elucidating the Antiepileptic Potential of Hydroalcoholic Extract of Sarawak Native Fruit - Dabai (Canarium odontophyllum Miq) using In-vivo and In-silico Studies',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '160,750.00',
          status: 'Active'
        },
        {
          no: 2,
          leader: 'Dr. Chuah Candy',
          faculty: 'Faculty of Medicine',
          title: 'Deciphering the immunomodulatory roles of THP-1-derived human macrophages in response to Giardia intestinalis infection: Targeting macrophages for therapeutic intervention in giardiasis',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '140,000.00',
          status: 'Active'
        },
        {
          no: 3,
          leader: 'Dr. Thenmoly K Damodaran',
          faculty: 'Faculty of Dentistry',
          title: 'Pharmacological investigation of palm oil-derived tocotrienol-rich fraction in Parkinson’s disease associated neurobehavioral improvement via gut microbiota-brain interactions in zebrafish animal model',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '160,500.00',
          status: 'Active'
        },
        {
          no: 4,
          leader: 'Dr. Tew Hui Xian',
          faculty: 'Faculty of Applied Sciences',
          title: 'Evaluation of the Cross Protection of O1 and O139 Cholera Vaccines in Different Animal Models Challenged with Serogroup-specific Vibrio cholerae Toxigenic Strains for the Development of a Dual-Purpose Vaccine',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '146,500.00',
          status: 'Active'
        },
        {
          no: 5,
          leader: 'Dr. Shandra Devi Balasubramaniam',
          faculty: 'Faculty of Medicine',
          title: 'Elucidating the Immunopotency of CRISPR-Derived Stable Live-Attenuated Dengue Strain as a Promising Vaccine Candidate in Combating Dengue Fever',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '156,100.00',
          status: 'Active'
        },
        {
          no: 6,
          leader: 'Dr. Heera Rajandas (AIMST Lead)',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Securing the Resiliency and Sustainability of Royal Belum Forest Against the Impact of Climate Change (AIMST Portion)',
          grantName: 'EU GRANT',
          sponsor: 'European Union',
          category: 'International',
          amount: '660,499.00',
          status: 'Active'
        }
      ]
    },
    'btn-2022': {
      year: '2022 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Dr. Tahmina Afrose Keya',
          faculty: 'Faculty of Medicine',
          title: 'Geographic information system-Based Hybrid Computational Models for Flood Susceptibility Prediction and Flood Risk Assessment in Peninsular Malaysia',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '87,650.00',
          status: 'Completed'
        },
        {
          no: 2,
          leader: 'Dr. Rusnifaezah Binti Musa',
          faculty: 'Faculty of Business Management',
          title: 'A New Brico-Preneur Model of Malaysian B40 Youth for Sustainable Economic Wellbeing',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '82,960.00',
          status: 'Completed'
        },
        {
          no: 3,
          leader: 'Dr. Sivachandran Parimannan',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Evaluation of efficacy and safety of phage cocktails in Salmonella-infected animal model and human cell line',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '155,000.00',
          status: 'Active'
        },
        {
          no: 4,
          leader: 'Dr. Saravana Selvan Dheena Dhayalan',
          faculty: 'Faculty of Engineering',
          title: 'Molybdenum Telluride Based Dielectric Modulated Tunnel Field Effect Transistor for Detection of Various Biomolecules',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '137,000.00',
          status: 'Completed'
        },
        {
          no: 5,
          leader: 'Dr. Sivachandran Parimannan',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Artificial Intelligence (AI) based image recognition system for monitoring endangered mammals',
          grantName: 'Natural Resource Conservation Trust Fund (NCTF)',
          sponsor: 'Ministry of Energy and Natural Resources',
          category: 'National',
          amount: '229,000.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2021': {
      year: '2021 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Dr. Heera Rajandas',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Malaysian Ai & Bioinformatic- Driven Computational Biodiscovery (MACBio)',
          grantName: 'Konsortium Kecemerlangan Penyelidikan',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '500,000.00',
          status: 'Completed'
        },
        {
          no: 2,
          leader: 'Prof. Dr. Yu Chye Wah',
          faculty: 'Faculty of Allied Health Sciences',
          title: 'Umbilical Cord Care in Term Neonates: The Revolutionized Role of Wondaleaf Adhesive Pouch (WLAP) in the Prevention of Neonatal Sepsis',
          grantName: 'Industry Driven Research',
          sponsor: 'Twin Catalyst Sdn Bhd',
          category: 'Industry',
          amount: '80,000.00',
          status: 'Completed'
        },
        {
          no: 3,
          leader: 'Dr. Heera Rajandas',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Opening the blackbox of phage diversity in Belum rainforest to combat antimicrobial resistant infections',
          grantName: 'International Grant',
          sponsor: 'GCRF, U.K.',
          category: 'International',
          amount: '114,000.00',
          status: 'Completed'
        },
        {
          no: 4,
          leader: 'Mr. Aswinprakash Subramanian',
          faculty: 'Faculty of Medicine',
          title: 'Pharmacological evaluation of palm oil mill effluent derived beta-carotene and astaxanthin in experimental models of diabetic retinopathy',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '163,500.00',
          status: 'Completed'
        },
        {
          no: 5,
          leader: 'Dr. Ng Chin Theng',
          faculty: 'Faculty of Medicine',
          title: 'Investigation of roles of RhoA and ROCK as potential therapeutic targets in Interferon-γ-induced disruption of human umbilical vein endothelial cells (HUVECs) barrier function',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '144,850.00',
          status: 'Completed'
        },
        {
          no: 6,
          leader: 'Dr. Sasireigga Jaya Jothi',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Characterization and formulation of stable phage cocktail for agriculture applicationsEvaluate Revision',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '182,500.00',
          status: 'Completed'
        },
        {
          no: 7,
          leader: 'Prof. Dr. M. Ravichandran',
          faculty: 'Faculty of Applied Sciences',
          title: 'Development of a pan-coronavirus subunit vaccine',
          grantName: 'Strategic Research Fund',
          sponsor: 'Ministry of Science, Technology and Innovation',
          category: 'National',
          amount: '1,788,000.00',
          status: 'Completed'
        },
        {
          no: 8,
          leader: 'Prof. Dr. Lee Su Yin',
          faculty: 'Faculty of Applied Sciences',
          title: 'Development of an oral vaccine against COVID-19, using an attenuated Vibrio cholerae strain',
          grantName: 'Strategic Research Fund',
          sponsor: 'Ministry of Science, Technology and Innovation',
          category: 'National',
          amount: '1,057,000.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2020': {
      year: '2020 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Prof. Dr. Martha Clokie (University of Leicester) <br>Co-Applicant: Dr.Sivachandran (AIMST University)',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Scientific Training in Southeast Asia: Phages as Antibacterial Tools to Combat Antibiotic Resistance',
          grantName: 'BBSRC GCRF Strategic Training Awards for Research Skills (GCRF-STARS)',
          sponsor: 'Biotechnology and Biological Sciences Research Council, UK',
          category: 'International',
          amount: '165,763.81',
          status: 'Completed'
        },
        {
          no: 2,
          leader: 'Dr. Heera Rajandas',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Deciphering Paddy Probiotics: A Precision Agricultural ‘moonshot’ for Rice cultivation',
          grantName: 'CREST Targetted R&D Fund',
          sponsor: 'Collaborative Research in Engineering, Science and Technology Centre (CREST)',
          category: 'Industry',
          amount: '1,436,252.00',
          status: 'Completed'
        },
        {
          no: 3,
          leader: 'Snr. Assoc. Prof. Dr. Subhash',
          faculty: 'Faculty of Applied Sciences',
          title: 'Evaluation of Fertilizer produced from waste',
          grantName: 'Industry Driven Research',
          sponsor: 'Meridian Recycling Sdn Bhd',
          category: 'Industry',
          amount: '20,000.00',
          status: 'Completed'
        },
        {
          no: 4,
          leader: 'Prof. Dr. Thomas Sicheritz Ponten & Dr. Heera Rajandas',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Omics driven Computational Biodiscovery in the field of venomics',
          grantName: 'AIMST Matching Grant',
          sponsor: 'AIMST University',
          category: 'Matching Funding',
          amount: '50,000.00',
          status: 'Completed'
        },
        {
          no: 5,
          leader: 'Prof. Dr. M. Ravichandran ( 2020 Onwards)',
          faculty: 'Faculty of Applied Sciences',
          title: 'Synthesis and evaluation of Novel Chromone Analogues potential against Corona Virus',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '150,200.00',
          status: 'Completed'
        },
        {
          no: 6,
          leader: 'Snr. Assoc. Prof. Dr. Shivkanya Fuloria',
          faculty: 'Faculty of Pharmacy',
          title: 'Establishment of TOP-1 and EGFR inhibition mechanism of insilico docked and synthesized novel CPT-11 analogues in oral squamous cell carcinoma',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '117,000.00',
          status: 'Completed'
        },
        {
          no: 7,
          leader: 'Assoc. Prof. Dr. Theingi Maung Maung',
          faculty: 'Faculty of Medicine',
          title: 'Depression and quality of life among older adults residing at old age homes and assessment after the exercise',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '51,900.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2019': {
      year: '2019 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Dr. A. Muthuraman',
          faculty: 'Faculty of Pharmacy',
          title: 'Investigations on potential and possible mechanisms of palm oil mill effluent based beta-carotene in experimental models of vascular dementia',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '189,800.00',
          status: 'Completed'
        },
        {
          no: 2,
          leader: 'Mr. S. Maheswaran',
          faculty: 'Faculty of Applied Sciences',
          title: 'Studying the differential expression of Tribbles Pseudokinase genes (TRIB1, TRIB2 and TRIB3) and exploring their potential knockdown through CRISPR in Acute Myeloid Leukemia (AML)',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '118,000.00',
          status: 'Completed'
        },
        {
          no: 3,
          leader: 'Assc. Prof. Dr. G.Prabhakaran',
          faculty: 'Faculty of Applied Sciences',
          title: 'ICH GLP-Compliant Pre-Clinical Safety Studies to Support the Licensure of Prototype Cholera Vaccine for Clinical Development',
          grantName: 'Prototype Development Research Grant (PRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '479,000.00',
          status: 'Completed'
        },
        {
          no: 4,
          leader: 'Dr. Heera Rajandas',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'The Bioactive Compounds and Genetic Blueprint of Acmella Uliginosa (Family: Asteraceae), Myrmecodia Tuberosa (Family: Rubiaceae) and Hydnophytum Formicarum (Family: Rubiaceae) Plant Using A Multi-Omics Driven Approach',
          grantName: 'UMK Matching Grant Scheme',
          sponsor: 'Universiti Malaysia Kelantan & AIMST University',
          category: 'National',
          amount: '100,000.00',
          status: 'Completed'
        },
        {
          no: 5,
          leader: 'Dr. P. Sivachandran & Prof. Dr. M. Ravichandran',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Exploring New Collaboration In Malaysia With The View To Developing Novel Phage Products',
          grantName: 'International Research Development Fund-Global Challenges Research Fund',
          sponsor: 'Official Development Assistance Programme, UK Government',
          category: 'International',
          amount: '11,666.80',
          status: 'Completed'
        },
        {
          no: 6,
          leader: 'Prof. K. Marimuthu',
          faculty: 'Centre of Excellence for Omics-Driven Computational Biodiscovery (COMBio)',
          title: 'Production of Fertilizer Using Food Waste',
          grantName: 'Industry Driven Research',
          sponsor: 'Fairy Food Industries Sdn Bhd',
          category: 'Industry',
          amount: '20,000.00',
          status: 'Completed'
        },
        {
          no: 7,
          leader: 'Assc. Prof. Dr. S. Kathiresan',
          faculty: 'Faculty of Applied Sciences',
          title: 'Assessment of Chicken Eggshell Profile and Its Industrial Applications',
          grantName: 'Industry Driven Research',
          sponsor: 'Fairy Food Industries Sdn Bhd',
          category: 'Industry',
          amount: '30,000.00',
          status: 'Completed'
        },
        {
          no: 8,
          leader: 'Mr. S. Maheswaran',
          faculty: 'Faculty of Applied Sciences',
          title: 'Isolation of Mesenchymal stem cells isolated from Adipose and Wharton’s jelly tissues and their interleukins activities in preclinical safety assessment',
          grantName: 'Industry Driven Research',
          sponsor: 'Meluha Life Sciences Sdn. Bhd',
          category: 'Industry',
          amount: '20,000.00',
          status: 'Completed'
        },
        {
          no: 9,
          leader: 'Mr. S. Kurunathan',
          faculty: 'Faculty of Applied Sciences',
          title: 'Differentiation of human dental pulp stem cells (DPSCs) into neural stem',
          grantName: 'Industry Driven Research',
          sponsor: 'Meluha Life Sciences Sdn. Bhd',
          category: 'Industry',
          amount: '20,000.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2018': {
      year: '2018 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Assoc. Prof. Dr. K. M. Sundram',
          faculty: 'Faculty of Pharmacy',
          title: 'Design and synthesis of new 6-Azauridine nucleoside analogues against DENV-2 virus NGC strain: A molecular docking, 3D-QSAR and in vitro C6/36 cell line',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '147,800.00',
          status: 'Completed'
        },
        {
          no: 2,
          leader: 'Dr. Heera Rajandas',
          faculty: 'Faculty of Applied Sciences',
          title: 'Understanding the role of oral and gut microbiomes functional signatures in relation to Schizophrenia',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '200,700.00',
          status: 'Completed'
        },
        {
          no: 3,
          leader: 'Assc. Prof. Dr. G.Prabhakaran',
          faculty: 'Faculty of Applied Sciences',
          title: 'Evaluation of Prototype Cold Chain Free Live Attenuated Oral Cholera Vaccine for its Cross-Protective Immunity against Enterotoxigenic Escherichia Coli (ETEC) as a Dual-Use Vaccine for Diarrheal diseaseactivity based anti-dengue study',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '185,200.00',
          status: 'Completed'
        },
        {
          no: 4,
          leader: 'Prof. Dr. P. Lalitha',
          faculty: 'Faculty of Medicine',
          title: 'Discovery of novel benzamidine analogues based silver nanoformulation for treatment of periodontitis due to P. gingivalis: A study that encompasses molecular docking, 3D-QSAR analysis, synthesis and silver nano-formulation of benzamidine analogues accompanied by toxicity analysis, in-vitro and in-vivo (egg model) evaluation against gingipain',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '140,800.00',
          status: 'Completed'
        },
        {
          no: 5,
          leader: 'Dr. K. Priyadarshini',
          faculty: 'Faculty of Dentistry',
          title: 'Characterization of transformed salivary microbiota in the Malaysian Children Population who experience Environmental Tobacco Smoke exposure based on metagenomic and metatranscriptomic sequencing',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '190,400.00',
          status: 'Completed'
        },
        {
          no: 6,
          leader: 'Assc. Prof. Dr. Venkata Suresh',
          faculty: 'Faculty of Applied Sciences',
          title: 'Elucidating the role of non-protein coding RNAs in the regulation of virulence factors associated with fimbriae and flagella in Proteus mirabilis through gene knock-out studies',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '147,100.00',
          status: 'Completed'
        },
        {
          no: 7,
          leader: 'Assc. Prof. Dr. Gokul Shankar Sabesan',
          faculty: 'Faculty of Medicine',
          title: 'Gene knock-out studies of non-protein coding RNAs as potential candidates in regulation of biofilm formation in Salmonella enterica serovar Typhi',
          grantName: 'Fundamental Research Grant Scheme (FRGS',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '80,800.00',
          status: 'Completed'
        },
        {
          no: 8,
          leader: 'Dr. Sridevi Visvanathan',
          faculty: 'Faculty of Medicine',
          title: 'Identification and Characterization of Novel non-protein coding RNAs (npcRNAs)binding with Global Transcriptional Regulator Hfq, in Pathogenic Bacteria',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '112,200.00',
          status: 'Completed'
        },
        {
          no: 9,
          leader: 'Prof. Dr.Lee Su Yin',
          faculty: 'Faculty of Applied Sciences',
          title: 'Stemming the Rot from Within: Effect of lytic bacteriophage application on macergens causing soft rot diseasesactivity based anti-dengue study',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '122,200.00',
          status: 'Completed'
        },
        {
          no: 10,
          leader: 'Assc. Prof. Dr. Krishnamoorthy Venkateskumar',
          faculty: 'Faculty of Pharmacy',
          title: 'An Investigation on Male Contraception Activity of Extracts of Hibiscus Species- Mechanistic Studies',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '112,200.00',
          status: 'Completed'
        },
        {
          no: 11,
          leader: 'Dr. Sivachandran Parimannan',
          faculty: 'Faculty of Applied Sciences',
          title: 'Deciphering the Genetic Blueprint of Endangered Indigenous Plants and their Associated Microbiome using a Multi-omics approach',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '142,000.00',
          status: 'Completed'
        },
        {
          no: 12,
          leader: 'Dr. Sivachandran Parimannan',
          faculty: 'Faculty of Applied Sciences',
          title: 'T19C3-14 "Intelligent algorithm based remote Aedes aegypti mosquito and post-dengue patient monitoring, reporting and preventing solution for Dengue outbreak in Malaysia',
          grantName: 'CREST Targetted R&D Fund',
          sponsor: 'Collaborative Research in Engineering, Science and Technology Centre (CREST)',
          category: 'Industry',
          amount: 'Amount Approved : 599,000.00 <br>Current Year Drawdown : 60,000.00',
          status: 'Completed'
        }
      ]
    },
    'btn-2017': {
      year: '2017 External Grants',
      projects: [
        {
          no: 1,
          leader: 'Assc. Prof. Dr. Varatharajan',
          faculty: 'Faculty of Pharmacy',
          title: 'A study on targeting and inhibiting triple negative breast cancer cells using siRNA-nanobioconjugated mAbs',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '168,000.00',
          status: 'Completed'
        },
        {
          no: 2,
          leader: 'Mr. AB. Siventhiran',
          faculty: 'Faculty of Applied Sciences',
          title: 'Assembly and annotation of genome and transcriptome of Malaysian Medicinal Leech, Hirudinaria javanica and Hirudinaria manillensis',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '72,200.00',
          status: 'Completed'
        },
        {
          no: 3,
          leader: 'Assc. Prof. Dr. Arun Kumar Adhikary',
          faculty: 'Faculty of Medicine',
          title: 'Small inhibitory RNA (siRNA) based silencing of structural gene mRNA in the inhibition of human adenovirus type 3 replication',
          grantName: 'Fundamental Research Grant Scheme (FRGS)',
          sponsor: 'Ministry of Education',
          category: 'National',
          amount: '99,400.00',
          status: 'Completed'
        },
        {
          no: 4,
          leader: 'Dr. Sivachandran Parimannan',
          faculty: 'Faculty of Applied Sciences',
          title: 'T19C3-14 "Intelligent algorithm based remote Aedes aegypti mosquito and post-dengue patient monitoring, reporting and preventing solution for Dengue outbreak in Malaysia',
          grantName: 'CREST Targetted R&D Fund',
          sponsor: 'Collaborative Research in Engineering, Science and Technology Centre (CREST)',
          category: 'Industry',
          amount: 'Amount Approved : 599,000.00 <br>Current Year Drawdown : 126,500.00',
          status: 'Completed'
        }
      ]
    }
  };

  // 2. Inject Modal Layout into Document Body
  const modalHTML = `
    <div id="grantTableModal" class="table-modal-overlay" aria-hidden="true">
      <div class="table-modal-container">
        <div class="table-modal-header">
          <div>
            <span class="table-modal-badge">Grant Summary</span>
            <h2 id="tableModalTitle">Grant Details</h2>
          </div>
          <button class="table-modal-close" id="closeTableModalBtn">&times;</button>
        </div>
        <div class="table-modal-body">
          <div class="table-responsive">
            <table class="styled-grant-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Project Leader</th>
                  <th>Faculty</th>
                  <th>Project Title</th>
                  <th>Grant Name</th>
                  <th>Sponsor</th>
                  <th>Sponsor Category</th>
                  <th class="text-right">Approved Amount (RM)</th>
                  <th class="text-center">Status</th>
                </tr>
              </thead>
              <tbody id="grantTableBody"></tbody>
            </table>
          </div>
        </div>
        <div class="table-modal-footer">
          <button class="button button-secondary" id="cancelTableModalBtn">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('grantTableModal');
  const closeModalBtn = document.getElementById('closeTableModalBtn');
  const cancelModalBtn = document.getElementById('cancelTableModalBtn');
  const modalTitle = document.getElementById('tableModalTitle');
  const tableBody = document.getElementById('grantTableBody');

  // 3. Attach click handler for each specific button ID
  Object.keys(grantTableData).forEach((buttonId) => {
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.addEventListener('click', () => {
        const data = grantTableData[buttonId];

        modalTitle.textContent = data.year;

        // Populate table rows dynamically
        tableBody.innerHTML = data.projects.map((item) => `
          <tr>
            <td>${item.no}</td>
            <td class="font-semibold">${item.leader}</td>
            <td>${item.faculty}</td>
            <td class="project-title-cell">${item.title}</td>
            <td>${item.grantName}</td>
            <td>${item.sponsor}</td>
            <td><span class="category-chip ${item.category.toLowerCase().replace(/\s+/g, '-')}">${item.category}</span></td>
            <td class="text-right font-semibold">${item.amount}</td>
            <td class="text-center">
              <span class="status-pill ${item.status.toLowerCase()}">${item.status}</span>
            </td>
          </tr>
        `).join('');

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