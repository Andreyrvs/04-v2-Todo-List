// Captura a classe pai do input e do botao
const catchInputBtn = document.querySelector('.add-input-btn');

// Captura a lista Ordana OL
const catchOList = document.querySelector('#lista-tarefas');

// Cria input
function createInput() {
  const createInpt = document.createElement('input');
  createInpt.id = 'texto-tarefa';

  catchInputBtn.appendChild(createInpt);
}
createInput();

// Cria a batao
function createButton() {
  const createBtn = document.createElement('button');
  createBtn.id = 'criar-tarefa';
  createBtn.innerText = 'Nasci';

  catchInputBtn.appendChild(createBtn);
}
createButton();

// Cria as li com o que for digitado no Input
const catchBtn = document.querySelector('#criar-tarefa');

catchBtn.addEventListener('click', () => {
  const catchInput = document.querySelector('#texto-tarefa');
  const createLi = document.createElement('li');
  createLi.innerText = catchInput.value;
  catchOList.appendChild(createLi);
  catchInput.value = '';
});
