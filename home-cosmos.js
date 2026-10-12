// ============================================================
// 🌌 COSMIC THRILLER
// HOME — LIVING COSMIC ENVIRONMENT
// ============================================================

(function () {

    if (document.getElementById("home-cosmos-canvas")) {
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.id = "home-cosmos-canvas";

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1";
    canvas.style.opacity =
    "1";

    let width = 0;
    let height = 0;

    let mouseX = 0;
    let mouseY = 0;

    let smoothX = 0;
    let smoothY = 0;

    const stars = [];
    const particles = [];
    const comets = [];

    // ========================================================
    // ⭐ STARS
    // ========================================================

    function createStars() {

        stars.length = 0;

        for (let i = 0; i < 500; i++) {

            stars.push({
                x: Math.random(),
                y: Math.random(),
                size: Math.random() * 1.8 + 0.3,
                speed: Math.random() * 0.8 + 0.2,
                phase: Math.random() * Math.PI * 2
            });

        }
    }

    // ========================================================
    // 🌌 GALAXY PARTICLES
    // ========================================================

    function createGalaxyParticles() {

        particles.length = 0;

        for (let i = 0; i < 450; i++) {

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                Math.pow(Math.random(), 0.65) * 1.2;

            particles.push({

                angle,
                distance,

                speed:
                    (Math.random() * 0.00025) +
                    0.00008,

                size:
                    Math.random() * 2 + 0.4,

                brightness:
                    Math.random() * 0.8 + 0.2

            });
        }
    }

    // ========================================================
    // ☄️ COMETS
    // ========================================================

    function createComets() {

        comets.length = 0;

        for (let i = 0; i < 5; i++) {

            comets.push({

                x:
                    Math.random() * width,

                y:
                    Math.random() * height,

                speed:
                    Math.random() * 1.6 + 1.4,

                length:
                    Math.random() * 120 + 150,

                delay:
                    Math.random() * 5000,

                active: false

            });

        }
    }

    // ========================================================
    // 📐 RESIZE
    // ========================================================

    function resize() {

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                1.5
            );

        width =
            window.innerWidth;

        height =
            window.innerHeight;

        canvas.width =
            width * ratio;

        canvas.height =
            height * ratio;

        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );

        createStars();
        createGalaxyParticles();
        createComets();
    }

    // ========================================================
    // 🖱️ MOUSE PARALLAX
    // ========================================================

    window.addEventListener(
        "mousemove",
        function (event) {

            mouseX =
                event.clientX / width - 0.5;

            mouseY =
                event.clientY / height - 0.5;

        }
    );

    // ========================================================
    // 🌌 MILKY WAY
    // ========================================================

    function drawMilkyWay(time) {

        const centerX =
            width * 0.52 +
            smoothX * 25;

        const centerY =
            height * 0.52 +
            smoothY * 15;

        const drift =
            Math.sin(time * 0.00004) * 35;

        ctx.save();

        ctx.translate(
            centerX + drift,
            centerY
        );

        ctx.rotate(-0.28);

        // Main galaxy glow
        const galaxy =
            ctx.createRadialGradient(
                0,
                0,
                20,
                0,
                0,
                width * 0.8
            );

        galaxy.addColorStop(
            0,
            "rgba(220,235,255,0.22)"
        );

        galaxy.addColorStop(
            0.2,
            "rgba(130,170,255,0.16)"
        );

        galaxy.addColorStop(
            0.45,
            "rgba(80,100,220,0.09)"
        );

        galaxy.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );

        ctx.fillStyle = galaxy;

        ctx.beginPath();

        ctx.ellipse(
            0,
            0,
            width * 0.8,
            height * 0.18,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        // Bright core
        const core =
            ctx.createRadialGradient(
                0,
                0,
                0,
                0,
                0,
                300
            );

        core.addColorStop(
            0,
            "rgba(255,255,255,0.30)"
        );

        core.addColorStop(
            0.2,
            "rgba(180,210,255,0.18)"
        );

        core.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );

        ctx.fillStyle = core;

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
            // ========================================================
// 🌈 DEEP SPACE NEBULA CLOUDS
// ========================================================

const nebulaColors = [
    "rgba(90,40,220,0.11)",
    "rgba(180,40,180,0.09)",
    "rgba(30,120,255,0.10)",
    "rgba(255,60,180,0.055)"
];

for (
    let n = 0;
    n < 18;
    n++
) {

    const nx =
        -width * 0.55 +
        (
            n * width * 0.065
        ) +
        Math.sin(
            time * 0.00012 +
            n
        ) *
        45;

    const ny =
        Math.sin(
            n * 1.7
        ) *
        height *
        0.07;

    const nr =
        80 +
        (
            n % 5
        ) *
        35;


    const cloud =
        ctx.createRadialGradient(
            nx,
            ny,
            0,
            nx,
            ny,
            nr
        );


    cloud.addColorStop(
        0,
        nebulaColors[
            n %
            nebulaColors.length
        ]
    );

    cloud.addColorStop(
        0.45,
        "rgba(70,80,220,0.035)"
    );

    cloud.addColorStop(
        1,
        "rgba(0,0,0,0)"
    );


    ctx.fillStyle =
        cloud;


    ctx.beginPath();

    ctx.ellipse(
        nx,
        ny,
        nr * 1.7,
        nr * 0.45,
        Math.sin(n) * 0.3,
        0,
        Math.PI * 2
    );

    ctx.fill();
}
        // Dust lanes
        for (let i = 0; i < 7; i++) {

            ctx.fillStyle =
                `rgba(0,0,25,${0.06 + i * 0.012})`;

            ctx.fillRect(
                -width,
                -70 + i * 22,
                width * 2,
                12
            );
        }
        // ========================================================
// ✨ FINE GALAXY DUST
// ========================================================

for (
    let i = 0;
    i < 140;
    i++
) {

    const angle =
        Math.random() *
        Math.PI *
        2;

    const distance =
        Math.pow(
            Math.random(),
            0.55
        ) *
        width *
        0.72;


    const dustX =
        Math.cos(angle) *
        distance;

    const dustY =
        Math.sin(angle) *
        distance *
        0.16;


    const size =
        Math.random() *
        1.6 +
        0.25;


    const alpha =
        Math.random() *
        0.30 +
        0.05;


    ctx.fillStyle =
        `rgba(
            190,
            210,
            255,
            ${alpha}
        )`;


    ctx.beginPath();

    ctx.arc(
        dustX,
        dustY,
        size,
        0,
        Math.PI * 2
    );

    ctx.fill();
}
        // Galaxy particles
        for (const p of particles) {

            p.angle += p.speed;

            const radius =
                p.distance *
                Math.min(width, height) *
                0.65;

            const x =
                Math.cos(p.angle) * radius;

            const y =
                Math.sin(p.angle) *
                radius *
                0.22;

            const alpha =
                0.2 +
                Math.sin(
                    time * 0.001 +
                    p.angle
                ) * 0.15;

            ctx.fillStyle =
                `rgba(170,205,255,${alpha + p.brightness * 0.25})`;

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                p.size,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }

        ctx.restore();
    }

    // ========================================================
    // 🕳️ BLACK HOLE
    // ========================================================
    // ========================================================
