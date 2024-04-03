 alert("Bem-vindo ao meu projeto")
 const botao = document.querySelector(".btnplataforma")
 const elementoplatafoma = document.querySelector(".btnplataforma .plataformas")
 botao.addEventListener("click", () => {
 const aberto = elementoplatafoma.classList.contains("show");
 if(aberto) {
    elementoplatafoma.classList.remove("show");
 }else{
    elementoplatafoma.classList.add("show");
 }
 })
    