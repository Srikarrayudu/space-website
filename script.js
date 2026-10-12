// ============================================================
// 🌌 COSMIC THRILLER - JAVASCRIPT
// ============================================================

window.onload = function () {
    window.scrollTo(0, 0);
};

console.log("🌌 COSMIC THRILLER loaded!");

// ============================================================
// 🚀 BASIC VARIABLES
// ============================================================

let astronaut = "srikar";
let planet = "earth";
let fuel = 100;

console.log(astronaut);
console.log(planet);
console.log(fuel);

// ============================================================
// 🧪 JAVASCRIPT OPERATORS
// ============================================================

let gas = 100;
let bonusGas = 50;

console.log(gas + bonusGas);
console.log(gas - bonusGas);
console.log(gas * bonusGas);
console.log(gas / bonusGas);
console.log(gas % bonusGas);
console.log(10 == 10);

// ============================================================
// 👋 FUNCTION
// ============================================================

function greet() {
    alert("🌌 Welcome to the Cosmic Thriller!");
}


// ============================================================
// 🌍 EARTH OBJECT
// ============================================================

let earth = {
    name: "earth",
    moons: 1,
    life: true,
    gravity: "9.8m/s²",
    color: "blue"
};

console.log(earth.name);
console.log(earth.gravity);
console.log(earth.color);
console.log(earth.moons);

// ============================================================
// 🌍 PLANET DATABASE
// ============================================================

let planets = [

    {
        emoji: "🌑",
        name: "Mercury",
        image: "images/mercury.png",
        description:
            "The smallest and fastest planet.",
        moons: 0,
        life: false
    },

    {
        emoji: "🌕",
        name: "Venus",
        image: "images/venus.png",
        description:
            "The hottest planet in our Solar System.",
        moons: 0,
        life: false
    },

    {
        emoji: "🌍",
        name: "Earth",
        image: "images/earth.jpeg1.png",
        description:
            "Our beautiful home planet.",
        moons: 1,
        life: true
    },

    {
        emoji: "🔴",
        name: "Mars",
        image: "images/mars.png",
        description:
            "The Red Planet and future home of astronauts.",
        moons: 2,
        life: "Maybe"
    },

    {
        emoji: "🟠",
        name: "Jupiter",
        image: "images/jupiter.png",
        description:
            "The largest planet in the Solar System.",
        moons: 95,
        life: false
    },

    {
        emoji: "🪐",
        name: "Saturn",
        image: "images/saturn.png",
        description:
            "The planet with beautiful rings.",
        moons: 146,
        life: false
    },

    {
        emoji: "🔵",
        name: "Uranus",
        image: "images/uranus.png",
        description:
            "An icy giant that rotates on its side.",
        moons: 28,
        life: false
    },

    {
        emoji: "🌊",
        name: "Neptune",
        image: "images/neptune.png",
        description:
            "The windiest planet in the Solar System.",
        moons: 16,
        life: false
    }

];

// ============================================================
// 🌌 TITLE TYPING EFFECT
// ============================================================

let title = document.querySelector("#title");

if (title) {

    let text = "🌌 COSMIC THRILLER";
    let index = 0;

    title.textContent = "";

    let typing = setInterval(function () {

        title.textContent += text[index];

        index++;

        if (index >= text.length) {
            clearInterval(typing);
        }

    }, 150);
}

// ============================================================
// 🚀 MAIN MISSION BUTTON
// ============================================================

let button = document.querySelector("#missionBtn");

