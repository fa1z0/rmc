/* ==========================================================================
   AIMST RMC WEBSITE — MAIN FRONT-END SCRIPT

   EDITING ORDER
   This file follows the same TOP → BOTTOM order as index.html.
   RMC-00  Shared page utilities
   RMC-01  Header / navigation
   RMC-02  Hero
   RMC-03  Statistics
   RMC-04  Research support services
   RMC-05  Funding opportunities
   RMC-06  Research Explorer
   RMC-07  Research impact
   RMC-08  Centres & innovation pipeline
   RMC-09  Global Research Network
   RMC-10  Resources / news / leadership
   RMC-11  My RMC
   RMC-12  Ask RMC AI
   RMC-13  Footer

   HOW TO READ EACH SECTION
   [EDITABLE CONTENT] = ordinary data/text that a website editor may change.
   [ELEMENTS]         = links JavaScript to matching HTML IDs/classes.
   [FUNCTIONS]        = behaviour; normally leave alone unless changing features.
   [EVENTS]           = what happens when visitors click/type/scroll.

   Sections with no JavaScript are intentionally marked below so that the
   code order always mirrors the visible page order.
   ========================================================================== */

/* ==========================================================================
   RMC-00 | SHARED PAGE UTILITIES
   ========================================================================== */

/* --- RMC-00A [FUNCTIONS] Shared reveal-on-scroll behaviour --- */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ==========================================================================
   RMC-01 | HEADER / NAVIGATION
   ========================================================================== */

/* --- RMC-01A [ELEMENTS + EVENTS] Mobile navigation and header scroll --- */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").style.background =
    window.scrollY > 40 ? "rgba(3,14,32,.96)" : "rgba(3,14,32,.84)";
});

/* ==========================================================================
   RMC-02 | HERO
   ========================================================================== */

// No section-specific JavaScript currently required.

/* ==========================================================================
   RMC-03 | STATISTICS
   ========================================================================== */

/* --- RMC-03A [ELEMENTS] Statistic counters --- */

const counters = document.querySelectorAll("[data-count]");
const stats = document.querySelector(".stats");
let countersStarted = false;

/* --- RMC-03B [FUNCTIONS] Animate statistics when visible --- */

const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    counters.forEach(counter => {
      const target = Number(counter.dataset.count);
      const prefix = counter.dataset.prefix || "";
      const suffix = counter.dataset.suffix || "";
      const decimal = target % 1 !== 0;
      const duration = 1100;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        counter.textContent = prefix + (decimal ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
}, {threshold: .4});

if (stats) counterObserver.observe(stats);

/* ==========================================================================
   RMC-04 | RESEARCH SUPPORT SERVICES
   ========================================================================== */

// No section-specific JavaScript currently required.

/* ==========================================================================
   RMC-05 | FUNDING OPPORTUNITIES
   ========================================================================== */

/* --- RMC-05A [ELEMENTS] Grant tabs and cards --- */

const tabs = document.querySelectorAll(".tab");
const grants = document.querySelectorAll(".grant-card");

/* --- RMC-05B [FUNCTIONS] Grant filtering --- */

function filterGrants(filter) {
  grants.forEach(card => {
    const status = card.dataset.status || "";
    const show = filter === "all" || status.includes(filter);
    card.classList.toggle("hidden-grant", !show);
  });
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.filter === filter));
}

/* --- RMC-05C [EVENTS] Grant filter controls --- */

tabs.forEach(tab => tab.addEventListener("click", () => filterGrants(tab.dataset.filter)));

document.getElementById("findGrantsBtn").addEventListener("click", () => {
  filterGrants(document.getElementById("statusSelect").value);
  document.getElementById("grantGrid").scrollIntoView({behavior:"smooth", block:"center"});
});

/* ==========================================================================
   RMC-055 | FUNDING OPPORTUNITIES
   ========================================================================== */

/* --- RMC-055A [ELEMENTS] Grant tabs and cards --- */

const grants2 = document.querySelectorAll('.grant-card2, .grant-card2');
const tabs2 = document.querySelectorAll('.grant-tabs-2 .tab2');

