const selecionaOL = document.getElementById('lista-tarefas');
const selecionaInput = document.getElementById('texto-tarefa');
const selecionaBotao = document.getElementById('criar-tarefa');
const selecionaLIs = document.querySelector('.selecionado');

selecionaBotao.addEventListener('click', () => {
  const criaLI = document.createElement('li');
  criaLI.innerText = selecionaInput.value;
  criaLI.className = 'selecionado';
  selecionaOL.appendChild(criaLI);
  selecionaInput.value = '';
});

selecionaOL.addEventListener('click', () => {
  const liComCor = document.querySelector('.selecionado');
  for (let index = 0; index < liComCor.length; index += 1) {
    liComCor[index].classList.remove('selecionado');
    // liComCor[index].style.backgroundColor = 'grey';
  }
  liComCor.classList.add('selecionado');
});