if (button) {

    let missionStarted = false;

    button.addEventListener("click", function () {

        // Prevent multiple clicks
        if (missionStarted) {
            return;
        }

        missionStarted = true;

        // ====================================================
        // 🌌 WARP EFFECT
        // ====================================================

        document.body.classList.add("warp-stars");

        setTimeout(function () {

            document.body.classList.remove("warp-stars");

        }, 2000);

        button.classList.add("warp");

        document.body.classList.add("warp-mode");

        button.textContent = "🚀 Launching...";

        // ====================================================
        // COUNTDOWN
        // ====================================================
        // ====================================================
// 🚀 FAST COUNTDOWN
// ====================================================

setTimeout(function () {
    button.textContent = "3";
}, 1000);

setTimeout(function () {
    button.textContent = "2";
}, 1400);

setTimeout(function () {
    button.textContent = "1";
}, 1800);

setTimeout(function () {
    button.textContent = "🌌 Explore The Universe";
    button.classList.remove("warp");
    document.body.classList.remove("warp-mode");

    let planetSection = document.querySelector(".planet-section");

    if (planetSection) {
        planetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    let exploreButton = button.cloneNode(true);

    button.parentNode.replaceChild(
        exploreButton,
        button
    );

    setTimeout(function () {

        button = exploreButton;
    
        button.onclick = function () {
            console.log("🌌 EXPLORE UNIVERSE CLICKED");
            startUniverse();
        };
    
    }, 2500);
},2800);
    });
}

      

// ============================================================
// 🛰 PLANET INFORMATION VARIABLES
// ============================================================

let grid =
    document.querySelector(".planet-grid");

let info =
    document.querySelector("#planetInfo");

let currentPlanet = 0;

// ============================================================
// 🪐 SHOW PLANET
// ============================================================

function showPlanet(index) {

    currentPlanet = index;

    if (!info) {
        return;
    }

    info.innerHTML = `

        <div class="fade-in">

            <h2>
                🛰 Mission Control
            </h2>

            <h3>
                ${planets[index].emoji}
                ${planets[index].name}
            </h3>

            <p>
                🌙 Moons :
                ${planets[index].moons}
            </p>

            <p>
                🌍 Life :
                ${planets[index].life}
            </p>

            <p>
                📖
                ${planets[index].description}
            </p>

            <button id="nextMission">
                🚀 Continue Journey
            </button>

        </div>

    `;

    info.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    let nextButton =
        document.querySelector("#nextMission");

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                console.log(
                    "🚀 CONTINUE JOURNEY CLICKED"
                );

                startHyperspace();

                setTimeout(function () {

                    let nextPlanet =
                        currentPlanet + 1;

                    if (
                        nextPlanet >=
                        planets.length
                    ) {
                        nextPlanet = 0;
                    }

                    showPlanet(nextPlanet);

                }, 10000);

            }
        );
    }
}

// ============================================================
// 🪐 PLANET CARD GENERATOR
// ============================================================

