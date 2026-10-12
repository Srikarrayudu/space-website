3/* ============================================================
   COSMIC THRILLER
   PARALLEL WORLD
   THE ECHO FIELD / SPECTRA

   COMPLETE PARALLEL WORLD JAVASCRIPT
   ============================================================ */


/* ============================================================
   GLOBAL VARIABLES
   ============================================================ */

   let parallelWorldButtonCreated = false;

   let parallelWorldTransitionStarted = false;
   
   let parallelWorldActive = false;
   
   let lastUniverseScreen = null;
   
   
   /* ============================================================
      CONSOLE
      ============================================================ */
   
   console.log(
       "🌌 COSMIC THRILLER — PARALLEL WORLD JS LOADED"
   );
   
   
   /* ============================================================
      WATCH FOR SOLAR SYSTEM
      ============================================================ */
      function watchForSolarSystem() {

        const universeScreen =
            document.querySelector("#universe-screen");
    
    
        /* --------------------------------------------------------
           Solar System not created yet
           -------------------------------------------------------- */
    
        if (!universeScreen) {
    
            setTimeout(
                watchForSolarSystem,
                500
            );
    
            return;
        }
    
    
        /* --------------------------------------------------------
           Detect a NEW Explore Universe session
           -------------------------------------------------------- */
    
        if (
            universeScreen !== lastUniverseScreen
        ) {
    
            lastUniverseScreen =
                universeScreen;
    
            parallelWorldButtonCreated =
                false;
    
            console.log(
                "🌌 NEW SOLAR SYSTEM SESSION DETECTED"
            );
    
            console.log(
                "⏱️ ENTER THE OTHER SIDE WILL APPEAR IN 10 SECONDS"
            );
    
    
            /* ----------------------------------------------------
               Start fresh 10-second timer
               ---------------------------------------------------- */
    
            setTimeout(
                function () {
    
                    /* --------------------------------------------
                       Make sure this is still the current
                       Solar System session
                       -------------------------------------------- */
    
                    const currentUniverseScreen =
                        document.querySelector(
                            "#universe-screen"
                        );
    
    
                    if (
                        currentUniverseScreen ===
                        universeScreen &&
                        !parallelWorldButtonCreated &&
                        !document.querySelector(
                            "#parallel-world-entry"
                        )
                    ) {
    
                        createParallelWorldButton();
    
                        parallelWorldButtonCreated =
                            true;
    
                        console.log(
                            "🌀 10 SECONDS COMPLETE — ENTER THE OTHER SIDE READY"
                        );
                    }
    
                },
                10000
            );
            }
        /* --------------------------------------------------------
           Keep watching for the next Explore Universe session
           -------------------------------------------------------- */
    
        setTimeout(
            watchForSolarSystem,
            500
        );
    }
   
   
   /* ============================================================
      CREATE ENTER THE OTHER SIDE BUTTON
      ============================================================ */
   
   function createParallelWorldButton() {
   
       /* --------------------------------------------------------
          Prevent duplicate button
          -------------------------------------------------------- */
   
       if (
           document.querySelector(
               "#parallel-world-entry"
           )
       ) {
   
           return;
       }
   
   
       /* --------------------------------------------------------
          Create button
          -------------------------------------------------------- */
   
       const button =
           document.createElement("button");
   
   
       button.id =
           "parallel-world-entry";
   
   
       button.type =
           "button";
   
   
       button.textContent =
           "🌀 ENTER THE OTHER SIDE";
   
   
       /* --------------------------------------------------------
          Position
          -------------------------------------------------------- */
          button.style.position =
          "fixed";
      
      button.style.left =
          "24px";
      
      button.style.top =
          "30px";
      
      button.style.right =
          "auto";
      
      button.style.bottom =
          "auto";
      
      button.style.transform =
          "none";
   
       /* --------------------------------------------------------
          Layer
          -------------------------------------------------------- */
   
       button.style.zIndex =
           "99999999";
   
   
       /* --------------------------------------------------------
          Visibility
          -------------------------------------------------------- */
   
       button.style.display =
           "block";
   
       button.style.visibility =
           "visible";
   
       button.style.opacity =
           "1";
   
       button.style.pointerEvents =
           "auto";
   
   
       /* --------------------------------------------------------
          Appearance
          -------------------------------------------------------- */
   
       button.style.padding =
           "10px 16px";
   
       button.style.minWidth =
           "0px";
   
       button.style.border =
           "1px solid rgba(150, 235, 255, 0.8)";
   
       button.style.borderRadius =
           "30px";
   
       button.style.background =
           "rgba(0, 8, 20, 0.95)";
   
       button.style.color =
           "#dffbff";
   
       button.style.fontSize =
           "11px";
   
       button.style.fontFamily =
           "Arial, sans-serif";
   
       button.style.fontWeight =
           "500";
   
       button.style.letterSpacing =
           "0.12em";
   
       button.style.cursor =
           "pointer";
           button.style.boxShadow =
           "0 0 15px rgba(80,210,255,0.35), 0 0 35px rgba(50,150,255,0.15)";
      
       button.style.transition =
           "all 0.3s ease";
   
   
       /* --------------------------------------------------------
          Hover
          -------------------------------------------------------- */
   
       button.addEventListener(
           "mouseenter",
           function () {
   
               button.style.background =
                   "rgba(0,255,255,0.12)";
   
               button.style.boxShadow =
                   "0 0 35px rgba(0,255,255,1)";
   
               button.style.transform =
               "scale(1.04)";
           }
       );
   
   
       button.addEventListener(
           "mouseleave",
           function () {
   
               button.style.background =
                   "rgba(0, 8, 20, 0.95)";
   
               button.style.boxShadow =
                   "0 0 20px rgba(0,255,255,0.75)";
   
               button.style.transform =
                "scale(1)";
           }
       );
   
   
       /* --------------------------------------------------------
          Add button to Solar System
          -------------------------------------------------------- */
   
       const universeScreen =
           document.querySelector(
               "#universe-screen"
           );
   
   
       if (universeScreen) {
   
           universeScreen.appendChild(
               button
           );
   
       } else {
   
           document.body.appendChild(
               button
           );
           /* ========================================================
   KEEP EXPLORE SPECTRA IN THE WORLD LAYER
   ======================================================== */

           }
   
   
       console.log(
           "🌀 ENTER THE OTHER SIDE BUTTON CREATED"
       );
   
   
       /* --------------------------------------------------------
          Click event
          -------------------------------------------------------- */
   
       button.addEventListener(
           "click",
           function () {
   
               if (
                   parallelWorldTransitionStarted
               ) {
   
                   return;
               }
   
   
               console.log(
                   "🚀 ENTERING THE ECHO FIELD"
               );
   
   
               startParallelWorld();
   
           }
       );
   }
   
   
   /* ============================================================
      START PARALLEL WORLD
      ============================================================ */
   
   function startParallelWorld() {
   
       /* --------------------------------------------------------
          Prevent double activation
          -------------------------------------------------------- */
   
       if (
           parallelWorldTransitionStarted
       ) {
   
           return;
       }
   
   
       parallelWorldTransitionStarted =
           true;
   
       parallelWorldActive =
           true;
   
   
       console.log(
           "🌀 PARALLEL WORLD TRANSITION STARTED"
       );
   
   
       /* --------------------------------------------------------
          Get existing Solar System
          -------------------------------------------------------- */
   
       const universeScreen =
           document.querySelector(
               "#universe-screen"
           );
   
   
       /* --------------------------------------------------------
          Get button
          -------------------------------------------------------- */
   
       const button =
           document.querySelector(
               "#parallel-world-entry"
           );
   
   
       /* --------------------------------------------------------
          Disable button
          -------------------------------------------------------- */
   
       if (button) {
   
           button.disabled =
               true;
   
           button.style.pointerEvents =
               "none";
   
           button.style.opacity =
               "0";
       }
   
   
       /* --------------------------------------------------------
          Fade Solar System
          -------------------------------------------------------- */
   
       if (universeScreen) {
   
           universeScreen.style.transition =
               "opacity 2.5s ease";
   
           universeScreen.style.opacity =
               "0";
       }
   
   
       /* --------------------------------------------------------
          Create portal
          -------------------------------------------------------- */
   
       createPortalTransition();
   
   
       /* --------------------------------------------------------
          Portal message
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               const portalText =
                   document.querySelector(
                       ".portal-main"
                   );
   
   
               if (portalText) {
   
                   portalText.textContent =
                       "SPACE-TIME DISTORTION";
               }
   
           },
           2200
       );
   
   
       /* --------------------------------------------------------
          Portal entering state
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               const portal =
                   document.querySelector(
                       "#parallel-portal-transition"
                   );
   
   
               if (portal) {
   
                   portal.classList.add(
                       "portal-entering"
                   );
               }
   
           },
           4000
       );
   
   
       /* --------------------------------------------------------
          Create Spectra
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               createParallelWorld();
   
           },
           6500
       );
   }
   
   
   /* ============================================================
      CREATE PORTAL
      ============================================================ */
   
   function createPortalTransition() {
   
       /* --------------------------------------------------------
          Remove old portal if present
          -------------------------------------------------------- */
   
       const existingPortal =
           document.querySelector(
               "#parallel-portal-transition"
           );
   
   
       if (existingPortal) {
   
           existingPortal.remove();
       }
   
   
       /* --------------------------------------------------------
          Portal container
          -------------------------------------------------------- */
   
       const portal =
           document.createElement("div");
   
   
       portal.id =
           "parallel-portal-transition";
   
   
       /* --------------------------------------------------------
          Portal HTML
          -------------------------------------------------------- */
   
       portal.innerHTML = `
   
           <div class="portal-stars"></div>
   
           <div class="portal-vortex">
   
               <div class="portal-ring ring-1"></div>
   
               <div class="portal-ring ring-2"></div>
   
               <div class="portal-ring ring-3"></div>
   
               <div class="portal-core"></div>
   
           </div>
   
   
           <div class="portal-text">
   
               <div class="portal-small">
                   UNKNOWN ANOMALY DETECTED
               </div>
   
   
               <div class="portal-main">
                   CROSSING THE BOUNDARY
               </div>
   
   
               <div class="portal-coordinates">
   
                   SPATIAL VECTOR : UNRESOLVED
                   <br>
   
                   TEMPORAL VECTOR : UNRESOLVED
                   <br>
   
                   ORIGIN : EARTH
   
               </div>
   
           </div>
   
       `;
   
   
       /* --------------------------------------------------------
          Force full-screen
          -------------------------------------------------------- */
   
       portal.style.position =
           "fixed";
   
       portal.style.left =
           "0";
   
       portal.style.top =
           "0";
   
       portal.style.width =
           "100vw";
   
       portal.style.height =
           "100vh";
   
       portal.style.zIndex =
           "999999999";
   
       portal.style.display =
           "block";
   
       portal.style.visibility =
           "visible";
   
       portal.style.opacity =
           "1";
   
       portal.style.pointerEvents =
           "auto";
   
   
       /* --------------------------------------------------------
          Add portal
          -------------------------------------------------------- */
   
       document.body.appendChild(
           portal
       );
   
   
       console.log(
           "🌀 PORTAL CREATED"
       );
   
   
       /* --------------------------------------------------------
          Activate CSS animation
          -------------------------------------------------------- */
   
       requestAnimationFrame(
           function () {
   
               portal.classList.add(
                   "portal-active"
               );
   
           }
       );
   }
   
   
   /* ============================================================
      CREATE THE PARALLEL WORLD
      ============================================================ */
   
   function createParallelWorld() {
   
       console.log(
           "🌌 CREATING THE ECHO FIELD"
       );
   
   
       /* --------------------------------------------------------
          Remove portal
          -------------------------------------------------------- */
   
       const portal =
           document.querySelector(
               "#parallel-portal-transition"
           );
   
   
       if (portal) {
   
           portal.style.transition =
               "opacity 1s ease";
   
           portal.style.opacity =
               "0";
   
   
           setTimeout(
               function () {
   
                   if (portal) {
   
                       portal.remove();
                   }
   
               },
               1000
           );
       }
   
   
       /* --------------------------------------------------------
          Remove previous world
          -------------------------------------------------------- */
   
       const oldWorld =
           document.querySelector(
               "#parallel-world-scene"
           );
   
   
       if (oldWorld) {
   
           oldWorld.remove();
       }
   
   
       /* --------------------------------------------------------
          Create world
          -------------------------------------------------------- */
   
       const world =
           document.createElement("div");
   
   
       world.id =
           "parallel-world-scene";
   
           world.style.position =
           "fixed";
       
       world.style.left =
           "0";
       
       world.style.top =
           "0";
       
       world.style.width =
           "100vw";
       
       world.style.height =
           "100vh";
       
       world.style.zIndex =
           "999999";
       
       world.style.overflow =
           "hidden";
       /* ========================================================
          PARALLEL WORLD HTML
          ======================================================== */
   
       world.innerHTML = `
   
           <!-- ==================================================
                DEEP SPACE
                ================================================== -->
   
           <div class="parallel-world-stars"></div>
   
           <div class="parallel-world-nebula"></div>
   
   
           <!-- ==================================================
                SPECTRA
                ================================================== -->
   
           <div class="parallel-world-planet"></div>
   
   
           <!-- ==================================================
                MOON ONE
                ================================================== -->
   
           <div class="spectra-moon spectra-moon-one"></div>
   
   
           <!-- ==================================================
                MOON TWO
                ================================================== -->
   
           <div class="spectra-moon spectra-moon-two"></div>
   
   
           <!-- ==================================================
                THE ECHO FIELD STAR
                ================================================== -->
   
           <div class="echo-field-star">
   
               <div class="echo-field-star-glow"></div>
   
           </div>
   
   
           <!-- ==================================================
                ASTEROID FIELD
                ================================================== -->
   
           <div class="spectra-asteroid asteroid-01"></div>
   
           <div class="spectra-asteroid asteroid-02"></div>
   
           <div class="spectra-asteroid asteroid-03"></div>
   
           <div class="spectra-asteroid asteroid-04"></div>
   
           <div class="spectra-asteroid asteroid-05"></div>
   
           <div class="spectra-asteroid asteroid-06"></div>
   
           <div class="spectra-asteroid asteroid-07"></div>
   
   
           <!-- ==================================================
                DISTANT SPACECRAFT
                ================================================== -->
   
           <div class="distant-spacecraft">
   
               <div class="spacecraft-light"></div>
   
           </div>
   
   
           <!-- ==================================================
                SPECTRA CIVILIZATION
                ================================================== -->
   
           <div class="spectra-surface-lights">
   
               <span class="spectra-region region-01"></span>
   
               <span class="spectra-region region-02"></span>
   
               <span class="spectra-region region-03"></span>
   
   
               <span class="spectra-road road-01"></span>
   
               <span class="spectra-road road-02"></span>
   
               <span class="spectra-road road-03"></span>
   
   
               <span class="spectra-city-light city-01"></span>
   
               <span class="spectra-city-light city-02"></span>
   
               <span class="spectra-city-light city-03"></span>
   
               <span class="spectra-city-light city-04"></span>
   
               <span class="spectra-city-light city-05"></span>
   
               <span class="spectra-city-light city-06"></span>
   
               <span class="spectra-city-light city-07"></span>
   
               <span class="spectra-city-light city-08"></span>
   
   
               <span class="spectra-isolated-signal"></span>
   
           </div>
   
   
           <!-- ==================================================
                INFORMATION HUD
                ================================================== -->
   
           <div class="parallel-world-content">
   
   
               <div class="parallel-world-label">
   
                   UNKNOWN STAR SYSTEM
   
               </div>
   
   
               <h1>
   
                   SPECTRA
   
               </h1>
   
   
               <div class="parallel-world-subtitle">
   
                   BEYOND THE KNOWN COSMIC FRONTIER
   
               </div>
   
   
               <div class="parallel-world-location">
   
                   <span>SYSTEM</span>
   
                   THE ECHO FIELD
   
   
                   <span>WORLD</span>
   
                   SPECTRA
   
               </div>
   
   
               <div class="parallel-world-message">
   
                   A WORLD
   
                   <br>
   
                   WE HAVE NEVER OBSERVED
   
               </div>
   
               <div class="parallel-world-status">

               ATMOSPHERE : UNKNOWN
               <br>
           
               BIOSPHERE : DETECTED
               <br>
           
               ARTIFICIAL SIGNAL : DETECTED
           
           </div>
           
           </div>
           
           
           <!-- ==================================================
                EXPLORE SPECTRA
                OUTSIDE THE HUD
                ================================================== -->
           
           <button
               id="explore-spectra-button"
               type="button"
           >
               EXPLORE SPECTRA
           </button>
           
           
           <!-- ==================================================
                RETURN BUTTON
                ================================================== -->
           
           <button
               id="leave-parallel-world"
               type="button"
           >
           
               ← RETURN TO SOLAR SYSTEM
           
           </button>
           `;
        
    
   
       /* --------------------------------------------------------
          Add world to body
          -------------------------------------------------------- */
   
       document.body.appendChild(
           world
       );
   
   
       /* --------------------------------------------------------
          Reveal world
          -------------------------------------------------------- */
   
       requestAnimationFrame(
           function () {
   
               world.classList.add(
                   "world-visible"
               );
   
           }
       );
   
   
       /* --------------------------------------------------------
          Start arrival
          -------------------------------------------------------- */
   
       startEchoFieldArrival();
   
   
       /* --------------------------------------------------------
          Setup return button
          -------------------------------------------------------- */
   
       setupReturnButton();
       setupExploreSpectraButton();    
           
       console.log(
           "🪐 SPECTRA CREATED"
       );
   }
   
   
   /* ============================================================
      ECHO FIELD ARRIVAL
      ============================================================ */
   
   function startEchoFieldArrival() {
   
       const world =
           document.querySelector(
               "#parallel-world-scene"
           );
   
   
       if (!world) {
   
           return;
       }
   
   
       /* --------------------------------------------------------
          Begin arrival
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               /*
                  New class
               */
   
               world.classList.add(
                   "echo-field-arrival"
               );
   
   
               /*
                  Compatibility class
                  for older CSS.
               */
   
               world.classList.add(
                   "veyra-arrival"
               );
   
   
               console.log(
                   "🌌 THE ECHO FIELD ARRIVAL STARTED"
               );
   
           },
           300
       );
   
   
       /* --------------------------------------------------------
          Spectra detected
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               console.log(
                   "🪐 SPECTRA DETECTED"
               );
   
   
               updateSpectraStatus(
                   "ATMOSPHERE : STABLE<br>" +
                   "BIOSPHERE : DETECTED<br>" +
                   "ARTIFICIAL SIGNAL : DETECTED"
               );
   
           },
           3500
       );
   
   
       /* --------------------------------------------------------
          Civilization detected
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               console.log(
                   "🏙️ SPECTRA CIVILIZATION DETECTED"
               );
   
   
               updateSpectraStatus(
                   "ATMOSPHERE : STABLE<br>" +
                   "BIOSPHERE : ACTIVE<br>" +
                   "CIVILIZATION : DETECTED"
               );
   
           },
           6000
       );
   
   
       /* --------------------------------------------------------
          Arrival complete
          -------------------------------------------------------- */
   
       setTimeout(
           function () {
   
               console.log(
                   "✨ ARRIVAL COMPLETE — SPECTRA"
               );
   
   
               updateSpectraStatus(
                   "ATMOSPHERE : STABLE<br>" +
                   "BIOSPHERE : ACTIVE<br>" +
                   "SPECTRA CIVILIZATION : ACTIVE"
               );
   
           },
           10000
       );
   }
   
   
   /* ============================================================
      UPDATE STATUS
      ============================================================ */
   
   function updateSpectraStatus(
       message
   ) {
   
       const status =
           document.querySelector(
               ".parallel-world-status"
           );
   
   
       if (!status) {
   
           return;
       }
   
   
       status.style.transition =
           "opacity 0.4s ease";
   
   
       status.style.opacity =
           "0";
   
   
       setTimeout(
           function () {
   
               status.innerHTML =
                   message;
   
   
               status.style.opacity =
                   "1";
   
           },
           250
       );
   }
   
   
   /* ============================================================
      SETUP RETURN BUTTON
      ============================================================ */
   
   function setupReturnButton() {
   
       const returnButton =
           document.querySelector(
               "#leave-parallel-world"
           );
   
   
       if (!returnButton) {
   
           console.warn(
               "⚠️ RETURN BUTTON NOT FOUND"
           );
   
           return;
       }
   
       
       console.log(
           "↩️ RETURN BUTTON FOUND"
       );
   
   
       /* ========================================================
          MOVE BUTTON OUT OF PARALLEL WORLD CONTENT
          ======================================================== */
   
       document.body.appendChild(
           returnButton
       );
   
   
       /* ========================================================
          FORCE BUTTON ABOVE EVERYTHING
          ======================================================== */
   
       returnButton.style.position =
           "fixed";
   
       returnButton.style.left =
           "auto";
   
       returnButton.style.top =
           "auto";
   
       returnButton.style.right =
           "30px";
        returnButton.style.top =
            "30px";
       returnButton.style.bottom =
           "auto";
   
       returnButton.style.transform =
           "none";
   
       returnButton.style.zIndex =
           "2147483647";
   
   
       /* ========================================================
          MAKE IT ACTUALLY CLICKABLE
          ======================================================== */
   
       returnButton.style.display =
           "flex";
   
       returnButton.style.visibility =
           "visible";
   
       returnButton.style.opacity =
           "1";
   
       returnButton.style.pointerEvents =
           "auto";
        /* ========================================================
   RETURN BUTTON — MATCH ENTRY BUTTON
   ======================================================== */

returnButton.style.padding =
"11px 18px";

returnButton.style.minWidth =
"0";

returnButton.style.width =
"auto";

returnButton.style.height =
"auto";

returnButton.style.border =
"1px solid rgba(150, 235, 255, 0.8)";

returnButton.style.borderRadius =
"30px";

returnButton.style.background =
"rgba(0, 8, 18, 0.92)";

returnButton.style.color =
"#dffbff";

returnButton.style.fontFamily =
"Arial, sans-serif";

returnButton.style.fontSize =
"11px";

returnButton.style.fontWeight =
"500";

returnButton.style.letterSpacing =
"0.12em";

returnButton.style.boxShadow =
"0 0 15px rgba(80, 210, 255, 0.35), 0 0 35px rgba(50, 150, 255, 0.15)";

returnButton.style.backdropFilter =
"blur(8px)";

returnButton.style.webkitBackdropFilter =
"blur(8px)";

returnButton.style.whiteSpace =
"nowrap";

returnButton.style.transition =
"all 0.3s ease";
        /* MATCH THE ENTER THE OTHER SIDE BUTTON */

returnButton.style.setProperty(
    "padding", "11px 18px", "important"
);

returnButton.style.setProperty(
    "min-width", "0", "important"
);

returnButton.style.setProperty(
    "width", "auto", "important"
);

returnButton.style.setProperty(
    "height", "auto", "important"
);

returnButton.style.setProperty(
    "border", "1px solid rgba(150, 235, 255, 0.8)", "important"
);

returnButton.style.setProperty(
    "border-radius", "30px", "important"
);

returnButton.style.setProperty(
    "background", "rgba(0, 8, 18, 0.92)", "important"
);

returnButton.style.setProperty(
    "color", "#dffbff", "important"
);

returnButton.style.setProperty(
    "font-family", "Arial, sans-serif", "important"
);

returnButton.style.setProperty(
    "font-size", "11px", "important"
);

returnButton.style.setProperty(
    "font-weight", "500", "important"
);

returnButton.style.setProperty(
    "letter-spacing", "0.12em", "important"
);

returnButton.style.setProperty(
    "box-shadow",
    "0 0 15px rgba(80, 210, 255, 0.35), 0 0 35px rgba(50, 150, 255, 0.15)",
    "important"
);

returnButton.style.setProperty(
    "backdrop-filter", "blur(8px)", "important"
);

returnButton.style.setProperty(
    "-webkit-backdrop-filter", "blur(8px)", "important"
);

returnButton.style.setProperty(
    "white-space", "nowrap", "important"
);
       returnButton.style.cursor =
           "pointer";
   
       returnButton.disabled =
           false;
   
   
       /* ========================================================
          REMOVE ANY OLD CLICK HANDLER
          ======================================================== */
   
       returnButton.onclick =
           null;
   
   
       /* ========================================================
          CLICK HANDLER
          ======================================================== */
   
       returnButton.onclick =
           function (event) {
   
               event.preventDefault();
   
               event.stopPropagation();
   
               console.log(
                   "🖱️ RETURN BUTTON CLICKED"
               );
   
               closeParallelWorld();
   
           };
   
   
       console.log(
           "✅ RETURN BUTTON READY AND CLICKABLE"
       );
   }
   
   
   /* ============================================================
      CLOSE PARALLEL WORLD
      ============================================================ */
   
   function closeParallelWorld() {
    /* ========================================================
    /* ========================================================
   REMOVE EXPLORE SPECTRA COMPLETELY
   ======================================================== */

const exploreButton =
    document.querySelector(
        "#explore-spectra-button"
    );

if (exploreButton) {

    exploreButton.remove();

    console.log(
        "🗑️ EXPLORE SPECTRA REMOVED"
    );
}
   
       console.log(
           "🌌 CLOSING PARALLEL WORLD..."
       );
   
   
       /* ========================================================
          RESET STATE
          ======================================================== */
   
       parallelWorldActive =
           false;
   
       parallelWorldTransitionStarted =
           false;
   
   
       /* ========================================================
          REMOVE PARALLEL WORLD
          ======================================================== */
   
       const world =
           document.querySelector(
               "#parallel-world-scene"
           );
   
   
       if (world) {
   
           world.style.transition =
               "opacity 0.8s ease";
   
           world.style.opacity =
               "0";
   
   
           setTimeout(
               function () {
   
                   if (
                       world &&
                       world.parentNode
                   ) {
   
                       world.parentNode.removeChild(
                           world
                       );
   
                   }
   
               },
               850
           );
       }
   
   
       /* ========================================================
          REMOVE PORTAL
          ======================================================== */
   
       const portal =
           document.querySelector(
               "#parallel-portal-transition"
           );
   
   
       if (portal) {
   
           portal.remove();
   
       }
   
   
       /* ========================================================
          REMOVE RETURN BUTTON
          ======================================================== */
   
       const returnButton =
           document.querySelector(
               "#leave-parallel-world"
           );
   
   
       if (returnButton) {
   
           returnButton.remove();
   
           console.log(
               "🗑️ RETURN BUTTON REMOVED"
           );
       }
   
   
       /* ========================================================
          RESTORE SOLAR SYSTEM
          ======================================================== */
   
       const universeScreen =
           document.querySelector(
               "#universe-screen"
           );
   
   
       if (universeScreen) {
   
           universeScreen.style.transition =
               "opacity 0.8s ease";
   
           universeScreen.style.opacity =
               "1";
   
           universeScreen.style.visibility =
               "visible";
   
           universeScreen.style.pointerEvents =
               "auto";
   
           universeScreen.style.filter =
               "";
   
           universeScreen.classList.remove(
               "parallel-world-background"
           );
       }
   
   
         console.log(
    "✅ SOLAR SYSTEM RESTORED"
);
}   
   /* ============================================================
   SPECTRA CINEMATIC VIDEO EXPERIENCE
   ============================================================ */
   const SPECTRA_CINEMATIC_VIDEO =
   "../assets/parallel-world/spectra-cinematic.mp4";
