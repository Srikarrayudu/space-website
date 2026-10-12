
/* =====================================================
   COSMIC THRILLER — PREMIUM POINTER INTERACTIONS
   Independent module; does not modify existing handlers
   ===================================================== */

   (() => {
    // Avoid installing the interaction system twice.
    if (window.__cosmicHoverInstalled) return;
    window.__cosmicHoverInstalled = true;

    // Keep touchscreens and reduced-motion users unaffected.
    const finePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    const targetSelector =
        ".planet-card, #missionBtn, .launchBtn, #nextMission";

    let activeTarget = null;

    function resetTarget(element) {
        if (!element) return;

        element.style.removeProperty("--ct-tilt-x");
        element.style.removeProperty("--ct-tilt-y");
        element.style.removeProperty("--ct-move-x");
        element.style.removeProperty("--ct-move-y");
    }

    function handlePointerMove(event) {
        if (event.pointerType === "touch") return;

        // Prefer the button when the pointer is over a card button.
        const button = event.target.closest(
            "#missionBtn, .launchBtn, #nextMission"
        );

        const target = button ||
            event.target.closest(".planet-card");

        if (!target || !target.isConnected) {
            resetTarget(activeTarget);
            activeTarget = null;
            return;
        }

        if (activeTarget !== target) {
            resetTarget(activeTarget);
            activeTarget = target;
        }

        const rect = target.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        if (target.matches("button")) {
            target.classList.add("ct-magnetic");

            // Gentle magnetic pull, capped at 5 pixels.
            const moveX = (x - 0.5) * 10;
            const moveY = (y - 0.5) * 10;

            target.style.setProperty(
                "--ct-move-x",
                `${moveX.toFixed(2)}px`
            );

            target.style.setProperty(
                "--ct-move-y",
                `${moveY.toFixed(2)}px`
            );
        } else {
            // Restrained 3D tilt, capped at 7 degrees.
            const tiltX = (x - 0.5) * 14;
            const tiltY = (0.5 - y) * 14;

            target.style.setProperty(
                "--ct-tilt-x",
                `${tiltX.toFixed(2)}deg`
            );

            target.style.setProperty(
                "--ct-tilt-y",
                `${tiltY.toFixed(2)}deg`
            );
        }
    }

    function handlePointerOut(event) {
        const target = event.target.closest(targetSelector);
        if (!target) return;

        // Ignore pointer movement between nested elements.
        if (
            event.relatedTarget &&
            target.contains(event.relatedTarget)
        ) {
            return;
        }

        resetTarget(target);

        if (activeTarget === target) {
            activeTarget = null;
        }
    }

    document.addEventListener(
        "pointermove",
        handlePointerMove,
        { passive: true }
    );

    document.addEventListener(
        "pointerout",
        handlePointerOut
    );

    console.log("✨ COSMIC PREMIUM HOVER ACTIVE");
})();