if (grid) {

    grid.innerHTML = "";

    for (let i = 0; i < planets.length; i++) {

        let card =
            document.createElement("div");

        card.className =
            "planet-card";

        card.innerHTML = `

            <h3>
                ${planets[i].emoji}
                ${planets[i].name}
            </h3>

            <p>
                ${planets[i].description}
            </p>

            <button
                type="button"
                class="launchBtn"
            >
                🚀 Launch
            </button>

        `;

        grid.appendChild(card);

        // ==================================================
        // 🚀 PLANET LAUNCH BUTTON
        // ==================================================

        let launchButton =
            card.querySelector(".launchBtn");

        if (launchButton) {

            launchButton.addEventListener(
                "click",
                function () {

                    console.log(
                        "🪐 PLANET BUTTON CLICKED:",
                        planets[i].name
                    );

                    currentPlanet = i;

                    // ======================================
                    // Scroll to Mission Control
                    // ======================================

                    if (info) {

                        info.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                    // ======================================
                    // Show loading screen
                    // ======================================

                    if (info) {

                        info.innerHTML = `

                            <h2>
                                🛰 MISSION CONTROL
                            </h2>

                            <p id="status">
                                🔗 Connecting to
                                ${planets[i].name}...
                            </p>

                            <div class="loading-bar">

                                <div
                                    class="loading-fill"
                                    style="width:0%"
                                ></div>

                            </div>

                        `;

                    }

                    let fill =
                        info
                            ? info.querySelector(
                                ".loading-fill"
                            )
                            : null;

                    let status =
                        info
                            ? info.querySelector(
                                "#status"
                            )
                            : null;

                    // ======================================
                    // STEP 1
                    // ======================================

                    setTimeout(function () {

                        if (fill) {
                            fill.style.width = "35%";
                        }

                        if (status) {

                            status.textContent =
                                "🛰 Scanning " +
                                planets[i].name +
                                "...";

                        }

                    }, 1000);

                    // ======================================
                    // STEP 2
                    // ======================================

                    setTimeout(function () {

                        if (fill) {
                            fill.style.width = "70%";
                        }

                        if (status) {

                            status.textContent =
                                "📡 Receiving Planet Data...";

                        }

                    }, 2000);

                    // ======================================
                    // STEP 3
                    // ======================================

                    setTimeout(function () {

                        if (fill) {
                            fill.style.width = "100%";
                        }

                        if (status) {

                            status.textContent =
                                "✅ Planet Locked";

                        }

                    }, 3000);

                    // ======================================
                    // SHOW PLANET INFORMATION
                    // ======================================

                    setTimeout(function () {

                        showPlanet(i);

                    }, 4000);

                }
            );

        }
    }
}

// ============================================================
// 🚀 HYPERSPACE
// ============================================================

function startHyperspace() {

    let hyperspace =
        document.querySelector("#hyperspace");

    let text =
        document.querySelector(".hyperspace-text");

    if (!hyperspace) {

        console.error(
            "❌ #hyperspace not found"
        );

        return;
    }

    // ========================================================
    // CREATE STAR LAYERS
    // ========================================================

    let far =
        document.createElement("div");

    far.className =
        "star-layer-far";

    let mid =
        document.createElement("div");

    mid.className =
        "star-layer-mid";

    let near =
        document.createElement("div");

    near.className =
        "star-layer-near";

    hyperspace.appendChild(far);
    hyperspace.appendChild(mid);
    hyperspace.appendChild(near);

    // ========================================================
    // DESTINATION PLANET
    // ========================================================

    let destinationIndex =
        currentPlanet + 1;

    if (
        destinationIndex >=
        planets.length
    ) {

        destinationIndex = 0;

    }

    let destinationPlanet =
        document.createElement("img");

    destinationPlanet.className =
        "destination-planet";

    destinationPlanet.src =
        planets[destinationIndex].image;

    destinationPlanet.alt =
        planets[destinationIndex].name;

    hyperspace.appendChild(
        destinationPlanet
    );

    // ========================================================
    // COSMIC PARTICLES
    // ========================================================

    let particles = [];

    for (let i = 0; i < 45; i++) {

        let particle =
            document.createElement("div");

        particle.className =
            "cosmic-particle";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        let angle =
            Math.random() *
            Math.PI *
            2;

        let distance =
            300 +
            Math.random() *
            900;

        let x =
            Math.cos(angle) *
            distance;

        let y =
            Math.sin(angle) *
            distance;

        particle.style.setProperty(
            "--particle-x",
            x + "px"
        );

        particle.style.setProperty(
            "--particle-y",
            y + "px"
        );

        particle.style.animationDuration =
            (
                3.5 +
                Math.random() * 3.5
            ) + "s";

        particle.style.animationDelay =
            Math.random() * 2 + "s";

        let size =
            2 +
            Math.random() * 4;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        hyperspace.appendChild(
            particle
        );

        particles.push(
            particle
        );
    }

    // ========================================================
    // ACTIVATE HYPERSPACE
    // ========================================================

    hyperspace.classList.add(
        "active"
    );

    document.body.classList.add(
        "warp-stars"
    );

    hyperspace.classList.remove(
        "deep-space",
        "cosmic-flight",
        "destination",
        "departure"
    );

    hyperspace.classList.add(
        "departure"
    );

    if (text) {

        text.textContent =
            "🚀 DEPARTING FROM " +
            planets[currentPlanet]
                .name
                .toUpperCase();

    }

    // ========================================================
    // DEEP SPACE
    // ========================================================

    setTimeout(function () {

        if (text) {

            text.textContent =
                "🌌 ENTERING DEEP SPACE";

        }

        hyperspace.classList.remove(
            "departure"
        );

        hyperspace.classList.add(
            "deep-space"
        );

    }, 2500);

    // ========================================================
    // COSMIC FLIGHT
    // ========================================================

    setTimeout(function () {

        if (text) {

            text.textContent =
                "✨ TRAVELLING THROUGH THE COSMOS";

        }

        hyperspace.classList.remove(
            "deep-space"
        );

        hyperspace.classList.add(
            "cosmic-flight"
        );

        particles.forEach(
            function (particle) {

                particle.style.animationDuration =
                    (
                        3.5 +
                        Math.random() * 3
                    ) + "s";

            }
        );

    }, 3500);

    // ========================================================
    // DESTINATION APPROACHING
    // ========================================================

    setTimeout(function () {

        if (text) {

            text.textContent =
                "🛰 DESTINATION APPROACHING";

        }

        hyperspace.classList.remove(
            "cosmic-flight"
        );

        hyperspace.classList.add(
            "destination"
        );

    }, 7500);

    // ========================================================
    // DESTINATION LOCKED
    // ========================================================

    setTimeout(function () {

        if (text) {

            text.textContent =
                "✅ DESTINATION LOCKED";

        }

    }, 9000);

    // ========================================================
    // CLEAN UP HYPERSPACE
    // ========================================================

    setTimeout(function () {

        far.remove();
        mid.remove();
        near.remove();

        particles.forEach(
            function (particle) {

                particle.remove();

            }
        );

        destinationPlanet.remove();

        hyperspace.classList.remove(
            "active",
            "deep-space",
            "cosmic-flight",
            "destination",
            "departure"
        );

        document.body.classList.remove(
            "warp-stars"
        );

    }, 10000);
}

// ============================================================
// 🌌 START UNIVERSE — STABLE VERSION
// ============================================================

function startUniverse() {

    console.log("🚀 STARTING 3D UNIVERSE");

    // --------------------------------------------------------
    // PREVENT DUPLICATE UNIVERSE SCREENS
    // --------------------------------------------------------

    if (document.querySelector("#universe-screen")) {
        console.log("⚠️ Universe already running");
        return;
    }

    // --------------------------------------------------------
    // FIND EXISTING THREE.JS CONTAINER
    // --------------------------------------------------------

    const universe3D =
        document.querySelector("#universe-3d");

    if (!universe3D) {

        console.error(
            "❌ #universe-3d NOT FOUND"
        );

        return;
    }

    console.log(
        "✅ #universe-3d found:",
        universe3D
    );

    // --------------------------------------------------------
    // CREATE FULLSCREEN UNIVERSE SCREEN
    // --------------------------------------------------------

    const universeScreen =
        document.createElement("div");

    universeScreen.id =
        "universe-screen";

    universeScreen.style.position = "fixed";
    universeScreen.style.top = "0";
    universeScreen.style.left = "0";
    universeScreen.style.width = "100vw";
    universeScreen.style.height = "100vh";
    universeScreen.style.zIndex = "100";
    universeScreen.style.background = "#000";
    universeScreen.style.overflow = "hidden";

    // --------------------------------------------------------
    // CREATE HUD
    // --------------------------------------------------------

    const universeContent =
        document.createElement("div");

    universeContent.id =
        "universe-content";

    universeContent.innerHTML = `

        <h1>
            🌌 WELCOME TO THE UNIVERSE
        </h1>

        <p>
            🚀 Preparing deep-space journey...
        </p>

        <button id="exit-universe">
            ← Return to Cosmic Thriller
        </button>

    `;

    universeContent.style.position = "absolute";
    universeContent.style.top = "0";
    universeContent.style.left = "0";
    universeContent.style.width = "100%";
    universeContent.style.height = "100%";
    universeContent.style.zIndex = "102";
    universeContent.style.pointerEvents = "none";

    // --------------------------------------------------------
    // MOVE THREE.JS CONTAINER INTO UNIVERSE SCREEN
    // --------------------------------------------------------

    universeScreen.appendChild(
        universe3D
    );

    universeScreen.appendChild(
        universeContent
    );

    document.body.appendChild(
        universeScreen
    );

    // --------------------------------------------------------
    // FORCE THREE.JS CONTAINER TO FULLSCREEN
    // --------------------------------------------------------

    universe3D.style.position = "absolute";
    universe3D.style.top = "0";
    universe3D.style.left = "0";
    universe3D.style.width = "100vw";
    universe3D.style.height = "100vh";

    universe3D.style.display = "block";
    universe3D.style.visibility = "visible";
    universe3D.style.opacity = "1";

    universe3D.style.zIndex = "101";

    universe3D.style.pointerEvents = "auto";

    // --------------------------------------------------------
    // ACTIVATE UNIVERSE MODE
    // --------------------------------------------------------

    document.body.classList.add(
        "universe-mode"
    );

    console.log(
        "🌌 Universe screen created"
    );

    console.log(
        "📐 Universe size:",
        universe3D.offsetWidth,
        "x",
        universe3D.offsetHeight
    );

    // --------------------------------------------------------
    // START THREE.JS
    // --------------------------------------------------------

    console.log(
        "🚀 Dispatching start-universe event"
    );

    window.dispatchEvent(
        new CustomEvent(
            "start-universe"
        )
    );

    // --------------------------------------------------------
    // ENABLE RETURN BUTTON
    // --------------------------------------------------------

    const exitButton =
        universeScreen.querySelector(
            "#exit-universe"
        );

    if (exitButton) {

        exitButton.style.pointerEvents =
            "auto";

        exitButton.addEventListener(
            "click",
            function () {

                console.log(
                    "↩️ RETURNING TO COSMIC THRILLER"
                );

                // ------------------------------------------------
                // CLEAN UNIVERSE
                // ------------------------------------------------

                universeScreen.remove();

                document.body.classList.remove(
                    "universe-mode"
                );

                // ------------------------------------------------
                // CLEAN PARALLEL WORLD
                // ------------------------------------------------

                const cleanupIds = [

                    "parallel-world-entry",
                    "explore-spectra-button",
                    "spectra-cinematic-screen",
                    "parallel-world-scene",
                    "parallel-portal-transition",
                    "leave-parallel-world"

                ];

                cleanupIds.forEach(
                    function (id) {

                        const element =
                            document.getElementById(id);

                        if (element) {
                            element.remove();
                        }

                    }
                );

                // ------------------------------------------------
                // PUT THREE.JS CONTAINER BACK
                // ------------------------------------------------

                document.body.appendChild(
                    universe3D
                );

                universe3D.style.display =
                    "none";

                universe3D.style.visibility =
                    "hidden";

                universe3D.style.opacity =
                    "0";

                console.log(
                    "↩️ RETURNED TO COSMIC THRILLER"
                );

            }
        );

    }

}
// ============================================================
// 🌌 CONNECT START-UNIVERSE EVENT
// ============================================================

// This is intentionally NOT calling startUniverse().
// Your Three.js script can listen for this event.

console.log(
    "🛰 Cosmic Thriller JavaScript ready."
);