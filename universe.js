// ============================================================
// 🌌 COSMIC THRILLER
// STAGE 1 — CINEMATIC SOLAR SYSTEM
// ============================================================

import * as THREE from
    "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { OrbitControls } from
    "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";
console.log("🌌 COSMIC THRILLER — CINEMATIC UNIVERSE LOADED");


// ============================================================
// 🎬 GLOBAL VARIABLES
// ============================================================

let scene;
let camera;
let renderer;
let controls=null;
    const textureLoader = new THREE.TextureLoader();
let stars;
let solarSystem;

let universeStarted = false;
let animationLoopStarted=false;
let cinematicControlUnlocked = false;

let clock = new THREE.Clock();

let planetObjects = [];

let cinematicMode = true;

let selectedPlanet = null;
// ============================================================
// 🌙 MOON ORBIT
// ============================================================

let moonOrbitAngle = 0;
// ============================================================
// 🚀 PLANET TRAVEL MISSION
// ============================================================

let travelMissionActive = false;
let travelMissionPlanet = null;
let travelMissionStartTime = 0;

// ============================================================
// 🪐 PLANET DATA
// ============================================================

const planets = [

    {
        name: "Mercury",
        color: 0x9b8f83,
        size: 1.4,
        distance: 12,
        speed: 0.004,
        description:
            "The smallest planet and the closest world to the Sun."
    },

    {
        name: "Venus",
        color: 0xd9a45c,
        size: 1.9,
        distance: 17,
        speed: 0.003,
        description:
            "A world of extreme heat hidden beneath thick clouds."
    },

    {
        name: "Earth",
        color: 0x2f73c9,
        size: 2.1,
        distance: 22,
        speed: 0.0025,
        description:
            "Our home world — the only planet currently known to support life."
    },

    {
        name: "Mars",
        color: 0xb64b32,
        size: 1.7,
        distance: 28,
        speed: 0.002,
        description:
            "The red planet, home to giant volcanoes and ancient valleys."
    },

    {
        name: "Jupiter",
        color: 0xc99162,
        size: 5.5,
        distance: 39,
        speed: 0.0012,
        description:
            "The largest planet in our Solar System."
    },

    {
        name: "Saturn",
        color: 0xd6b77a,
        size: 4.8,
        distance: 51,
        speed: 0.0009,
        description:
            "A giant world surrounded by its spectacular ring system."
    },

    {
        name: "Uranus",
        color: 0x72cbd2,
        size: 3.2,
        distance: 63,
        speed: 0.0006,
        description:
            "An ice giant rotating dramatically on its side."
    },

    {
        name: "Neptune",
        color: 0x315ac7,
        size: 3.1,
        distance: 75,
        speed: 0.0005,
        description:
            "A distant blue world with some of the fastest winds in the Solar System."
    }

];


// ============================================================
// 🚀 START UNIVERSE
// ============================================================

function startUniverse3D() {
    if (universeStarted) {

        console.log("🔄 RESTARTING COSMIC UNIVERSE");
    
        // ========================================================
        // 🛑 STOP THE PREVIOUS UNIVERSE LOOP
        // ========================================================
    
        universeStarted = false;
        animationLoopStarted = false;
    
        // ========================================================
        // 🚀 RESET MISSION STATE
        // ========================================================
    
        travelMissionActive = false;
        travelMissionPlanet = null;
        travelMissionStartTime = 0;
    
        selectedPlanet = null;
        moonOrbitAngle = 0;
    
        // ========================================================
        // 🎥 CLEAN OLD CAMERA CONTROLS
        // ========================================================
    
        if (controls) {
            controls.dispose();
            controls = null;
        }
    
        // ========================================================
        // 🖥 CLEAN OLD RENDERER
        // ========================================================
    
        if (renderer) {
    
            if (renderer.domElement) {
                renderer.domElement.remove();
            }
    
            renderer.dispose();
            renderer = null;
        }
    
        // ========================================================
        // 🌌 RESET THREE.JS STATE
        // ========================================================
    
        planetObjects = [];
    
        scene = null;
        camera = null;
        stars = null;
        solarSystem = null;
    
        // Reset clock for the new journey
        clock.stop();
        clock.start();
    }
    
    const container =
        document.querySelector("#universe-3d");

    if (!container) {

        console.error(
            "❌ #universe-3d NOT FOUND"
        );

        return;
    }


    // ========================================================
    // 🌌 SCENE
    // ========================================================

    scene =
        new THREE.Scene();

    scene.background =
        new THREE.Color(0x000005);


    // ========================================================
    // 🎥 CAMERA
    // ========================================================

    camera =
        new THREE.PerspectiveCamera(
            55,
            window.innerWidth /
            window.innerHeight,
            0.1,
            5000
        );

    camera.position.set(
        0,
        12,
        350
    );


    // ========================================================
    // 🖥 RENDERER
    // ========================================================

    renderer =
    new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance"
    });

renderer.setClearColor(
    0x000005,
    1
);

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            1.25
        )
    );

    renderer.outputColorSpace =
        THREE.SRGBColorSpace;

    renderer.toneMapping =
        THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 1.25;


    container.innerHTML = "";

    container.appendChild(
        renderer.domElement
    );


    // ========================================================
    // 🖱️ CAMERA CONTROLS
    // ========================================================
    controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.8;
    
    controls.rotateSpeed = 0.55;
    controls.panSpeed = 0.35;
    
    controls.minDistance = 4;
    controls.maxDistance = 300;
    
    controls.minPolarAngle = 0.15;
    controls.maxPolarAngle = Math.PI - 0.15;
    
    controls.screenSpacePanning = false;
    
    controls.target.set(0, 0, 0);
    controls.update();
    controls.enabled = false;
