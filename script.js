let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
    document.getElementById('carrinhoLateral').classList.add('aberto');
}

function atualizarCarrinho() {
    const lista = document.getElementById('listaCarrinho');
    lista.innerHTML = '';

    if (carrinho.length === 0) {
        lista.innerHTML = '<p style="color:#666; text-align:center; padding:40px 0; border:none; display:block;">Nenhum item ainda</p>';
    } else {
        carrinho.forEach((item, index) => {
            lista.innerHTML += `
                <p>
                    <span>${item.nome}<br>
                        <small style="color:#666;">R$ ${item.preco.toFixed(2)}</small>
                    </span>
                    <button onclick="removerItem(${index})">✕</button>
                </p>
            `;
        });
    }

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
    document.getElementById('carrinhoContador').textContent = carrinho.length;
}

function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

document.getElementById('finalizarPedido').addEventListener('click', function () {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    let mensagem = 'Olá Bruxa Carol! Gostaria de fazer este pedido:%0A%0A';
    carrinho.forEach(item => {
        mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}%0A`;
    });
    mensagem += `%0A🛒 Total: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/555499791801?text=${mensagem}`, '_blank');
});

atualizarCarrinho();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('App pronto para instalar!'))
    .catch((err) => console.log('Erro no app:', err));
}
