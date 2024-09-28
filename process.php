<?php
// Banco
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "logistica";

// Conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexao
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error); // Mensagem de erro no navegador para depuração
}

// Dados do form
$nome = $_POST['nome'];
$descricao = $_POST['descricao'];
$preco = $_POST['preco'];
$quantidade = $_POST['quantidade'];


$sql = "INSERT INTO produtos (nome, descricao, preco, quantidade) VALUES ('$nome', '$descricao', '$preco', '$quantidade')";

if ($conn->query($sql) === TRUE) {
    // ir para pagina ok
    if (file_exists('success.html')) {
        header("Location: success.html");
    } else {
        echo "Arquivo 'success.html' não encontrado.";
    }
} else {
    // ir para pagina de error
    if (file_exists('error.html')) {
        header("Location: error.html");
    } else {
        echo "Arquivo 'error.html' não encontrado.";
    }
}


$conn->close();
?>