// 🕳️ PREMIUM CYAN BLACK HOLE
// ========================================================

function drawBlackHole(
    x,
    y,
    radius,
    time,
    direction
) {

    ctx.save();

    // ----------------------------------------------------
    // 🌀 LIVING ROTATION
    // ----------------------------------------------------

    const rotation =
        time *
        0.00055 *
        direction;

    const breathing =
        1 +
        Math.sin(
            time * 0.0011 +
            direction
        ) *
        0.025;

    const r =
        radius *
        breathing;


    // ----------------------------------------------------
    // 💜 GRAVITATIONAL PURPLE HALO
    // ----------------------------------------------------

    const halo =
        ctx.createRadialGradient(
            x,
            y,
            r * 0.25,
            x,
            y,
            r * 2.5
        );

    halo.addColorStop(
        0,
        "rgba(0,0,0,0.98)"
    );

    halo.addColorStop(
        0.35,
        "rgba(20,5,45,0.85)"
    );

    halo.addColorStop(
        0.55,
        "rgba(80,30,150,0.22)"
    );

    halo.addColorStop(
        0.75,
        "rgba(80,80,220,0.08)"
    );

    halo.addColorStop(
        1,
        "rgba(0,0,0,0)"
    );

    ctx.fillStyle =
        halo;

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        r * 2.5,
        0,
        Math.PI * 2
    );

    ctx.fill();


    // ----------------------------------------------------
    // 🌌 CYAN ACCRETION CLOUD
    // ----------------------------------------------------

    ctx.save();

    ctx.translate(
        x,
        y
    );

    ctx.scale(
        1,
        0.36
    );


    for (
        let i = 0;
        i < 300;
        i++
    ) {

        const seed =
            i * 17.371;

        const random1 =
            Math.abs(
                Math.sin(seed) *
                43758.5453
            ) % 1;

        const random2 =
            Math.abs(
                Math.sin(seed * 2.17) *
                24634.6345
            ) % 1;

        const concentration =
            Math.pow(
                random1,
                1.8
            );

        const distance =
            r *
            (
                0.56 +
                concentration *
                1.12
            );

        const speed =
            0.00020 +
            (
                1 -
                concentration
            ) *
            0.00072;

        const angle =
            rotation +
            time * speed +
            i * 0.137;


        // ------------------------------------------------
        // 🌊 TURBULENCE
        // ------------------------------------------------

        const wave =
            Math.sin(
                angle * 5 +
                time * 0.001 +
                i
            ) *
            r *
            0.075;

        const finalRadius =
            distance +
            wave;


        const px =
            Math.cos(angle) *
            finalRadius;

        const py =
            Math.sin(angle) *
            finalRadius;


        // ------------------------------------------------
        // ⚡ RELATIVISTIC BRIGHT SIDE
        // ------------------------------------------------

        const facing =
            Math.cos(
                angle -
                rotation
            );

        const brightness =
            0.18 +
            Math.pow(
                Math.max(
                    0,
                    facing
                ),
                1.5
            ) *
            0.82;


        // ------------------------------------------------
        // 🔵 CYAN / WHITE-BLUE COLOR
        // ------------------------------------------------

        const innerHeat =
            1 -
            Math.min(
                1,
                (
                    distance -
                    r * 0.55
                ) /
                (
                    r * 1.1
                )
            );


        const red =
            40 +
            innerHeat * 130;

        const green =
            180 +
            innerHeat * 65;

        const blue =
            255;


        // ------------------------------------------------
        // ✨ PARTICLE TRAIL
        // ------------------------------------------------

        const trail =
            3 +
            (
                1 -
                concentration
            ) *
            12;


        const tangentX =
            -Math.sin(angle) *
            trail;

        const tangentY =
            Math.cos(angle) *
            trail;


        const alpha =
            (
                0.10 +
                brightness * 0.72
            ) *
            (
                0.35 +
                innerHeat * 0.75
            );


        ctx.beginPath();

        ctx.moveTo(
            px -
            tangentX,
            py -
            tangentY
        );

        ctx.lineTo(
            px +
            tangentX,
            py +
            tangentY
        );

        ctx.strokeStyle =
            `rgba(
                ${Math.floor(red)},
                ${Math.floor(green)},
                ${Math.floor(blue)},
                ${alpha}
            )`;

        ctx.lineWidth =
            0.45 +
            random2 * 1.8;

        ctx.stroke();
    }


    // ----------------------------------------------------
    // 🌪️ FOUR MAJOR CYAN STREAMS
    // ----------------------------------------------------

    for (
        let arm = 0;
        arm < 4;
        arm++
    ) {

        const armOffset =
            arm *
            Math.PI *
            0.5;


        ctx.beginPath();


        for (
            let step = 0;
            step <= 45;
            step++
        ) {

            const progress =
                step / 45;

            const distance =
                r *
                (
                    0.55 +
                    progress * 1.25
                );

            const angle =
                rotation +
                armOffset +
                progress * 2.5 +
                time *
                0.00012 *
                direction;


            const wobble =
                Math.sin(
                    progress * 13 +
                    time * 0.001 +
                    arm
                ) *
                r *
                0.055;


            const finalRadius =
                distance +
                wobble;


            const px =
                Math.cos(angle) *
                finalRadius;

            const py =
                Math.sin(angle) *
                finalRadius;


            if (step === 0) {

                ctx.moveTo(
                    px,
                    py
                );

            } else {

                ctx.lineTo(
                    px,
                    py
                );
            }
        }


        const stream =
            ctx.createLinearGradient(
                -r * 1.6,
                0,
                r * 1.6,
                0
            );

        stream.addColorStop(
            0,
            "rgba(40,80,255,0)"
        );

        stream.addColorStop(
            0.30,
            "rgba(50,160,255,0.12)"
        );

        stream.addColorStop(
            0.48,
            "rgba(0,220,255,0.35)"
        );

        stream.addColorStop(
            0.58,
            "rgba(220,250,255,0.72)"
        );

        stream.addColorStop(
            0.72,
            "rgba(0,190,255,0.28)"
        );

        stream.addColorStop(
            1,
            "rgba(70,40,255,0)"
        );


        ctx.strokeStyle =
            stream;

        ctx.lineWidth =
            1.3 +
            (arm % 2) *
            1.2;

        ctx.shadowBlur =
            r * 0.08;

        ctx.shadowColor =
            "rgba(0,220,255,0.75)";

        ctx.stroke();

        ctx.shadowBlur = 0;
    }


    // ----------------------------------------------------
    // 🌑 EVENT HORIZON
    // ----------------------------------------------------

    const horizon =
        ctx.createRadialGradient(
            0,
            0,
            0,
            0,
            0,
            r * 0.58
        );

    horizon.addColorStop(
        0,
        "rgba(0,0,0,1)"
    );

    horizon.addColorStop(
        0.82,
        "rgba(0,0,0,1)"
    );

    horizon.addColorStop(
        1,
        "rgba(2,5,15,0.98)"
    );

    ctx.fillStyle =
        horizon;

    ctx.beginPath();

    ctx.arc(
        0,
        0,
        r * 0.56,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.restore();


    // ----------------------------------------------------
    // 🌀 GRAVITATIONAL LENSING HINT
    // ----------------------------------------------------

    ctx.save();

    ctx.translate(
        x,
        y
    );

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const angle =
            i *
            (Math.PI * 2 / 18) +
            rotation * 0.35;

        const lensRadius =
            r *
            (
                0.88 +
                (i % 3) *
                0.075
            );

        const start =
            angle -
            0.18;

        const end =
            angle +
            0.42;


        ctx.beginPath();

        ctx.arc(
            0,
            0,
            lensRadius,
            start,
            end
        );

        ctx.strokeStyle =
            "rgba(170,225,255,0.11)";

        ctx.lineWidth =
            0.7;

        ctx.stroke();
    }

    ctx.restore();


    // ----------------------------------------------------
    // 💜 OUTER GLOW
    // ----------------------------------------------------

    const glow =
        ctx.createRadialGradient(
            x,
            y,
            r * 0.75,
            x,
            y,
            r * 1.55
        );

    glow.addColorStop(
        0,
        "rgba(0,220,255,0.12)"
    );

    glow.addColorStop(
        0.45,
        "rgba(90,70,255,0.08)"
    );

    glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
    );

    ctx.fillStyle =
        glow;

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        r * 1.55,
        0,
        Math.PI * 2
    );

    ctx.fill();
}
    // ☄️ COMETS
    // ========================================================
    // ========================================================
