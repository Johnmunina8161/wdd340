document.getElementById("buyBtn").addEventListener("click", function() {
    alert("Thank you for your interest in the DMC Delorean!");
});

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.1)";
        item.style.transition = "transform 0.3s ease-in-out";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        alert("Upgrade selected: " + item.querySelector("p").textContent);
    });
});

document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector("nav ul").classList.toggle("show");
});