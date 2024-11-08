//padded playroom sfw padded agere discord community :3

var discordInvite = "https://discord.littl.club/";
var agereWebsite = "https://allaboutarden.wordpress.com/what-is-age-regression/";

function hideAgeWarning() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementById("age-warning").style.display = "none";
}

function discordRedirect() {
    window.open(discordInvite, '_blank');
}

function agereRedirect() {
    window.open(agereWebsite, '_blank');
}

function onLoad() {
    window.scrollTo(0,0);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}