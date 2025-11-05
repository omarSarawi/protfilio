const STAR_LAYERS = {
    layer1: { count: 60, minSize: 0.8, maxSize: 1.5, speedAnim: 'moveStarLayer1' },
    layer2: { count: 40, minSize: 1.2, maxSize: 2.2, speedAnim: 'moveStarLayer2' },
    layer3: { count: 20, minSize: 1.8, maxSize: 3, speedAnim: 'moveStarLayer3' }
};

function createStar(layer, config) {
    const star = document.createElement("div");
    star.className = `star moving ${layer}`;

    const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    const twinkleDuration = Math.random() * 2 + 1.5;
    const moveDuration = 25 + Math.random() * 25;

    star.style.animation = `${config.speedAnim} ${moveDuration}s linear infinite, twinkle ${twinkleDuration}s ease-in-out infinite`;

    return star;
}

const starFragment = document.createDocumentFragment();

for (const layer in STAR_LAYERS) {
    const config = STAR_LAYERS[layer];
    for (let i = 0; i < config.count; i++) {
        starFragment.appendChild(createStar(layer, config));
    }
}
document.body.appendChild(starFragment);