/* --- RMC-055B [FUNCTIONS] Grant filtering --- */

function filterGrants2(filter) {
  grants2.forEach(card => {
    const status = card.dataset.status || ""; 
    const show = filter === "all-2" || status.includes(filter);
    card.classList.toggle("hidden-grant2", !show);
  });
  tabs2.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.filter === filter);
  });
}

// Add event listeners to tabs
tabs2.forEach(tab => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    filterGrants2(filter);
  });
});

/* ==========================================================================
   RMC-06 | RESEARCH EXPLORER
   ========================================================================== */

/* =========================================================
   AIMST RESEARCH EXPLORER V2
   ========================================================= */

/* --- RMC-06A [EDITABLE CONTENT] Research categories, areas, strengths and centres --- */
/*     This is the SAFE place to update Research Explorer content. */

const researchCategories = {

  health: {

    title:
      "Health & Clinical Sciences",

    displayTitle:
      "HEALTH & CLINICAL SCIENCES",

    icon:
      "♡",

    intro:
      "Advancing human health and wellbeing through innovative research, translational studies and clinical excellence.",

    areas: [
      ["⚕", "Clinical Medicine"],
      ["DNA", "Medical Biotechnology"],
      ["◎", "Infectious Diseases & Microbiology"],
      ["▣", "Medical Imaging & Diagnostics"],
      ["AI", "Mental Health & Neuroscience"]
    ],

    strengths: [
      "Translational research from bench to bedside",
      "Strong clinical and biomedical research infrastructure",
      "Interdisciplinary and collaborative expertise",
      "Focus on major and emerging health challenges"
    ],

    centres: [
      "Centre for Clinical Research",
      "Medical & Health Sciences Research Units",
      "Clinical Research Collaborations",
      "Specialist Research Laboratories"
    ]

  },


  biotechnology: {

    title:
      "Biotechnology",

    displayTitle:
      "BIOTECHNOLOGY",

    icon:
      "DNA",

    intro:
      "Harnessing biological systems, molecular technologies and advanced analytical approaches to address health, agriculture and industrial challenges.",

    areas: [
      ["DNA", "Genomics"],
      ["◉", "Molecular Biology"],
      ["◎", "Microbial Biotechnology"],
      ["⚗", "Bioprocess Technology"],
      ["▣", "Bioinformatics"]
    ],

    strengths: [
      "Genomics and molecular research",
      "Microbial and industrial biotechnology",
      "Advanced laboratory platforms",
      "Interdisciplinary biological research"
    ],

    centres: [
      "Biotechnology Research Laboratories",
      "Genomics Research Groups",
      "Microbiology Research Units",
      "Collaborative Life Science Facilities"
    ]

  },


  pharmaceutical: {

    title:
      "Pharmaceutical Research",

    displayTitle:
      "PHARMACEUTICAL RESEARCH",

    icon:
      "Rx",

    intro:
      "Advancing drug discovery, pharmaceutical sciences, therapeutics and innovative delivery systems through multidisciplinary research.",

    areas: [
      ["Rx", "Drug Discovery"],
      ["⚗", "Pharmaceutical Chemistry"],
      ["◈", "Drug Delivery"],
      ["+", "Pharmacology"],
      ["◎", "Natural Products"]
    ],

    strengths: [
      "Drug discovery and development",
      "Novel pharmaceutical formulations",
      "Natural product research",
      "Therapeutic innovation"
    ],

    centres: [
      "Pharmaceutical Research Laboratories",
      "Drug Discovery Research Groups",
      "Natural Product Research Units",
      "Formulation Research Facilities"
    ]

  },


  ai: {

    title:
      "Artificial Intelligence & Data Science",

    displayTitle:
      "ARTIFICIAL INTELLIGENCE & DATA SCIENCE",

    icon:
      "AI",

    intro:
      "Applying artificial intelligence, machine learning and data-driven technologies to healthcare, science, engineering and institutional innovation.",

    areas: [
      ["AI", "Machine Learning"],
      ["▦", "Data Science"],
      ["◉", "Digital Health"],
      ["⌘", "Computational Biology"],
      ["▣", "Predictive Analytics"]
    ],

    strengths: [
      "AI-enabled research and innovation",
      "Data analytics and modelling",
      "Digital health applications",
      "Cross-disciplinary computational research"
    ],

    centres: [
      "Data Science Research Groups",
      "Digital Health Research Teams",
      "Computational Research Units",
      "Technology Innovation Laboratories"
    ]

  },


  engineering: {

    title:
      "Engineering & Technology",

    displayTitle:
      "ENGINEERING & TECHNOLOGY",

    icon:
      "⚙",

    intro:
      "Developing advanced technologies, engineering systems and innovative solutions for industry, society and sustainable development.",

    areas: [
      ["⚙", "Advanced Engineering"],
      ["⌁", "Materials Science"],
      ["◈", "Automation"],
      ["AI", "Intelligent Systems"],
      ["◇", "Sustainable Technology"]
    ],

    strengths: [
      "Applied engineering innovation",
      "Advanced materials research",
      "Automation and intelligent systems",
      "Industry-oriented technology development"
    ],

    centres: [
      "Engineering Research Laboratories",
      "Technology Development Units",
      "Industry Collaboration Facilities",
      "Innovation & Prototype Laboratories"
    ]

  },


  publichealth: {

    title:
      "Public Health & Epidemiology",

    displayTitle:
      "PUBLIC HEALTH & EPIDEMIOLOGY",

    icon:
      "+",

    intro:
      "Improving population health through epidemiology, prevention, health systems research and evidence-based public health interventions.",

    areas: [
      ["+", "Epidemiology"],
      ["◎", "Population Health"],
      ["◉", "Disease Prevention"],
      ["▣", "Health Systems"],
      ["◇", "Community Health"]
    ],

    strengths: [
      "Population-based research",
      "Disease surveillance and epidemiology",
      "Preventive health research",
      "Community and health systems studies"
    ],

    centres: [
      "Public Health Research Groups",
      "Community Health Research Units",
      "Epidemiology Research Teams",
      "Population Health Collaborations"
    ]

  },


  environment: {

    title:
      "Environment & Sustainability",

    displayTitle:
      "ENVIRONMENT & SUSTAINABILITY",

    icon:
      "◇",

    intro:
      "Addressing environmental challenges through sustainability research, environmental science, biotechnology and responsible innovation.",

    areas: [
      ["◇", "Sustainability"],
      ["⌁", "Environmental Science"],
      ["◉", "Environmental Biotechnology"],
      ["◎", "Waste Management"],
      ["⚙", "Green Technology"]
    ],

    strengths: [
      "Environmental sustainability research",
      "Green and circular technologies",
      "Environmental biotechnology",
      "Sustainable development solutions"
    ],

    centres: [
      "Environmental Research Groups",
      "Sustainability Research Teams",
      "Green Technology Units",
      "Interdisciplinary Environmental Projects"
    ]

  },


  social: {

    title:
      "Social Sciences & Humanities",

    displayTitle:
      "SOCIAL SCIENCES & HUMANITIES",

    icon:
      "◎",

    intro:
      "Exploring society, education, behaviour, management and human development through evidence-based interdisciplinary research.",

    areas: [
      ["◎", "Social Research"],
      ["◉", "Education"],
      ["▣", "Management"],
      ["◇", "Behavioural Studies"],
      ["+", "Community Research"]
    ],

    strengths: [
      "Interdisciplinary social research",
      "Education and behavioural studies",
      "Management and organisational research",
      "Community-centred research"
    ],

    centres: [
      "Social Science Research Groups",
      "Education Research Teams",
      "Business & Management Research Units",
      "Community Research Collaborations"
    ]

  }

};



