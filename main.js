var discordInvite = "https://discord.littl.club/";

function hideAgeWarning() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementById("age-warning").style.display = "none";
}

function discordRedirect() {
    window.open(discordInvite, '_blank');
}

function onLoad() {
    window.scrollTo(0,0);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}