// ☄️ PREMIUM CINEMATIC COMETS
// ========================================================

function drawComets(time) {

    for (
        const comet of comets
    ) {

        comet.x +=
            comet.speed;

        comet.y -=
            comet.speed *
            0.35;


        // ------------------------------------------------
        // 🔄 RESET
        // ------------------------------------------------

        if (
            comet.x >
                width + 250 ||
            comet.y <
                -250
        ) {

            comet.x =
                -250 -
                Math.random() *
                350;

            comet.y =
                height *
                (
                    0.12 +
                    Math.random() *
                    0.70
                );
        }


        // ------------------------------------------------
        // 🌫️ LONG MOTION-BLUR TRAIL
        // ------------------------------------------------

        const gradient =
            ctx.createLinearGradient(
                comet.x,
                comet.y,

                comet.x -
                    comet.length,

                comet.y +
                    comet.length *
                    0.35
            );


        gradient.addColorStop(
            0,
            "rgba(235,255,255,1)"
        );

        gradient.addColorStop(
            0.08,
            "rgba(80,225,255,0.95)"
        );

        gradient.addColorStop(
            0.30,
            "rgba(0,190,255,0.45)"
        );

        gradient.addColorStop(
            0.70,
            "rgba(30,90,255,0.12)"
        );

        gradient.addColorStop(
            1,
            "rgba(0,40,160,0)"
        );


        // ------------------------------------------------
        // 💫 TRAIL
        // ------------------------------------------------

        ctx.beginPath();

        ctx.moveTo(
            comet.x,
            comet.y
        );

        ctx.lineTo(
            comet.x -
                comet.length,

            comet.y +
                comet.length *
                0.35
        );


        ctx.strokeStyle =
            gradient;

        ctx.lineWidth =
            5;

        ctx.shadowBlur =
            22;

        ctx.shadowColor =
            "rgba(0,220,255,0.85)";

        ctx.stroke();


        // ------------------------------------------------
        // ✨ SECONDARY THIN TRAIL
        // ------------------------------------------------

        ctx.beginPath();

        ctx.moveTo(
            comet.x,
            comet.y
        );

        ctx.lineTo(
            comet.x -
                comet.length *
                0.75,

            comet.y +
                comet.length *
                0.26
        );


        ctx.strokeStyle =
            "rgba(180,245,255,0.55)";

        ctx.lineWidth =
            1.5;

        ctx.stroke();


        // ------------------------------------------------
        // 💎 GLOWING COMET HEAD
        // ------------------------------------------------

        const head =
            ctx.createRadialGradient(
                comet.x,
                comet.y,
                0,
                comet.x,
                comet.y,
                18
            );


        head.addColorStop(
            0,
            "rgba(255,255,255,1)"
        );

        head.addColorStop(
            0.25,
            "rgba(170,250,255,1)"
        );

        head.addColorStop(
            0.55,
            "rgba(0,220,255,0.65)"
        );

        head.addColorStop(
            1,
            "rgba(0,100,255,0)"
        );


        ctx.fillStyle =
            head;

        ctx.beginPath();

        ctx.arc(
            comet.x,
            comet.y,
            18,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.shadowBlur =
            0;
    }
}

    // ========================================================
    // ⭐ STARS
    // ========================================================

    function drawStars(time) {

        smoothX +=
            (mouseX - smoothX) * 0.025;

        smoothY +=
            (mouseY - smoothY) * 0.025;

        for (const star of stars) {

            const x =
                star.x * width +
                smoothX * 15;

            const y =
                star.y * height +
                smoothY * 10;

            const twinkle =
                (
                    Math.sin(
                        time *
                        0.001 *
                        star.speed *
                        8 +
                        star.phase
                    ) + 1
                ) / 2;

            ctx.fillStyle =
                `rgba(220,240,255,${0.25 + twinkle * 0.7})`;

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                star.size,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    }

    // ========================================================
    // 🎬 ANIMATION
    // ========================================================

    function animate(time) {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );
        drawStars(time);

        //milky way is handeled by milky-way-home.js

        // ========================================================
// 🕳️ DRIFTING BLACK HOLES
// ========================================================

const holeDriftX =
Math.sin(
    time * 0.00018
) *
width *
0.012;

const holeDriftY =
Math.cos(
    time * 0.00015
) *
height *
0.018;


// LEFT BLACK HOLE

drawBlackHole(
width * 0.10 +
holeDriftX,

height * 0.48 +
holeDriftY,

Math.min(
    width,
    height
) * 0.138,

time,

1
);


// RIGHT BLACK HOLE

drawBlackHole(
width * 0.89 -
holeDriftX,

height * 0.62 -
holeDriftY,

Math.min(
    width,
    height
) * 0.126,

time,

-1
);

        drawComets(time);

        requestAnimationFrame(
            animate
        );
    }

    // ========================================================
    // 🚀 HOME / UNIVERSE VISIBILITY
    // ========================================================

    function updateVisibility() {

        const universe =
            document.querySelector(
                "#universe-screen"
            );

        if (universe) {

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
    // START
    // ========================================================

    window.addEventListener(
        "resize",
        resize
    );

    resize();

    requestAnimationFrame(
        animate
    );

    console.log(
        "🌌 LIVING HOME COSMOS ACTIVE"
    );

})();