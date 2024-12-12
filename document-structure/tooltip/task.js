const tipElements = document.querySelectorAll(".has-tooltip");

const tooltipElement = document.createElement("div");
tooltipElement.className = "tooltip";
document.body.appendChild(tooltipElement);

for (let tip of tipElements) {
    tip.addEventListener("click", (event) => {
        event.preventDefault();

        const thisTipText = tip.getAttribute("title");

        if (tooltipElement.classList.contains("tooltip_active") && tooltipElement.textContent === thisTipText) {
            tooltipElement.classList.remove("tooltip_active");
            return;
        }

        tooltipElement.textContent = thisTipText;

        const rect = tip.getBoundingClientRect();
        tooltipElement.style.left = `${rect.left}px`;
        tooltipElement.style.top = `${rect.bottom}px`;

        tooltipElement.classList.add("tooltip_active");
    });
}

document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("has-tooltip")) {
        tooltipElement.classList.remove("tooltip_active");
    }
});
