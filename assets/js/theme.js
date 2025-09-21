// Dark mode toggle script

//initial dark mode state
let darkmode = localStorage.getItem('darkmode');
const themeToggle = document.getElementById('Theme-toggle'); 

//function to enable dark mode
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

//function to disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

//check dark mode on page load
if (darkmode === "active") enableDarkMode();

//conditions for toggling
themeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');

    if (darkmode !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});