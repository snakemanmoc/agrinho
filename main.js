const btn = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

const dicas = [
    "Evite o desperdício de alimentos.",
    "Prefira produtos de produtores locais.",
    "Economize água durante a produção agrícola.",
    "Pratique a compostagem de resíduos orgânicos.",
    "Valorize alimentos produzidos de forma sustentável."
];

btn.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * dicas.length);
    mensagem.textContent = dicas[indice];
});