const tipElements = document.querySelectorAll(".has-tooltip");

for (let tip of tipElements) {
    tip.addEventListener("click", (event) => {
        event.preventDefault();

        document.querySelectorAll('.tooltip').forEach(el => el.remove());

        const tooltipElement = document.createElement("div");
        tooltipElement.className = "tooltip";
        tooltipElement.textContent = tip.getAttribute("title");

        const rect = tip.getBoundingClientRect();
        tooltipElement.style.left = `${rect.left}px`;
        tooltipElement.style.top = `${rect.bottom}px`;

        document.body.appendChild(tooltipElement);

        tooltipElement.classList.add("tooltip_active");
    });
}

document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("has-tooltip")) {
        document.querySelectorAll('.tooltip').forEach(el => el.remove());
    }
});