/* --- RMC-06B [ELEMENTS] Research Explorer HTML connections --- */

const categoryView =
  document.getElementById(
    "researchCategoryView"
  );


const expandedView =
  document.getElementById(
    "researchExpandedView"
  );


const categoryNodes =
  document.querySelectorAll(
    ".research-category-node"
  );


const backButton =
  document.getElementById(
    "researchBackBtn"
  );


const resetButton =
  document.getElementById(
    "resetResearchExplorer"
  );



/* --- RMC-06C [FUNCTIONS] Build and open the selected research category --- */

function openResearchCategory(
  categoryKey
) {

  const data =
    researchCategories[
      categoryKey
    ];


  if (!data) return;


  /*
   * TITLE
   */

  document.getElementById(
    "expandedTitle"
  ).innerHTML =
    data.displayTitle
      .replace(
        " & ",
        " &<br>"
      );


  document.getElementById(
    "expandedHeading"
  ).textContent =
    data.title;


  document.getElementById(
    "expandedMainIcon"
  ).textContent =
    data.icon;


  document.getElementById(
    "expandedIntro"
  ).textContent =
    data.intro;



  /*
   * RESEARCH AREAS
   */

  const areaGrid =
    document.getElementById(
      "researchAreaGrid"
    );


  areaGrid.innerHTML = "";


  data.areas.forEach(
    area => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "research-area-item";


      item.innerHTML = `
        <span class="research-area-icon">
          ${area[0]}
        </span>

        <strong>
          ${area[1]}
        </strong>
      `;


      areaGrid.appendChild(
        item
      );

    }
  );



  /*
   * STRENGTHS
   */

  const strengths =
    document.getElementById(
      "researchStrengthList"
    );


  strengths.innerHTML = "";


  data.strengths.forEach(
    item => {

      const li =
        document.createElement(
          "li"
        );


      li.textContent =
        item;


      strengths.appendChild(
        li
      );

    }
  );



  /*
   * CENTRES
   */

  const centres =
    document.getElementById(
      "researchCentreList"
    );


  centres.innerHTML = "";


  data.centres.forEach(
    item => {

      const li =
        document.createElement(
          "li"
        );


      li.textContent =
        item;


      centres.appendChild(
        li
      );

    }
  );



  /*
   * IMPORTANT:
   *
   * These are deliberately NOT
   * populated with made-up figures.
   *
   * Replace later with verified
   * AIMST data.
   */

  document.getElementById(
    "researcherCount"
  ).textContent = "—";


  document.getElementById(
    "projectCount"
  ).textContent = "—";


  document.getElementById(
    "partnerCount"
  ).textContent = "—";



  /*
   * CHANGE VIEW
   */

  categoryView.classList.remove(
    "active"
  );


  expandedView.classList.add(
    "active"
  );

}



