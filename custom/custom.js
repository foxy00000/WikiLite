// function definitions
function removeSpinningWheel() {
    const loader = document.getElementById('loading-screen');
    if (loader) loader.remove();
}

function removeLazyVisibilityBlockIfPresent() {
    const lazyVisibilityBlock = document.querySelector('.lazy-visibility');
    if (lazyVisibilityBlock) lazyVisibilityBlock.style.display = 'none';
}

function replaceCodeInsertionsWithTexts() {

    const random_psy_fact = [
        "Freud believed humans are driven by their desires",
        "Freud parts the human psyche in 3 parts, Id, Super-Ego and Ego"
    ];

    const paragraphs = document.querySelectorAll(".is-paragraph");
    paragraphs.forEach(element => {
        if (element.innerHTML.includes("CODE_INSERTION_RANDOM_PSY_FACT")) {
          const randomIndex = Math.floor(Math.random() * random_psy_fact.length);
          const randomFact = random_psy_fact[randomIndex];
      
          element.innerHTML = element.innerHTML.replace(
            "CODE_INSERTION_RANDOM_PSY_FACT",
            randomFact
          );
        }
    });
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
            replaceCodeInsertionsWithTexts();
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
window.addEventListener("load", replaceCodeInsertionsWithTexts);