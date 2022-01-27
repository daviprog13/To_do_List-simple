const novaTarefa = document.querySelector('#inputNovaTarefa')
const addTarefa = document.querySelector('#btn_add_tarefa')
const lista = document.querySelector('#lista_tarefas')

function gerarId(){
  return Math.floor(Math.random() * 3000)
}

function adiciTarefa (e){
  if(e.keyCode === 13){
    let tarefa ={
      nome:novaTarefa.value,
      id:gerarId(),
    }
    adicionarTarefa(tarefa)
  }
}
novaTarefa.addEventListener('keypress', adiciTarefa)

function ligarHTML(e) {
  let tarefa ={
    nome:novaTarefa.value,
    id:gerarId(),
  }
  adicionarTarefa(tarefa)
}
addTarefa.addEventListener('click', ligarHTML)

function adicionarTarefa(tarefa) {
  let novaLi = criarTagLi(tarefa)
  lista.appendChild(novaLi)
  novaTarefa.value ='';
}

function criarTagLi(tarefa) {
  let li = document.createElement('li')
  li.id = tarefa.id
  

  let span = document.createElement('span')
  span.classList.add('textoTarefa')
  span.innerHTML = tarefa.nome;

  let div = document.createElement('div')

  
  let btnExluir = document.createElement('button')
  btnExluir.classList.add('btnAcao')
  btnExluir.innerHTML = ' <i class="far fa-trash-alt"></i>'
  btnExluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

  div.appendChild(btnExluir)

  li.appendChild(span)
  li.appendChild(div)
  return li;
}

/* fechar */
function excluir(idTarefa){
 let confirmacao = window.confirm("Tecm certeza que deseja excluir?")
 if(confirmacao){
   let li = document.getElementById(''+idTarefa+'')
   if(li){
     lista.removeChild(li)
   }
 }
}



