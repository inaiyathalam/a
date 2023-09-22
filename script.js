// let dashboardVar = document.getElementById("dashboard-id")
// let spanIcon = document.getElementsByTagName("span")[1]
// function active()
// {
//     dashboardVar        .style.backgroundColor = " #1176FF";
//     spanIcon.style.color = "#ffffff";
// }



let iconsBg = document.querySelectorAll(".icons-bg");
let activeIcon = null;

iconsBg.forEach(icon => {
    icon.addEventListener("click", () => {
        if (activeIcon) {
            activeIcon.style.backgroundColor = "#F3F8FF";
            let prevIconSpan = activeIcon.querySelector("span");
            prevIconSpan.style.color = "#1176FF";
                        
            // let prevPTag = activeIcon.nextElementSibling;
            // prevPTag.style.color = "#ffffff";
            // prevPTag.style.fontWeight = "700";
        }

        icon.style.backgroundColor = "#1176FF";
        let spanIcon = icon.querySelector("span");
        spanIcon.style.color = "#ffffff";
        // let pTag = icon.nextElementSibling; 
        // pTag.style.color = "#000000"; 
        
        activeIcon = icon;
    });
});
