// ============================================================
// 🌌 COSMIC THRILLER
// HOME PAGE — LIVING MILKY WAY v2
// ============================================================

(function () {

    if (document.getElementById("living-milky-way")) {
        return;
    }

    // --------------------------------------------------------
    // CREATE CANVAS
    // --------------------------------------------------------

    const canvas = document.createElement("canvas");

    canvas.id = "living-milky-way";

    const ctx = canvas.getContext("2d");

    document.body.prepend(canvas);


    // --------------------------------------------------------
    // CANVAS STYLE
    // --------------------------------------------------------

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";


    // --------------------------------------------------------
    // VARIABLES
    // --------------------------------------------------------

    let width = 0;
    let height = 0;

    let stars = [];
    let galaxyDust = [];
    let nebulaClouds = [];
    let dustLanes = [];

    const STAR_COUNT = 650;
    const GALAXY_DUST_COUNT = 1200;
    const NEBULA_COUNT = 18;
    const DUST_LANE_COUNT = 7;

    let mouseX = 0;
    let mouseY = 0;

    let smoothMouseX = 0;
    let smoothMouseY = 0;


    // --------------------------------------------------------
    // RESIZE
    // --------------------------------------------------------

    function resizeCanvas() {

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                1.5
            );

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * ratio;
        canvas.height = height * ratio;

        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );

        createStars();
        createGalaxyDust();
        createNebulaClouds();
        createDustLanes();
    }


    // ========================================================
    // ⭐ STARS
    // ========================================================

    function createStars() {

        stars = [];

        for (
            let i = 0;
            i < STAR_COUNT;
            i++
        ) {

            stars.push({

                x: Math.random() * width,

                y: Math.random() * height,

                size:
                    Math.random() * 1.6 + 0.2,

                brightness:
                    Math.random(),

                speed:
                    Math.random() * 0.18 + 0.03,

                phase:
                    Math.random() *
                    Math.PI *
                    2

            });

        }

    }


    // ========================================================
    // 🌌 GALAXY DUST
    // ========================================================

    function createGalaxyDust() {

        galaxyDust = [];

        for (
            let i = 0;
            i < GALAXY_DUST_COUNT;
            i++
        ) {

            const distance =
                Math.pow(
                    Math.random(),
                    0.62
                );

            const angle =
                Math.random() *
                Math.PI *
                2;

            const armWave =
                Math.sin(
                    distance * 9 +
                    angle * 3
                ) * 0.35;

            galaxyDust.push({

                angle:
                    angle + armWave,

                distance:

                    distance,

                size:
                    Math.random() *
                    1.5 +
                    0.15,

                brightness:
                    Math.random(),

                drift:
                    Math.random() *
                    0.00012 +
                    0.000025,

                phase:
                    Math.random() *
                    Math.PI *
                    2

            });

        }

    }


    // ========================================================
    // 🟣 NEBULA CLOUDS
    // ========================================================

    function createNebulaClouds() {

        nebulaClouds = [];

        for (
            let i = 0;
            i < NEBULA_COUNT;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                0.15 +
                Math.random() *
                0.85;

            nebulaClouds.push({

                x:
                    Math.cos(angle) *
                    distance,

                y:
                    Math.sin(angle) *
                    distance *
                    0.28,

                radius:
                    70 +
                    Math.random() *
                    180,

                alpha:
                    0.025 +
                    Math.random() *
                    0.055,

                phase:
                    Math.random() *
                    Math.PI *
                    2,

                drift:
                    Math.random() *
                    0.00008 +
                    0.00002,

                type:
                    Math.random()

            });

        }

    }


    // ========================================================
    // 🌫️ DUST LANES
    // ========================================================

    function createDustLanes() {

        dustLanes = [];

        for (
            let i = 0;
            i < DUST_LANE_COUNT;
            i++
        ) {

            dustLanes.push({

                y:
                    -0.20 +
                    i * 0.065,

                curve:
                    Math.random() *
                    70 -
                    35,

                width:
                    12 +
                    Math.random() *
                    18,

                alpha:
                    0.08 +
                    Math.random() *
                    0.10,

                phase:
                    Math.random() *
                    Math.PI *
                    2

            });

        }

    }


    // ========================================================
    // 🖱️ MOUSE
    // ========================================================

    window.addEventListener(
        "mousemove",
        function (event) {

            mouseX =
                (
                    event.clientX /
                    width
                ) - 0.5;

            mouseY =
                (
                    event.clientY /
                    height
                ) - 0.5;

        }
    );


    // ========================================================
    // 🟣 NEBULA
    // ========================================================

    function drawNebulaClouds(time) {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        for (
            let i = 0;
            i < nebulaClouds.length;
            i++
        ) {

            const cloud =
                nebulaClouds[i];

            const movement =
                Math.sin(
                    time *
                    cloud.drift *
                    1000 +
                    cloud.phase
                );

            const x =
                cloud.x *
                width *
                0.75 +
                movement *
                25;

            const y =
                cloud.y *
                height *
                1.2;

            const radius =
                cloud.radius *
                (
                    0.85 +
                    Math.sin(
                        time * 0.00015 +
                        cloud.phase
                    ) *
                    0.08
                );


            const gradient =
                ctx.createRadialGradient(
                    x,
                    y,
                    0,
                    x,
                    y,
                    radius
                );


            if (
                cloud.type < 0.34
            ) {

                gradient.addColorStop(
                    0,
                    `rgba(150,80,255,${cloud.alpha})`
                );

                gradient.addColorStop(
                    0.45,
                    `rgba(90,40,220,${cloud.alpha * 0.45})`
                );

            }

            else if (
                cloud.type < 0.67
            ) {

                gradient.addColorStop(
                    0,
                    `rgba(255,70,180,${cloud.alpha})`
                );

                gradient.addColorStop(
                    0.45,
                    `rgba(180,40,150,${cloud.alpha * 0.4})`
                );

            }

            else {

                gradient.addColorStop(
                    0,
                    `rgba(40,170,255,${cloud.alpha})`
                );

                gradient.addColorStop(
                    0.45,
                    `rgba(0,100,220,${cloud.alpha * 0.4})`
                );

            }

            gradient.addColorStop(
                1,
                "rgba(0,0,0,0)"
            );

            ctx.fillStyle =
                gradient;

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                radius,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }

        ctx.restore();

    }


    // ========================================================
    // 🌌 MILKY WAY
    // ========================================================

    function drawMilkyWay(time) {

        const centerX =
            width * 0.52;

        const centerY =
            height * 0.55;

        const driftX =
            Math.sin(
                time * 0.00006
            ) * 35;

        const driftY =
            Math.cos(
                time * 0.000045
            ) * 18;

        const parallaxX =
            smoothMouseX * 55;

        const parallaxY =
            smoothMouseY * 35;


        ctx.save();


        ctx.translate(
            centerX +
            driftX +
            parallaxX,

            centerY +
            driftY +
            parallaxY
        );


        // ----------------------------------------------------
        // DIAGONAL GALAXY
        // ----------------------------------------------------

        ctx.rotate(
            -0.32 +
            Math.sin(
                time * 0.000025
            ) * 0.015
        );


        const galaxyWidth =
            Math.max(
                width * 1.55,
                1100
            );

        const galaxyHeight =
            Math.max(
                height * 0.70,
                520
            );


        // ----------------------------------------------------
        // OUTER GLOW
        // ----------------------------------------------------

        const outerGlow =
            ctx.createRadialGradient(
                0,
                0,
                30,
                0,
                0,
                galaxyWidth * 0.75
            );


        outerGlow.addColorStop(
            0,
            "rgba(255,255,255,0.24)"
        );

        outerGlow.addColorStop(
            0.18,
            "rgba(120,180,255,0.22)"
        );

        outerGlow.addColorStop(
            0.42,
            "rgba(90,80,240,0.14)"
        );

        outerGlow.addColorStop(
            0.70,
            "rgba(50,40,180,0.07)"
        );

        outerGlow.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.globalCompositeOperation =
            "screen";

        ctx.fillStyle =
            outerGlow;


        ctx.beginPath();

        ctx.ellipse(
            0,
            0,
            galaxyWidth * 0.72,
            galaxyHeight * 0.18,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // ----------------------------------------------------
        // 🟣 COLORED NEBULA BANDS
        // ----------------------------------------------------

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            const bandY =
                -65 +
                i * 38;

            const wave =
                Math.sin(
                    time * 0.00025 +
                    i
                ) * 12;


            const band =
                ctx.createLinearGradient(
                    -galaxyWidth,
                    bandY,
                    galaxyWidth,
                    bandY + 30
                );


            band.addColorStop(
                0,
                "rgba(40,80,220,0)"
            );

           

            band.addColorStop(
                1,
                "rgba(0,0,0,0)"
            );
            band.addColorStop(
                0.25,
                "rgba(70,100,255,0.08)"
            );
            
            band.addColorStop(
                0.5,
                i % 2 === 0
                    ? "rgba(170,60,255,0.16)"
                    : "rgba(255,70,190,0.14)"
            );
            
            band.addColorStop(
                0.75,
                "rgba(50,100,255,0.08)"
            );

            ctx.fillStyle =
                band;


            ctx.fillRect(
                -galaxyWidth,
                bandY + wave,
                galaxyWidth * 2,
                30
            );

        }


        // ----------------------------------------------------
        // 💠 GALACTIC CORE
        // ----------------------------------------------------

        const corePulse =
            1 +
            Math.sin(
                time * 0.001
            ) * 0.04;


        const core =
            ctx.createRadialGradient(
                0,
                0,
                0,
                0,
                0,
                250 * corePulse
            );


        core.addColorStop(
            0,
            "rgba(255,255,255,0.58)"
        );

        core.addColorStop(
            0.08,
            "rgba(225,245,255,0.45)"
        );

        core.addColorStop(
            0.20,
            "rgba(120,200,255,0.26)"
        );

        core.addColorStop(
            0.42,
            "rgba(100,100,255,0.10)"
        );

        core.addColorStop(
            0.70,
            "rgba(180,60,255,0.035)"
        );

        core.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            core;


        ctx.beginPath();

        ctx.ellipse(
            0,
            0,
            280,
            100,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // ----------------------------------------------------
        // ✨ GALAXY DUST
        // ----------------------------------------------------

        for (
            let i = 0;
            i < galaxyDust.length;
            i++
        ) {

            const particle =
                galaxyDust[i];


            particle.angle +=
                particle.drift;


            const spiral =
                particle.angle +
                particle.distance *
                4.5;


            const x =
                Math.cos(spiral) *
                particle.distance *
                galaxyWidth *
                0.72;


            const y =
                Math.sin(spiral) *
                particle.distance *
                galaxyHeight *
                0.16;


            const turbulence =
                Math.sin(
                    time * 0.00045 +
                    particle.phase
                ) * 3;


            const px =
                x + turbulence;

            const py =
                y +
                turbulence * 0.45;


            const twinkle =
                0.35 +
                (
                    Math.sin(
                        time * 0.001 +
                        particle.phase
                    ) + 1
                ) *
                0.325;


                const alpha =
                twinkle *
                (
                    0.25 +
                    particle.brightness *
                    0.75
                );


            let r = 210;
            let g = 225;
            let b = 255;


            if (
                particle.brightness > 0.86
            ) {

                r = 180;
                g = 120;
                b = 255;

            }

            else if (
                particle.brightness > 0.70
            ) {

                r = 255;
                g = 130;
                b = 210;

            }

            else if (
                particle.brightness > 0.48
            ) {

                r = 120;
                g = 210;
                b = 255;

            }


            ctx.fillStyle =
                `rgba(${r},${g},${b},${alpha})`;


            ctx.beginPath();

            ctx.arc(
                px,
                py,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }


        // ----------------------------------------------------
        // 🌫️ DARK DUST LANES
        // ----------------------------------------------------

        ctx.globalCompositeOperation =
            "source-over";


        for (
            let i = 0;
            i < dustLanes.length;
            i++
        ) {

            const lane =
                dustLanes[i];


            const movement =
                Math.sin(
                    time * 0.00015 +
                    lane.phase
                ) * 12;


            ctx.beginPath();


            ctx.moveTo(
                -galaxyWidth,
                lane.y *
                galaxyHeight +
                movement
            );


            ctx.bezierCurveTo(

                -galaxyWidth * 0.45,
                lane.y *
                galaxyHeight -
                lane.curve,

                galaxyWidth * 0.15,
                lane.y *
                galaxyHeight +
                lane.curve,

                galaxyWidth,
                lane.y *
                galaxyHeight +
                movement

            );


            ctx.strokeStyle =
                `rgba(0,0,15,${lane.alpha})`;


            ctx.lineWidth =
                lane.width;


            ctx.stroke();

        }


        ctx.restore();

    }


    // ========================================================
    // ⭐ FOREGROUND STARS
    // ========================================================

    function drawStars(time) {

    
        smoothMouseX +=
    (
        mouseX -
        smoothMouseX
    ) * 0.055;

smoothMouseY +=
    (
        mouseY -
        smoothMouseY
    ) * 0.055;
        for (
            let i = 0;
            i < stars.length;
            i++
        ) {

            const star =
                stars[i];


            const twinkle =
                (
                    Math.sin(
                        time *
                        0.001 *
                        star.speed *
                        20 +
                        star.phase
                    ) + 1
                ) / 2;


            const alpha =
                0.25 +
                twinkle *
                0.75;


            const parallax = 
                12 +
                star.size * 8;


            const x =
                star.x +
                smoothMouseX *
                parallax;


            const y =
                star.y +
                smoothMouseY *
                parallax;


            ctx.beginPath();


            ctx.arc(
                x,
                y,
                star.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(220,240,255,${alpha})`;


            ctx.fill();

        }

    }


    // ========================================================
    // 🎬 ANIMATION
    // ========================================================

    function animate(time) {

        /*
         * IMPORTANT:
         * We intentionally DO NOT draw a black
         * background here.
         */

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        drawNebulaClouds(time);

        drawMilkyWay(time);

        drawStars(time);


        requestAnimationFrame(
            animate
        );

    }


    // ========================================================
    // 👁️ HIDE DURING UNIVERSE MODE
    // ========================================================
    function updateVisibility() {

        const universeMode =
            document.body.classList.contains(
                "universe-mode"
            );
    
        if (universeMode) {
    
            canvas.style.display =
                "none";
    
        } else {
    
            canvas.style.display =
                "block";
        }
    }

    setInterval(
        updateVisibility,
        500
    );


    // ========================================================
    // 🚀 START
    // ========================================================

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    resizeCanvas();

    requestAnimationFrame(
        animate
    );


    console.log(
        "🌌 LIVING MILKY WAY v2 ACTIVE"
    );

})();