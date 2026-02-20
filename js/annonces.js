const annonces = [
    { titre: "Vente de maïs", prix: "5000 FCFA" },
    { titre: "Semences arachide", prix: "3000 FCFA" },
    { titre: "Engrais naturel", prix: "7000 FCFA" }
];

const container = document.getElementById("annoncesContainer");

function afficherAnnonces(liste) {
    container.innerHTML = "";
    liste.forEach(a => {
        container.innerHTML += `
            <div class="card">
                <h3>${a.titre}</h3>
                <p>${a.prix}</p>
                <button onclick="sabonner()">S'abonner</button>
            </div>
        `;
    });
}

function sabonner() {
    let total = localStorage.getItem("abonnements") || 0;
    total++;
    localStorage.setItem("abonnements", total);
    alert("Abonnement réussi !");
}

document.getElementById("search").addEventListener("input", function(e) {
    const valeur = e.target.value.toLowerCase();
    const filtre = annonces.filter(a => a.titre.toLowerCase().includes(valeur));
    afficherAnnonces(filtre);
});

afficherAnnonces(annonces);