// ========================================================
// 🖱️ MANUAL MOUSE-WHEEL ZOOM
// ========================================================

    // ========================================================
    // 💡 LIGHTING
    // ========================================================

    const ambientLight =
        new THREE.AmbientLight(
            0x202030,
            0.35
        );

    scene.add(
        ambientLight
    );


    const sunLight =
        new THREE.PointLight(
            0xffffff,
            5000,
            1000
        );
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 1024;
        sunLight.shadow.mapSize.height = 1024;
    sunLight.position.set(
        0,
        0,
        0
    );

    scene.add(
        sunLight
    );


    // ========================================================
    // ⭐ STAR FIELD
    // ========================================================

    createStars();


    // ========================================================
    // ☀️ SOLAR SYSTEM
    // ========================================================

    createSolarSystem();


    // ========================================================
    // 🎬 CINEMATIC UI
    // ========================================================

    createCinematicInterface();


    // ========================================================
    // 🎬 BEGIN CINEMATIC
    // ========================================================

    universeStarted = true;

    cinematicSolarSystemReveal();
    if (!animationLoopStarted) {
        animationLoopStarted = true;
        animate();
    }

    // ========================================================
    // 🔄 START LOOP
    // ========================================================



}


// ============================================================
// ⭐ CREATE STAR FIELD
// ============================================================

function createStars() {

    const geometry =
        new THREE.BufferGeometry();

    const starCount = 5000;

    const positions =
        new Float32Array(
            starCount * 3
        );

    for (
        let i = 0;
        i < starCount * 3;
        i++
    ) {

        positions[i] =
            (Math.random() - 0.5) *
            2500;

    }

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            positions,
            3
        )
    );


    const material =
        new THREE.PointsMaterial({

            color: 0xffffff,

            size: 1.7,

            sizeAttenuation: true

        });


    stars =
        new THREE.Points(
            geometry,
            material
        );

    scene.add(
        stars
    );

}


// ============================================================
// ☀️ CREATE SOLAR SYSTEM
// ============================================================

function createSolarSystem() {

    solarSystem =
        new THREE.Group();

    scene.add(
        solarSystem
    );


//SUN
// ========================================================
// ☀️ SUN
// ========================================================

console.log("☀️ SUN CODE REACHED");

const sunGeometry =
    new THREE.SphereGeometry(
        6,
        64,
        64
    );

const sunTexture =
    textureLoader.load(
        "sun.jpg",

        function () {
            console.log("☀️ SUN TEXTURE LOADED");
        },

        undefined,

        function (error) {
            console.error(
                "❌ SUN TEXTURE FAILED:",
                error
            );
        }
    );

sunTexture.colorSpace =
    THREE.SRGBColorSpace;

const sunMaterial =
    new THREE.MeshBasicMaterial({
        map: sunTexture
    });

const sun =
    new THREE.Mesh(
        sunGeometry,
        sunMaterial
    );

sun.name = "Sun";

solarSystem.add(sun);
    // ========================================================
    // 🌟 SUN GLOW
    // ========================================================

    const glowGeometry =
        new THREE.SphereGeometry(
            7.5,
            32,
            32
        );

    const glowMaterial =
        new THREE.MeshBasicMaterial({

            color: 0xff8c00,

            transparent: true,

            opacity: 0.18,

            blending:
                THREE.AdditiveBlending,

            depthWrite: false

        });

    const glow =
        new THREE.Mesh(
            glowGeometry,
            glowMaterial
        );

    solarSystem.add(
        glow
    );


    // ========================================================
    // 🪐 PLANETS
    // ========================================================

    planets.forEach(
        function (data, index) {

            createPlanet(
                data,
                index
            );

        }
    );

}


// ============================================================
// 🪐 CREATE PLANET
// ============================================================