let spectraVideoActive = false;

/* ============================================================
   EXPLORE SPECTRA BUTTON
   ============================================================ */
/* ============================================================
   EXPLORE SPECTRA BUTTON
   ============================================================ */
   function setupExploreSpectraButton() {

    const exploreButton =
        document.getElementById(
            "explore-spectra-button"
        );

    if (!exploreButton) {
        console.warn(
            "⚠️ EXPLORE SPECTRA BUTTON NOT FOUND"
        );
        return;
    }


    // ========================================================
    // 🚀 MOVE BUTTON OUTSIDE THE 3D WORLD
    // ========================================================

    document.body.appendChild(
        exploreButton
    );


    // ========================================================
    // 🎯 FORCE BUTTON ABOVE EVERYTHING
    // ========================================================

    exploreButton.style.setProperty(
        "position",
        "fixed",
        "important"
    );

    exploreButton.style.setProperty(
        "left",
        "50%",
        "important"
    );

    exploreButton.style.setProperty(
        "bottom",
        "45px",
        "important"
    );

    exploreButton.style.setProperty(
        "top",
        "auto",
        "important"
    );

    exploreButton.style.setProperty(
        "right",
        "auto",
        "important"
    );

    exploreButton.style.setProperty(
        "transform",
        "translateX(-50%)",
        "important"
    );


    // ========================================================
    // 🌌 GUARANTEE IT IS ABOVE THE PLANET / CANVAS
    // ========================================================

    exploreButton.style.setProperty(
        "z-index",
        "2147483647",
        "important"
    );

    exploreButton.style.setProperty(
        "display",
        "flex",
        "important"
    );

    exploreButton.style.setProperty(
        "visibility",
        "visible",
        "important"
    );

    exploreButton.style.setProperty(
        "opacity",
        "1",
        "important"
    );

    exploreButton.style.setProperty(
        "pointer-events",
        "auto",
        "important"
    );

    exploreButton.style.setProperty(
        "cursor",
        "pointer",
        "important"
    );


    // ========================================================
    // ✨ BUTTON SIZE
    // ========================================================

    exploreButton.style.setProperty(
        "min-width",
        "240px",
        "important"
    );

    exploreButton.style.setProperty(
        "height",
        "60px",
        "important"
    );

    exploreButton.style.setProperty(
        "padding",
        "11px 24px",
        "important"
    );

    exploreButton.style.setProperty(
        "box-sizing",
        "border-box",
        "important"
    );


    // ========================================================
    // 🖱️ CLICK
    // ========================================================

    exploreButton.onclick =
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            console.log(
                "🌌 EXPLORE SPECTRA CLICKED"
            );

            startSpectraCinematic();
        };


    // ========================================================
    // ✨ HOVER
    // ========================================================

    exploreButton.onmouseenter =
        function () {

            exploreButton.style.transform =
                "translateX(-50%) scale(1.04)";
        };


    exploreButton.onmouseleave =
        function () {

            exploreButton.style.transform =
                "translateX(-50%) scale(1)";
        };


    console.log(
        "✨ EXPLORE SPECTRA BUTTON READY"
    );
}
  
