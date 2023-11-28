const tooltipContainer = document.querySelector('.tooltip-container');
const tooltipElement = document.getElementById('tooltip');

tooltipContainer.addEventListener('mouseover', handleMouseOver);
tooltipContainer.addEventListener('mouseout', handleMouseOut);

function handleMouseOver(event) {
    if (event.target.classList.contains('tooltip-element')) {
        const tooltipText = event.target.getAttribute('data-tooltip');
        if (tooltipText) {
            const rect = event.target.getBoundingClientRect();
            tooltipElement.innerHTML = tooltipText;
            tooltipElement.style.top = `${rect.bottom + 5}px`;
            tooltipElement.style.left = `${rect.left}px`;
            tooltipElement.style.display = 'block';
        }
    }
}

function handleMouseOut(event) {
    tooltipElement.style.display = 'none';
}
