function buscarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Verifica se o CEP tem 8 caracteres
    if (cep.length !== 8) {
        alert('CEP inválido!');
        return;
    }

    // Faz a requisição para a API ViaCEP
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }

            // Exibe as informações do endereço
            document.getElementById('rua').textContent = data.logradouro;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('cidade').textContent = data.localidade;
            document.getElementById('estado').textContent = data.uf;

            // Exibe o bloco de endereço com animação
            document.getElementById('endereco').style.display = 'block';
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar o CEP. Tente novamente.');
        });
}
