// ==========================================
// PAGE NAVIGATION
// ==========================================

let currentPage = 1;

const totalPages = 4;


function showPage(pageNumber) {

    // Remove active class from all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });


    // Add active class to selected page
    const selectedPage =
        document.getElementById("page" + pageNumber);

    selectedPage.classList.add("active");


    // Update current page
    currentPage = pageNumber;
}


// ==========================================
// NEXT PAGE
// ==========================================

function nextPage() {

    if (currentPage < totalPages) {

        currentPage++;

        showPage(currentPage);

        // Small celebration when entering page 2
        if (currentPage === 2) {
            createConfetti();
        }

        // Bigger celebration on final page
        if (currentPage === 4) {
            createConfetti();
        }
    }
}


// ==========================================
// RESTART WEBSITE
// ==========================================

function restartWebsite() {

    const video =
        document.getElementById("birthdayVideo");

    // Stop video
    video.pause();

    // Reset video
    video.currentTime = 0;

    // Go back to first page
    showPage(1);

    // Celebration
    setTimeout(() => {
        createConfetti();
    }, 500);
}


// ==========================================
// CONFETTI
// ==========================================

function createConfetti() {

    const container =
        document.getElementById("confetti-container");


    // Create 80 confetti pieces
    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");


        // Random horizontal position
        confetti.style.left =
            Math.random() * 100 + "vw";


        // Random size
        const size =
            Math.random() * 8 + 5;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size + "px";


        // Random animation duration
        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        // Random delay
        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        // Random shape
        confetti.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";


        container.appendChild(confetti);


        // Remove after animation
        setTimeout(() => {

            confetti.remove();

        }, 4000);
    }
}


// ==========================================
// PAGE 1 INITIAL CELEBRATION
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        createConfetti();

    }, 800);

});