// Seleciona o botão de alternar modo escuro
const botaoModoEscuro = document.getElementById('modo-escuro');
const body = document.body;

// Checa se o modo escuro foi ativado anteriormente
if (localStorage.getItem('modoEscuro') === 'true') {
  body.classList.add('dark-mode');
}

// Função para alternar o modo escuro
botaoModoEscuro.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Salva a preferência do modo escuro no localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('modoEscuro', 'true');
  } else {
    localStorage.setItem('modoEscuro', 'false');
  }
});

// Seleciona o botão de impressão
const botaoImprimir = document.getElementById('imprimir');

// Função para imprimir a página
botaoImprimir.addEventListener('click', () => {
  window.print();  // Comando para abrir a janela de impressão
});
