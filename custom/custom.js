/**
 * Add the additional loading screen texts
 * 
 * @returns void
 */
function addAdditionalText() {
    const additionalTexts = [
        "Loading the graph",
        "Gathering the facts",
        "Catching Bugs",
        "Exporing new fields"
    ];

    let index = 0;

    function showNext() {
        const textContainer = document.getElementById("additional-loading-text");
        if (!textContainer) return;
        
        textContainer.innerHTML = additionalTexts[index];
        
        index = (index + 1) % additionalTexts.length; // infinite loop
        setTimeout(showNext, 3000);
    }

    showNext();
    return;

}

/**
 * Loads the text and removes the Loading Screen
 * 
 * @returns void
 */
function loadingScreenHandler() {
    const loader = document.getElementById('loading-screen');
    const documentModeSet = checkUntilDocumentModeIsSet();

    if (loader && documentModeSet) loader.remove();
}

/**
 * Sets the Layout of the Page to wide mode 
 * 
 * @returns void
 */
function setDefaultWideWindow() {
    const main = document.getElementsByTagName("main")[0];
    if (main) main.classList.add("ls-wide-mode");
}

/**
 * Checks if the page is alrady in document mode and if not it hits 't-d'
 * 
 * @returns boolean
 */
function setDocumentMode() {

    const bulletPoints = document.getElementsByClassName("bullet");

    if (document.getElementsByClassName("doc-mode").length > 0) {
        return true
    }
    if (bulletPoints.length !== 0) {
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "t", bubbles: true }));
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "d", bubbles: true }));
        document.dispatchEvent(new KeyboardEvent("keyup", { key: "t", bubbles: true }));
        document.dispatchEvent(new KeyboardEvent("keyup", { key: "d", bubbles: true })); 
    }

    return false;
}
/**
 * Checks if the Document Mode is already set and if not sets it
 * Note: Usage of Recursive Timeout Function here because it outperforms the MutationObserver in speed
 * due to depth of the observed object (many changes to process)
 *
 * @returns boolean
 */
function checkUntilDocumentModeIsSet() {
    setTimeout(function() {
        let documentModeSet = setDocumentMode();
        if (!documentModeSet) checkUntilDocumentModeIsSet();
    }, 50);
    return true;
}

/**
 * If Lazy VisibilityBlock is still there it gets removed
 * 
 * @returns void
 */
function removeLazyVisibilityBlockIfPresent() {
    const lazyVisibilityBlock = document.querySelector('.lazy-visibility');
    if (lazyVisibilityBlock) lazyVisibilityBlock.style.display = 'none';
}

/**
 * Replaces Code Inbsertion Texts with Facts about psychology, programming, etc.
 * and repports back true when it's done
 * 
 * @returns boolean
 */
function replaceCodeInsertionsWithTexts() {

    const random_psy_fact = [
        "Freud believed humans are driven by their desires",
        "Freud parts the human psyche in 3 parts, Id, Super-Ego and Ego"
    ];

    const random_coding_tip = [
        "There are 2 kinds of programming languages, interpreted (at runtime) and compiled (before runtime)",
        "If you want to learn a new programming language, the best way doing so is to create a few projects"
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
          return true;
        } else if (element.innerHTML.includes("CODE_INSERTION_RANDOM_PROGRAMMING_TIP")) {
            const randomIndex = Math.floor(Math.random() * random_psy_fact.length);
            const randomFact = random_coding_tip[randomIndex];

            element.innerHTML = element.innerHTML.replace(
                "CODE_INSERTION_RANDOM_PROGRAMMING_TIP",
                randomFact
            );
        }
    });
    
    return false;
}

/**
 * Toggles between the light and dark mode version of images
 * 
 * @returns void
 */
function toggleImageVisibility() {
    const images = document.getElementsByClassName("image-resize");
    if (images.length == 0) return;

    const isDarkMode = document.querySelector(".dark");
    if (isDarkMode) {
        images[1].style = "display: none";
        images[0].style = "";
    } else {
        images[0].style = "display: none";
        images[1].style = "";
    }

}

/**
 * Code Execution
 * 
 * @returns void
 */
const main = () => {
    const root = document.getElementById("root");
    if (!root) {
        return;
    }
    addAdditionalText();

    const observer = new MutationObserver((mutationsList, obs) => {
        if (root.innerHTML.trim() !== "" || root.children.length > 0) {
            loadingScreenHandler();
            removeLazyVisibilityBlockIfPresent();
            setDefaultWideWindow();
            obs.disconnect();
        }
    });

    observer.observe(root, {
        childList: true,
        subtree: true
    });

    const textReplacementsObserver = new MutationObserver((mutationsList, obs) => {
        let codeReplaced = replaceCodeInsertionsWithTexts();
        
        if (codeReplaced) {
            obs.disconnect();
        }
    });

    textReplacementsObserver.observe(root, {
        childList: true,
        subtree: true
    });

    const imageReplacementsObserver = new MutationObserver((mutationsList, obs) => {
        toggleImageVisibility();
    });

    imageReplacementsObserver.observe(root, {
        childList: true,
        subtree: true
    });

    // Functions are executed here again (to ensure they are loaded)
    window.addEventListener("load", loadingScreenHandler);
    window.addEventListener("load", removeLazyVisibilityBlockIfPresent);
    window.addEventListener("load", setDefaultWideWindow);
}

main();