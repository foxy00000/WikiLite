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
document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
    if (!root) {
        return;
    }

    const observer = new MutationObserver((mutationsList, obs) => {
        if (root.innerHTML.trim() !== "" || root.children.length > 0) {
            removeSpinningWheel();
            removeLazyVisibilityBlockIfPresent();
            obs.disconnect();
        }
    });

    observer.observe(root, {
        childList: true,
        subtree: true
    });
});

window.addEventListener("load", removeSpinningWheel);
window.addEventListener("load", removeLazyVisibilityBlockIfPresent);