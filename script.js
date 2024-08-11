document.getElementById("diffuserButton").addEventListener("click", function() {
    const smoke = document.querySelector(".smoke");
    smoke.style.animation = "smoke 2s forwards";
    
    setTimeout(() => {
        smoke.style.animation = "none";
    }, 2000);
});