/* ============================================================
   START SPECTRA CINEMATIC
   ============================================================ */
   function startSpectraCinematic() {

    if (spectraVideoActive) {
        return;
    }

    spectraVideoActive = true;

    console.log(
        "🎬 STARTING SPECTRA CINEMATIC"
    );


    /* ========================================================
       REMOVE OLD CINEMATIC IF IT EXISTS
       ======================================================== */

    const oldCinematic =
        document.querySelector(
            "#spectra-cinematic-screen"
        );

    if (oldCinematic) {
        oldCinematic.remove();
    }


    /* ========================================================
       CREATE CINEMATIC SCREEN
       ======================================================== */

    const cinematic =
        document.createElement("div");

    cinematic.id =
        "spectra-cinematic-screen";


    cinematic.style.position =
        "fixed";

    cinematic.style.left =
        "0";

    cinematic.style.top =
        "0";

    cinematic.style.width =
        "100vw";

    cinematic.style.height =
        "100vh";

    cinematic.style.zIndex =
        "2147483647";

    cinematic.style.background =
        "#000";

    cinematic.style.display =
        "block";

    cinematic.style.visibility =
        "visible";

    cinematic.style.opacity =
        "1";

    cinematic.style.pointerEvents =
        "auto";

    cinematic.style.overflow =
        "hidden";


    /* ========================================================
       CREATE VIDEO
       ======================================================== */

    const video =
        document.createElement("video");

    video.id =
        "spectra-cinematic-video";

    video.src =
        SPECTRA_CINEMATIC_VIDEO;

    video.playsInline =
        true;

    video.preload =
        "auto";

    video.controls =
        false;

    video.autoplay =
        false;

    video.muted =
        false;

    video.style.position =
        "absolute";

    video.style.left =
        "0";

    video.style.top =
        "0";

    video.style.width =
        "100%";

    video.style.height =
        "100%";

    video.style.objectFit =
        "cover";

    video.style.background =
        "#000";

    video.style.opacity =
        "1";

    video.style.visibility =
        "visible";

    video.style.display =
        "block";

    video.style.zIndex =
        "1";


    /* ========================================================
       LOADING MESSAGE
       ======================================================== */

    const loading =
        document.createElement("div");

    loading.id =
        "spectra-video-loading";

    loading.textContent =
        "ENTERING SPECTRA";


    loading.style.position =
        "absolute";

    loading.style.left =
        "50%";

    loading.style.top =
        "50%";

    loading.style.transform =
        "translate(-50%, -50%)";

    loading.style.zIndex =
        "10";

    loading.style.color =
        "#ffffff";

    loading.style.fontFamily =
        "Arial, sans-serif";

    loading.style.fontSize =
        "14px";

    loading.style.letterSpacing =
        "4px";

    loading.style.pointerEvents =
        "none";


    /* ========================================================
       FREE BUTTON
       ======================================================== */

    const freeButton =
        document.createElement("button");

    freeButton.id =
        "spectra-free-button";

    freeButton.type =
        "button";

    freeButton.textContent =
        "YOU ARE FREE NOW";

    freeButton.style.position =
        "absolute";

    freeButton.style.left =
        "50%";

    freeButton.style.top =
        "50%";
    
    freeButton.style.bottom =
        "auto";
    
    freeButton.style.left =
        "50%";
    
    freeButton.style.transform =
        "translate(-50%, -50%)";
    freeButton.style.transform =
        "translateX(-50%)";

    freeButton.style.zIndex =
        "20";

    freeButton.style.display =
        "none";


    /* ========================================================
       ADD EVERYTHING
       ======================================================== */

    cinematic.appendChild(
        video
    );

    cinematic.appendChild(
        loading
    );

    cinematic.appendChild(
        freeButton
    );

    document.body.appendChild(
        cinematic
    );


    console.log(
        "🎬 SPECTRA CINEMATIC SCREEN CREATED"
    );

    console.log(
        "🎥 VIDEO SOURCE:",
        video.currentSrc || video.src
    );


    /* ========================================================
       VIDEO LOADED
       ======================================================== */

    video.addEventListener(
        "loadedmetadata",
        function () {

            console.log(
                "✅ SPECTRA VIDEO METADATA LOADED"
            );
            console.log(
                "🎥 SPECTRA ORIGINAL VIDEO SIZE:",
                video.videoWidth,
                "x",
                video.videoHeight
            );
            console.log(
                "🎥 VIDEO DURATION:",
                video.duration
            );
           
          
        }
    );


    video.addEventListener(
        "canplay",
        function () {

            console.log(
                "✅ SPECTRA VIDEO CAN PLAY"
            );

            loading.style.opacity =
                "0";

        },
        {
            once: true
        }
    );


    /* ========================================================
       VIDEO ERROR
       ======================================================== */

    video.addEventListener(
        "error",
        function () {

            console.error(
                "❌ SPECTRA VIDEO ERROR"
            );

            if (video.error) {

                console.error(
                    "VIDEO ERROR CODE:",
                    video.error.code
                );

                console.error(
                    "VIDEO ERROR MESSAGE:",
                    video.error.message
                );

            }

            loading.textContent =
                "SPECTRA VIDEO UNAVAILABLE";

            loading.style.opacity =
                "1";

        }
    );


    /* ========================================================
       VIDEO PLAYING
       ======================================================== */

    video.addEventListener(
        "playing",
        function () {

            console.log(
                "▶️ SPECTRA VIDEO IS ACTUALLY PLAYING"
            );

            loading.style.display =
                "none";

        }
    );


    /* ========================================================
       VIDEO ENDED
       ======================================================== */
       video.addEventListener(
        "ended",
        function () {
    
            console.log(
                "✨ SPECTRA CINEMATIC COMPLETE"
            );
    
    
            /* ====================================================
               FADE OUT VIDEO
               ==================================================== */
    
            video.style.transition =
                "opacity 1s ease";
    
            video.style.opacity =
                "0";
    
    
            /* ====================================================
               SHOW YOU ARE FREE NOW
               ==================================================== */
    
            setTimeout(
                function () {
    
                    if (!freeButton) {
                        return;
                    }
    
    
                    freeButton.textContent =
                        "YOU ARE FREE NOW";
    
    
                    freeButton.style.display =
                        "flex";
    
                    freeButton.style.position =
                        "absolute";
    
                    freeButton.style.left =
                        "50%";
    
                    freeButton.style.bottom =
                        "60px";
    
                    freeButton.style.transform =
                        "translateX(-50%)";
    
                    freeButton.style.zIndex =
                        "999999";
    
                    freeButton.style.pointerEvents =
                        "auto";
    
                    freeButton.style.cursor =
                        "pointer";
    
                    freeButton.style.visibility =
                        "visible";
    
                    freeButton.style.opacity =
                        "1";
    
                        freeButton.style.position =
                        "absolute";
                    
                    freeButton.style.left =
                        "50%";
                    
                    freeButton.style.top =
                        "50%";
                    
                    freeButton.style.bottom =
                        "auto";
                    
                    freeButton.style.transform =
                        "translate(-50%, -50%)";
                    
                    freeButton.style.zIndex =
                        "999999";
                    
                    freeButton.style.display =
                        "flex";
                    
                    freeButton.style.alignItems =
                        "center";
                    
                    freeButton.style.justifyContent =
                        "center";
                    
                    freeButton.style.width =
                        "auto";
                    
                    freeButton.style.height =
                        "auto";
                    
                    freeButton.style.padding =
                        "16px 38px";
                    
                    freeButton.style.margin =
                        "0";
                    
                    freeButton.style.border =
                        "1px solid rgba(0,255,255,0.8)";
                    
                    freeButton.style.borderRadius =
                        "8px";
                    
                    freeButton.style.background =
                        "rgba(0,8,16,0.92)";
                    
                    freeButton.style.color =
                        "#ffffff";
                    
                    freeButton.style.fontSize =
                        "15px";
                    
                    freeButton.style.fontFamily =
                        "Arial, sans-serif";
                    
                    freeButton.style.fontWeight =
                        "600";
                    
                    freeButton.style.letterSpacing =
                        "3px";
                    
                    freeButton.style.whiteSpace =
                        "nowrap";
                    
                    freeButton.style.cursor =
                        "pointer";
                    
                    freeButton.style.pointerEvents =
                        "auto";
                    
                    freeButton.style.visibility =
                        "visible";
                    
                    freeButton.style.opacity =
                        "1";
                    
                    freeButton.style.boxShadow =
                        "0 0 25px rgba(0,255,255,0.25)";
                    
                    freeButton.style.outline =
                        "none";
    
                    console.log(
                        "🟢 YOU ARE FREE NOW BUTTON VISIBLE"
                    );
    
                },
                1000
            );
    
        }
    );
    

    /* ========================================================
       FREE BUTTON
       ======================================================== */
       freeButton.addEventListener(
        "click",
        function (event) {
    
            event.preventDefault();
            event.stopPropagation();
    
    
            console.log(
                "🌌 YOU ARE FREE NOW"
            );
    
    
            freeButton.disabled =
                true;
    
    
            freeButton.style.pointerEvents =
                "none";
    
    
            freeButton.style.opacity =
                "0";
    
    
            const cinematic =
                document.querySelector(
                    "#spectra-cinematic-screen"
                );
    
    
            if (cinematic) {
    
                cinematic.style.transition =
                    "opacity 1.2s ease";
    
                cinematic.style.opacity =
                    "0";
    
            }
    
    
            setTimeout(
                function () {
    
                    console.log(
                        "🚀 RETURNING TO SOLAR SYSTEM"
                    );
    
                    closeSpectraCinematic();
    
                },
                1200
            );
    
        }
    );


    /* ========================================================
       LOAD VIDEO
       ======================================================== */

       video.load();

       console.log("▶️ ATTEMPTING TO PLAY SPECTRA");
   
       /* ========================================================
          START PLAYBACK WITH MUTED FALLBACK
          ======================================================== */
   
       video.play()
           .then(function () {
               console.log("▶️ SPECTRA PLAY() SUCCESS");
           })
           .catch(function (error) {
               console.warn(
                   "⚠️ SPECTRA PLAY WAS BLOCKED:",
                   error.name,
                   error.message
               );
   
               // Retry muted to handle autoplay restrictions.
               video.muted = true;
   
               loading.textContent = "STARTING SPECTRA...";
               loading.style.opacity = "1";
               loading.style.pointerEvents = "auto";
               loading.style.cursor = "pointer";
   
               video.play()
                   .then(function () {
                       console.log(
                           "✅ SPECTRA STARTED IN MUTED MODE"
                       );
   
                       loading.textContent = "CLICK TO ENABLE SOUND";
   
                       loading.onclick = function (event) {
                           event.preventDefault();
                           event.stopPropagation();
   
                           video.muted = false;
                           loading.style.display = "none";
   
                           console.log("🔊 SPECTRA AUDIO ENABLED");
                       };
                   })
                   .catch(function (retryError) {
                       console.error(
                           "❌ SPECTRA PLAY FAILED:",
                           retryError.name,
                           retryError.message
                       );
   
                       loading.textContent =
                           "CLICK TO BEGIN SPECTRA";
   
                       loading.style.pointerEvents = "auto";
                       loading.style.cursor = "pointer";
   
                       loading.onclick = function (event) {
                           event.preventDefault();
                           event.stopPropagation();
   
                           loading.textContent = "STARTING SPECTRA...";
                           loading.style.pointerEvents = "none";
   
                           video.muted = true;
   
                           video.play()
                               .then(function () {
                                   console.log(
                                       "✅ SPECTRA VIDEO STARTED"
                                   );
   
                                   loading.textContent =
                                       "CLICK TO ENABLE SOUND";
   
                                   loading.style.pointerEvents = "auto";
                                   loading.style.cursor = "pointer";
   
                                   loading.onclick = function (event) {
                                       event.preventDefault();
                                       event.stopPropagation();
   
                                       video.muted = false;
                                       loading.style.display = "none";
   
                                       console.log(
                                           "🔊 SPECTRA AUDIO ENABLED"
                                       );
                                   };
                               })
                               .catch(function (finalError) {
                                   console.error(
                                       "❌ VIDEO COULD NOT START:",
                                       finalError.name,
                                       finalError.message
                                   );
   
                                   loading.textContent =
                                       "VIDEO FAILED — CHECK CONSOLE";
   
                                   loading.style.pointerEvents = "auto";
                                   loading.style.cursor = "pointer";
                               });
                       };
                   });
           });
   
   } // End startSpectraCinematic()
   
   
   /* ============================================================
      CLOSE SPECTRA CINEMATIC
      ============================================================ */
   
   function closeSpectraCinematic() {
       console.log("↩️ CLOSING SPECTRA CINEMATIC");
   
       const cinematic = document.querySelector(
           "#spectra-cinematic-screen"
       );
   
       const video = document.querySelector(
           "#spectra-cinematic-video"
       );
   
       if (video) {
           video.pause();
           video.currentTime = 0;
           video.removeAttribute("src");
           video.load();
       }
   
       if (cinematic) {
           cinematic.remove();
       }
   
       const exploreButton = document.querySelector(
           "#explore-spectra-button"
       );
   
       if (exploreButton) {
           exploreButton.style.display = "flex";
           exploreButton.style.visibility = "visible";
           exploreButton.style.opacity = "1";
           exploreButton.style.pointerEvents = "auto";
       }
   
       spectraVideoActive = false;
   
       console.log("✅ RETURNED TO SPECTRA");
   }
   
   
   /* ============================================================
      ESC KEY — CLOSE ACTIVE SCREEN
      ============================================================ */
   
   document.addEventListener("keydown", function (event) {
       if (event.key !== "Escape") {
           return;
       }
   
       if (spectraVideoActive) {
           closeSpectraCinematic();
           return;
       }
   
       if (parallelWorldActive) {
           closeParallelWorld();
       }
   });
   
   
   /* ============================================================
      START PARALLEL WORLD WATCHER
      ============================================================ */
   
   watchForSolarSystem();
   
   
   /* ============================================================
      FINAL MESSAGE
      ============================================================ */
   
   console.log("✅ THE ECHO FIELD / SPECTRA SYSTEM READY");  