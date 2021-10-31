const selecionaOL = document.querySelector('#lista-tarefas');
const selecionaInput = document.getElementById('texto-tarefa');
const selecionaBotaoSalvar = document.getElementById('criar-tarefa');
const selecionaBotaoLimpar = document.getElementById('apaga-tudo');
const selecionaBotaoCompletos = document.getElementById('remover-finalizados');
const selecionaLI = document.querySelectorAll('li');

selecionaBotaoSalvar.addEventListener('click', () => {
  const criaLI = document.createElement('li');
  criaLI.innerText = selecionaInput.value;
  criaLI.className = 'li';
  selecionaOL.appendChild(criaLI);
  selecionaInput.value = '';
});

selecionaOL.addEventListener('click', (e) => {
  const cor = document.querySelector('.corCinza');
  if (cor) {
    cor.classList.remove('corCinza');
  }
  e.target.classList.add('corCinza');
});

selecionaOL.addEventListener('dblclick', (e) => {
  const selecionaCompleto = e.target;
  if (selecionaCompleto.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});

selecionaBotaoLimpar.addEventListener('click', () => {
  selecionaOL.innerText = '';
});

selecionaBotaoCompletos.addEventListener('click', () => {
  const removeLinhaRiscada = document.querySelectorAll('.completed');
  removeLinhaRiscada.remove('completed');
});