function createPlanet(
    data,
    index
) {

    const orbit =
        new THREE.Group();

    solarSystem.add(
        orbit
    );


    // ========================================================
    // ORBIT PATH
    // ========================================================

    const orbitCurve =
        new THREE.EllipseCurve(
            0,
            0,
            data.distance,
            data.distance,
            0,
            Math.PI * 2,
            false,
            0
        );

    const points =
        orbitCurve
            .getPoints(128)
            .map(
                function (point) {

                    return new THREE.Vector3(
                        point.x,
                        0,
                        point.y
                    );

                }
            );

    const orbitGeometry =
        new THREE.BufferGeometry()
            .setFromPoints(
                points
            );

    const orbitMaterial =
        new THREE.LineBasicMaterial({

            color: 0x28506b,

            transparent: true,

            opacity: 0.32

        });

    const orbitLine =
        new THREE.LineLoop(
            orbitGeometry,
            orbitMaterial
        );

    solarSystem.add(
        orbitLine
    );


    // ========================================================
    // PLANET
    // ========================================================

    const geometry =
        new THREE.SphereGeometry(
            data.size,
            48,
            48
        );

            // ========================================================
// 🌍 REAL PLANET TEXTURE
// ========================================================

const planetTextures = {

        Mercury: "mercury.jpg",
        Venus: "venus.jpg",
        Earth: "earth.jpg",
        Mars: "mars.jpg",
        Jupiter: "jupiter.jpg",
        Saturn: "saturn.jpg",
        Uranus: "uranus.jpg",
        Neptune: "neptune.jpg"
    
    

};

const planetTexture =
    textureLoader.load(
        planetTextures[data.name],

        function () {
            console.log(
                "🪐 TEXTURE LOADED:",
                data.name
            );
        },

        undefined,

        function (error) {
            console.error(
                "❌ TEXTURE FAILED:",
                data.name,
                error
            );
        }
    );

planetTexture.colorSpace =
    THREE.SRGBColorSpace;

const material =
    new THREE.MeshStandardMaterial({

        map: planetTexture,

        roughness: 0.75,

        metalness: 0.05

    });

    const planet =
        new THREE.Mesh(
            geometry,
            material
        );
        planet.castShadow = true;
        planet.receiveShadow = true;
    // ========================================================
// 🌌 INITIAL ORBIT POSITION
// ========================================================

const angle =
index * 0.78;

planet.position.set(
Math.cos(angle) * data.distance,
0,
Math.sin(angle) * data.distance
);
    

    planet.name =
        data.name;

    planet.userData = {

        index: index,

        name: data.name,

        description:
            data.description

    };


    orbit.add(
        planet
    );
// ========================================================
// 🌍 EARTH ATMOSPHERE
// ========================================================

if (data.name === "Earth") {

    const atmosphereGeometry =
        new THREE.SphereGeometry(
            data.size * 1.10,
            48,
            48
        );

    const atmosphereMaterial =
        new THREE.MeshBasicMaterial({

            color: 0x4fa8ff,

            transparent: true,

            opacity: 0.20,

            side:
                THREE.BackSide,

            blending:
                THREE.AdditiveBlending,

            depthWrite:
                false

        });

    const atmosphere =
        new THREE.Mesh(
            atmosphereGeometry,
            atmosphereMaterial
        );

    planet.add(
        atmosphere
    );

    planet.userData.atmosphere =
        atmosphere;

}

  
    // ========================================================
// 🌙 EARTH'S MOON
// ========================================================

if (data.name === "Earth") {

    const moonGeometry =
        new THREE.SphereGeometry(
            0.55,
            32,
            32
        );

    const moonTexture =
        textureLoader.load(
            "moon.jpg"
        );

    moonTexture.colorSpace =
        THREE.SRGBColorSpace;

    const moonMaterial =
        new THREE.MeshStandardMaterial({
            map: moonTexture,
            roughness: 0.9,
            metalness: 0
        });

    const moon =
        new THREE.Mesh(
            moonGeometry,
            moonMaterial
        );

    moon.position.set(
        2.5,
        0,
        0
    );

    moon.castShadow = true;
    moon.receiveShadow = true;

    moon.name = "Moon";

    planet.add(moon);

    planet.userData.moon = moon;
}

    // ========================================================
    // 🪐 SATURN RINGS
    // ========================================================

    if (data.name === "Saturn") {

        // ========================================================
        // 🪐 SATURN RING SYSTEM
        // ========================================================
    
        const ringSystem =
            new THREE.Group();
    
        ringSystem.rotation.x =
            Math.PI / 2.4;
    
    
        // --------------------------------------------------------
        // Create visible segmented ring layers
        // --------------------------------------------------------
        const ringLayers = [

            {
                inner:
                    data.size * 1.35,
        
                outer:
                    data.size * 1.43,
        
                opacity:
                    0.85
            },
        
            {
                inner:
                    data.size * 1.47,
        
                outer:
                    data.size * 1.54,
        
                opacity:
                    0.55
            },
        
            {
                inner:
                    data.size * 1.58,
        
                outer:
                    data.size * 1.68,
        
                opacity:
                    0.75
            },
        
            {
                inner:
                    data.size * 1.72,
        
                outer:
                    data.size * 1.79,
        
                opacity:
                    0.48
            },
        
            {
                inner:
                    data.size * 1.84,
        
                outer:
                    data.size * 1.94,
        
                opacity:
                    0.70
            },
        
            {
                inner:
                    data.size * 1.98,
        
                outer:
                    data.size * 2.15,
        
                opacity:
                    0.52
            }
        
        ];
    
        ringLayers.forEach(
            function (layer, layerIndex) {
    
                const segments =
                    48;
    
                const gap =
                    0.012;
    
                const segmentAngle =
                    (Math.PI * 2) /
                    segments;
    
    
                for (
                    let i = 0;
                    i < segments;
                    i++
                ) {
    
                    const startAngle =
                        i *
                        segmentAngle +
                        gap;
    
                    const visibleAngle =
                        segmentAngle -
                        gap * 2;
    
    
                    const geometry =
                        new THREE.RingGeometry(
    
                            layer.inner,
    
                            layer.outer,
    
                            16,
    
                            1,
    
                            startAngle,
    
                            visibleAngle
    
                        );
    
    
                    const material =
                        new THREE.MeshBasicMaterial({
    
                            color:
                                layerIndex === 1
                                    ? 0xa99878
                                    : 0xc7b58a,
    
                            side:
                                THREE.DoubleSide,
    
                            transparent:
                                true,
    
                            opacity:
                                layer.opacity,
    
                            depthWrite:
                                false
    
                        });
    
                        const segment =
    new THREE.Mesh(
        geometry,
        material
    );


// 🌓 SATURN RING SHADOW

segment.castShadow = true;
segment.receiveShadow = true;


ringSystem.add(
    segment
);
    
                }
    
            }
        );
    
    
        planet.add(
            ringSystem
        );
    // ========================================================
// 🌑 SATURN RING SHADOW
// ========================================================

const shadowGeometry =
new THREE.RingGeometry(
    data.size * 0.35,
    data.size * 0.82,
    64
);

const shadowMaterial =
new THREE.MeshBasicMaterial({

    color: 0x050505,

    transparent: true,

    opacity: 0.22,

    side:
        THREE.DoubleSide,

    depthWrite: false,

    depthTest: true

});

const ringShadow =
new THREE.Mesh(
    shadowGeometry,
    shadowMaterial
);

ringShadow.rotation.x =
Math.PI / 2.4;

ringShadow.scale.y =
0.22;

planet.add(
ringShadow
);
    
        // Save ring system for animation
    
        planet.userData.ringSystem =
            ringSystem;
    
    }
    planetObjects.push({
        mesh: planet,
        orbit: orbit,
        data: data
    });

}


