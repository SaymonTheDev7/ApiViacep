function buscarCEP() {
    const cep = document.getElementById('cep').value;
    const erroEl = document.getElementById('erro');
    const enderecoEl = document.getElementById('endereco');

    erroEl.textContent = '';
    enderecoEl.style.display = 'none';

    if (cep.length !== 8 || isNaN(cep)) {
        erroEl.textContent = 'CEP inválido! Digite exatamente 8 números.';
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                erroEl.textContent = 'CEP não encontrado!';
                return;
            }

            document.getElementById('rua').textContent = data.logradouro;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('cidade').textContent = data.localidade;
            document.getElementById('estado').textContent = data.uf;

            enderecoEl.style.display = 'block';
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            erroEl.textContent = 'Erro ao buscar o CEP. Tente novamente.';
        });
}
