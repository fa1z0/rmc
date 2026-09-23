
/* AIMST RMC Enhancements — Higher & Consistent Translucency
   Updates:
   - All 8 research category circles now use the SAME opacity profile.
   - The central AIMST circle uses the SAME opacity profile.
   - Hover state keeps translucency consistent instead of becoming too opaque.
   - Existing category hues are preserved.
   - RMC Team section retained.
*/
(() => {
  const css = `
/* =========================================================
   GLOBAL TRANSLUCENCY PROFILE
   ========================================================= */

:root {
  /* One opacity value = uniform translucency, no colour gradient */
  --rmc-node-alpha-main: .62;

  --rmc-node-border-alpha: .34;

  --rmc-node-glow-near: .42;
  --rmc-node-glow-mid: .24;
  --rmc-node-glow-far: .12;
}



/* Glass reflection — neutral white only, no colour gradient */
.research-category-node::after,
.research-centre-node::after,
.expanded-main-node::after,
.rmc-team-avatar::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: 10%;
  left: 18%;
  width: 46%;
  height: 20%;
  border-radius: 50%;
  background: rgba(255,255,255,.16);
  filter: blur(5px);
  transform: rotate(-18deg);
  opacity: .85;
}

.research-category-node,
.research-centre-node,
.expanded-main-node,
.rmc-team-avatar {
  isolation: isolate;
}









/* =========================================================
   RMC TEAM
   ========================================================= */

.rmc-team-section {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 12% 20%,
      rgba(239,51,64,.06),
      transparent 24%
    ),
    radial-gradient(
      circle at 88% 72%,
      rgba(22,213,227,.07),
      transparent 25%
    ),
    #fff;
}


.rmc-team-grid {
  display: grid;
  grid-template-columns:
    repeat(3,1fr);
  gap: 20px;
}


.rmc-team-card {
  position: relative;
  min-height: 280px;
  padding: 30px;
  overflow: hidden;

  border:
    1px solid var(--line);

  border-radius:
    22px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.96),
      rgba(246,249,253,.92)
    );

  box-shadow:
    0 14px 42px
    rgba(9,32,74,.07);

  transition:
    transform .28s ease,
    box-shadow .28s ease,
    border-color .28s ease;
}


.rmc-team-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 4px;

  background:
    linear-gradient(
      90deg,
      rgba(239,51,64,.88),
      rgba(239,51,64,.28),
      transparent
    );
}


.rmc-team-card:hover {
  transform:
    translateY(-6px);

  border-color:
    rgba(239,51,64,.24);

  box-shadow:
    0 24px 58px
    rgba(9,32,74,.12);
}


/*
   Team avatar uses the SAME alpha profile
   as the Research Explorer circles.
*/
.rmc-team-avatar {

  width: 82px;
  height: 82px;

  display: grid;
  place-items: center;

  margin-bottom:
    24px;

  border-radius:
    50%;

  color:
    #fff;

  font-size:
    29px;


  background:
    rgba(
      239,
      51,
      64,
      var(--rmc-node-alpha-main)
    );


  border:
    1px solid
    rgba(255,100,110,.34);


  backdrop-filter:
    blur(12px)
    saturate(135%);

  -webkit-backdrop-filter:
    blur(12px)
    saturate(135%);


  box-shadow:

    inset 0 1px 10px
    rgba(255,255,255,.12),

    0 0 12px
    rgba(239,51,64,.42),

    0 0 30px
    rgba(239,51,64,.24),

    0 0 62px
    rgba(239,51,64,.12);
}


.rmc-team-role {
  display:
    inline-block;

  margin-bottom:
    10px;

  color:
    var(--red);

  font-size:
    9px;

  font-weight:
    800;

  line-height:
    1.4;

  letter-spacing:
    .12em;

  text-transform:
    uppercase;
}


.rmc-team-card h3 {

  margin:
    0 0 12px;

  color:
    var(--navy);

  font-family:
    "Space Grotesk",
    sans-serif;

  font-size:
    21px;

  line-height:
    1.25;

  letter-spacing:
    -.025em;
}


.rmc-team-card p {

  margin:
    0;

  color:
    var(--muted);

  font-size:
    12px;

  line-height:
    1.75;
}


@media (max-width:900px) {

  .rmc-team-grid {
    grid-template-columns:
      1fr;
  }

  .rmc-team-card {
    min-height:
      0;
  }

}
`;


  /*
   * Replace previous enhancement stylesheet
   * if this script is loaded more than once.
   */
  document
    .getElementById(
      "rmc-enhancement-styles"
    )
    ?.remove();


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "rmc-enhancement-styles";


  style.textContent =
    css;


  document.head.appendChild(
    style
  );


  /* NAVIGATION */

  const nav =
    document.querySelector(
      ".nav"
    );


  if (
    nav &&
    !nav.querySelector(
      'a[href="#team"]'
    )
  ) {

    const a =
      document.createElement(
        "a"
      );


    a.href =
      "#team";


    a.textContent =
      "RMC Team";


    nav.appendChild(
      a
    );

  }



  /* RMC TEAM */

  const myRmc =
    document.getElementById(
      "myrmc"
    );


  if (
    myRmc &&
    !document.getElementById(
      "team"
    )
  ) {

    const section =
      document.createElement(
        "section"
      );


    section.className =
      "section rmc-team-section";


    section.id =
      "team";


    section.innerHTML = `
      <div class="container">

        <div class="section-heading centered reveal visible">

          <span class="eyebrow dark">
            OUR PEOPLE
          </span>

          <h2>
            RMC Team
          </h2>

          <p>
            Meet the team supporting AIMST University's
            research, innovation and research management ecosystem.
          </p>

        </div>


        <div class="rmc-team-grid">

          <article class="rmc-team-card reveal visible">

            <div
              class="rmc-team-avatar"
              aria-hidden="true"
            >

              <i
                class="fa-solid fa-user-tie"
              ></i>

            </div>


            <div class="rmc-team-content">

              <span class="rmc-team-role">
                Director
              </span>

              <h3>
                Assoc. Prof. Dr.
                Sivachandran Parimannan
              </h3>

              <p>
                Providing leadership for research strategy,
                innovation and institutional research development.
              </p>

            </div>

          </article>


          <article class="rmc-team-card reveal visible">

            <div
              class="rmc-team-avatar"
              aria-hidden="true"
            >

              <i
                class="fa-solid fa-user-gear"
              ></i>

            </div>


            <div class="rmc-team-content">

              <span class="rmc-team-role">
                Deputy Director
              </span>

              <h3>
                Siventhiran S Balakrishnan
              </h3>

              <p>
                Supporting research management,
                coordination and RMC operational initiatives.
              </p>

            </div>

          </article>


          <article class="rmc-team-card reveal visible">

            <div
              class="rmc-team-avatar"
              aria-hidden="true"
            >

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-5-oEeqA1YhPDdNLHNlkG0Cb3gTyW_zheHyFSeLUkw&s=10" class="rmc-team-avatar" alt="Muhammad Faiz">

            </div>


            <div class="rmc-team-content">

              <span class="rmc-team-role">
                Data Collection &amp; Analysis Officer
              </span>

              <h3>
                Muhammad Faiz
              </h3>

              <p>
                Supporting research data collection,
                analysis, reporting and institutional research information.
              </p>

            </div>

          </article>

        </div>

      </div>
    `;


    myRmc.parentNode.insertBefore(
      section,
      myRmc
    );

  }





})();