// ============================================================
// 🎬 CINEMATIC INTERFACE
// ============================================================

function createCinematicInterface() {

    const content =
        document.querySelector(
            "#universe-content"
        );

    if (!content) {
        return;
    }


    content.innerHTML = `

        <div id="cosmic-hud">

            <div id="scene-title">
                THE SOLAR SYSTEM
            </div>

            <div id="scene-subtitle">
                Our journey begins here...
            </div>

            <div id="planet-info-panel">

                <div id="selected-planet-name"></div>

                <div id="selected-planet-description"></div>

            </div>

            <div id="cinematic-instruction">
                DRAG TO EXPLORE • SCROLL TO TRAVEL
            </div>

            <button id="exit-universe">
                ← RETURN
            </button>

        </div>

    `;


    // ========================================================
    // 🎨 HUD STYLE
    // ========================================================
    const oldStyle =
    document.querySelector(
        "#cinematic-universe-style"
    );

if (oldStyle) {
    oldStyle.remove();
}

const style =
    document.createElement(
        "style"
    );

style.id =
    "cinematic-universe-style";
    style.textContent = `

        #cosmic-hud {

            position: absolute;

            inset: 0;

            pointer-events: none;

            font-family: Arial, sans-serif;

            color: white;

            text-align: center;

        }

        #scene-title {

            position: absolute;

            top: 9%;

            left: 50%;

            transform:
                translateX(-50%);

            font-size:
                clamp(28px, 4vw, 58px);

            letter-spacing:
                8px;

            color: white;

            text-shadow:
                0 0 12px cyan,
                0 0 30px cyan;

            opacity: 0;

            transition:
                opacity 2s ease;

        }

        #scene-subtitle {

            position: absolute;

            top: 18%;

            left: 50%;

            transform:
                translateX(-50%);

            font-size: 20px;

            letter-spacing: 3px;

            color: #ccefff;

            opacity: 0;

            transition:
                opacity 2s ease;

        }

        #planet-info-panel {

            position: absolute;

            left: 50%;

            bottom: 13%;

            transform:
                translateX(-50%);

            width:
                min(500px, 80vw);

            padding: 18px 25px;

            background:
                rgba(0, 10, 25, 0.62);

            border:
                1px solid rgba(
                    0,
                    255,
                    255,
                    0.5
                );

            border-radius: 15px;

            backdrop-filter:
                blur(8px);

            opacity: 0;

            transition:
                opacity 0.8s ease;

        }

        #selected-planet-name {

            font-size: 28px;

            color: cyan;

            margin-bottom: 8px;

            text-shadow:
                0 0 12px cyan;

        }

        #selected-planet-description {

            font-size: 16px;

            color: #dff;

            line-height: 1.5;

        }

        #cinematic-instruction {

            position: absolute;

            bottom: 4%;

            left: 50%;

            transform:
                translateX(-50%);

            font-size: 12px;

            letter-spacing: 3px;

            color:
                rgba(255,255,255,0.65);

            opacity: 0;

            transition:
                opacity 2s ease;

        }

        #exit-universe {

            position: fixed;
        
            top: 30px;
        
            right: 30px;
        
            left: auto;
        
            bottom: auto;
        
            pointer-events: auto;
        
            margin: 0;
        
            padding: 11px 18px;
        
            width: auto;
        
            min-width: 0;
        
            height: auto;
        
            background:
                rgba(0, 8, 18, 0.92);
        
            color: #dffbff;
        
            border:
                1px solid rgba(150, 235, 255, 0.8);
        
            border-radius: 30px;
        
            font-family: Arial, sans-serif;
        
            font-size: 11px;
        
            font-weight: 500;
        
            letter-spacing: 0.12em;
        
            white-space: nowrap;
        
            cursor: pointer;
        
            z-index: 2147483647;
        
            box-shadow:
                0 0 15px rgba(80, 210, 255, 0.35),
                0 0 35px rgba(50, 150, 255, 0.15);
        
            backdrop-filter: blur(8px);
        
            -webkit-backdrop-filter: blur(8px);
        
            transition:
                background 0.3s ease,
                box-shadow 0.3s ease,
                transform 0.3s ease;
        
        }
        
        #exit-universe:hover {
        
            background:
                rgba(10, 40, 60, 0.96);
        
            color: #ffffff;
        
            transform: translateY(-2px);
        
            box-shadow:
                0 0 20px rgba(80, 220, 255, 0.65),
                0 0 50px rgba(50, 150, 255, 0.25);
        
        }

        #exit-universe:hover {

            background:
                rgba(0,255,255,0.15);

        }

    `;


    document.head.appendChild(
        style
    );


    setTimeout(
        function () {

            const title =
                document.querySelector(
                    "#scene-title"
                );

            const subtitle =
                document.querySelector(
                    "#scene-subtitle"
                );

            const instruction =
                document.querySelector(
                    "#cinematic-instruction"
                );

            if (title)
                title.style.opacity = "1";

            if (subtitle)
                subtitle.style.opacity = "1";

            if (instruction)
                instruction.style.opacity = "1";

        },
        800
    );

}

