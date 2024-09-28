document.getElementById("productForm").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    if (nome === "" || descricao === "" || preco === "" || quantidade === "") {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById("message").textContent = "Por favor, preencha todos os campos.";
        document.getElementById("message").style.color = "red";
    } 
    //Ver preço positivo
    else if (isNaN(preco) || preco <= 0) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById("message").textContent = "O preço deve ser um número positivo.";
        document.getElementById("message").style.color = "red";
    } 
    // Ver Quantidade 
    else if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(parseFloat(quantidade))) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById("message").textContent = "A quantidade deve ser um número inteiro positivo.";
        document.getElementById("message").style.color = "red";
    }
});
