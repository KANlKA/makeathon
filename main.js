// for the skills,eduction and experience part, when i click anything out of the 3,
// its supposed to show the contents of tab contents section
// It removes the "active-tab" class from all tab contents, effectively hiding them.
// It then gets the element with the ID equal to the provided tabname and adds the 
// "active-tab" class to that element, making it visible.
function opentab(tabname) {
    var activeTab = document.getElementById(tabname);

    // Checking if the clicked tab is already active
    if (activeTab.classList.contains("active-tab")) {
        // If yes, remove the "active-tab" class to hide the content
        activeTab.classList.remove("active-tab");
    } else {
        // If no,remove the "active-tab" class from other tabs and add it to the clicked tab
        var tabcontents = document.getElementsByClassName("tab-contents");
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove("active-tab");
        }
        activeTab.classList.add("active-tab");
    }
}

// for scrollable behaviour
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