// ============================================================
// 🎬 CINEMATIC SOLAR SYSTEM ARRIVAL
// ============================================================
// ============================================================
// 🎬 SMOOTH SOLAR SYSTEM ARRIVAL
// ============================================================
function cinematicSolarSystemReveal() {

    console.log(
        "🎬 BEGINNING SMOOTH SOLAR SYSTEM ARRIVAL"
    );

    cinematicMode = true;

    // --------------------------------------------------------
    // 🔒 LOCK USER CONTROLS DURING CINEMATIC
    // --------------------------------------------------------

    if (controls) {
        controls.enabled = false;
    }


    // --------------------------------------------------------
    // 🎥 CAMERA START
    // --------------------------------------------------------

    const startCamera =
        new THREE.Vector3(
            0,
            12,
            350
        );

    const endCamera =
        new THREE.Vector3(
            0,
            0,
            105
        );

    camera.position.copy(
        startCamera
    );

    camera.lookAt(
        0,
        0,
        0
    );


    // --------------------------------------------------------
    // ☀️ KEEP SOLAR SYSTEM AT REAL SIZE
    // --------------------------------------------------------

    if (solarSystem) {

        solarSystem.visible = true;

        solarSystem.scale.set(
            1,
            1,
            1
        );

    }


    // --------------------------------------------------------
    // ⭐ START STARS INVISIBLE
    // --------------------------------------------------------

    if (stars) {

        stars.visible = true;

        if (stars.material) {

            stars.material.transparent = true;

            stars.material.opacity = 0;

        }

    }


    // --------------------------------------------------------
    // 🌌 HUD
    // --------------------------------------------------------

    const title =
        document.querySelector(
            "#scene-title"
        );

    const subtitle =
        document.querySelector(
            "#scene-subtitle"
        );

    const instruction =
        document.querySelector(
            "#cinematic-instruction"
        );


    if (title) {

        title.textContent =
            "THE SOLAR SYSTEM";

        title.style.opacity =
            "0";

        title.style.transition =
            "opacity 1s ease";

    }


    if (subtitle) {

        subtitle.textContent =
            "A journey begins with a single star.";

        subtitle.style.opacity =
            "0";

        subtitle.style.transition =
            "opacity 1s ease";

    }


    if (instruction) {

        instruction.style.opacity =
            "0";

    }


    // --------------------------------------------------------
    // 🌌 TITLE APPEARS FIRST
    // --------------------------------------------------------

    setTimeout(
        function () {

            if (title) {
                title.style.opacity = "1";
            }

            if (subtitle) {
                subtitle.style.opacity = "1";
            }

            console.log(
                "🌌 SOLAR SYSTEM TITLE APPEARED"
            );

        },
        100
    );


    // --------------------------------------------------------
    // 🚀 CAMERA ZOOM START
    // --------------------------------------------------------

    const animationStart =
        performance.now() + 1000;

    const animationDuration =
        5000;


    function animateArrival(
        currentTime
    ) {

        if (!camera || !solarSystem) {
            return;
        }


        // ----------------------------------------------------
        // WAIT FOR TITLE
        // ----------------------------------------------------

        if (
            currentTime <
            animationStart
        ) {

            requestAnimationFrame(
                animateArrival
            );

            return;

        }


        // ----------------------------------------------------
        // PROGRESS
        // ----------------------------------------------------

        const progress =
            Math.min(
                (
                    currentTime -
                    animationStart
                ) /
                animationDuration,
                1
            );


        // ----------------------------------------------------
        // SMOOTH EASING
        // ----------------------------------------------------

        const eased =
            THREE.MathUtils.smoothstep(
                progress,
                0,
                1
            );


        // ----------------------------------------------------
        // 🎥 CAMERA MOVEMENT
        // ----------------------------------------------------

        camera.position.lerpVectors(
            startCamera,
            endCamera,
            eased
        );


        camera.lookAt(
            0,
            0,
            0
        );


        // ----------------------------------------------------
        // ⭐ STAR FADE
        // ----------------------------------------------------

        if (
            stars &&
            stars.material
        ) {

            stars.material.opacity =
                THREE.MathUtils.lerp(
                    0,
                    1,
                    Math.min(
                        progress * 1.5,
                        1
                    )
                );

        }


        // ----------------------------------------------------
        // CONTINUE
        // ----------------------------------------------------

        if (
            progress <
            1
        ) {

            requestAnimationFrame(
                animateArrival
            );

            return;

        }


        // ----------------------------------------------------
        // 🏁 CINEMATIC COMPLETE
        // ----------------------------------------------------

        camera.position.copy(
            endCamera
        );

        camera.lookAt(
            0,
            0,
            0
        );

        finishCinematicReveal();

    }


    requestAnimationFrame(
        animateArrival
    );

}

// ============================================================
// ⭐ FADE STARS IN
// ============================================================