/* --- RMC-06D [FUNCTIONS] Return to the category overview --- */

function showResearchCategories() {

  expandedView.classList.remove(
    "active"
  );


  categoryView.classList.add(
    "active"
  );

}



/* --- RMC-06E [EVENTS] Research Explorer click controls --- */

categoryNodes.forEach(
  node => {

    node.addEventListener(
      "click",

      () => {

        openResearchCategory(
          node.dataset.category
        );

      }
    );

  }
);



backButton?.addEventListener(
  "click",
  showResearchCategories
);



resetButton?.addEventListener(
  "click",
  showResearchCategories
);

/* ==========================================================================
   RMC-07 | RESEARCH IMPACT
   ========================================================================== */

// No section-specific JavaScript currently required.

/* ==========================================================================
   RMC-08 | CENTRES & INNOVATION PIPELINE
   ========================================================================== */

// No section-specific JavaScript currently required.

/* ==========================================================================
   RMC-09 | GLOBAL RESEARCH NETWORK
   ========================================================================== */

/* ======================================================
   AIMST INTERACTIVE GLOBAL RESEARCH NETWORK
   D3 + World Atlas
   ====================================================== */

(async function initialiseResearchMap() {

  /* --- RMC-09A [ELEMENTS] Map container and tooltip --- */

  const svgElement =
    document.getElementById(
      "researchWorldMap"
    );

  if (!svgElement) return;


  const svg =
    d3.select(svgElement);


  const tooltip =
    document.getElementById(
      "mapTooltip"
    );


  /* --------------------------------------------------
     RESEARCH PARTNERS

     IMPORTANT:
     Replace these prototype entries with
     VERIFIED AIMST collaborators later.
     -------------------------------------------------- */

  /* --- RMC-09B [EDITABLE CONTENT] Verified collaboration/partner data goes here --- */
  /*     Normally edit partner records here; do not edit the map engine below. */

  const partners = [

    {
      country: "Malaysia",

      institution:
        "AIMST University",

      coordinates:
        [100.4917, 5.6480],

      type:
        "Research Hub",

      description:
        "AIMST University serves as the central hub of the international research collaboration network.",

      hub: true
    },


    {
      country:
        "United Kingdom",

      institution:
        "Research Partner",

      coordinates:
        [-0.1276, 51.5072],

      type:
        "International Collaboration",

      description:
        "Research and academic collaboration involving joint research, postgraduate training and knowledge exchange."
    },


    {
      country:
        "Japan",

      institution:
        "Research Partner",

      coordinates:
        [139.6917, 35.6895],

      type:
        "Research Collaboration",

      description:
        "Collaboration opportunities in biomedical science, technology, innovation and academic research."
    },


    {
      country:
        "India",

      institution:
        "Research Partner",

      coordinates:
        [77.2090, 28.6139],

      type:
        "Academic & Research",

      description:
        "Research collaborations across biomedical sciences, pharmacy, biotechnology and interdisciplinary research."
    },


    {
      country:
        "Australia",

      institution:
        "Research Partner",

      coordinates:
        [151.2093, -33.8688],

      type:
        "International Research",

      description:
        "Research, academic mobility and postgraduate collaboration with Australian partners."
    },


    {
      country:
        "China",

      institution:
        "Research Partner",

      coordinates:
        [116.4074, 39.9042],

      type:
        "Research Collaboration",

      description:
        "Scientific collaboration across health, technology, innovation and research development."
    },


    {
      country:
        "United States",

      institution:
        "Research Partner",

      coordinates:
        [-74.0060, 40.7128],

      type:
        "Research Network",

      description:
        "International research networking and collaborative opportunities with specialist institutions."
    },


    {
      country:
        "Singapore",

      institution:
        "Research Partner",

      coordinates:
        [103.8198, 1.3521],

      type:
        "Regional Collaboration",

      description:
        "Regional research and innovation collaboration within Southeast Asia."
    }

  ];


  const aimst =
    partners.find(
      partner => partner.hub
    );


  /* --------------------------------------------------
     LOAD REAL WORLD GEOGRAPHY
     -------------------------------------------------- */

  /* --- RMC-09C [FUNCTIONS] Load world geography --- */

  try {

    const world =
      await d3.json(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"
      );


    const countries =
      topojson.feature(
        world,
        world.objects.countries
      );


    drawMap(countries);


  } catch (error) {

    console.error(
      "Unable to load world map:",
      error
    );


    svg
      .append("text")

      .attr("x", "50%")

      .attr("y", "50%")

      .attr(
        "text-anchor",
        "middle"
      )

      .attr("fill", "#ffffff")

      .text(
        "Unable to load map data."
      );

  }



  /* --- RMC-09D [FUNCTIONS] Draw countries, routes, partner points and zoom --- */

  function drawMap(worldData) {

    const width = 1000;

    const height = 520;


    svg
      .attr(
        "viewBox",
        `0 0 ${width} ${height}`
      )

      .attr(
        "preserveAspectRatio",
        "xMidYMid meet"
      );


    /*
       Natural Earth is a much better
       projection for this type of
       institutional world map.
    */

    const projection =

      d3.geoNaturalEarth1()

        .fitExtent(

          [
            [35, 65],

            [
              width - 35,
              height - 55
            ]
          ],

          worldData

        );


    const path =
      d3.geoPath(
        projection
      );


    const mapLayer =
      svg
        .append("g")

        .attr(
          "class",
          "map-layer"
        );


    /* COUNTRIES */

    mapLayer

      .selectAll("path")

      .data(
        worldData.features
      )

      .join("path")

      .attr(
        "class",
        "map-country"
      )

      .attr(
        "d",
        path
      );



    /* ------------------------------------------------
       ROUTES
       ------------------------------------------------ */

    const routeLayer =

      mapLayer
        .append("g")

        .attr(
          "class",
          "route-layer"
        );


    partners

      .filter(
        partner =>
          !partner.hub
      )

      .forEach(
        partner => {

          /*
            d3.geoInterpolate creates
            a geodesic path over the
            globe rather than a
            straight SVG line.
          */

          const interpolate =

            d3.geoInterpolate(

              aimst.coordinates,

              partner.coordinates

            );


          const routeCoordinates =

            d3.range(
              0,
              1.01,
              0.025
            )

            .map(
              t =>
                interpolate(t)
            );


          const route = {

            type:
              "LineString",

            coordinates:
              routeCoordinates

          };


          routeLayer

            .append("path")

            .datum(route)

            .attr(
              "class",
              "research-route"
            )

            .attr(
              "d",
              path
            );

        }
      );



    /* ------------------------------------------------
       PARTNER LOCATIONS
       ------------------------------------------------ */

    const partnerLayer =

      mapLayer

        .append("g")

        .attr(
          "class",
          "partner-layer"
        );


    partners.forEach(
      partner => {

        const projected =

          projection(
            partner.coordinates
          );


        if (!projected) return;


        const [
          x,
          y
        ] = projected;


        const group =

          partnerLayer

            .append("g")

            .attr(
              "class",
              "partner-node"
            )

            .attr(
              "transform",
              `translate(${x},${y})`
            )

            .datum(partner);



        /* AIMST */

        if (partner.hub) {

          group

            .append("circle")

            .attr(
              "class",
              "aimst-hub-ring"
            )

            .attr("r", 15);


          group

            .append("circle")

            .attr(
              "class",
              "aimst-hub"
            )

            .attr("r", 6);


          group

            .append("text")

            .attr("x", 12)

            .attr("y", 4)

            .attr(
              "fill",
              "#ffffff"
            )

            .attr(
              "font-size",
              "10px"
            )

            .attr(
              "font-weight",
              "800"
            )

            .text(
              "AIMST"
            );

        }


        /* PARTNER */

        else {

          group

            .append("circle")

            .attr(
              "class",
              "partner-point"
            )

            .attr("r", 4.5);

        }



        /*
          Larger invisible circle
          makes locations easier to
          tap on phones.
        */

        group

          .append("circle")

          .attr(
            "class",
            "partner-hit-area"
          )

          .attr("r", 14);



        group

          .on(
            "mouseenter",

            function(
              event,
              data
            ) {

              tooltip.style.opacity =
                "1";

              tooltip.innerHTML =

                `
                <strong>
                  ${data.country}
                </strong>
                <br>
                ${data.institution}
                `;

            }
          )


          .on(
            "mousemove",

            function(event) {

              const bounds =

                svgElement

                  .getBoundingClientRect();


              tooltip.style.left =

                `${event.clientX -
                  bounds.left}px`;


              tooltip.style.top =

                `${event.clientY -
                  bounds.top}px`;

            }
          )


          .on(
            "mouseleave",

            function() {

              tooltip.style.opacity =
                "0";

            }
          )


          .on(
            "click",

            function(
              event,
              data
            ) {

              showPartner(
                data
              );

            }
          );

      }
    );



    /* ------------------------------------------------
       ZOOM / PAN
       ------------------------------------------------ */

    const zoom =

      d3.zoom()

        .scaleExtent(
          [1, 5]
        )

        .on(
          "zoom",

          event => {

            mapLayer.attr(

              "transform",

              event.transform

            );

          }
        );


    svg.call(zoom);



    /* TOOLBAR */

    document

      .getElementById(
        "zoomIn"
      )

      ?.addEventListener(
        "click",

        () => {

          svg

            .transition()

            .duration(300)

            .call(

              zoom.scaleBy,
              1.4

            );

        }
      );


    document

      .getElementById(
        "zoomOut"
      )

      ?.addEventListener(
        "click",

        () => {

          svg

            .transition()

            .duration(300)

            .call(

              zoom.scaleBy,
              0.7

            );

        }
      );


    document

      .getElementById(
        "resetMap"
      )

      ?.addEventListener(
        "click",

        () => {

          svg

            .transition()

            .duration(500)

            .call(

              zoom.transform,

              d3.zoomIdentity

            );

        }
      );

  }



  /* --------------------------------------------------
     UPDATE INFORMATION PANEL
     -------------------------------------------------- */

  /* --- RMC-09E [FUNCTIONS] Update the information panel after a partner is selected --- */

  function showPartner(
    partner
  ) {

    document

      .getElementById(
        "networkCountry"
      )

      .textContent =
        partner.country;


    document

      .getElementById(
        "networkInstitution"
      )

      .textContent =
        partner.institution;


    document

      .getElementById(
        "networkDescription"
      )

      .textContent =
        partner.description;


    document

      .getElementById(
        "networkLocation"
      )

      .textContent =
        partner.country;


    document

      .getElementById(
        "networkType"
      )

      .textContent =
        partner.type;


    const panel =

      document.getElementById(
        "researchMapInfo"
      );


    panel.animate(

      [

        {
          opacity: .6,
          transform:
            "translateY(5px)"
        },

        {
          opacity: 1,
          transform:
            "translateY(0)"
        }

      ],

      {

        duration: 250,

        easing:
          "ease-out"

      }

    );

  }

})();

