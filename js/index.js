// Exemple simple de script pour l'accueil

console.log("Page Accueil Mbaay Mi chargée");

// Optionnel : Afficher un message d'accueil dynamique
window.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const p = document.createElement("p");
    p.textContent = "Bienvenue sur la plateforme agricole Mbaay Mi !";
    hero.appendChild(p);
});