function fadeStarsIn(
    duration
) {

    if (!stars || !stars.material) {
        return;
    }


    const material =
        stars.material;

    const startTime =
        performance.now();


    function animateStars(
        currentTime
    ) {

        const progress =
            Math.min(
                (
                    currentTime -
                    startTime
                ) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        material.opacity =
            eased;


        if (progress < 1) {

            requestAnimationFrame(
                animateStars
            );

        }

    }


    requestAnimationFrame(
        animateStars
    );

}


// ============================================================
// ☀️ REVEAL SOLAR SYSTEM
// ============================================================

function revealSolarSystem(
    duration
) {

    if (!solarSystem) {
        return;
    }


    const startScale =
        0.12;

    const endScale =
        1;

    const startTime =
        performance.now();


    function animateReveal(
        currentTime
    ) {

        const progress =
            Math.min(
                (
                    currentTime -
                    startTime
                ) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const scale =
            startScale +
            (
                endScale -
                startScale
            ) *
            eased;


        solarSystem.scale.set(
            scale,
            scale,
            scale
        );


        if (progress < 1) {

            requestAnimationFrame(
                animateReveal
            );

        }

    }


    requestAnimationFrame(
        animateReveal
    );

}


// ============================================================
// 🪐 EXPAND SOLAR SYSTEM
// ============================================================

function expandSolarSystem(
    duration
) {

    if (!solarSystem) {
        return;
    }


    const startScale =
        solarSystem.scale.x;

    const endScale =
        1;


    const startTime =
        performance.now();


    function animateExpansion(
        currentTime
    ) {

        const progress =
            Math.min(
                (
                    currentTime -
                    startTime
                ) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const scale =
            startScale +
            (
                endScale -
                startScale
            ) *
            eased;


        solarSystem.scale.set(
            scale,
            scale,
            scale
        );


        if (progress < 1) {

            requestAnimationFrame(
                animateExpansion
            );

        }

    }


    requestAnimationFrame(
        animateExpansion
    );

}


// ============================================================
// 🎥 CINEMATIC CAMERA MOVEMENT
// ============================================================

function cinematicCameraMove(
    startZ,
    endZ,
    targetX,
    targetY,
    duration
) {

    const startPosition =
        camera.position.clone();


    const startTime =
        performance.now();


    function moveCamera(
        currentTime
    ) {

        const progress =
            Math.min(
                (
                    currentTime -
                    startTime
                ) /
                duration,
                1
            );


        // Smooth cinematic easing
        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );

            camera.position.z =
            startPosition.z +
            (
                endZ -
                startPosition.z
            ) *
            eased;


        camera.position.x =
            startPosition.x +
            (
                targetX -
                startPosition.x
            ) *
            eased;


        camera.position.y =
            startPosition.y +
            (
                targetY -
                startPosition.y
            ) *
            eased;


        camera.lookAt(
            0,
            0,
            0
        );


        if (progress < 1) {

            requestAnimationFrame(
                moveCamera
            );

        }

    }


    requestAnimationFrame(
        moveCamera
    );

}


// ============================================================
// 🎬 FINISH CINEMATIC
// ============================================================


    console.log(
        "🎬 CINEMATIC ARRIVAL COMPLETE"
    );




    // ========================================================
    // DARK INTRO
    // ========================================================

    setTimeout(
        function () {

            const subtitle =
                document.querySelector(
                    "#scene-subtitle"
                );

            if (subtitle) {

                subtitle.textContent =
                    "8 worlds • 1 star • countless mysteries";

            }

        },
        2200
    );


    // ========================================================
    // CAMERA APPROACH
    // ========================================================




// ============================================================
// 🎬 FINISH CINEMATIC
// ============================================================
function finishCinematicReveal() {

    cinematicMode = false;

    // --------------------------------------------------------
    // 🖱️ GIVE FULL CONTROL BACK TO THE USER
    // --------------------------------------------------------

    if (controls) {

        controls.enabled = true;
        controls.enableRotate = true;
        controls.enablePan = true;
        controls.enableZoom = true;

        controls.target.set(
            0,
            0,
            0
        );

        controls.update();

    }

    console.log(
        "🪐 PLANETS ARE NOW INTERACTIVE"
    );

    console.log(
        "🌌 SOLAR SYSTEM REVEAL COMPLETE"
    );

    console.log(
        "🌌 SOLAR SYSTEM IS NOW READY TO EXPLORE"
    );


    const subtitle =
        document.querySelector(
            "#scene-subtitle"
        );

    const instruction =
        document.querySelector(
            "#cinematic-instruction"
        );


    if (subtitle) {

        subtitle.textContent =
            "Welcome to our cosmic neighborhood.";

    }


    if (instruction) {

        instruction.textContent =
            "DRAG TO EXPLORE • SCROLL TO TRAVEL • CLICK A PLANET";

    }


    console.log(
        "🎬 SOLAR SYSTEM REVEAL COMPLETE"
    );

}


// ============================================================
// 🖱️ PLANET CLICK SYSTEM
// ============================================================

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();
window.addEventListener(
    "pointerdown",
    function (event) {

        if (!renderer || !camera) {
            return;
        }

        // Only Three.js canvas clicks can select planets.
        if (event.target !== renderer.domElement) {
            return;
        }
 if (!camera) {
            return;
        }
        // Convert mouse position to normalized device coordinates
        mouse.x =
            (event.clientX / window.innerWidth) * 2 - 1;

        mouse.y =
            -(event.clientY / window.innerHeight) * 2 + 1;

        // Raycast from camera
        raycaster.setFromCamera(
            mouse,
            camera
        );

        // Get all planet meshes
        const objects =
            planetObjects.map(
                function (item) {
                    return item.mesh;
                }
            );

        // Check what the user clicked
        const hits =
            raycaster.intersectObjects(
                objects,
                true
            );

        if (hits.length > 0) {

            let object =
                hits[0].object;

            // Find the parent containing the planet name
            while (
                object.parent &&
                !object.userData.name
            ) {
                object = object.parent;
            }

            // Select the planet
            if (
                object.userData &&
                object.userData.name
            ) {
                console.log(
                     "🪐 PLANET CLICKED:",
                    object.userData.name
                ); 
                
                selectPlanet(
                    object
                );

            }
        }

    }
);
// ============================================================
// 🪐 SELECT PLANET
// ============================================================

function selectPlanet(
    planet
) {
    if (travelMissionActive) {
        console.log(
            "🚀 MISSION ALREADY ACTIVE — WAIT FOR ARRIVAL"
        );
        return;
    }
    selectedPlanet =
        planet;


    const name =
        document.querySelector(
            "#selected-planet-name"
        );

    const description =
        document.querySelector(
            "#selected-planet-description"
        );

    const panel =
        document.querySelector(
            "#planet-info-panel"
        );


    if (name) {

        name.textContent =
            planet.userData.name;

    }


    if (description) {

        description.textContent =
            planet.userData.description;

    }


    if (panel) {

        panel.style.opacity =
            "1";

    }
    console.log(
        " CAMERA TRAVEL STARTED:",
        planet.userData.name
    );
    

    cinematicTravelToPlanet(
        planet
    );

}


// ============================================================
// 🚀 CINEMATIC PLANET TRAVEL MISSION
// ============================================================

function cinematicTravelToPlanet(
    planet
) {

    if (!camera || !controls) {
        return;
    }
    if (travelMissionActive) {
        console.log(
            "🚀 MISSION ALREADY ACTIVE — WAIT FOR ARRIVAL"
        );
        return;
    }
    // --------------------------------------------------------
    // 🚀 START MISSION
    // --------------------------------------------------------

    travelMissionActive = true;
    travelMissionPlanet = planet;
    travelMissionStartTime = performance.now();

    controls.enabled = false;

    console.log(
        "🚀 TRAVEL MISSION STARTED:",
        planet.userData.name
    );


    // --------------------------------------------------------
    // 🌍 GET PLANET POSITION
    // --------------------------------------------------------

    const planetWorldPosition =
        new THREE.Vector3();

    planet.getWorldPosition(
        planetWorldPosition
    );


    // --------------------------------------------------------
    // 🎥 CAMERA START
    // --------------------------------------------------------

    const startPosition =
        camera.position.clone();


    const startTarget =
        controls.target.clone();


    // --------------------------------------------------------
    // 🪐 PLANET APPROACH DISTANCE
    // --------------------------------------------------------

    let landingDistance = 7;

    if (
        planet.userData.name ===
        "Jupiter"
    ) {

        landingDistance = 12;

    }

    if (
        planet.userData.name ===
        "Saturn"
    ) {

        landingDistance = 11;

    }

    // --------------------------------------------------------
// 🪐 CAMERA-FACING PLANET APPROACH
// --------------------------------------------------------

// Direction from planet toward the camera
const approachDirection =
camera.position
    .clone()
    .sub(planetWorldPosition)
    .normalize();


// Final spacecraft position
// This puts the spacecraft on the visible side
// of EVERY planet.

const landingPosition =
planetWorldPosition
    .clone()
    .add(
        approachDirection.multiplyScalar(
            landingDistance
        )
    );

    // --------------------------------------------------------
    // 🎬 MISSION TIMING
    // --------------------------------------------------------

    const launchDuration =
        1400;

    const travelDuration =
        3200;

    const landingDuration =
        2200;

    const totalDuration =
        launchDuration +
        travelDuration +
        landingDuration;


    const missionStart =
        performance.now();


    // --------------------------------------------------------
    // 🎥 CAMERA FOV
    // --------------------------------------------------------

    const originalFov =
        camera.fov;

    const travelFov =
        78;


    // --------------------------------------------------------
    // 🚀 MISSION ANIMATION
    // --------------------------------------------------------

    function missionAnimation(
        currentTime
    ) {

        const elapsed =
            currentTime -
            missionStart;


        const progress =
            Math.min(
                elapsed /
                totalDuration,
                1
            );


        // ====================================================
        // 🚀 PHASE 1 — LAUNCH
        // ====================================================

        if (
            elapsed <
            launchDuration
        ) {

            const phase =
                elapsed /
                launchDuration;


            const eased =
                1 -
                Math.pow(
                    1 - phase,
                    3
                );


            // Move camera rapidly forward

            const launchPosition = startPosition.clone();

            launchPosition.z -= 35 * eased;
            launchPosition.y += 4 * Math.sin(phase * Math.PI);
            
            camera.position.copy(
                launchPosition
                );
            
                camera.fov = THREE.MathUtils.lerp(
                    originalFov,
                    travelFov,
                    eased
                );
            camera.updateProjectionMatrix();

                }
        // ====================================================
        // 🌌 PHASE 2 — HYPERSPACE TRAVEL
        // ====================================================

        else if (
            elapsed <
            launchDuration +
            travelDuration
        ) {

            const phase =
                (
                    elapsed -
                    launchDuration
                ) /
                travelDuration;


            const eased =
                1 -
                Math.pow(
                    1 - phase,
                    2.5
                );


            // Start position after launch

            const travelStart =
                startPosition.clone();


            travelStart.z -=
                35;


            // Move toward Venus

            camera.position.lerpVectors(
                travelStart,
                landingPosition,
                eased
            );


            // Keep looking toward Venus

            controls.target.lerpVectors(
                startTarget,
                planetWorldPosition,
                eased
            );


            camera.lookAt(
                controls.target
            );


            // Wide FOV = speed feeling

            camera.fov =
                THREE.MathUtils.lerp(
                    travelFov,
                    70,
                    phase
                );


            camera.updateProjectionMatrix();

                
            }


        // ====================================================
        // 🛬 PHASE 3 — BRAKING / LANDING
        // ====================================================

        else {

            const phase =
                (
                    elapsed -
                    launchDuration -
                    travelDuration
                ) /
                landingDuration;


            const eased =
                1 -
                Math.pow(
                    1 - phase,
                    3
                );


            // Final approach

            const finalPosition =
                landingPosition.clone();


            // Slight vertical landing motion

            finalPosition.y +=
                2 *
                (1 - eased);


            camera.position.lerpVectors(
                landingPosition,
                finalPosition,
                1 - eased
            );


            camera.lookAt(
                planetWorldPosition
            );


            // Return FOV to normal

            camera.fov =
                THREE.MathUtils.lerp(
                    70,
                    originalFov,
                    eased
                );


            camera.updateProjectionMatrix();

        }


        // ====================================================
        // 🏁 MISSION COMPLETE
        // ====================================================

        if (
            progress >= 1
        ) {

            travelMissionActive =
                false;

            travelMissionPlanet =
                null;
            const finalPlanetPosition =
                new THREE.Vector3();
            
            planet.getWorldPosition(
                finalPlanetPosition
            );
            
            const finalApproachDirection =
                camera.position
                    .clone()
                    .sub(finalPlanetPosition)
                    .normalize();
            
            const finalLandingPosition =
                finalPlanetPosition
                    .clone()
                    .add(
                        finalApproachDirection.multiplyScalar(
                            landingDistance
                        )
                    );
            
            camera.position.copy(
                finalLandingPosition
            );
            
            camera.lookAt(
                finalPlanetPosition
            );
            
            controls.target.copy(
                finalPlanetPosition
            );
            camera.fov =
                originalFov;

            camera.updateProjectionMatrix();
            controls.enabled =
            true;
        
        controls.enableZoom =
            true;
        
        controls.minDistance =
            3;
        
        controls.maxDistance =
            300;
        
        controls.update();
            


            console.log(
                "🛬 ARRIVED AT:",
                planet.userData.name
            );

            return;

        }


        requestAnimationFrame(
            missionAnimation
        );

    }


    requestAnimationFrame(
        missionAnimation
    );

}


// ============================================================
// 🔄 ANIMATION LOOP
function animate() {

    // ========================================================
    // 🛑 STOP LOOP WHEN UNIVERSE IS NO LONGER ACTIVE
    // ========================================================

    if (!universeStarted) {

        animationLoopStarted = false;

        return;
    }

    requestAnimationFrame(
        animate
    );

    const delta =
        clock.getDelta();


    // ========================================================
    // ⭐ STAR ROTATION
    // ========================================================
    if (stars) {

        if (travelMissionActive) {
    
            // 🚀 High-speed travel effect
    
            stars.rotation.y +=
                delta * 0.45;
    
            stars.rotation.x +=
                delta * 0.12;
    
            if (stars.material) {
    
                stars.material.size =
                    3.5;
    
            }
    
        } else {
    
            // ⭐ Normal space movement
    
            stars.rotation.y +=
                delta * 0.008;
    
            stars.rotation.x +=
                delta * 0.002;
    
            if (stars.material) {
    
                stars.material.size =
                    1.7;
    
            }
    
        }
    
    }



    // ========================================================
    // 🪐 PLANET ORBITS
    // ========================================================
    // ========================================================
// 🪐 PLANET ORBITS
// ========================================================

planetObjects.forEach(
    function (item) {

        item.orbit.rotation.y +=
            delta *
            item.data.speed;

        item.mesh.rotation.y +=
            delta *
            0.25;


        // ====================================================
        // 🌍 EARTH ATMOSPHERE PULSE
        // ====================================================

        if (
            item.mesh.userData.atmosphere
        ) {

            const atmosphere =
                item.mesh.userData.atmosphere;

            const pulse =
                1 +
                Math.sin(
                    performance.now() *
                    0.0015
                ) *
                0.025;

            atmosphere.scale.set(
                pulse,
                pulse,
                pulse
            );

        }


        // ====================================================
        // 🪐 SATURN RING ROTATION
        // ====================================================

        if (
            item.mesh.userData.ringSystem
        ) {

            item.mesh.userData.ringSystem.rotation.z +=
                delta *
                0.35;

        }


        // ====================================================
        // 🌙 MOON ORBIT AROUND EARTH
        // ====================================================

        if (
            item.mesh.userData.moon
        ) {

            moonOrbitAngle +=
                delta *
                0.6;

            const moon =
                item.mesh.userData.moon;

            const moonDistance =
                3.5;

            moon.position.x =
                Math.cos(
                    moonOrbitAngle
                ) *
                moonDistance;

            moon.position.z =
                Math.sin(
                    moonOrbitAngle
                ) *
                moonDistance;

        }

    }
);
    // ========================================================
    // ☀️ SUN PULSE
    // ========================================================

    if (solarSystem) {

        const sun =
            solarSystem.getObjectByName(
                "Sun"
            );

        if (sun) {

            const scale =
                1 +
                Math.sin(
                    performance.now() *
                    0.0015
                ) *
                0.015;

            sun.scale.set(
                scale,
                scale,
                scale
            );

        }

    }

    if (
        controls &&
        !travelMissionActive
    ) {
    
        controls.update();
    
    }

    if (renderer) {

        renderer.render(
            scene,
            camera
        );

    }

}

// ============================================================
// 📐 RESIZE
// ============================================================

window.addEventListener(
    "resize",
    function () {

        if (!camera || !controls) {
            return;
        }
        
       

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);


// ============================================================
// 🌌 CONNECT TO YOUR EXISTING EXPLORE BUTTON
// ============================================================

window.addEventListener(
    "start-universe",
    function () {

        console.log(
            "🚀 EXPLORE UNIVERSE EVENT RECEIVED"
        );

        startUniverse3D();

    }
);
console.log("🌌 STAGE 1 UNIVERSE.JS IS RUNNING");
// Fix lag when video + canvas both run
let lastTime = 0;
const fps = 30;
function limitFPS(time){
  if(time - lastTime >= 1000/fps){
    lastTime = time;
    // your existing renderer.render() call stays inside here
  }
  requestAnimationFrame(limitFPS);
}

// Pause star animation when tab hidden, resume when visible
document.addEventListener('visibilitychange', () => {
  if(document.hidden){
    // pause heavy work
    document.querySelector('video').pause();
  } else {
    document.querySelector('video').play();
  }
}); 