/* ==========================================================================
   RMC-10 | RESOURCES / NEWS / LEADERSHIP
   ========================================================================== */

// No section-specific JavaScript currently required.

/* ==========================================================================
   RMC-11 | MY RMC
   ========================================================================== */

// No section-specific JavaScript currently required.

/* ==========================================================================
   RMC-12 | ASK RMC AI
   ========================================================================== */

// ---- Ask RMC AI ----
/* --- RMC-12A [ELEMENTS] Ask RMC chat controls --- */

const askBtnAI = document.getElementById("askBtn");
const popAI = document.getElementById("chatPopover");
const closeChatAI = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.getElementById("sendBtn");
const aiSuggestions = document.getElementById("aiSuggestions");

/* --- RMC-12B [FUNCTIONS] Open / close chat --- */

function toggleChat(force) {
  const open = typeof force === "boolean" ? force : !popAI.classList.contains("open");
  popAI.classList.toggle("open", open);
  popAI.setAttribute("aria-hidden", open ? "false" : "true");
  if (open) setTimeout(() => chatInput.focus(), 50);
}

askBtnAI?.addEventListener("click", () => toggleChat());
closeChatAI?.addEventListener("click", () => toggleChat(false));

/* --- RMC-12C [FUNCTIONS] Render chat messages and typing indicator --- */

