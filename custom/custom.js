// Intial calling
document.getElementById('root').innerHTML += `
<div id="loading-screen">
    <div class="spinner"></div>
    <div class="loading-text">Loading WikiLite…</div>
</div>`;

// function definitions
function removeSpinningWheel() {
    const loader = document.getElementById('loading-screen');
    if (loader) loader.style.display = 'none';
}

function removeLazyVisibilityBlockIfPresent() {
    const lazyVisibilityBlock = document.querySelector('.lazy-visibility');
    if (lazyVisibilityBlock) lazyVisibilityBlock.style.display = 'none';
}

// All functions defined above need to be loaded here
document.addEventListener("DOMContentLoaded", function() {
    removeSpinningWheel();
    removeLazyVisibilityBlockIfPresent();
});