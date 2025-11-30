// function definitions
function removeSpinningWheel() {
    const loader = document.getElementById('loading-screen');
    if (loader) loader.remove();
}

function removeLazyVisibilityBlockIfPresent() {
    const lazyVisibilityBlock = document.querySelector('.lazy-visibility');
    if (lazyVisibilityBlock) lazyVisibilityBlock.style.display = 'none';
}

// All functions defined above need to be loaded here
document.addEventListener("load", function() {
    removeSpinningWheel();
    removeLazyVisibilityBlockIfPresent();
});