function addMessage(role, text, extraClass="") {
  const row = document.createElement("div");
  row.className = `msg ${role} ${extraClass}`.trim();
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return row;
}

function addTyping() {
  const row = document.createElement("div");
  row.className = "msg assistant";
  row.innerHTML = '<div class="bubble"><span class="typing"><i></i><i></i><i></i></span></div>';
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return row;
}

/* --- RMC-12D [FUNCTIONS] Send the visitor question to the backend API --- */

async function askRMC(question) {
  addMessage("user", question);
  chatInput.value = "";
  sendBtn.disabled = true;
  const typing = addTyping();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: question})
    });

    const data = await response.json().catch(() => ({}));
    typing.remove();

    if (!response.ok) {
      throw new Error(data.error || "The RMC AI service is currently unavailable.");
    }

    const row = addMessage("assistant", data.answer || "I could not verify that from the approved RMC knowledge base.");
    if (Array.isArray(data.sources) && data.sources.length) {
      const sources = document.createElement("div");
      sources.className = "ai-source-list";
      sources.innerHTML = "<strong>Sources</strong>" + data.sources.map(s =>
        `<span>${String(s.filename || "RMC document").replace(/[<>&]/g, "")}</span>`
      ).join("");
      row.querySelector(".bubble").appendChild(sources);
    }
  } catch (err) {
    typing.remove();
    addMessage("assistant", err.message, "error");
  } finally {
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

/* --- RMC-12E [EVENTS] Chat submit and suggested questions --- */

chatForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = chatInput.value.trim();
  if (q) askRMC(q);
});

aiSuggestions?.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => askRMC(btn.dataset.question));
});

/* ==========================================================================
   RMC-13 | FOOTER
   ========================================================================== */

// No section-specific JavaScript currently required.
