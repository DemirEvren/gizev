window.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const nameSvg = document.getElementById('name-svg');

    // Fade in the name
    setTimeout(() => {
        nameElement.style.opacity = 1;
    }, 500);

    // Slide the name to the top
    setTimeout(() => {
        nameElement.classList.add('at-top');
    }, 2500);

    // Show SVG animation after the slide-up is complete
    setTimeout(() => {
        nameSvg.style.display = 'block';
        const nameRect = nameElement.getBoundingClientRect();
        nameSvg.style.top = `${nameRect.bottom + 20}px`;
        nameSvg.style.left = `50%`;
        nameSvg.style.transform = `translate(-50%, 0)`;
    }, 5000);
});

window.addEventListener('DOMContentLoaded', () => {
    const nameSvg = document.getElementById('name-svg');
    const actionButtons = document.getElementById('action-buttons');
    const modal = document.getElementById('resume-modal');
    const downloadButton = document.getElementById('download-resume');
    const closeButton = document.getElementById('close-modal');

    // Show the buttons after the SVG animation finishes
    setTimeout(() => {
        actionButtons.style.display = 'flex'; // Make buttons visible
        actionButtons.style.opacity = 1; // Trigger fade-in
    }, 7000); // Adjust this based on the SVG animation duration

    // Open the modal
    downloadButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

